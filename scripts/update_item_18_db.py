import json

path = r"c:\Antigravity projects\Webtech Project\productsData.js"

entry = {
    "id": "sp_item_018",
    "name": "Noir Beaded Wrap-Waist Long-Sleeve Evening Dress",
    "gender": "women",
    "mainCategory": "dresses_gowns",
    "subCategory": "Dresses & Evening Gowns",
    "category": "Dresses & Evening Gowns",
    "categoryGroup": "dresses_gowns",
    "price": 225000,
    "tags": ["black dress", "beaded dress", "evening gown", "long sleeve dress", "wrap dress", "instyle", "boutique"],
    "mainImg": "img/products/sp_item_018.jpg",
    "smallImgs": [
        "img/products/sp_item_018.jpg",
        "img/products/sp_item_018_front.jpg",
        "img/products/sp_item_018_back.jpg"
    ],
    "description": "Tailored from smooth dark charcoal fabric, this elegant evening dress features a plunging V-neckline, long sleeves with gathered shoulders, and a cinched wrap waist adorned with a striking black beaded geometric fringe embellishment."
}

with open(path, "r", encoding="utf-8") as f:
    content = f.read()

target = '"sp_item_018":'
if target in content:
    start_p = content.find(target)
    end_p = content.find('\n    },', start_p)
    if end_p != -1:
        old_block = content[start_p:end_p + 7]
        new_block = f'"sp_item_018": {json.dumps(entry, indent=8)},'
        content = content.replace(old_block, new_block)
else:
    pos = content.find("let PRODUCTS_DATA = {")
    if pos != -1:
        insert_idx = content.find("{", pos) + 1
        content = content[:insert_idx] + f'\n    "sp_item_018": {json.dumps(entry, indent=8)},' + content[insert_idx:]

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("Successfully updated productsData.js for sp_item_018!")
