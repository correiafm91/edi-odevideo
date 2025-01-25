import { MessageCircle, Video, Camera, Film, Clapperboard } from "lucide-react";

const WhatsAppCTA = () => {
  return (
    <div className="bg-gradient-to-t from-editor-dark to-black py-20 relative overflow-hidden">
      {/* Background Icons */}
      <div className="absolute inset-0 opacity-10">
        <Video className="absolute top-1/4 left-1/4 w-12 h-12 animate-float" />
        <Camera className="absolute top-1/3 right-1/4 w-10 h-10 animate-float" style={{ animationDelay: "1s" }} />
        <Film className="absolute bottom-1/4 left-1/3 w-8 h-8 animate-float" style={{ animationDelay: "1.5s" }} />
        <Clapperboard className="absolute top-2/3 right-1/3 w-14 h-14 animate-float" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold text-white mb-8">
          Seu vídeo perfeito está a um clique.
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
        </div>
      </div>
    </div>
  );
};

export default WhatsAppCTA;