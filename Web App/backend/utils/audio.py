from pydub import AudioSegment
import torch
import io

async def convert_audio_to_tensor(file):
    contents = await file.read()
    audio = AudioSegment.from_file(io.BytesIO(contents))
    audio = audio.set_channels(1).set_frame_rate(16000)
    samples = audio.get_array_of_samples()
    audio_tensor = torch.tensor(samples, dtype=torch.float32) / 32768.0
    return audio_tensor
