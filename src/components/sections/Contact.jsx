import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { profile } from '../../data/profile';
import Button from '../ui/Button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Contacto
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          ¿Interesado en colaborar? No dudes en contactarme. Estoy disponible para cualquier oportunidad de trabajo.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Button href={`mailto:${profile.contact.email}`}>
            <Mail className="mr-2" /> Enviar un correo
          </Button>
        </motion.div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" variant="outline" size="sm">
            <Linkedin size={18} className="mr-2" /> LinkedIn
          </Button>
          <Button href={profile.contact.github} target="_blank" rel="noopener noreferrer" variant="outline" size="sm">
            <Github size={18} className="mr-2" /> GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
