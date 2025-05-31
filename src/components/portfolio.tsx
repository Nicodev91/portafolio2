import React, { useState } from 'react';
import {
  BarChart3,
  Users,
  TrendingUp,
  Eye,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
  ChevronDown,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  const services = [
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-600" />,
      title: "Desarrollo Backend",
      description:
        "APIs REST con Flask y Django, integración con bases de datos SQL y NoSQL, y despliegue con Docker.",
      image: "/images/backend.jpg"
    },
    {
      icon: <Eye className="w-12 h-12 text-purple-600" />,
      title: "Frontend Moderno",
      description:
        "Diseño y desarrollo web responsivo con React, Vite, TailwindCSS y TypeScript.",
      image: "/images/frontend.jpg"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-600" />,
      title: "Proyectos de IA",
      description:
        "Exploración de modelos de IA con Hugging Face y análisis de sentimientos o reconocimiento facial.",
      image: "/images/ia.jpg"
    }
  ];

  const brands = ['IA Mining', 'PythonAnywhere', 'Flask Dev', 'React Dev'];

  const stats = [
    { label: 'PROYECTOS', value: '6+' },
    { label: 'CERTIFICACIONES', value: '4' },
    { label: 'LENGUAJES', value: 'Python, TS' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold text-gray-900">NicoDev</span>
            </div>

            <nav className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                    index === 0 ? 'text-purple-600' : 'text-gray-700'
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/56948853814"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block bg-green-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              WhatsApp
            </a>
              <button
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-purple-100">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    {item}
                  </a>
                ))}
                <a href="mailto:nicolas.sebastiano3@gmail.com" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full font-medium w-fit">
                  Contáctame
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span>Bienvenido a mi Portafolio</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Desarrollador{' '}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Full Stack Jr.
                </span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Soy Nicolás Espinosa, técnico en informática (en formación) con experiencia en desarrollo de aplicaciones web utilizando Python, Flask, Django, React, y tecnologías modernas. Apasionado por crear soluciones útiles y escalar proyectos en la nube.
              </p>

              <a href="/cv-nicolas-espinosa.pdf" download className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <span className="text-white">Descargar CV</span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </a>

            </div>

            <div className="relative">
              {/* Aquí podrías añadir una imagen o gráfico tuyo */}
              <div className="w-full max-w-sm mx-auto lg:mx-0">
              <div className="rounded-full overflow-hidden shadow-xl border-4 border-white">

            <img
              src="/images/profiledev.jpeg"
              alt="Foto de Nicolás Espinosa"
              className="w-full h-auto object-cover"
            />
        </div>
      </div>

            </div>
          </div>
        </div>
      </section>

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

      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-600">Proyectos y colaboraciones</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {brands.map((brand, index) => (
              <div key={index} className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold">NicoDev</span>
            </div>
            <div className="flex space-x-6">
              <a href="https://linkedin.com/in/NicoDev91" className="text-gray-400 hover:text-white transition-colors" target="_blank">LinkedIn</a>
              <a href="mailto:nicolas.sebastiano3@gmail.com" className="text-gray-400 hover:text-white transition-colors">Email</a>
              <a href="https://nico91dev.pythonanywhere.com/" className="text-gray-400 hover:text-white transition-colors" target="_blank">Portafolio</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Nicolás Espinosa. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
