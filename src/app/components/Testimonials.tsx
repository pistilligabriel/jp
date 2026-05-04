import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Carolina Mendes',
      role: 'Executiva',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      rating: 5,
      text: 'O Rafael mudou completamente minha vida! Não só emagreci 15kg como ganhei uma disposição que não tinha há anos. O acompanhamento é impecável e os treinos são super personalizados.',
    },
    {
      name: 'Lucas Rodrigues',
      role: 'Engenheiro',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Melhor investimento que fiz! Em 6 meses consegui ganhar massa muscular e definição que sempre quis. O Rafael é muito atencioso e sempre está disponível para tirar dúvidas.',
    },
    {
      name: 'Patrícia Santos',
      role: 'Médica',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Profissional extremamente competente! Me ajudou não só nos treinos mas também na parte nutricional. Perdi peso de forma saudável e sustentável. Recomendo demais!',
    },
    {
      name: 'Fernando Lima',
      role: 'Empresário',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Treino com o Rafael há 2 anos e não paro mais! Ele sempre inova nos treinos e me motiva a superar meus limites. Excelente profissional e pessoa.',
    },
    {
      name: 'Juliana Oliveira',
      role: 'Professora',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Sempre tive dificuldade em manter a consistência nos treinos, mas com o suporte do Rafael tudo mudou. Ele torna os treinos divertidos e desafiadores ao mesmo tempo!',
    },
    {
      name: 'Ricardo Alves',
      role: 'Advogado',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Profissionalismo e dedicação definem o trabalho do Rafael. Consegui resultados que nunca imaginei ser possível alcançar. Indico de olhos fechados!',
    },
  ];

  return (
    <section className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Depoimentos
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Veja o que meus alunos dizem sobre o trabalho
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-neutral-950 rounded-2xl p-8 border border-neutral-800 hover:border-sky-500/50 transition-colors relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Quote className="absolute top-6 right-6 text-sky-500/20" size={48} />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-yellow-500" size={20} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}