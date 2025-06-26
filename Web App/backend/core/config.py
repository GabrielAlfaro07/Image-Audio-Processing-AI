from pathlib import Path

class Settings:
    # Cambiar el número en parents según la estructura de carpetas
    BASE_DIR = Path(__file__).resolve().parents[1]
    MODEL_PATH = BASE_DIR / "modelo_ctc"
    ALLOWED_ORIGINS = [
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ]

settings = Settings()
print("Cargando modelo desde:", settings.MODEL_PATH)