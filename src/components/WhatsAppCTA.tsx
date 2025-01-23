import { MessageCircle, Instagram } from "lucide-react";

const WhatsAppCTA = () => {
  return (
    <div className="bg-gradient-to-t from-editor-dark to-black py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-8">
          Pronto para Transformar Suas Ideias em Realidade?
        </h2>
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <a
            href="https://api.whatsapp.com/send/?phone=5512988508716&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors duration-300 text-sm md:text-lg"
          >
            <MessageCircle size={window.innerWidth < 768 ? 20 : 24} />
            <span className="font-semibold">
              Solicitar Orçamento Personalizado
            </span>
          </a>
          
          <a
            href="https://www.instagram.com/EDITO.VIDEO1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-white hover:text-editor-primary transition-colors duration-300 text-sm md:text-base"
          >
            <Instagram size={window.innerWidth < 768 ? 20 : 24} />
            <span>@EDITO.VIDEO1</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppCTA;