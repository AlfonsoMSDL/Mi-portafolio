import voluntariappImage from "../assets/voluntariAppImage.png";
import rolandGarrosImage from "../assets/rolandGarrosImage.png";
import hotelSwaggerImage from "../assets/hotelSwaggerImage.png";
export const profile = {
  name: "Alfonso Salazar",
  role: "Desarrollador Backend Java y Spring Boot",
  photo: "https://via.placeholder.com/150",
  about: "Desarrollador backend especializado en el ecosistema de Java, con experiencia en la construcción de aplicaciones robustas usando Spring Boot, Servlets y arquitectura basada en microservicios. Manejo contenedorización con Docker, despliegues con Docker Compose y persistencia con PostgreSQL y JPA. Disfruto crear soluciones eficientes, bien estructuradas y escalables, integrando buenas prácticas de software y bases sólidas en ingeniería.",
  education: [
    {
      institution: "Universidad del Magdalena",
      degree: "Ingeniería de Sistemas",
      period: "2022 - actual"
    },
    {
      institution: "Servicio Nacional de Aprendizaje (SENA)",
      degree: "Técnico en contablización de operaciones comerciales y financieras",
      period: "2020 - 2021"
    },
    {
      institution: "Servicio Nacional de Aprendizaje (SENA)",
      degree: "Variables y Estructuras de Control en la Programación Orientada a Objetos: Java",
      period: "Julio 2021 - Agosto 2021"
    }
  ],
  skills: [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "Docker / Docker Compose", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  {name:"MySQL", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},
  { name: "JPA / Hibernate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg" },
  { name: "JDBC", icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  {name:"Linux", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"},
  {name:"Nginx", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg"},
  {name:"Swagger", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg"},
  {name:"Postman", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"}
],

  projects: [
    {
      name: "Sistema de Gestión Hotelera (En desarrollo)",
      description: "Backend diseñado a partir de un análisis del dominio del negocio hotelero, incluyendo modelado conceptual, lógico y diagrama de clases. Implementado con Java y Spring Boot, utilizando PostgreSQL y Docker Compose para el entorno de ejecución. Funcionalidades actuales: autenticación, gestión de habitaciones y documentación de APIs con Swagger.En desarrollo: módulo de reservas, integración de frontend en React, pasarela de pagos y despliegue en AWS.",
      image: hotelSwaggerImage,
      github: "https://github.com/AlfonsoMSDL/Proyecto-hotel-backend",
    },
    {
      name: "VoluntariApp",
      description: "VoluntariApp es un sistema de gestión de voluntariado construido con microservicios en Java, Tomcat y PostgreSQL. Implementé cerca del 70% del backend, la arquitectura con Docker Compose y el enrutamiento con Nginx. Permite a administradores, voluntarios y organizaciones gestionar proyectos, inscripciones y participaciones.",
      image: voluntariappImage,
      github: "https://github.com/AlfonsoMSDL/microservicios-voluntariApp",
    },
    {
      name: "Base de datos Roland Garros",
      description: "Base de datos relacional diseñada para modelar el torneo Roland Garros, desarrollada desde las fases de historias de usuario, modelado conceptual, lógico y normalización. Implementé la estructura completa en PostgreSQL, incluyendo creación de tablas, inserción de datos, vistas, funciones y consultas para responder 20 preguntas de negocio. Proyecto centrado en análisis, diseño y validación de una base de datos profesional.",
      image: rolandGarrosImage,
      github: "https://github.com/AlfonsoMSDL/RolandGarrosBD",
    }
  ],
  contact: {
    email: "alfonsomanuelsalazarldeleon49@gmail.com",
    linkedin: "https://www.linkedin.com/in/alfonso-salazar-de-le%C3%B3n-6b52502a5/",
    github: "https://github.com/AlfonsoMSDL"
  }
};
