from fastapi import APIRouter, UploadFile, HTTPException
from models.EfficientNet import build_model
import numpy as np
from PIL import Image
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.efficientnet import preprocess_input
import io
from pathlib import Path
router = APIRouter()
CLASS_NAMES = [
    "full_body",
    "left_arm_amputation",
    "left_leg_amputation",
    "right_arm_amputation",
    "right_leg_amputation",
]

model = build_model()          # se construye una sola vez al arrancar

@router.post("/EfficientNet")
async def process_image(file: UploadFile):
    if not file:
        raise HTTPException(status_code=400, detail="No file uploaded")

    try:
        img_bytes = await file.read()
        img = Image.open(io.BytesIO(img_bytes)).convert("RGB").resize((224, 224))

        x = image.img_to_array(img)
        x = np.expand_dims(x, axis=0)
        x = preprocess_input(x)

        preds = model.predict(x)
        idx = int(np.argmax(preds, axis=1)[0])

        return {
            "predicted_class": CLASS_NAMES[idx],
            "confidence": float(np.max(preds)),
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing image: {e}")