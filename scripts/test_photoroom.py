"""
Photoroom API Studio Batch Processor Test
"""

import os
import requests

API_KEY = "sk_pr_default_e65887cfbfa149e8adccaae44a8ee1b99018a683"
SRC_IMG = r"C:\Users\jamap\OneDrive\Pictures\shop pics\20260702_110402.jpg"
DST_IMG = r"C:\Users\jamap\OneDrive\Pictures\shop pic new\test_photoroom_studio.jpg"

os.makedirs(os.path.dirname(DST_IMG), exist_ok=True)

print(f"Testing Photoroom API with key {API_KEY[:10]}...")

headers = {
    "x-api-key": API_KEY
}

files = {
    "image_file": ("image.jpg", open(SRC_IMG, "rb"), "image/jpeg")
}

data = {
    "bg_color": "FFFFFF",
    "padding": "0.08",
    "output_size": "1200x1600"
}

response = requests.post("https://sdk.photoroom.com/v1/segment", headers=headers, files=files, data=data)

if response.status_code == 200:
    with open(DST_IMG, "wb") as f:
        f.write(response.content)
    print(f"SUCCESS! Studio image saved to {DST_IMG}")
else:
    print(f"Error {response.status_code}: {response.text}")
