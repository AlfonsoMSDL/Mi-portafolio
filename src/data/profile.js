import voluntariappImage from "../assets/voluntariAppImage.webp";
import rolandGarrosImage from "../assets/rolandGarrosImage.webp";
import hotelTerminadoImage from "../assets/hotelTerminadoImage.webp";
export const profile = {
  name: "Alfonso Salazar",
  role: "Desarrollador Backend Java y Spring Boot",
  tagline: "Construyo APIs REST seguras con Java y Spring Boot, desde el modelado del dominio hasta el despliegue en la nube.",
  photo: "https://via.placeholder.com/150",
  about: "Desarrollador backend especializado en el ecosistema de Java, con experiencia en la construcción de aplicaciones robustas usando Spring Boot, Spring Security, Servlets y arquitectura basada en microservicios. Manejo la contenerización con Docker, la orquestación con Docker Compose y la persistencia con PostgreSQL y JPA. He llevado un proyecto de principio a fin: desde el modelado del dominio y la API con autenticación JWT, hasta un frontend básico en React y el despliegue en la nube con AWS y Vercel. Disfruto crear soluciones eficientes, bien estructuradas y escalables, integrando buenas prácticas de software y bases sólidas en ingeniería.",
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
  // Las habilidades se agrupan por categoría en el orden en que aparecen aquí
  skills: [
    { category: "Backend", name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { category: "Backend", name: "Spring Boot / Security", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { category: "Backend", name: "OAuth 2 / OpenID Connect con Keycloak (básico)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oauth/oauth-original.svg" },
    { category: "Backend", name: "JPA / Hibernate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg" },
    { category: "Backend", name: "JDBC", icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png" },
    { category: "Backend", name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" },

    { category: "Bases de datos", name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { category: "Bases de datos", name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },

    { category: "DevOps y Cloud", name: "Docker / Docker Compose", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { category: "DevOps y Cloud", name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
    { category: "DevOps y Cloud", name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { category: "DevOps y Cloud", name: "AWS (EC2 / RDS)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { category: "DevOps y Cloud", name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },

    { category: "Frontend", name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { category: "Frontend", name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { category: "Frontend", name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { category: "Frontend", name: "React (básico)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },

    { category: "Herramientas", name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { category: "Herramientas", name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { category: "Herramientas", name: "Swagger", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" },
    { category: "Herramientas", name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" }
  ],

  projects: [
    {
      name: "Verdant Hotel – Sistema de Gestión de Reservas Hoteleras",
      description: "Sistema de reservas para un hotel que construí de principio a fin. Modelé el dominio (modelo conceptual, lógico y diagrama de clases) y desarrollé una API REST en Java 21 y Spring Boot 4 con arquitectura en capas, autenticación JWT con Spring Security, roles y reglas de negocio validadas en el servidor: reservas sin cruces de fechas, check-in/check-out e historial de estados. Lo complementé con un frontend básico en React: catálogo con filtros, reserva con calendario que bloquea fechas ocupadas, modo claro/oscuro y panel de administración. Lo contenericé con Docker Compose y Nginx, y lo desplegué en la nube: frontend en Vercel, backend en AWS EC2 y PostgreSQL en AWS RDS.",
      image: hotelTerminadoImage,
      tech: ["Java 21", "Spring Boot 4", "Spring Security", "JWT", "PostgreSQL", "React", "Docker", "AWS", "Vercel"],
      featured: true,
      github: "https://github.com/AlfonsoMSDL/Proyecto-hotel",
      demo: "https://proyecto-hotel-beta.vercel.app/",
    },
    {
      name: "VoluntariApp",
      description: "VoluntariApp es un sistema de gestión de voluntariado construido con microservicios en Java, Tomcat y PostgreSQL. Implementé cerca del 70% del backend, la arquitectura con Docker Compose y el enrutamiento con Nginx. Permite a administradores, voluntarios y organizaciones gestionar proyectos, inscripciones y participaciones.",
      image: voluntariappImage,
      tech: ["Java", "Tomcat", "PostgreSQL", "Docker Compose", "Nginx", "Microservicios"],
      github: "https://github.com/AlfonsoMSDL/microservicios-voluntariApp",
    },
    {
      name: "Base de datos Roland Garros",
      description: "Base de datos relacional diseñada para modelar el torneo Roland Garros, desarrollada desde las fases de historias de usuario, modelado conceptual, lógico y normalización. Implementé la estructura completa en PostgreSQL, incluyendo creación de tablas, inserción de datos, vistas, funciones y consultas para responder 20 preguntas de negocio. Proyecto centrado en análisis, diseño y validación de una base de datos profesional.",
      image: rolandGarrosImage,
      tech: ["PostgreSQL", "SQL", "Modelado relacional", "Normalización"],
      github: "https://github.com/AlfonsoMSDL/RolandGarrosBD",
    }
  ],
  contact: {
    email: "alfonsomanuelsalazardeleon49@gmail.com",
    linkedin: "https://www.linkedin.com/in/alfonso-salazar-de-le%C3%B3n-6b52502a5/",
    github: "https://github.com/AlfonsoMSDL"
  }
};
