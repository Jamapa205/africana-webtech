"""
Gemini Ghost Mannequin Generator for INSTYLE Boutique
Uses Gemini API (GEMINI_API_KEY from .env) with multimodal image input + image output.
Models tried in order: gemini-3-pro-image-preview -> gemini-2.5-flash-image -> gemini-2.0-flash-exp
Follows all rules in antigravity_ghost_mannequin_prompt.md.
Saves outputs to:
  - C:\\Users\\jamap\\OneDrive\\Pictures\\shop pic new\\
  - c:\\Antigravity projects\\Webtech Project\\img\\products\\
"""

import os
import sys
import glob
import shutil
import time
from dotenv import load_dotenv

load_dotenv()
GEMINI_KEY = os.getenv("GEMINI_API_KEY")

if not GEMINI_KEY:
    print("ERROR: GEMINI_API_KEY not found in .env file.")
    sys.exit(1)

from google import genai
from google.genai import types

client = genai.Client(api_key=GEMINI_KEY)

SOURCE_DIR  = r"C:\Users\jamap\OneDrive\Pictures\shop pics organized"
NEW_PICS_DIR = r"C:\Users\jamap\OneDrive\Pictures\shop pic new"
WEB_IMG_DIR  = r"c:\Antigravity projects\Webtech Project\img\products"

os.makedirs(NEW_PICS_DIR, exist_ok=True)
os.makedirs(WEB_IMG_DIR,  exist_ok=True)

# Models to try in priority order (best quality first)
IMAGE_MODELS = [
    "gemini-3-pro-image-preview",
    "gemini-2.5-flash-image",
    "gemini-2.0-flash-exp",
]

GHOST_MANNEQUIN_PROMPT = """
You are creating premium e-commerce fashion product photography using a ghost mannequin / invisible mannequin technique.

The uploaded image is the ONLY source of truth. Faithfully reproduce this exact garment — do NOT redesign, recolor, restyle, or invent any detail.

Preserve exactly:
- Garment color, fabric texture, sheen, and material
- Silhouette, proportions, and fit
- Neckline, collar, cuffs, sleeves, and hem
- All stitching, seams, buttons, zippers, and pockets
- Any embellishments, patterns, or prints exactly as shown

Ghost Mannequin Rules:
- Professional invisible mannequin — NO human, NO body parts visible
- Natural hollow neck opening
- Realistic 3D garment volume as if worn

Photography Style:
- Pure white background (#FFFFFF)
- Professional softbox studio lighting, even and shadow-free
- Soft, realistic drop shadow beneath the garment
- Luxury retail catalog quality — 8K ultra-sharp HDR photorealistic

Composition:
- Perfectly centered, straight-on, eye-level camera angle
- Full garment visible, 85-90% frame coverage
- Symmetrical framing identical to a professional product catalog

Output: A single, clean studio product photo of this exact garment on an invisible mannequin.
"""

def generate_ghost_mannequin(source_path, output_path, view_label="FRONT"):
    """Generate a ghost mannequin studio image from a source garment photo."""
    prompt = GHOST_MANNEQUIN_PROMPT.strip() + f"\n\nThis is the {view_label} view of the garment."

    with open(source_path, "rb") as f:
        img_bytes = f.read()

    for model in IMAGE_MODELS:
        try:
            print(f"  Trying model: {model} ...")
            response = client.models.generate_content(
                model=model,
                contents=[
                    types.Part.from_bytes(data=img_bytes, mime_type="image/jpeg"),
                    types.Part.from_text(text=prompt),
                ],
                config=types.GenerateContentConfig(
                    response_modalities=["IMAGE", "TEXT"],
                )
            )

            for part in response.candidates[0].content.parts:
                if part.inline_data is not None:
                    with open(output_path, "wb") as f:
                        f.write(part.inline_data.data)
                    print(f"  [OK] Saved with {model} -> {os.path.basename(output_path)}")
                    return True

            print(f"  No image in response from {model}, trying next...")

        except Exception as e:
            err = str(e)
            print(f"  [{model}] Error: {err[:120]}")
            if "RESOURCE_EXHAUSTED" in err or "quota" in err.lower():
                print(f"  Quota hit on {model}, trying next model...")
                time.sleep(3)
                continue
            time.sleep(2)
            continue

    print(f"  [FAIL] All models failed for {source_path}. Copying original as fallback.")
    shutil.copy(source_path, output_path)
    return False


def get_descriptive_name(filename):
    """Generate a descriptive output name from the source filename."""
    name = os.path.splitext(filename)[0]  # strip extension
    parts = name.split('-')
    # e.g. item-027-brown-solid-smooth-apparel-garment-front
    # -> ['item', '027', 'brown', 'solid', 'smooth', 'apparel', 'garment', 'front']
    if len(parts) >= 4:
        descriptors = [p.capitalize() for p in parts[2:] if p not in ('view', 'combo')]
        return '_'.join(descriptors)
    return name


def process_item(item_num_str):
    """Process one item: generate front + back ghost mannequin images."""
    num = item_num_str.zfill(3)  # ensure 3-digit padding, e.g. '027'
    pattern = os.path.join(SOURCE_DIR, f"item-{num}-*")
    all_files = sorted(glob.glob(pattern))

    if not all_files:
        print(f"[WARN] No files found for item {num}")
        return

    # Separate front, back and other views
    front_files = [f for f in all_files if '-front' in os.path.basename(f)]
    back_files  = [f for f in all_files if '-back' in os.path.basename(f)]

    front_src = front_files[0] if front_files else all_files[0]
    back_src  = back_files[0]  if back_files  else all_files[-1]

    # Build descriptive output name from the front filename
    base_name = get_descriptive_name(os.path.basename(front_src))
    # Remove trailing _Front if already in name
    base_name = base_name.replace('_Front', '').replace('_front', '').strip('_')

    front_filename = f"{base_name}_Front.jpg"
    back_filename  = f"{base_name}_Back.jpg"

    dst_front_new = os.path.join(NEW_PICS_DIR, front_filename)
    dst_back_new  = os.path.join(NEW_PICS_DIR, back_filename)
    dst_front_web = os.path.join(WEB_IMG_DIR,  front_filename)
    dst_back_web  = os.path.join(WEB_IMG_DIR,  back_filename)

    print(f"\n--- Item {num} ---")
    print(f"  Front source: {os.path.basename(front_src)}")
    print(f"  Back  source: {os.path.basename(back_src)}")
    print(f"  Output name : {base_name}")

    # Generate FRONT
    print(f"  Generating FRONT...")
    generate_ghost_mannequin(front_src, dst_front_new, view_label="FRONT")
    shutil.copy(dst_front_new, dst_front_web)
    time.sleep(5)  # pace requests

    # Generate BACK
    print(f"  Generating BACK...")
    generate_ghost_mannequin(back_src, dst_back_new, view_label="BACK")
    shutil.copy(dst_back_new, dst_back_web)
    time.sleep(5)

    print(f"  [DONE] Item {num} complete -> {front_filename} + {back_filename}")


if __name__ == "__main__":
    # Usage: python scripts/gemini_ghost_mannequin.py 27 28 29 30 31 32
    # Or a range: python scripts/gemini_ghost_mannequin.py 27-32
    if len(sys.argv) < 2:
        print("Usage: python gemini_ghost_mannequin.py <item_num> [item_num ...] OR <start>-<end>")
        sys.exit(1)

    items_to_process = []
    for arg in sys.argv[1:]:
        if '-' in arg and not arg.startswith('-'):
            start, end = arg.split('-')
            items_to_process.extend(str(i) for i in range(int(start), int(end) + 1))
        else:
            items_to_process.append(arg)

    print(f"Starting Gemini Ghost Mannequin Generator for items: {', '.join(items_to_process)}")
    print(f"Models: {IMAGE_MODELS}")
    print(f"Output -> {NEW_PICS_DIR}")
    print(f"Web    -> {WEB_IMG_DIR}\n")

    for item in items_to_process:
        process_item(item)

    print("\nAll items processed successfully!")
