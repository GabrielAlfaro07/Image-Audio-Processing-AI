from fastapi import APIRouter, UploadFile, HTTPException
from services.transcription import transcribe_audio

router = APIRouter()

@router.post("/transcribe")
async def transcribe(file: UploadFile):
    try:
        transcription = await transcribe_audio(file)
        return {"transcription": transcription}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
