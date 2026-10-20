import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Github, Linkedin, Download } from 'lucide-react';
import { profile } from '../../data/profile';
import Button from '../ui/Button';
import { buttonClass } from '../ui/buttonStyles';

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden min-h-[90vh] flex items-center pt-24 pb-16">
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-300/30 dark:bg-brand-700/20 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-brand-100/60 dark:bg-brand-500/10 blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-900/30 px-4 py-1.5 text-sm font-medium text-green-700 dark:text-green-300 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Disponible para trabajar
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Hola, soy{' '}
            <span className="bg-gradient-to-r from-brand-500 to-brand-700 dark:from-brand-300 dark:to-brand-500 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>
          <p className="mt-4 text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-200">{profile.role}</p>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="projects" smooth={true} offset={-70} duration={500} className={buttonClass()}>
              Ver proyectos
            </Link>
            <Link to="contact" smooth={true} offset={-70} duration={500} className={buttonClass({ variant: 'outline' })}>
              Contacto
            </Link>
            <Button href={profile.cv} download="CV-Alfonso-Salazar.pdf" variant="outline">
              <Download size={18} className="mr-2" /> Descargar CV
            </Button>
          </div>

          <div className="mt-8 flex justify-center space-x-5">
            <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 hover:text-brand-500 dark:hover:text-brand-300 transition-colors">
              <Github size={26} />
            </a>
            <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-brand-500 dark:hover:text-brand-300 transition-colors">
              <Linkedin size={26} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
