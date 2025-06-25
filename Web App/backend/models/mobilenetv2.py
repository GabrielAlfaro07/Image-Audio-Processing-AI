from tensorflow.keras.models import model_from_json
from pathlib import Path
def load_mobilenetv2_model():
    model_path = Path(__file__).resolve().parent / "mobilenetv2"
    with open(model_path / "config.json", "r") as f:
        json_config = f.read()
    model = model_from_json(json_config)
    model.load_weights(model_path / "model.weights.h5")
    model.compile(optimizer="adam", loss="categorical_crossentropy")
    return model
