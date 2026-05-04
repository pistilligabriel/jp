import { Award, Target, Users, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import teste from '../assets/images/jp1.png';


export function About() {
  const stats = [
    { icon: Users, value: '500+', label: 'Alunos Transformados' },
    { icon: Award, value: '10+', label: 'Anos de Experiência' },
    { icon: Target, value: '95%', label: 'Taxa de Sucesso' },
    { icon: Zap, value: '1000+', label: 'Treinos Realizados' },
  ];

  return (
    <section id="sobre" className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={teste}
                alt="Sobre mim"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-sky-500 rounded-2xl p-6 shadow-xl">
              <p className="text-4xl font-bold text-white">2+</p>
              <p className="text-white">Anos de Experiência</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sobre Mim
            </h2>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                Olá! Sou <span className="text-sky-500 font-semibold">João Paulo Silva Faria</span>, 
                personal trainer certificado com mais de 2 anos de experiência em transformação 
                física e performance atlética.
              </p>
              <p>
                Minha missão é ajudar pessoas como você a conquistarem seus objetivos através 
                de treinos personalizados e muito suporte motivacional.
              </p>
              <p>
                Acredito que cada pessoa é única e merece um plano individualizado que respeite 
                suas limitações e potencialize seus resultados. Não existem fórmulas mágicas, 
                mas sim trabalho consistente e inteligente.
              </p>
            </div>

            {/* Certifications */}
            {/* <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-neutral-900 text-sky-500 rounded-full text-sm border border-sky-500/30">
                CREF Certificado
              </span>
              <span className="px-4 py-2 bg-neutral-900 text-sky-500 rounded-full text-sm border border-sky-500/30">
                CrossFit Level 2 Trainer (CF-L2)
              </span>
              <span className="px-4 py-2 bg-neutral-900 text-sky-500 rounded-full text-sm border border-sky-500/30">
                Level 1 Gymnastics
              </span>
              <span className="px-4 py-2 bg-neutral-900 text-sky-500 rounded-full text-sm border border-sky-500/30">
                CAT - Curso de Aperfeiçoamento de Treinadores
              </span>
              <span className="px-4 py-2 bg-neutral-900 text-sky-500 rounded-full text-sm border border-sky-500/30">
                Musculação Avançada
              </span>
              <span className="px-4 py-2 bg-neutral-900 text-sky-500 rounded-full text-sm border border-sky-500/30">
                Treinamento Funcional
              </span>
            </div> */}
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-900 rounded-2xl p-6 text-center border border-neutral-800 hover:border-sky-500/50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-sky-500/10 rounded-full mb-4">
                <stat.icon className="text-sky-500" size={24} />
              </div>
              <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}