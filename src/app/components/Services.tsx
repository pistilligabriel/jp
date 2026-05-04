import { Dumbbell, Heart, Apple, Trophy, Users, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function Services() {
  const services = [
    {
      icon: Dumbbell,
      title: 'Treino Personalizado',
      description: 'Planos de treino 100% customizados para seus objetivos, nível e disponibilidade.',
    },
    {
      icon: Heart,
      title: 'Avaliação Física',
      description: 'Análise completa da composição corporal e definição de metas realistas.',
    },
    {
      icon: Trophy,
      title: 'Consultoria Online',
      description: 'Acompanhamento à distância com suporte diário via WhatsApp.',
    },
    {
      icon: Users,
      title: 'Treino em Grupo',
      description: 'Sessões motivadoras em pequenos grupos para resultados coletivos.',
    },
    {
      icon: TrendingUp,
      title: 'Acompanhamento Contínuo',
      description: 'Monitoramento semanal do progresso com ajustes quando necessário.',
    },
  ];

  return (
    <section className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meus Serviços
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Soluções completas para você alcançar o corpo dos seus sonhos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-neutral-950 rounded-2xl p-8 border border-neutral-800 hover:border-sky-500/50 transition-all hover:transform hover:scale-105 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-500/10 rounded-2xl mb-6 group-hover:bg-sky-500/20 transition-colors">
                <service.icon className="text-sky-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}