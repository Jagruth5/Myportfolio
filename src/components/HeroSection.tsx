import React from 'react';
import { ArrowDown, Github as GitHub, Linkedin, Mail } from 'lucide-react';
import useReveal from '../hooks/useReveal';

const HeroSection: React.FC = () => {
  const titleRef = useReveal();
  const descriptionRef = useReveal('up');
  const buttonsRef = useReveal('up');
  const socialRef = useReveal('up');

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-8 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center text-center">
        <h1 ref={titleRef as React.RefObject<HTMLHeadingElement>} className="font-bold mb-6">
          <span className="block">Hi, I'm <span className="text-primary">Baddam Ram reddy</span></span>
          <span className="block text-2xl sm:text-3xl md:text-4xl mt-2">BTech Student & Aspiring Software Engineer</span>
        </h1>

        <p 
          ref={descriptionRef as React.RefObject<HTMLParagraphElement>} 
          className="max-w-2xl text-lg md:text-xl mb-8 text-secondary"
        >
          I'm a 3rd year Computer Science And Data Science student passionate about building innovative solutions and exploring new technologies. Currently focused on web development and Backend Development.
        </p>

        <div 
          ref={buttonsRef as React.RefObject<HTMLDivElement>}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <a 
            href="#projects" 
            className="btn-primary"
          >
            View My Projects
          </a>
          <a 
            href="#contact" 
            className="btn-secondary"
          >
            Contact Me
          </a>
        </div>

        <div 
          ref={socialRef as React.RefObject<HTMLDivElement>}
          className="flex gap-6 mb-16"
        >
          
          <a 
            href="https://www.linkedin.com/in/baddam-ramreddy-766245259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank" 
            rel="noreferrer"
            className="text-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:ramlaxman4618@gmail.com"
            className="text-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        <a 
          href="#about" 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="text-primary" size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;