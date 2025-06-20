import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/images/fondo.jpg')" }}>
      {/* Overlay con degradado para mejor legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
      
      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Logo/texto de la barbería con efecto vintage */}
        <div className="mb-8 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-2 text-amber-500 font-serif tracking-wider">LBK</h1>
          <p className="text-xl md:text-2xl text-white uppercase tracking-widest">La BARBERÍA DE KIKI</p>
          <p className="text-lg text-amber-400 mt-2">DESDE 2021</p>
        </div>
        
        {/* Eslogan con tipografía moderna */}
        <p className="text-xl md:text-3xl text-white max-w-2xl leading-relaxed font-light italic mb-12">
          "Donde el estilo clásico <span className="text-amber-400 font-medium">se encuentra</span> con la esencia moderna"
        </p>
      </div>
      
      {/* Elemento "Deslizar" animado */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce-slow">
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2 tracking-widest">DESLIZA</span>
          <svg className="w-6 h-6 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      
      {/* Elementos decorativos vectoriales */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Tijeras vectorizadas */}
        <svg className="absolute top-1/4 left-10 w-16 h-16 text-amber-500/20 rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M14.1213 14.1213L19 19M5 19L9.87868 14.1213M9.87868 14.1213L14.1213 9.87868M9.87868 14.1213L5 9M14.1213 9.87868L19 5" />
        </svg>
        
        {/* Peine vectorizado */}
        <svg className="absolute bottom-1/3 right-12 w-16 h-16 text-amber-500/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M7 15V3M11 15V3M15 15V3M19 15V3M3 15H19V19C19 20.1046 18.1046 21 17 21H5C3.89543 21 3 20.1046 3 19V15Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;