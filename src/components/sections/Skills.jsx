import React from 'react';
import { profile } from '../../data/profile';

const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Habilidades Técnicas
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {profile.skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-700 
             py-4 px-2 rounded-lg shadow-sm hover:shadow-md transition 
             text-center transform hover:scale-105 duration-200"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 mb-2 object-contain"
              />
              <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
