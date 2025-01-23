import { useInView } from "react-intersection-observer";

const RankingsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-editor-dark/50 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Rank</h2>
          <div className="flex flex-col items-center mb-8">
            <img
              src="/lovable-uploads/34dc4d01-d69d-4972-aa61-dc8bb48b356a.png"
              alt="Profile"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">Leonan R.</h3>
            <p className="text-editor-primary mb-4">Edição de Vídeo</p>
            <div className="flex items-center space-x-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <span className="text-white">Brasil</span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-gray-400 mb-2">Nível atual GOLD</p>
              <div className="flex space-x-2">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${
                      i === 5
                        ? "bg-yellow-400"
                        : "bg-gray-700"
                    }`}
                  >
                    {i === 5 && (
                      <span className="flex items-center justify-center h-full text-black font-bold">
                        G
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-gray-400 mb-2">Ranking em Design e Multimídia</p>
                <div className="flex justify-between">
                  <span className="text-white">Global</span>
                  <span className="text-editor-primary">314</span>
                </div>
                <div className="flex justify-between">
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