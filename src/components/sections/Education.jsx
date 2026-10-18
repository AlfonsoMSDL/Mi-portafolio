import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { profile } from '../../data/profile';
import Card from '../ui/Card';

const Education = () => {
  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <section id="education" className="py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Educación y Formación
        </h2>
        <ol className="relative max-w-3xl mx-auto border-l-2 border-gray-200 dark:border-gray-700 space-y-8">
          {profile.education.map((edu, index) => (
            <motion.li
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="relative pl-8"
            >
              <span className="absolute -left-[15px] top-5 flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 ring-4 ring-white dark:ring-gray-900">
                <GraduationCap className="text-white" size={14} />
              </span>
              <Card>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                  <p className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</p>
                  {edu.period.toLowerCase().includes('actual') && (
                    <span className="rounded-full bg-brand-100 dark:bg-brand-500/20 px-2.5 py-0.5 text-xs font-semibold text-brand-700 dark:text-brand-300">
                      En curso
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{edu.degree}</h3>
                <p className="font-semibold text-gray-700 dark:text-gray-300">{edu.institution}</p>
              </Card>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Education;
