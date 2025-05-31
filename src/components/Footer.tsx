//import React from 'react';

const Footer = () => (
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
);

export default Footer;
