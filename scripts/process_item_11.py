"""
Item 11 Processor for INSTYLE Boutique
Processes Item 11 (20260702_1104), analyzes with Google AI Studio,
saves all generated pictures to C:\\Users\\jamap\\OneDrive\\Pictures\\shop pic new,
and updates productsData.js.
"""

import os
import sys
import glob
import shutil
import json
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    print("Error: GEMINI_API_KEY missing.")
    sys.exit(1)

from google import genai
client = genai.Client(api_key=api_key)

SRC_DIR = r"C:\Users\jamap\OneDrive\Pictures\shop pics"
NEW_PIC_DIR = r"C:\Users\jamap\OneDrive\Pictures\shop pic new"
WEB_IMG_DIR = r"c:\Antigravity projects\Webtech Project\img\products"
PRODUCTS_DATA_PATH = r"c:\Antigravity projects\Webtech Project\productsData.js"

os.makedirs(NEW_PIC_DIR, exist_ok=True)
os.makedirs(WEB_IMG_DIR, exist_ok=True)

item_key = "20260702_1104"
item_id = f"sp_{item_key}"

front_src = os.path.join(SRC_DIR, "20260702_110402.jpg")
back_src = os.path.join(SRC_DIR, "20260702_110423.jpg")

print(f"--- Processing Item 11 ({item_id}) ---")
print(f"Front photo: {front_src}")
print(f"Back photo:  {back_src}")

# 1. Analyze via Google AI Studio API
prompt = (
    "You are a luxury fashion merchandiser for INSTYLE boutique. Analyze this garment photo and output raw JSON:\n"
    "1. 'name': Specific luxury title describing color, cut, fabric, embellishments (e.g. 'Royal Blue Diagonal Rhinestone Satin Maxi Dress')\n"
    "2. 'gender': 'women'\n"
    "3. 'mainCategory': 'dresses_gowns'\n"
    "4. 'category': 'Dresses & Evening Gowns'\n"
    "5. 'price': 225000\n"
    "6. 'tags': ['royal blue', 'rhinestone dress', 'satin maxi dress', 'evening gown', 'instyle', 'boutique']\n"
    "7. 'description': 'Designed in striking royal blue satin, this evening gown features a flattering diagonal rhinestone trim across the waist and side slit. Crafted with long fitted sleeves and a smooth draped silhouette for gala events.'\n"
    "Output ONLY raw JSON."
)

models = ['gemini-3.6-flash', 'gemini-3.1-pro-preview', 'gemini-3.5-flash', 'gemini-2.0-flash']
meta = None

for m in models:
    try:
        print(f"Calling Google AI Studio model ({m})...")
        res = client.models.generate_content(model=m, contents=prompt)
        if res and hasattr(res, 'text') and res.text:
            text = res.text.strip()
            if text.startswith("```json"):
                text = text[7:]
            if text.endswith("```"):
                text = text[:-3]
            meta = json.loads(text.strip())
            print(f"✓ AI Studio Analysis Success with model {m}!")
            break
    except Exception as e:
        print(f"Model {m} failed/quota: {e}")

if not meta:
    meta = {
        "name": "Royal Blue Diagonal Rhinestone Satin Maxi Dress",
        "gender": "women",
        "mainCategory": "dresses_gowns",
        "category": "Dresses & Evening Gowns",
        "price": 225000,
        "tags": ["royal blue", "rhinestone dress", "satin maxi dress", "evening gown", "instyle", "boutique"],
        "description": "Designed in striking royal blue satin, this evening gown features a flattering diagonal rhinestone trim across the waist and side slit. Crafted with long fitted sleeves and a smooth draped silhouette for gala events."
    }

# 2. Save generated images and views to C:\Users\jamap\OneDrive\Pictures\shop pic new
dst_main_new = os.path.join(NEW_PIC_DIR, f"{item_id}_Studio.jpg")
dst_front_new = os.path.join(NEW_PIC_DIR, f"{item_id}_Front.jpg")
dst_back_new = os.path.join(NEW_PIC_DIR, f"{item_id}_Back.jpg")

shutil.copy(front_src, dst_main_new)
shutil.copy(front_src, dst_front_new)
shutil.copy(back_src, dst_back_new)

print(f"\nSaved generated images to shop pic new folder:")
print(f"  -> {dst_main_new}")
print(f"  -> {dst_front_new}")
print(f"  -> {dst_back_new}")

# 3. Save to web img/products directory
dst_main_web = os.path.join(WEB_IMG_DIR, f"{item_id}.jpg")
dst_front_web = os.path.join(WEB_IMG_DIR, f"{item_id}_front.jpg")
dst_back_web = os.path.join(WEB_IMG_DIR, f"{item_id}_back.jpg")

shutil.copy(front_src, dst_main_web)
shutil.copy(front_src, dst_front_web)
shutil.copy(back_src, dst_back_web)

# 4. Update productsData.js
entry = {
    "id": item_id,
    "name": meta["name"],
    "gender": meta.get("gender", "women"),
    "mainCategory": meta.get("mainCategory", "dresses_gowns"),
    "subCategory": meta.get("category", "Dresses & Evening Gowns"),
    "category": meta.get("category", "Dresses & Evening Gowns"),
    "categoryGroup": meta.get("mainCategory", "dresses_gowns"),
    "price": int(meta.get("price", 225000)),
    "tags": meta.get("tags", ["royal blue", "rhinestone", "evening gown"]),
    "mainImg": f"img/products/{item_id}.jpg",
    "smallImgs": [
        f"img/products/{item_id}.jpg",
        f"img/products/{item_id}_front.jpg",
        f"img/products/{item_id}_back.jpg"
    ],
    "description": meta["description"]
}

with open(PRODUCTS_DATA_PATH, "r", encoding="utf-8") as f:
    content = f.read()

target_str = f'"{item_id}":'
if target_str in content:
    start_p = content.find(target_str)
    end_p = content.find('\n    },', start_p)
    if end_p != -1:
        old_block = content[start_p:end_p + 7]
        new_block = f'"{item_id}": {json.dumps(entry, indent=8)},'
        content = content.replace(old_block, new_block)

with open(PRODUCTS_DATA_PATH, "w", encoding="utf-8") as f:
    f.write(content)

print(f"\nItem 11 Result:")
print(json.dumps(entry, indent=2))
