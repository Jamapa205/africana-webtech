"""
INSTYLE AI Merchandiser Engine
Uses Google AI Studio API key to analyze all 170 boutique items in shop pics,
generating custom luxury titles, descriptions, categories, and prices for every product.
"""

import os
import sys
import glob
import json
import time
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    print("Error: GEMINI_API_KEY missing.")
    sys.exit(1)

from google import genai
client = genai.Client(api_key=api_key)

PRODUCTS_DATA_PATH = r"c:\Antigravity projects\Webtech Project\productsData.js"
SHOP_PICS_DIR = r"C:\Users\jamap\OneDrive\Pictures\shop pics"

models_to_try = [
    'gemini-3.6-flash',
    'gemini-3.5-flash',
    'gemini-3.1-pro-preview',
    'gemini-2.0-flash',
    'gemini-flash-latest'
]

def analyze_item(item_id, front_img_path):
    prompt = (
        "You are a master luxury fashion merchandiser for INSTYLE boutique. Analyze this garment photo and return a JSON object:\n"
        "1. 'name': Specific luxury title describing color, cut, fabric, embellishments (e.g., 'Emerald Silk Cutout Gown', 'Acid-Wash High-Waist Skinny Jeans', 'Champagne Rhinestone Blazer Set')\n"
        "2. 'gender': 'women' or 'men'\n"
        "3. 'mainCategory': Exactly one of ['dresses_gowns', 'denim_bottoms', 'shirts_tops', 'suits_outerwear', 'handbags_bags', 'jewelry_belts']\n"
        "4. 'category': Display category matching mainCategory ('Dresses & Evening Gowns', 'Denim & Bottoms', 'Shirts & Tops', 'Suits & Outerwear', 'Handbags & Bags', 'Jewelry & Accessories')\n"
        "5. 'price': Price integer in South Sudanese Pounds (SSP 145000 to 285000)\n"
        "6. 'tags': Array of 8 search keywords\n"
        "7. 'description': Rich 2-sentence description detailing silhouette, fabric, neckline, embellishments, and fit.\n"
        "Output ONLY raw JSON."
    )

    for model_name in models_to_try:
        try:
            print(f"[{item_id}] Calling AI Studio ({model_name})...")
            res = client.models.generate_content(
                model=model_name,
                contents=prompt
            )
            if res and hasattr(res, 'text') and res.text:
                text = res.text.strip()
                if text.startswith("```json"):
                    text = text[7:]
                if text.endswith("```"):
                    text = text[:-3]
                data = json.loads(text.strip())
                if "name" in data and not data["name"].startswith("INSTYLE Luxury Boutique Item"):
                    return data
        except Exception as e:
            if any(err in str(e) for err in ['429', 'RESOURCE_EXHAUSTED', '503']):
                time.sleep(4)
                continue
            else:
                print(f"Error on {model_name}: {e}")

    return None

def enhance_all_products(start_idx=0, count=30):
    with open(PRODUCTS_DATA_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    # Extract current PRODUCTS_DATA object
    json_start = content.find("let PRODUCTS_DATA = {") + len("let PRODUCTS_DATA = ")
    json_end = content.rfind("};") + 1
    
    # Parse items that need custom AI titles
    all_files = sorted(glob.glob(os.path.join(SHOP_PICS_DIR, "*.jpg")))
    items = {}
    for f in all_files:
        name = os.path.basename(f)
        parts = name.split('_')
        if len(parts) >= 2 and len(parts[1]) >= 4:
            key = parts[0] + '_' + parts[1][:4]
            if key not in items:
                items[key] = []
            items[key].append(f)

    keys = sorted(list(items.keys()))[start_idx : start_idx + count]
    print(f"Enhancing {len(keys)} products starting at index {start_idx}...")

    updated_count = 0

    for idx, key in enumerate(keys, start=start_idx + 1):
        item_id = f"sp_{key}"
        front_img = items[key][0]

        meta = analyze_item(item_id, front_img)
        if meta:
            print(f"✓ [{idx}] {item_id} -> {meta['name']} ({meta['category']}) | SSP {meta['price']:,}")
            
            # Find and replace in productsData.js
            # Regex or direct replacement of product object
            num = int(key.split('_')[1]) if '_' in key else 1000
            small_imgs = [
                f"img/products/{item_id}.jpg",
                f"img/products/{item_id}_front.jpg"
            ]
            if len(items[key]) > 1:
                small_imgs.append(f"img/products/{item_id}_back.jpg")

            entry_obj = {
                "id": item_id,
                "name": meta["name"],
                "gender": meta.get("gender", "women"),
                "mainCategory": meta["mainCategory"],
                "subCategory": meta["category"],
                "category": meta["category"],
                "categoryGroup": meta["mainCategory"],
                "price": int(meta["price"]),
                "tags": meta.get("tags", ["instyle", "boutique", "fashion"]),
                "mainImg": f"img/products/{item_id}.jpg",
                "smallImgs": small_imgs,
                "description": meta["description"]
            }

            # Update file content for this item
            target_str = f'"{item_id}":'
            if target_str in content:
                # Replace existing block
                start_p = content.find(target_str)
                end_p = content.find('\n    },', start_p)
                if end_p != -1:
                    old_block = content[start_p:end_p + 7]
                    new_block = f'"{item_id}": {json.dumps(entry_obj, indent=8)},'
                    content = content.replace(old_block, new_block)
                    updated_count += 1
            time.sleep(8)  # Pacing to respect API quotas

    with open(PRODUCTS_DATA_PATH, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"\nSuccessfully enhanced {updated_count} products with custom AI Studio titles and descriptions!")

if __name__ == "__main__":
    s = int(sys.argv[1]) if len(sys.argv) > 1 else 0
    c = int(sys.argv[2]) if len(sys.argv) > 2 else 20
    enhance_all_products(s, c)
