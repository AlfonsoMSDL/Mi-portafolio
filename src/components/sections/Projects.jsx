import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { profile } from '../../data/profile';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Projects = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
      },
    }),
  };

  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Proyectos Destacados
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {profile.projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className={project.featured ? 'md:col-span-2' : ''}
            >
              <Card
                className="h-full"
                bodyClassName={`flex h-full flex-col ${project.featured ? 'lg:flex-row lg:items-center' : ''}`}
              >
                <div className={project.featured ? 'lg:w-1/2 lg:shrink-0 lg:self-stretch lg:flex lg:items-center lg:p-8 lg:bg-gray-100 dark:lg:bg-gray-900/50' : ''}>
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    decoding="async"
                    className={`w-full aspect-[2/1] object-cover ${project.featured ? 'lg:rounded-xl lg:shadow-lg' : ''}`}
                  />
                </div>
                <div className={`p-6 flex flex-1 flex-col ${project.featured ? 'lg:w-1/2' : ''}`}>
                  {project.demo && (
                    <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-green-50 dark:bg-green-900/30 px-2.5 py-0.5 text-xs font-semibold text-green-700 dark:text-green-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      Demo en línea
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md bg-gray-100 dark:bg-gray-700 px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-200"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6 flex flex-wrap gap-3">
                    <Button href={project.github} target="_blank" rel="noopener noreferrer" variant="outline" size="sm">
                      <Github size={16} className="mr-2" /> Código
                    </Button>
                    {project.demo && (
                      <Button href={project.demo} target="_blank" rel="noopener noreferrer" size="sm">
                        <ExternalLink size={16} className="mr-2" /> Ver demo
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
