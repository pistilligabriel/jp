import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { BeforeAfter } from './components/BeforeAfter';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Hero />
      <About />
      <Services />
      <BeforeAfter />
      <Testimonials />
      <Gallery />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </div>
  );
}