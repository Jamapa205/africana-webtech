"""
Google AI Studio Image Generator Helper Script for INSTYLE Modern Boutique
Uses your Google AI Studio GEMINI_API_KEY to generate studio product photography.
"""

import os
import sys
from dotenv import load_dotenv

# Load API Key from .env
load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    print("Error: GEMINI_API_KEY not found in environment or .env file.")
    sys.exit(1)

def generate_studio_image(prompt, output_path, aspect_ratio="1:1"):
    print(f"Connecting to Google AI Studio with API Key: {api_key[:6]}...{api_key[-4:]}")
    print(f"Prompt: {prompt}")
    print(f"Generating image -> {output_path}")

    try:
        from google import genai
        client = genai.Client(api_key=api_key)

        response = client.models.generate_images(
            model='imagen-4.0-generate-001',
            prompt=prompt,
            config=dict(
                number_of_images=1,
                output_mime_type="image/jpeg",
                aspect_ratio=aspect_ratio,
            )
        )

        for generated_image in response.generated_images:
            with open(output_path, "wb") as f:
                f.write(generated_image.image.image_bytes)
            print(f"Successfully saved AI Studio generated image to {output_path}")
            return True

    except Exception as e:
        print(f"Google AI Studio Generation Error: {e}")
        return False

if __name__ == "__main__":
    if len(sys.argv) >= 3:
        prompt_arg = sys.argv[1]
        out_arg = sys.argv[2]
        ar_arg = sys.argv[3] if len(sys.argv) > 3 else "1:1"
        generate_studio_image(prompt_arg, out_arg, ar_arg)
    else:
        print("Usage: python scripts/ai_studio_generator.py \"<prompt>\" \"<output_path>\" \"<aspect_ratio>\"")
