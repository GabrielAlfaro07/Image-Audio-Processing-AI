from transformers import Wav2Vec2ForCTC, Wav2Vec2Processor
from core.config import settings
import torch

processor = Wav2Vec2Processor.from_pretrained(settings.MODEL_PATH, local_files_only=True)
model = Wav2Vec2ForCTC.from_pretrained(settings.MODEL_PATH, local_files_only=True)
device = "cuda" if torch.cuda.is_available() else "cpu"
model.to(device)
model.eval()