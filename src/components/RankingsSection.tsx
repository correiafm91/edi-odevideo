import { useInView } from "react-intersection-observer";

const RankingsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="bg-black py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-editor-dark/50 backdrop-blur-sm rounded-lg p-4 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6 md:mb-8">Rank</h2>
          <div className="flex flex-col items-center mb-6 md:mb-8">
            <img
              src="/lovable-uploads/34dc4d01-d69d-4972-aa61-dc8bb48b356a.png"
              alt="Profile"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-3 md:mb-4"
              loading="lazy"
            />
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Leonan R.</h3>
            <p className="text-editor-primary mb-3 md:mb-4">Edição de Vídeo</p>
            <div className="flex items-center space-x-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm md:text-base">★</span>
                ))}
              </div>
              <span className="text-white text-sm md:text-base">Brasil</span>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div>
              <p className="text-gray-400 mb-2 text-sm md:text-base">Nível atual GOLD</p>
              <div className="flex justify-center space-x-1 md:space-x-2">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-6 h-6 md:w-8 md:h-8 rounded-full ${
                      i === 5 ? "bg-yellow-400" : "bg-gray-700"
                    } flex items-center justify-center`}
                  >
                    {i === 5 && (
                      <span className="text-black font-bold text-sm md:text-base">
                        G
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 md:space-y-4">
              <div>
                <p className="text-gray-400 mb-2 text-sm md:text-base">Ranking em Design e Multimídia</p>
                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-white">Global</span>
                  <span className="text-editor-primary">314</span>
                </div>
                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-white">No Brasil</span>
                  <span className="text-editor-primary">175</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankingsSection;