"""
Sync all organized boutique products from C:\\Users\\jamap\\OneDrive\\Pictures\\shop pic new\\
into INSTYLE boutique web store (img/products/ and productsData.js).
"""

import os
import shutil
import json
import re

SRC_DIR = r"C:\Users\jamap\OneDrive\Pictures\shop pic new"
DEST_DIR = r"c:\Antigravity projects\Webtech Project\img\products"
PRODUCTS_DATA_PATH = r"c:\Antigravity projects\Webtech Project\productsData.js"

os.makedirs(DEST_DIR, exist_ok=True)

# 1. Map all files in shop pic new
all_files = sorted(os.listdir(SRC_DIR))

# Map items by base slug
items_dict = {}

for f in all_files:
    if not f.lower().endswith(('.jpg', '.jpeg', '.png')):
        continue
    
    # Copy file to web store
    src_file = os.path.join(SRC_DIR, f)
    dst_file = os.path.join(DEST_DIR, f)
    shutil.copy2(src_file, dst_file)
    
    # Determine base key
    base = f
    is_back = bool(re.search(r'[_ -]back\.', f, re.IGNORECASE))
    is_front = bool(re.search(r'[_ -]front\.', f, re.IGNORECASE))
    is_jacket = bool(re.search(r'[_ -]jacket\.', f, re.IGNORECASE))
    is_studio = bool(re.search(r'[_ -]studio\.', f, re.IGNORECASE))
    
    # Clean base name
    clean_base = re.sub(r'[_ -](front|back|jacket_front|jacket|studio)\.[a-zA-Z0-9]+$', '', f, flags=re.IGNORECASE)
    
    if clean_base not in items_dict:
        items_dict[clean_base] = {
            'front': None,
            'back': None,
            'extra': [],
            'studio': None
        }
    
    if is_studio:
        items_dict[clean_base]['studio'] = f
    elif is_front:
        items_dict[clean_base]['front'] = f
    elif is_back:
        items_dict[clean_base]['back'] = f
    else:
        items_dict[clean_base]['extra'].append(f)

print(f"Discovered {len(items_dict)} distinct boutique products in shop pic new.")

# Boutique Product Metadata Builder
product_catalog = {}

item_specs = {
    'Mint_Green_Watercolor_Floral_Maxi_Dress_Item1': {
        'name': 'Mint Green Watercolor Floral Chiffon Maxi Dress',
        'gender': 'women',
        'mainCategory': 'dresses_gowns',
        'category': 'Dresses & Evening Gowns',
        'price': 210000,
        'tags': ['mint dress', 'floral dress', 'chiffon gown', 'maxi dress', 'instyle', 'boutique', 'summer gown'],
        'description': 'Crafted from delicate watercolor floral chiffon, this flowing maxi dress features an empire silhouette, flutter accents, and a tiered flared hemline for effortless elegance.'
    },
    'Gold_Shimmer_VNeck_Maxi_Gown_Item2': {
        'name': 'Champagne Gold Shimmer V-Neck Evening Gown',
        'gender': 'women',
        'mainCategory': 'dresses_gowns',
        'category': 'Dresses & Evening Gowns',
        'price': 265000,
        'tags': ['gold gown', 'shimmer dress', 'evening dress', 'v neck gown', 'glamour', 'instyle', 'party'],
        'description': 'A breathtaking gold metallic-threaded evening gown featuring a deep plunging neckline, cinched waistline, and shimmering pleated column skirt designed for red carpet galas.'
    },
    'Black_Shimmer_OneShoulder_Maxi_Gown_Item3': {
        'name': 'Noir Shimmer Asymmetric One-Shoulder Evening Gown',
        'gender': 'women',
        'mainCategory': 'dresses_gowns',
        'category': 'Dresses & Evening Gowns',
        'price': 245000,
        'tags': ['black gown', 'one shoulder dress', 'shimmer gown', 'evening wear', 'instyle', 'luxury'],
        'description': 'Sculpted in midnight black shimmer fabric, this dramatic one-shoulder gown features diagonal gathers and a high side slit creating a commanding, sophisticated silhouette.'
    },
    'Black_Rhinestone_Trim_Maxi_Dress_Item4': {
        'name': 'Midnight Black Crystal Rhinestone Trim Maxi Dress',
        'gender': 'women',
        'mainCategory': 'dresses_gowns',
        'category': 'Dresses & Evening Gowns',
        'price': 235000,
        'tags': ['rhinestone dress', 'black dress', 'crystal gown', 'evening wear', 'instyle', 'boutique'],
        'description': 'Sleek and statuesque, this midnight black crepe maxi dress is elevated with hand-set crystal rhinestone trim along the neckline and contoured seams.'
    },
    'Royal_Blue_Rhinestone_Trim_Maxi_Dress_Item5': {
        'name': 'Royal Blue Crystal Rhinestone Trim Satin Maxi Dress',
        'gender': 'women',
        'mainCategory': 'dresses_gowns',
        'category': 'Dresses & Evening Gowns',
        'price': 240000,
        'tags': ['royal blue dress', 'rhinestone gown', 'satin dress', 'evening gown', 'instyle', 'blue'],
        'description': 'Radiant royal blue satin gown adorned with brilliant diagonal rhinestone crystal embellishments and a figure-skimming silhouette.'
    },
    'Crimson_Red_Corset_Lace_Satin_Gown_Item6': {
        'name': 'Crimson Red Corset Lace Satin Evening Gown',
        'gender': 'women',
        'mainCategory': 'dresses_gowns',
        'category': 'Dresses & Evening Gowns',
        'price': 275000,
        'tags': ['red gown', 'corset dress', 'satin dress', 'lace gown', 'instyle', 'crimson red', 'luxury'],
        'description': 'Rendered in signature INSTYLE Crimson Red satin, this couture gown features a structured boned corset bodice with lace overlay and a floor-sweeping mermaid skirt.'
    },
    'Black_Rhinestone_Leaf_Applique_Maxi_Dress_Item7': {
        'name': 'Noir Crystal Leaf Applique Draped Maxi Dress',
        'gender': 'women',
        'mainCategory': 'dresses_gowns',
        'category': 'Dresses & Evening Gowns',
        'price': 250000,
        'tags': ['leaf applique', 'rhinestone gown', 'black evening dress', 'draped dress', 'instyle'],
        'description': 'Featuring intricate botanical crystal leaf appliqués across the bodice, this dark luxury evening dress drapes gracefully with a fluid stretch-crepe finish.'
    },
    'Emerald_Green_Pleated_Rosette_Maxi_Dress_Item8': {
        'name': 'Emerald Green Pleated Rosette Maxi Evening Dress',
        'gender': 'women',
        'mainCategory': 'dresses_gowns',
        'category': 'Dresses & Evening Gowns',
        'price': 230000,
        'tags': ['emerald dress', 'green gown', 'pleated dress', 'rosette dress', 'instyle', 'boutique'],
        'description': 'Rich emerald green satin evening dress featuring delicate micro-pleating and handcrafted rosette floral detailing along the structured waistline.'
    },
    'Beige_Nude_Pleated_Rosette_Maxi_Dress_Item9': {
        'name': 'Beige Nude Pleated Rosette Satin Maxi Dress',
        'gender': 'women',
        'mainCategory': 'dresses_gowns',
        'category': 'Dresses & Evening Gowns',
        'price': 225000,
        'tags': ['nude dress', 'beige gown', 'pleated dress', 'rosette dress', 'instyle', 'neutral'],
        'description': 'Subtle champagne nude tone dress tailored with sunburst pleats and an architectural rosette corsage at the waist for understated luxury.'
    },
    'Ivory_White_Satin_Beaded_Draped_Gown_Item10': {
        'name': 'Ivory White Satin Beaded Draped Gala Gown',
        'gender': 'women',
        'mainCategory': 'dresses_gowns',
        'category': 'Dresses & Evening Gowns',
        'price': 285000,
        'tags': ['white gown', 'ivory satin dress', 'beaded gown', 'bridal gala', 'instyle', 'luxury'],
        'description': 'Luminous ivory white satin gown featuring pearl-and-crystal hand-beading along the neckline with fluid Grecian-inspired side draping.'
    },
    'Brown_Patterned_Suit_Set_Item2': {
        'name': 'Executive Brown Patterned 2-Piece Tailored Suit Set',
        'gender': 'men',
        'mainCategory': 'suits_outerwear',
        'category': 'Suits & Outerwear',
        'price': 295000,
        'tags': ['brown suit', 'men suit', 'tailored suit', 'blazer set', 'executive', 'instyle', 'formal'],
        'description': 'Tailored from premium wool-blend jacquard with subtle micro-patterns, this distinguished suit features notch lapels, structured shoulders, and slim-fit trousers.'
    },
    'Grey_Feather_Print_Chiffon_Maxi_Dress': {
        'name': 'Feather Print Silk Chiffon Tiered Maxi Dress',
        'gender': 'women',
        'mainCategory': 'dresses_gowns',
        'category': 'Dresses & Evening Gowns',
        'price': 215000,
        'tags': ['feather print', 'grey dress', 'chiffon maxi', 'boho luxe', 'instyle'],
        'description': 'Ethereal grey silk-chiffon dress adorned with an artistic feather motif, blouson sleeves, and a tiered flared skirt.'
    },
    'Grey_Patterned_Chiffon_Maxi_Dress_Item1': {
        'name': 'Slate Grey Geometric Patterned Chiffon Maxi Dress',
        'gender': 'women',
        'mainCategory': 'dresses_gowns',
        'category': 'Dresses & Evening Gowns',
        'price': 210000,
        'tags': ['grey dress', 'patterned chiffon', 'geometric dress', 'instyle', 'boutique'],
        'description': 'Artistic slate grey chiffon maxi featuring micro-geometric patterns, semi-sheer sleeve details, and an adjustable cinched waist.'
    },
    'Yellow_Solid_Smooth_Suit': {
        'name': 'Vibrant Mustard Yellow Tailored 2-Piece Suit Set',
        'gender': 'men',
        'mainCategory': 'suits_outerwear',
        'category': 'Suits & Outerwear',
        'price': 280000,
        'tags': ['yellow suit', 'statement suit', 'menswear', 'tailored blazer', 'instyle', 'bold fashion'],
        'description': 'Command attention in this bold mustard yellow tailored suit set, featuring a contemporary slim-fit blazer with peak lapels and matching crisp trousers.'
    },
    'item-018': {
        'name': 'Noir Beaded Wrap-Waist Long-Sleeve Evening Dress',
        'gender': 'women',
        'mainCategory': 'dresses_gowns',
        'category': 'Dresses & Evening Gowns',
        'price': 225000,
        'tags': ['black dress', 'beaded dress', 'evening gown', 'long sleeve dress', 'wrap dress', 'instyle', 'boutique'],
        'description': 'Tailored from smooth dark charcoal fabric, this elegant evening dress features a plunging V-neckline, gathered shoulders, and a cinched wrap waist adorned with a black beaded geometric fringe embellishment.'
    }
}

count_added = 0

for base_key, files_info in items_dict.items():
    front_img = files_info['front'] or files_info['studio'] or (files_info['extra'][0] if files_info['extra'] else None)
    back_img = files_info['back'] or (files_info['extra'][1] if len(files_info['extra']) > 1 else None)
    
    if not front_img and not back_img:
        continue
    
    main_img_path = f"img/products/{front_img or back_img}"
    small_imgs = [main_img_path]
    if back_img and f"img/products/{back_img}" not in small_imgs:
        small_imgs.append(f"img/products/{back_img}")
    if files_info['extra']:
        for ex in files_info['extra']:
            p = f"img/products/{ex}"
            if p not in small_imgs:
                small_imgs.append(p)
                
    # Normalize ID
    prod_id = "pro_" + re.sub(r'[^a-zA-Z0-9_]', '_', base_key).lower()
    
    spec = item_specs.get(base_key, {
        'name': ' '.join([w.capitalize() for w in base_key.replace('_', ' ').split()]),
        'gender': 'women',
        'mainCategory': 'dresses_gowns' if 'dress' in base_key.lower() or 'gown' in base_key.lower() else ('suits_outerwear' if 'suit' in base_key.lower() else 'shirts_tops'),
        'category': 'Dresses & Evening Gowns' if 'dress' in base_key.lower() or 'gown' in base_key.lower() else ('Suits & Outerwear' if 'suit' in base_key.lower() else 'Shirts & Tops'),
        'price': 220000,
        'tags': ['instyle', 'boutique', 'luxury', 'fashion'],
        'description': f"Exquisite designer piece from the INSTYLE boutique collection, featuring tailored construction and premium materials."
    })
    
    product_entry = {
        "id": prod_id,
        "name": spec['name'],
        "gender": spec.get('gender', 'women'),
        "mainCategory": spec.get('mainCategory', 'dresses_gowns'),
        "subCategory": spec.get('category', 'Dresses & Evening Gowns'),
        "category": spec.get('category', 'Dresses & Evening Gowns'),
        "categoryGroup": spec.get('mainCategory', 'dresses_gowns'),
        "price": spec.get('price', 220000),
        "tags": spec.get('tags', ['instyle', 'boutique']),
        "mainImg": main_img_path,
        "smallImgs": small_imgs,
        "description": spec.get('description', '')
    }
    
    product_catalog[prod_id] = product_entry
    count_added += 1

print(f"Generated {count_added} complete catalog entries.")

# Update productsData.js
with open(PRODUCTS_DATA_PATH, "r", encoding="utf-8") as f:
    js_content = f.read()

# Insert or update each product in PRODUCTS_DATA
for pid, pdata in product_catalog.items():
    target = f'"{pid}":'
    if target in js_content:
        pos = js_content.find(target)
        end_p = js_content.find('\n    },', pos)
        if end_p != -1:
            old_block = js_content[pos:end_p + 7]
            new_block = f'"{pid}": {json.dumps(pdata, indent=8)},'
            js_content = js_content.replace(old_block, new_block)
    else:
        init_pos = js_content.find("let PRODUCTS_DATA = {")
        if init_pos != -1:
            insert_idx = js_content.find("{", init_pos) + 1
            js_content = js_content[:insert_idx] + f'\n    "{pid}": {json.dumps(pdata, indent=8)},' + js_content[insert_idx:]

with open(PRODUCTS_DATA_PATH, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully integrated {count_added} products with Front & Back gallery views into productsData.js!")
