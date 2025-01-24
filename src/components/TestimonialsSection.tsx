import { Star } from "lucide-react";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    name: "Lucas Alves",
    rating: 5,
    text: "Técnico e muito pontual! Fiz a solicitação e ele entendeu o que estava precisando. Fiquei muito satisfeito com sua capacidade e profissionalismo.",
    services: ["Facebook", "Edição de áudio"],
  },
  {
    name: "Rodrigo Soares",
    rating: 5,
    text: "Leonan é um rapaz educado, responde rápido e faz pontual sua entrega. Siga avançando em seus conhecimentos para evoluir e qualificar ainda mais seu trabalho! Boa sorte!",
    services: ["Adobe After Effects", "Adobe Premiere", "Edição de vídeo", "YouTube"],
  },
  {
    name: "Camila Kaori",
    rating: 5,
    text: "Adorei! Muito rápido e fácil a comunicação!",
    services: ["Divulgação de curso"],
  },
];

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="bg-gradient-to-b from-editor-dark to-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Feedback dos Clientes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-editor-dark/50 backdrop-blur-sm p-6 rounded-lg transform transition-all duration-700 delay-${
                index * 200
              } ${
                inView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className={`text-yellow-400 fill-yellow-400 ${inView ? 'animate-gentle-wave' : ''}`}
                      size={20}
                    />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{testimonial.text}</p>
              
              <div className="mt-4">
                <p className="text-editor-primary font-semibold mb-2">
                  {testimonial.name}
                </p>
                <div className="flex flex-wrap gap-2">
                  {testimonial.services.map((service, i) => (
                    <span
                      key={i}
                      className="text-xs bg-editor-primary/20 text-editor-primary px-2 py-1 rounded"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;