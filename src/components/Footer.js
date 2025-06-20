import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-lg mb-4">© 2024 Kiki LBK Barbería. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-gray-400 transition-colors duration-300">
            Facebook
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors duration-300">
            Instagram
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors duration-300">
            TikTok
          </a>
        </div>
        <p className="text-sm mt-4 text-gray-500">Diseñado con pasión por MGNBSoftware (https://mgnbsoftware.netlify.app/).</p>
      </div>
    </footer>
  );
};

export default Footer;