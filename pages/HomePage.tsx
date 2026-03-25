import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import ParticleBackground from '../components/ParticleBackground';
import AnimatedSection from '../components/AnimatedSection';
import BrainCanvas from '../components/BrainCanvas';

const HeroSection: React.FC = () => (
  <section className="relative h-screen flex items-center justify-center text-center">
    <ParticleBackground />
    <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center">
      <div className="w-64 h-64 md:w-72 md:h-72 mb-8">
        <BrainCanvas />
      </div>
      <div>
        <p className="text-lg text-accent mb-4 font-mono">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-4">Derek Newman.</h1>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-text-secondary mb-8 whitespace-nowrap">I study brains and build models.</h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          I'm a PhD candidate in Neuroscience at McGill University, where my work bridges neuroimaging, complexity science, and machine learning to investigate how the brain’s dynamics support consciousness.
        </p>
      </div>
    </div>
  </section>
);

const AboutSection: React.FC = () => (
  <AnimatedSection id="about" className="py-24">
    <div className="container mx-auto px-6 max-w-5xl">
      <h2 className="text-3xl font-bold text-text-primary mb-12 flex items-center">
        <span className="text-accent font-mono mr-3 text-2xl"></span> About Me
        <span className="flex-grow h-px bg-background-secondary ml-4"></span>
      </h2>
      <div className="grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-3 text-text-secondary space-y-4 text-lg leading-relaxed">
          <p>
            I'm a PhD candidate in the Integrated Program in Neuroscience at McGill University, based at the Montreal General Hospital. I study how brain activity evolves across states of consciousness, focusing on anesthesia and severe brain injury.
          </p>
          <p>
            My research integrates neuroimaging (EEG, MEG, and fMRI) with complexity science and machine learning. By applying entropy, fractal, and dynamical systems metrics, I investigate how the brain maintains a balance between order and chaos, and how this balance reorganizes when consciousness is disrupted.
          </p>
          <p>
            With a background in Behavioural Neuroscience from Concordia University, my long-term goal is to translate theoretical insights into clinical tools that improve diagnosis, prognosis, and treatment for patients with disorders of consciousness.
          </p>
          <a href="#" download className="inline-block mt-6 px-6 py-3 border border-accent text-accent rounded-md hover:bg-accent/10 transition-colors duration-300 font-mono">
            Download CV
          </a>
        </div>
        <div className="md:col-span-2 relative group w-full max-w-sm mx-auto">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500 to-sky-700 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <img 
                src="https://picsum.photos/seed/derek-professional/500/500" 
                alt="Derek Newman" 
                className="rounded-lg w-full relative"
            />
        </div>
      </div>
    </div>
  </AnimatedSection>
);

const ContactSection: React.FC = () => (
  <AnimatedSection id="contact" className="py-24 text-center">
    <div className="container mx-auto px-6 max-w-2xl">
      <h2 className="text-3xl font-bold text-text-primary mb-4">
        <span className="text-accent font-mono mr-3 text-2xl"></span> Get In Touch
      </h2>
      <p className="text-text-secondary mb-8">
        I'm always open to discussing new research ideas, collaborations, or opportunities. Feel free to reach out!
      </p>
      
      <div className="mb-10">
        <a href="mailto:derek.newman@mail.mcgill.ca" className="text-lg font-mono text-accent p-4 border border-accent/50 rounded-md inline-block hover:bg-accent/10 transition-colors duration-300">
            derek.newman@mail.mcgill.ca
        </a>
      </div>

      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full bg-background-secondary p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent text-text-primary" />
        <input type="email" placeholder="Your Email" className="w-full bg-background-secondary p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent text-text-primary" />
        <textarea placeholder="Your Message" rows={5} className="w-full bg-background-secondary p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent text-text-primary"></textarea>
        <button type="submit" className="px-8 py-3 border border-accent text-accent rounded-md hover:bg-accent/10 transition-colors duration-300 font-mono">
          Send Message
        </button>
      </form>
    </div>
  </AnimatedSection>
);

const HomePage: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1);
            setTimeout(() => {
                scroller.scrollTo(id, {
                    duration: 800,
                    delay: 0,
                    smooth: 'easeInOutQuart',
                    offset: -80, // Adjust for sticky header height
                });
            }, 100);
        }
    }, [location.hash]);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default HomePage;