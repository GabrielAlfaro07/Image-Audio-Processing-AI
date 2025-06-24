import { useRef, useState } from "react";
import { transcribeAudio } from "../services/api";
import { Mic } from "lucide-react"; // usando lucide-react para íconos

interface RecorderProps {
  onTranscription: (text: string) => void;
}

export const Recorder = ({ onTranscription }: RecorderProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;
    audioChunksRef.current = [];

    mediaRecorder.ondataavailable = (event) => {
      audioChunksRef.current.push(event.data);
    };

    mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
      try {
        const text = await transcribeAudio(audioBlob);
        onTranscription(text || "(vacío)");
      } catch (e) {
        onTranscription("(Error al transcribir)");
        console.error(e);
      } finally {
        setIsRecording(false);
      }
    };

    mediaRecorder.start();
    setIsRecording(true);
    setTimeout(() => mediaRecorder.stop(), 5000);
  };

  return (
    <button
      onClick={startRecording}
      disabled={isRecording}
      className={`
        w-full flex items-center justify-center gap-2
        bg-blue-600 text-white font-[Quicksand] px-6 py-3 rounded-xl
        shadow-lg transition-all duration-300 transform
        hover:-translate-y-1 hover:shadow-2xl
        hover:bg-blue-700
        ${isRecording ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      <Mic className="w-5 h-5" />
      {isRecording ? "Grabando..." : "Iniciar grabación"}
    </button>
  );
};
