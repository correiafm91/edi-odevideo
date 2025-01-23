import { Video, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-editor-dark flex items-center justify-center overflow-hidden">
      {/* Background video icons */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <Video
            key={i}
            className={`absolute animate-float text-editor-primary`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
            size={32}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 
              className={`text-4xl md:text-6xl font-bold mb-6 text-white transform transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              Editor de Vídeo Profissional
            </h1>
            <p 
              className={`text-xl text-gray-300 mb-8 transform transition-all duration-700 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              Transformando suas ideias em conteúdo impactante para empreendedores, 
              influenciadores e agências.
            </p>
            <a
              href="https://drive.google.com/drive/folders/1VTPqSbGwNLmF95pqSGJPrTUalNx-Tfed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-editor-primary hover:bg-editor-primary/90 text-white px-6 py-3 rounded-lg transition-colors duration-300"
            >
              <span>Ver portfólio</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;