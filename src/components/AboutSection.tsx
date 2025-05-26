import React from 'react';
import { Code, Globe, Lightbulb, Rocket } from 'lucide-react';
import useReveal from '../hooks/useReveal';

const AboutSection: React.FC = () => {
  const titleRef = useReveal();
  const contentRef = useReveal('up');
  const imageRef = useReveal('right');
  const statsRef = useReveal('up');

  return (
    <section id="about" className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 ref={titleRef as React.RefObject<HTMLHeadingElement>} className="mb-4 text-primary">About Me</h2>
          <p className="text-xl text-secondary">Get to know me better</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={contentRef as React.RefObject<HTMLDivElement>}>
            <p className="mb-6 text-lg">
              Hello! I'm a passionate BTech student currently in my 3rd year of Computer Science Engineering. My journey in technology started with a fascination for how things work and evolved into a deep passion for creating innovative solutions.
            </p>
            
            <p className="mb-6 text-lg">
              I enjoy tackling complex problems and turning ideas into reality through code. My academic journey has equipped me with strong fundamentals in algorithms, data structures, and software skills.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Code className="text-primary" size={20} />
                <span>Clean Code</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="text-primary" size={20} />
                <span>Web Development</span>
              </div>
              <div className="flex items-center gap-3">
                <Lightbulb className="text-primary" size={20} />
                <span>Problem Solving</span>
              </div>
              <div className="flex items-center gap-3">
                <Rocket className="text-primary" size={20} />
                <span>Quick Learner</span>
              </div>
            </div>
          </div>

          <div ref={imageRef as React.RefObject<HTMLDivElement>} className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/5952647/pexels-photo-5952647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Student working on laptop" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary rounded-lg"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-accent rounded-lg"></div>
          </div>
        </div>

        <div 
          ref={statsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center mx-3"
        >
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md ">
            <div className="text-3xl font-bold text-primary mb-2">8.37/10.0</div>
       <span className='text-secondary'>CGPA</span>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-primary mb-2">2+</div>
            <span className="text-secondary">Projects</span>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;