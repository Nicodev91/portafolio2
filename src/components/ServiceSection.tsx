//import React from 'react';
import { BarChart3, Eye, TrendingUp, Users, MessageCircle, Monitor } from 'lucide-react';

const services = [
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-600" />,
      title: "Desarrollo Backend",
      description:
        "Diseño de APIs REST con Flask y Django, e integración de servicios externos como Gemini para inteligencia artificial y automatización de tareas.",
      image: "/images/backend.jpg"
    },
    {
      icon: <Eye className="w-12 h-12 text-purple-600" />,
      title: "Frontend Moderno",
      description:
        "Diseño responsivo e interfaces atractivas usando React, Vite, TailwindCSS y TypeScript. Experiencia enfocada en usabilidad y rendimiento.",
      image: "/images/frontend.jpg"
    },
    {
        icon: <Users className="w-12 h-12 text-purple-600" />,
        title: "Bases de Datos",
        description:
          "Diseño, modelado y administración de bases de datos relacionales con SQL. Experiencia con MySQL, PostgreSQL y SQLite para backend robustos y optimizados.",
        image: "/images/database.jpg"
    },
    {
        icon: <MessageCircle className="w-12 h-12 text-purple-600" />,
        title: "DevOps y Cloud",
        description:
          "Contenedorización con Docker, despliegue de servicios en la nube con AWS y automatización de entornos de desarrollo.",
        image: "/images/devops.jpg"
      },

    {
        icon: <Monitor className="w-12 h-12 text-purple-600" />,
        title: "Aplicaciones de Escritorio",
        description:
          "Desarrollo de interfaces gráficas y herramientas funcionales utilizando Python y Tkinter, enfocadas en la productividad, la gestión de datos y la automatización de tareas.",
        image: "/images/desktop.jpg"
    },
      
    {
        icon: <TrendingUp className="w-12 h-12 text-purple-600" />,
        title: "Proyectos de IA",
        description:
            "Exploración y desarrollo de soluciones con modelos de IA usando Hugging Face, reconocimiento facial y análisis de sentimientos aplicados a casos reales.",
         image: "/images/ia.jpg"
    }
  ];
  

const ServicesSection = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
          <span>Servicios</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          ¿Qué puedo{' '}
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            ofrecerte?
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Desarrollos personalizados, eficientes y escalables con tecnologías modernas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-purple-100 rounded-2xl p-6 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg h-32 flex items-center justify-center">
              <div className="text-purple-600 font-semibold">Vista previa</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
