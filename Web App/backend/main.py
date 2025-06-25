from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.v1 import transcribe
from core.config import settings
from api.v1 import EfficientNet
from api.v1 import MobileNetv2
app = FastAPI(title="Audio Transcription API")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir rutas
app.include_router(transcribe.router, prefix="/api/v1")
app.include_router(EfficientNet.router, prefix="/api/v1")
app.include_router(MobileNetv2.router, prefix="/api/v1")