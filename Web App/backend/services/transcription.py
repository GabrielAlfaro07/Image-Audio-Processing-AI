from utils.audio import convert_audio_to_tensor
from models.model_loader import processor, model, device
import torch

async def transcribe_audio(file):
    audio_tensor = await convert_audio_to_tensor(file)
    inputs = processor(audio_tensor, sampling_rate=16000, return_tensors="pt", padding=True)
    inputs = {k: v.to(device) for k, v in inputs.items()}

    with torch.no_grad():
        logits = model(**inputs).logits

    predicted_ids = torch.argmax(logits, dim=-1)
    transcription = processor.batch_decode(predicted_ids)[0]
    print("Transcripción generada:", transcription)
    return transcription
