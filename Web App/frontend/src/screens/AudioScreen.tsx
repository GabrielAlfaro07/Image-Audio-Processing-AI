import { useState } from "react";
import { Recorder } from "../components/Recorder";
import { TranscriptionBox } from "../components/TranscriptionBox";
import BlurText from "../animations/BlurText";
import AnimatedContent from "../animations/AnimatedContent";
import Logo from "../components/Logo";

const AudioScreen = () => {
  const [transcription, setTranscription] = useState("");
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="min-h-screen bg-radial-center flex flex-col items-center justify-center px-6 py-10">
      <Logo size="large" />

      <BlurText
        text="Transcripción en tiempo real"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="font-[Designer] text-4xl md:text-6xl font-bold mb-12 text-white text-center"
      />

      <div className="w-full max-w-2xl">
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
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl text-center">
            <Recorder onTranscription={setTranscription} />
            <TranscriptionBox transcription={transcription} />
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
};

export default AudioScreen;
