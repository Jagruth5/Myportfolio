import React from 'react';
import { Github as GitHub, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#" className="font-bold text-2xl text-white">
              Dev<span className="text-primary">Portfolio</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              A passionate BTech student and aspiring software engineer focused on creating impactful digital experiences.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="bg-primary/20 hover:bg-primary/30 p-3 rounded-full transition-colors mb-4"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} className="text-primary" />
            </button>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <GitHub size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:johndoe@example.com"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          
          <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <a href="#home" className="text-sm text-gray-400 hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-sm text-gray-400 hover:text-primary transition-colors">About</a>
            <a href="#projects" className="text-sm text-gray-400 hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="text-sm text-gray-400 hover:text-primary transition-colors">Skills</a>
            <a href="#education" className="text-sm text-gray-400 hover:text-primary transition-colors">Education</a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;