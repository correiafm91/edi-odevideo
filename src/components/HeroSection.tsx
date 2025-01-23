import { Video, ArrowRight, Instagram } from "lucide-react";
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
          
          <div className="md:w-1/2 flex flex-col items-center">
            <div 
              className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden transform transition-all duration-700 delay-500 ${
                isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            >
              <img
                src="/lovable-uploads/34dc4d01-d69d-4972-aa61-dc8bb48b356a.png"
                alt="Editor de Vídeo Profissional"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-editor-primary/30 to-editor-secondary/30" />
            </div>
            <h3 className="text-2xl font-bold text-white mt-4">LEONAN</h3>
          </div>
        </div>

        {/* Instagram Link */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a
            href="https://www.instagram.com/EDITO.VIDEO1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-white hover:text-editor-primary transition-colors duration-300"
          >
            <Instagram size={24} />
            <span>@EDITO.VIDEO1</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;