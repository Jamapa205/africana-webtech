"""
Segmind FLUX Ghost Mannequin Generator for INSTYLE Boutique
Uses Segmind API (FLUX image-to-image) to generate studio ghost mannequin photos.
Follows all rules in antigravity_ghost_mannequin_prompt.md.

Saves outputs to:
  - C:\\Users\\jamap\\OneDrive\\Pictures\\shop pic new\\
  - c:\\Antigravity projects\\Webtech Project\\img\\products\\

Usage:
  python scripts/segmind_ghost_mannequin.py 27-32
  python scripts/segmind_ghost_mannequin.py 27 28 29 30 31 32
"""

import os
import sys
import glob
import shutil
import time
import base64
import requests

# ── Config ────────────────────────────────────────────────────────────────────
SEGMIND_API_KEY = "SG_6f7baf67020e8049"

SOURCE_DIR   = r"C:\Users\jamap\OneDrive\Pictures\shop pics organized"
NEW_PICS_DIR = r"C:\Users\jamap\OneDrive\Pictures\shop pic new"
WEB_IMG_DIR  = r"c:\Antigravity projects\Webtech Project\img\products"

os.makedirs(NEW_PICS_DIR, exist_ok=True)
os.makedirs(WEB_IMG_DIR,  exist_ok=True)

# Segmind endpoints to try in order (best quality first)
ENDPOINTS = [
    "https://api.segmind.com/v1/flux-1-img2img",
    "https://api.segmind.com/v1/flux-pro-img2img",
    "https://api.segmind.com/v1/sdxl-img2img",
]

HEADERS = {
    "x-api-key": SEGMIND_API_KEY,
    "Content-Type": "application/json"
}

GHOST_MANNEQUIN_PROMPT = (
    "Premium e-commerce fashion product photography, ghost mannequin invisible mannequin technique. "
    "Faithfully reproduce this exact garment from the reference image — preserve every detail: "
    "color, fabric texture, silhouette, cut, neckline, collar, cuffs, sleeves, hem, "
    "all stitching, seams, buttons, zippers, pockets, embellishments, and prints exactly as shown. "
    "Professional invisible mannequin, no human or body parts visible, natural hollow neck opening, "
    "realistic 3D garment volume. "
    "Pure white background #FFFFFF, professional softbox studio lighting, even soft lighting, "
    "soft realistic drop shadow, luxury retail catalog quality, 8K ultra-sharp HDR photorealistic. "
    "Centered straight-on eye-level camera, full garment visible, 85-90 percent frame coverage, "
    "symmetrical framing. Studio product photography for high-end fashion boutique catalog."
)

# ── Helpers ───────────────────────────────────────────────────────────────────

def image_to_base64(path):
    with open(path, "rb") as f:
        return base64.b64encode(f.read()).decode("utf-8")

def save_image_response(response, output_path):
    """Try to extract and save image from Segmind API response."""
    content_type = response.headers.get("Content-Type", "")

    # Direct binary image response
    if "image" in content_type:
        with open(output_path, "wb") as f:
            f.write(response.content)
        return True

    # JSON response with base64 or URL
    try:
        data = response.json()

        # base64 image in response
        if "image" in data:
            img_data = data["image"]
            if isinstance(img_data, str):
                if img_data.startswith("data:image"):
                    img_data = img_data.split(",", 1)[1]
                img_bytes = base64.b64decode(img_data)
                with open(output_path, "wb") as f:
                    f.write(img_bytes)
                return True

        # URL in response
        if "output" in data:
            output = data["output"]
            url = output[0] if isinstance(output, list) else output
            img_res = requests.get(url, timeout=60)
            if img_res.status_code == 200:
                with open(output_path, "wb") as f:
                    f.write(img_res.content)
                return True

        print(f"  Unexpected response structure: {list(data.keys())}")
    except Exception as e:
        print(f"  Could not parse response: {e}")

    return False


def generate_ghost_mannequin(source_path, output_path, view_label="FRONT"):
    """Generate a ghost mannequin studio image using Segmind FLUX."""
    prompt = GHOST_MANNEQUIN_PROMPT + f" This is the {view_label} view."
    img_b64 = image_to_base64(source_path)

    for endpoint in ENDPOINTS:
        model_name = endpoint.split("/")[-1]
        try:
            print(f"  Trying: {model_name} ...")

            payload = {
                "prompt": prompt,
                "image": img_b64,
                "strength": 0.75,           # preserve garment details
                "num_inference_steps": 30,
                "guidance_scale": 7.5,
                "samples": 1,
                "seed": 42,
                "base64": False
            }

            response = requests.post(
                endpoint,
                headers=HEADERS,
                json=payload,
                timeout=120
            )

            if response.status_code == 200:
                if save_image_response(response, output_path):
                    print(f"  [OK] Saved with {model_name} -> {os.path.basename(output_path)}")
                    return True
                else:
                    print(f"  Could not save image from {model_name} response.")

            elif response.status_code == 422:
                # Try without base64, use a smaller payload
                print(f"  422 on {model_name} — retrying with alternate payload...")
                payload2 = {
                    "prompt": prompt,
                    "image": f"data:image/jpeg;base64,{img_b64}",
                    "strength": 0.75,
                    "steps": 30,
                    "guidance_scale": 7.5,
                }
                r2 = requests.post(endpoint, headers=HEADERS, json=payload2, timeout=120)
                if r2.status_code == 200 and save_image_response(r2, output_path):
                    print(f"  [OK] Saved (retry) -> {os.path.basename(output_path)}")
                    return True
                else:
                    print(f"  Retry failed: {r2.status_code} {r2.text[:120]}")

            elif response.status_code == 401:
                print(f"  [AUTH ERROR] Invalid API key. Please check SEGMIND_API_KEY.")
                return False

            elif response.status_code == 429:
                print(f"  [QUOTA] Rate limit hit on {model_name}. Waiting 10s...")
                time.sleep(10)
                continue

            else:
                print(f"  [{response.status_code}] {model_name}: {response.text[:150]}")

        except requests.exceptions.Timeout:
            print(f"  Timeout on {model_name}. Trying next...")
        except Exception as e:
            print(f"  Error on {model_name}: {e}")

        time.sleep(3)

    # All endpoints failed — copy original as fallback
    print(f"  [FALLBACK] All endpoints failed. Copying original.")
    shutil.copy(source_path, output_path)
    return False


def get_descriptive_name(front_filename):
    """Build a clean descriptive output name from the source filename."""
    name = os.path.splitext(front_filename)[0]
    parts = name.split('-')
    # item-027-brown-solid-smooth-apparel-garment-front
    # -> Brown_Solid_Smooth_Apparel_Garment
    skip = {'item', 'front', 'back', 'side', 'detail', 'view', 'combo', 'jacket', 'pant', 'inner', 'outer'}
    descriptors = []
    for i, p in enumerate(parts):
        if i < 2:
            continue  # skip 'item' and number
        if p.lower() in skip and i == len(parts) - 1:
            continue  # skip trailing view label
        if p.lower() not in skip or i < len(parts) - 1:
            descriptors.append(p.capitalize())
    return '_'.join(descriptors).replace('__', '_').strip('_')


def process_item(item_num_str):
    """Process one item: generate front + back ghost mannequin images."""
    num = str(item_num_str).zfill(3)
    pattern = os.path.join(SOURCE_DIR, f"item-{num}-*")
    all_files = sorted(glob.glob(pattern))

    if not all_files:
        print(f"\n[WARN] No files found for item {num} — skipping.")
        return

    front_files = [f for f in all_files if f.endswith('-front.jpg')]
    back_files  = [f for f in all_files if f.endswith('-back.jpg')]

    front_src = front_files[0] if front_files else all_files[0]
    back_src  = back_files[0]  if back_files  else (all_files[1] if len(all_files) > 1 else all_files[0])

    base_name = get_descriptive_name(os.path.basename(front_src))

    front_out_name = f"{base_name}_Front.jpg"
    back_out_name  = f"{base_name}_Back.jpg"

    dst_front_new = os.path.join(NEW_PICS_DIR, front_out_name)
    dst_back_new  = os.path.join(NEW_PICS_DIR, back_out_name)
    dst_front_web = os.path.join(WEB_IMG_DIR,  front_out_name)
    dst_back_web  = os.path.join(WEB_IMG_DIR,  back_out_name)

    print(f"\n{'='*55}")
    print(f"  Item {num}  |  {base_name}")
    print(f"  Front src : {os.path.basename(front_src)}")
    print(f"  Back  src : {os.path.basename(back_src)}")
    print(f"{'='*55}")

    # Generate FRONT
    print(f"  >> Generating FRONT view...")
    generate_ghost_mannequin(front_src, dst_front_new, "FRONT")
    shutil.copy(dst_front_new, dst_front_web)

    time.sleep(6)  # pace API calls

    # Generate BACK
    print(f"  >> Generating BACK view...")
    generate_ghost_mannequin(back_src, dst_back_new, "BACK")
    shutil.copy(dst_back_new, dst_back_web)

    print(f"\n  [DONE] Item {num}: {front_out_name} + {back_out_name}")
    time.sleep(6)


# ── Entry Point ───────────────────────────────────────────────────────────────

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage:")
        print("  python scripts/segmind_ghost_mannequin.py 27-32")
        print("  python scripts/segmind_ghost_mannequin.py 27 28 29 30 31 32")
        sys.exit(1)

    # Parse args: supports "27-32" range or individual numbers
    items_to_process = []
    for arg in sys.argv[1:]:
        if '-' in arg and not arg.lstrip('-').startswith('-'):
            try:
                start, end = arg.split('-')
                items_to_process.extend(range(int(start), int(end) + 1))
            except ValueError:
                items_to_process.append(int(arg))
        else:
            items_to_process.append(int(arg))

    print(f"\nSegmind FLUX Ghost Mannequin Generator")
    print(f"Items    : {items_to_process}")
    print(f"Output   : {NEW_PICS_DIR}")
    print(f"Web      : {WEB_IMG_DIR}")
    print(f"Endpoint : {ENDPOINTS[0]}\n")

    for item in items_to_process:
        process_item(item)

    print(f"\n{'='*55}")
    print(f"All {len(items_to_process)} items processed!")
    print(f"Files saved to: {NEW_PICS_DIR}")
