import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="font-bold text-xl md:text-2xl text-primary">
            Dev<span className="text-accent">Portfolio</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              </li>
              <li>
                <a href="#education" className="hover:text-primary transition-colors">Education</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleTheme} 
              className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button onClick={toggleMenu} className="p-2 rounded-lg" aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background shadow-lg rounded-lg mt-4 p-4 absolute left-4 right-4 transition-all transform origin-top">
            <ul className="flex flex-col space-y-4">
              <li>
                <a href="#home" className="block py-2 hover:text-primary transition-colors" onClick={toggleMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="block py-2 hover:text-primary transition-colors" onClick={toggleMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="block py-2 hover:text-primary transition-colors" onClick={toggleMenu}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="block py-2 hover:text-primary transition-colors" onClick={toggleMenu}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#education" className="block py-2 hover:text-primary transition-colors" onClick={toggleMenu}>
                  Education
                </a>
              </li>
              <li>
                <a href="#contact" className="block py-2 hover:text-primary transition-colors" onClick={toggleMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;