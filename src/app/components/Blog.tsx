import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: '5 Erros Comuns na Academia que Você Deve Evitar',
      excerpt: 'Descubra os principais erros que podem estar impedindo seus resultados e como corrigi-los para treinar de forma mais eficiente.',
      image: 'https://images.unsplash.com/photo-1653927956711-f2222a45e040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWlnaHRsaWZ0aW5nJTIwZ3ltfGVufDF8fHx8MTc2Nzc5MDQxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '15 Dez 2025',
      readTime: '5 min',
      category: 'Treino',
    },
    {
      id: 2,
      title: 'Nutrição Pré e Pós-Treino: O Guia Completo',
      excerpt: 'Aprenda o que comer antes e depois dos treinos para maximizar seus ganhos e acelerar a recuperação muscular.',
      image: 'https://images.unsplash.com/photo-1708987379841-2badb0d3a95a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMG1lYWx8ZW58MXx8fHwxNzY3NzM4OTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '10 Dez 2025',
      readTime: '7 min',
      category: 'Nutrição',
    },
    {
      id: 3,
      title: 'Como Ganhar Massa Muscular de Forma Saudável',
      excerpt: 'Estratégias comprovadas para hipertrofia muscular sem prejudicar sua saúde. Descubra o método que funciona.',
      image: 'https://images.unsplash.com/photo-1467818488384-3a21f2b79959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zc2ZpdCUyMHdvcmtvdXR8ZW58MXx8fHwxNzY3ODAzMjk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '5 Dez 2025',
      readTime: '6 min',
      category: 'Hipertrofia',
    },
    {
      id: 4,
      title: 'A Importância do Descanso no Treino',
      excerpt: 'Por que o descanso é tão importante quanto o treino? Entenda como recuperar adequadamente para melhores resultados.',
      image: 'https://images.unsplash.com/photo-1641971215228-c677f3a28cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwZml0bmVzc3xlbnwxfHx8fDE3Njc4MTE1OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '1 Dez 2025',
      readTime: '4 min',
      category: 'Recuperação',
    },
    {
      id: 5,
      title: 'Treino Funcional: Benefícios e Exercícios',
      excerpt: 'Conheça os benefícios do treino funcional e como ele pode melhorar sua performance no dia a dia.',
      image: 'https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBlcXVpcG1lbnQlMjB0cmFpbmluZ3xlbnwxfHx8fDE3Njc3NzQxNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '25 Nov 2025',
      readTime: '5 min',
      category: 'Treino',
    },
    {
      id: 6,
      title: 'Suplementação: O Que Realmente Funciona',
      excerpt: 'Desmistificando a suplementação: quais suplementos valem a pena e quais são apenas marketing.',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwc3R1ZGlvfGVufDF8fHx8MTc2Nzc1ODEwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '20 Nov 2025',
      readTime: '8 min',
      category: 'Nutrição',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blog & Dicas
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Artigos e dicas sobre treino, nutrição e bem-estar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-emerald-500/50 transition-all hover:transform hover:scale-105 group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs border border-emerald-500/30">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-500 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <button className="flex items-center gap-2 text-emerald-500 font-semibold hover:gap-3 transition-all">
                  Ler mais
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-emerald-500 transition-colors font-semibold border border-neutral-800 hover:border-emerald-500">
            Ver Todos os Artigos
          </button>
        </div>
      </div>
    </section>
  );
}