import { motion } from 'motion/react';
import m_antes from '../assets/images/m_antes.png';
import m_depois from '../assets/images/m_depois.png';
import c_antes from '../assets/images/c_antes.png';
import c_depois from '../assets/images/c_depois.png';
import jg_antes from '../assets/images/jg_antes.png';
import jg_depois from '../assets/images/jg_depois.png';

export function BeforeAfter() {
  const transformations = [
    {
      name: 'Maycon Mikael',
      age: 32,
      period: '6 meses',
      before: m_antes,
      after: m_depois,
      results: ['-12kg', '+5kg de massa magra', 'Ganho de força e disposição'],
    },
    {
      name: 'Cristiane',
      age: 28,
      period: '4 meses',
      before: c_antes,
      after: c_depois,
      results: ['-15kg', 'Redução de medidas', 'Mais energia e saúde'],
    },
    {
      name: 'João Guilherme',
      age: 30,
      period: '8 meses',
      before: jg_antes,
      after: jg_depois,
      results: ['-8kg de gordura', '+7kg de massa muscular', 'Melhora na performance'],
    },
  ];

  return (
    <section id="resultados" className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Antes & Depois
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Resultados reais de alunos que transformaram suas vidas
          </p>
        </div>

        <div className="space-y-16">
          {transformations.map((transformation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Before */}
                <div className="relative group">
                  <div className="aspect-[4/5] md:aspect-[4/5]">
                    <img
                      src={transformation.before}
                      alt={`${transformation.name} - Antes`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
                    ANTES
                  </div>
                </div>

                {/* After */}
                <div className="relative group">
                  <div className="aspect-[4/5] md:aspect-[4/5]">
                    <img
                      src={transformation.after}
                      alt={`${transformation.name} - Depois`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-sky-500 text-white px-4 py-2 rounded-full font-semibold">
                    DEPOIS
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {transformation.name}
                    </h3>
                    <p className="text-gray-400">
                      {transformation.age} anos • {transformation.period} de treino
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {transformation.results.map((result, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-sky-500/10 text-sky-500 rounded-full text-sm border border-sky-500/30"
                    >
                      {result}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 mb-6">
            Pronto para ser o próximo caso de sucesso?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contato');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors font-semibold text-lg inline-block cursor-pointer"
          >
            Comece Sua Transformação
          </button>
        </div>
      </div>
    </section>
  );
}