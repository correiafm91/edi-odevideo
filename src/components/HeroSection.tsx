import { Video, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-[80vh] md:min-h-screen bg-editor-dark flex items-center justify-center overflow-hidden px-4 md:px-0">
      {/* Background video icons - reduced number for mobile */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: window.innerWidth < 768 ? 6 : 12 }).map((_, i) => (
          <Video
            key={i}
            className={`absolute animate-float text-editor-primary`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              width: window.innerWidth < 768 ? '24px' : '32px',
              height: window.innerWidth < 768 ? '24px' : '32px',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full md:w-3/4 lg:w-2/3 text-center">
            <h1 
              className={`text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-white transform transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              Editor de Vídeo Profissional
            </h1>
            <p 
              className={`text-lg md:text-xl text-gray-300 mb-6 md:mb-8 transform transition-all duration-700 delay-300 ${
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
              className="inline-flex items-center space-x-2 bg-editor-primary hover:bg-editor-primary/90 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg transition-colors duration-300 text-sm md:text-base"
            >
              <span>Ver portfólio</span>
              <ArrowRight size={window.innerWidth < 768 ? 16 : 20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;