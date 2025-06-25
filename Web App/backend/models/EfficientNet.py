# modelo.py
from tensorflow.keras.applications import EfficientNetB0
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Input, GlobalAveragePooling2D, Dropout, Dense
from pathlib import Path
from tensorflow.keras.optimizers import Adam
NUM_CLASSES = 5
INPUT_SHAPE = (224, 224, 3)        # usa la misma resolución que entrenaste
WEIGHTS_FILE = Path(__file__).resolve().parent / "ft_epoch_07_valacc_0.691.h5"

def build_model():
    base = EfficientNetB0(weights="imagenet",
                          include_top=False,
                          input_shape=INPUT_SHAPE)

    # congela todo menos las 10 últimas capas
    for layer in base.layers[:-10]:
        layer.trainable = False

    inp = Input(shape=INPUT_SHAPE)
    x = base(inp)                   # ¡sin training=True!
    x = GlobalAveragePooling2D()(x)
    x = Dropout(0.5)(x)
    out = Dense(NUM_CLASSES, activation="softmax")(x)

    model = Model(inp, out)

    # compilar antes de cargar pesos (Keras lo pide)
    model.compile(optimizer=Adam(1e-4),
                  loss="categorical_crossentropy",
                  metrics=["accuracy"])

    # cargar pesos fine-tuned
    model.load_weights(WEIGHTS_FILE)

    return model