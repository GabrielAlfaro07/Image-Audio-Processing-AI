import { useState } from "react";
import BlurText from "../animations/BlurText";
import AnimatedContent from "../animations/AnimatedContent";
import Logo from "../components/Logo";
import { predictImageEfficientNet, predictImageMobileNet } from "../services/api";

const ImageScreen = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [prediction, setPrediction] = useState<{ predicted_class: number; confidence: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
      setPrediction(null);
      setError(null);
    }
  };

  const handlePredict = async () => {
  if (!selectedImage) return;
  setLoading(true);
  setError(null);
  setPrediction(null);
  try {
    const result =
      selectedOption === "EfficientNet"
        ? await predictImageEfficientNet(selectedImage)
        : await predictImageMobileNet(selectedImage);
    setPrediction(result);
  } catch {
    setError("Error al procesar la imagen.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-radial-center flex flex-col items-center justify-center px-6 py-10">
      <Logo size="large" />

      <BlurText
        text="Procesamiento de Imágenes"
        delay={150}
        animateBy="words"
        direction="top"
        className="font-[Designer] text-4xl md:text-6xl font-bold mb-12 text-white text-center"
      />

      <div className="w-full max-w-2xl space-y-6">
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          duration={1.5}
          ease="bounce.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.2}
          delay={0.7}
        >
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl text-center text-white font-[Quicksand] space-y-4">
            <p>Sube una imagen y te detectará cual tipo de amputación es</p>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-white text-sm bg-white/10 border border-white/20 rounded-lg p-2 cursor-pointer file:bg-white/20 file:text-white file:border-none file:rounded-md file:px-4 file:py-1 hover:file:bg-white/30 transition-all"
            />

            {previewUrl && (
              <div className="mt-4">
                <img
                  src={previewUrl}
                  alt="Imagen seleccionada"
                  className="max-w-full h-auto mx-auto rounded-lg border border-white/20 shadow-md"
                />
              </div>
            )}

            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="mt-4 w-full bg-white/10 text-white border border-white/20 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <option value="EfficientNet">EfficientNet</option>
              <option value="MobileNet">MobileNet</option>
            </select>

            <button
              onClick={handlePredict}
              disabled={!selectedImage || loading}
              className="mt-4 w-full bg-blue-600 text-white rounded-lg p-2 font-bold hover:bg-blue-700 transition"
            >
              {loading ? "Procesando..." : "Detectar amputación"}
            </button>

            {prediction && (
              <div className="mt-4 text-white">
                <p>Clase predicha: {prediction.predicted_class}</p>
                <p>Confianza: {(prediction.confidence * 100).toFixed(2)}%</p>
              </div>
            )}
            {error && <div className="mt-4 text-red-400">{error}</div>}
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
};

export default ImageScreen;