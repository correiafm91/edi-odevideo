import { WhatsappIcon } from "lucide-react";

const WhatsAppCTA = () => {
  return (
    <div className="bg-gradient-to-t from-editor-dark to-black py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          Pronto para Transformar Suas Ideias em Realidade?
        </h2>
        <a
          href="https://wa.me/SEUNUMEROAQUI"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg transition-colors duration-300"
        >
          <WhatsappIcon size={24} />
          <span className="text-lg font-semibold">
            Solicitar Orçamento Personalizado
          </span>
        </a>
      </div>
    </div>
  );
};

export default WhatsAppCTA;