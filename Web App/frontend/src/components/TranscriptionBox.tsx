interface Props {
  transcription: string;
}

export const TranscriptionBox = ({ transcription }: Props) => (
  <div className="mt-6 w-full p-6 bg-white/10 backdrop-blur-sm rounded-xl shadow-md">
    <h2 className="font-[Quicksand] font-semibold text-lg mb-2 text-white">
      Transcripción:
    </h2>
    <p className={`whitespace-pre-line text-white`}>
      {transcription || "Aún no hay transcripción."}
    </p>
  </div>
);
