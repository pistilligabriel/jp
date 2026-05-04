import { ArrowDown, Instagram, Mail } from 'lucide-react';
import capa from '../assets/images/jp3.png';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Left Side */}
      <div className="absolute inset-0 bg-black">
        <img
          src={capa}
          alt="Personal Trainer"
          className="w-full h-full object-contain object-left"
        />
      </div>
      
      {/* Overlay Gradient - Darker on left, lighter in center */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>

      {/* Content */}
      <div className="relative z-10 text-right px-4 max-w-4xl ml-auto mr-9">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Transforme Seu Corpo,<br />
          <span className="text-sky-500">Transforme Sua Vida</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl ml-auto">
          Treinos personalizados e acompanhamento profissional para você alcançar seus objetivos
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-end items-center mb-12 mr-50">
          <button
            onClick={() => scrollToSection('contato')}
            className="px-8 py-4 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors font-semibold text-lg cursor-pointer"
          >
            Comece Agora
          </button>
          <button
            onClick={() => scrollToSection('sobre')}
            className="px-8 py-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm font-semibold text-lg cursor-pointer"
          >
            Saiba Mais
          </button>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-end mr-50">
          <a href="#" className="text-white hover:text-sky-500 transition-colors">
            <Instagram size={28} />
          </a>
          <a href="#" className="text-white hover:text-sky-500 transition-colors">
            <Mail size={28} />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
}
