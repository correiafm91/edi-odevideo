import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [counts, setCounts] = useState({
    projects: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    if (inView) {
      const projectsInterval = setInterval(() => {
        setCounts(prev => ({
          ...prev,
          projects: Math.min(prev.projects + 5, 200),
        }));
      }, 20);

      const satisfactionInterval = setInterval(() => {
        setCounts(prev => ({
          ...prev,
          satisfaction: Math.min(prev.satisfaction + 2, 93.4),
        }));
      }, 20);

      return () => {
        clearInterval(projectsInterval);
        clearInterval(satisfactionInterval);
      };
    }
  }, [inView]);

  return (
    <div ref={ref} className="bg-editor-dark py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-bold text-editor-primary mb-3 md:mb-4">
              {counts.projects}+
            </div>
            <p className="text-lg md:text-xl text-gray-300">Projetos Realizados</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-bold text-editor-secondary mb-3 md:mb-4">
              {counts.satisfaction.toFixed(1)}%
            </div>
            <p className="text-lg md:text-xl text-gray-300">Clientes Satisfeitos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;