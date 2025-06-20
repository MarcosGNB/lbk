import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400 rounded-full filter blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-500 rounded-full filter blur-xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-amber-400 mb-4 font-serif tracking-tight">
            Sobre <span className="text-white">Kiki LBK</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-amber-200 max-w-2xl mx-auto">
            Más de 5 años creando estilos únicos en Caacupé
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-gray-700 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                En <span className="text-amber-400 font-medium">Kiki LBK Barbería</span>, nos dedicamos a ofrecer una experiencia de barbería premium, combinando técnicas clásicas con las últimas tendencias en cortes y estilos para hombres.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Con más de <span className="text-amber-400 font-medium">5 años de experiencia</span> en el rubro, hemos perfeccionado nuestro arte y desarrollado nuevos estilos que se adaptan a cada personalidad.
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Nuestro objetivo es que cada cliente salga sintiéndose renovado, con un look impecable y la confianza que solo un buen corte puede dar.
              </p>
              <div className="bg-gray-900/80 p-6 rounded-xl border-l-4 border-amber-500">
                <p className="text-gray-300 mb-3">
                  📍 Estamos ubicados en <span className="text-white font-medium">Caacupé, Paraguay</span>
                </p>
                <a 
                  href="tel:+595994116266" 
                  className="inline-flex items-center px-5 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full transition-all font-medium"
                >
                  📞 Llamar al 099 411 6266
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Experiencia destacada */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-4xl font-bold text-amber-400 mb-2">5+</div>
            <div className="text-gray-300">Años de Experiencia</div>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-4xl font-bold text-amber-400 mb-2">1000+</div>
            <div className="text-gray-300">Clientes Satisfechos</div>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-4xl font-bold text-amber-400 mb-2">50+</div>
            <div className="text-gray-300">Estilos Dominados</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;