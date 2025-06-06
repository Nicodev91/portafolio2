//import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => (
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
              Full Stack
            </span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          Soy Nicolás Espinosa, técnico en informático y apasionado por la tecnología, con más de 2 años de experiencia en el desarrollo de aplicaciones de escritorio y web modernas utilizando Python, Flask, Django, React y TypeScript. Me especializo en crear soluciones digitales funcionales, escalables y con un diseño centrado en el usuario.
          </p>

          <a href="/cv-nicolas-espinosa.pdf" download className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <span className="text-white">Descargar CV</span>
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="relative w-full max-w-sm mx-auto lg:mx-0">
          <div className="rounded-full overflow-hidden shadow-xl border-4 border-white">
            <img src="/images/profiledev.jpeg" alt="Foto de Nicolás Espinosa" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
