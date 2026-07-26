# Ghost Mannequin E-commerce Prompt for Antigravity & Google AI Studio

> [!IMPORTANT]
> **Google AI Studio Image Generation Routing**: All studio product images generated for INSTYLE boutique must be generated via your connected Google AI Studio account using `python scripts/ai_studio_generator.py` (which connects using `GEMINI_API_KEY` from `.env`).

Use this prompt for **all uploaded images of the same product**.  
Each image filename indicates whether it is the **front** or **back** view.  
The goal is to preserve the garment **exactly** as uploaded while producing a clean studio ghost-mannequin product photo.

---

## Prompt

You are creating premium e-commerce fashion product photography for a website using a **ghost mannequin / invisible mannequin** technique via **Google AI Studio API**.

### Highest Priority
The uploaded image(s) are the **only source of truth**.

Do **not** redesign, reinterpret, enhance, restyle, simplify, or invent any aspect of the garment.

Your job is to faithfully reproduce the uploaded clothing item exactly as it exists while replacing the original photo with premium studio-quality ghost mannequin photography generated via Google AI Studio API (`imagen-3.0-generate-002`).

Every visible detail from the uploaded garment must remain identical.

If Antigravity supports a **reference fidelity / image adherence / prompt weight / image priority** setting, set it to the **maximum possible value**. Reference image accuracy must override creativity.

---

## Reference Image Rules

One or more reference images may be uploaded together.

Each uploaded image filename indicates its view, for example:

- `Product123_Front.jpg`
- `Product123_Back.jpg`
- `Front.png`
- `Back.png`
- `FrontView.jpeg`
- `BackView.jpeg`

Use the filename to determine which side of the garment is shown.

If the filename indicates **FRONT**:
- Generate **only** the front view.
- Do **not** invent the back.
- Do **not** move graphics from front to back.
- Do **not** change the placement of artwork.

If the filename indicates **BACK**:
- Generate **only** the back view.
- Do **not** invent the front.
- Do **not** copy front graphics onto the back.
- Preserve the exact back design.

Never mix details from different views.

---

## Design Preservation

The generated image must preserve exactly:

- garment shape
- silhouette
- proportions
- sleeve length
- neckline
- hood
- collar
- cuffs
- waistband
- pockets
- stitching
- embroidery
- logos
- graphics
- prints
- typography
- distressing
- fading
- washes
- textures
- seams
- labels
- zipper style
- button placement
- drawstrings
- ribbing
- piping
- color
- gradients
- pattern scale
- print size
- print position
- artwork alignment
- logo size
- logo location

Do **not**:
- move graphics
- resize graphics
- recolor graphics
- replace graphics
- sharpen artwork
- simplify artwork
- generate new artwork
- improve the design
- make it more fashionable
- clean up imperfections
- add missing decorations
- remove decorations

Every visible detail should match the uploaded garment as closely as possible.

If a detail is not visible in the uploaded image, leave it unknown rather than inventing it.

---

## Multiple Images of the Same Product

If multiple images belong to the same product, treat them as photographs of **one physical garment**.

They must be completely consistent.

Front and back must share:
- identical color
- identical fabric texture
- identical stitching
- identical material
- identical collar
- identical sleeves
- identical proportions
- identical fit
- identical lighting
- identical camera angle
- identical scale
- identical ghost mannequin shape

Only the visible design for that side should differ.

Never allow the front and back to look like different garments.

---

## Ghost Mannequin Instructions

Use a professional invisible mannequin.

- No mannequin visible
- No human visible
- No body parts visible
- Natural hollow neck
- Natural hollow sleeves where appropriate
- Maintain realistic garment volume
- Preserve the natural 3D shape of the clothing
- Keep the garment looking like it is worn on an invisible support

---

## Photography Style

- Professional commercial apparel photography
- Pure white background (#FFFFFF)
- Softbox lighting
- Even lighting
- Soft realistic shadow
- Luxury retail catalog appearance
- Studio quality
- Photorealistic
- True-to-life fabric texture
- No wrinkles unless present in the reference
- Commercial product photography
- 8K quality
- Ultra sharp
- HDR

---

## Composition

- Centered
- Straight-on
- Eye-level
- Full garment visible
- Symmetrical
- Consistent framing
- 85–90% frame coverage

Front and back images must have identical framing and scale.

---

## Absolute Restrictions

Never redesign the clothing.

Never hallucinate missing artwork.

Never replace logos.

Never invent graphics.

Never move artwork.

Never create new stitching.

Never alter colors.

Never modify typography.

Never change proportions.

Never make assumptions about unseen areas.

Success is measured by **photographic improvement only** — not design changes.

The result should look like a professional studio photograph of the exact same product shown in the uploaded image.

---

## Optional Output Goal

Generate the front and back views as separate but perfectly matched catalog images for the same product, suitable for Shopify, WooCommerce, Amazon, Zara, Nike, H&M, ASOS, or similar e-commerce storefronts.

---

## File Saving & Naming Instructions

1. **Output Save Directory**: All processed product photos MUST be saved directly to:
   `C:\Users\jamap\OneDrive\Pictures\shop pic new\`

2. **Descriptive File Naming**:
   - Analyze the garment attributes (color, pattern, style, length, features).
   - Generate a concise, professional product title (e.g., `Navy_Scalloped_Pleated_Midi_Dress`).
   - Append `_Front` or `_Back` based on the view.
   - Standard output format: `<Product_Descriptive_Name>_<Front|Back>.jpg`
   - Example: `Navy_Scalloped_Pleated_Midi_Dress_Front.jpg`, `Grey_Feather_Print_Maxi_Dress_Back.jpg`.

