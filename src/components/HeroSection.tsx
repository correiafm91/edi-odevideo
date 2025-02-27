import { MessageCircle, ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-editor-dark to-black py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Edição de vídeo profissional
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Vídeos de Alto Impacto que Vendem, Conectam e Fazem Seu Negócio Crescer
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="https://drive.google.com/drive/folders/1VTPqSbGwNLmF95pqSGJPrTUalNx-Tfed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-black px-8 py-4 rounded-lg transition-colors duration-300 hover:bg-gray-200"
          >
            <ExternalLink size={24} />
            <span className="text-lg font-semibold">Ver Portfólio</span>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=5512988508716&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg transition-colors duration-300"
          >
            <MessageCircle size={24} />
            <span className="text-lg font-semibold">
              Solicitar Orçamento Personalizado
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;