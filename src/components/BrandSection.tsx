//import React from 'react';

const brands = ['IA Mining', 'Startups', 'Flask Dev', 'React Dev'];

const BrandsSection = () => (
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
);

export default BrandsSection;
