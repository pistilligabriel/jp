import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to a backend
    alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Pronto para começar sua transformação? Vamos conversar!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Informações de Contato
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Estou aqui para ajudar você a alcançar seus objetivos. Entre em contato 
              através dos canais abaixo ou preencha o formulário.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-sky-500" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Telefone / WhatsApp</p>
                  <a href="tel:+5564999514960" className="text-gray-400 hover:text-sky-500 transition-colors">
                    +55 (64) 99951-4960
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-sky-500" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Email</p>
                  <a href="mailto:joaopfaria@gmail.com" className="text-gray-400 hover:text-sky-500 transition-colors">
                    joaopfaria@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-sky-500" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Localização</p>
                  <p className="text-gray-400">
                    Itumbiara - GO <br />
                    Atendimento presencial e online
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-10">
              <p className="text-white font-semibold mb-4">Me siga nas redes sociais</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-sky-500/10 rounded-full flex items-center justify-center hover:bg-sky-500/20 transition-colors"
                >
                  <Instagram className="text-sky-500" size={24} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-sky-500/10 rounded-full flex items-center justify-center hover:bg-sky-500/20 transition-colors"
                >
                  <MessageCircle className="text-sky-500" size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 transition-colors"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 transition-colors resize-none"
                  placeholder="Conte-me sobre seus objetivos..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors font-semibold flex items-center justify-center gap-2 group"
              >
                Enviar Mensagem
                <Send className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}