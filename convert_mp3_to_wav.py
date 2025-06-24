from pydub import AudioSegment
import os
from pathlib import Path

# Ruta raíz de los audios mp3
INPUT_DIR = Path("Audios")
# Ruta donde se guardarán los .wav
OUTPUT_DIR = Path("Audios_WAV")
OUTPUT_DIR.mkdir(exist_ok=True)

# Recorrer subcarpetas y convertir archivos
for persona_dir in INPUT_DIR.iterdir():
    if persona_dir.is_dir():
        output_subdir = OUTPUT_DIR / persona_dir.name
        output_subdir.mkdir(parents=True, exist_ok=True)

        for mp3_file in persona_dir.glob("*.mp3"):
            try:
                audio = AudioSegment.from_mp3(mp3_file)
                audio = audio.set_channels(1).set_frame_rate(16000)  # mono, 16kHz
                wav_filename = mp3_file.with_suffix(".wav").name
                output_path = output_subdir / wav_filename
                audio.export(output_path, format="wav")
                print(f"Convertido: {mp3_file} -> {output_path}")
            except Exception as e:
                print(f"Error al convertir {mp3_file}: {e}")

print("✅ Conversión completada.")