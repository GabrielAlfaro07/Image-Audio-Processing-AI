import BlurText from "../animations/BlurText";
import AnimatedContent from "../animations/AnimatedContent";
import Logo from "../components/Logo";

const HomeScreen = () => {
  return (
    <div className="min-h-screen bg-radial-center flex flex-col items-center justify-center px-6 py-10">
      <Logo size="large" />

      <BlurText
        text="Bienvenido a la plataforma"
        delay={150}
        animateBy="words"
        direction="top"
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
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl text-center text-white font-[Quicksand]">
            <p>Explora las capacidades de nuestra IA para audio e imágenes.</p>
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
};

export default HomeScreen;
