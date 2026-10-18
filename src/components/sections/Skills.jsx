import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';

const Skills = () => {
  // Categorías en el orden en que aparecen en profile.skills
  const categories = [...new Set(profile.skills.map((skill) => skill.category))];

  return (
    <section id="skills" className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Habilidades Técnicas
        </h2>

        <div className="max-w-4xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="py-6 md:flex md:items-start md:gap-8"
            >
              <h3 className="md:w-44 md:shrink-0 md:pt-2 mb-3 md:mb-0 text-sm font-bold uppercase tracking-wider text-brand-700 dark:text-brand-300">
                {category}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {profile.skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 py-2 pl-2 pr-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transform transition duration-200"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white ring-1 ring-gray-200 dark:ring-0">
                        <img src={skill.icon} alt="" className="h-6 w-6 object-contain" loading="lazy" />
                      </span>
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                    </li>
                  ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
