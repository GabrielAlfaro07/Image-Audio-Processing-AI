import whisper
import os
import pandas as pd
from pathlib import Path

# Cargar el modelo Whisper
model = whisper.load_model("medium")  # puedes usar "small", "medium", "large" según tu GPU

# Directorio raíz con los audios
ROOT_DIR = Path("Audios_WAV") 

# Lista para almacenar los resultados
transcripciones = []

# Recorrer todas las subcarpetas y archivos .wav
for persona in ROOT_DIR.iterdir():
    if persona.is_dir():
        for archivo in persona.glob("*.wav"):
            print(f"Transcribiendo: {archivo}")
            try:
                resultado = model.transcribe(str(archivo))
                texto = resultado["text"].strip()
                transcripciones.append({
                    "archivo": str(archivo),
                    "persona": persona.name,
                    "transcripcion": texto
                })
            except Exception as e:
                print(f"Error con {archivo}: {e}")

# Guardar en un archivo CSV
df = pd.DataFrame(transcripciones)
df.to_csv("transcripciones.csv", index=False, encoding="utf-8")

print("✅ Transcripción completada. Archivo guardado como 'transcripciones.csv'")
