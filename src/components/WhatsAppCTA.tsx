import { MessageCircle, Instagram } from "lucide-react";

const WhatsAppCTA = () => {
  return (
    <div className="bg-gradient-to-t from-editor-dark to-black py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          Pronto para Transformar Suas Ideias em Realidade?
        </h2>
        <div className="flex flex-col items-center gap-8">
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

export default WhatsAppCTA;