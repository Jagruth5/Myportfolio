import React, { useState } from 'react';
import { ExternalLink, Github as GitHub, ChevronRight } from 'lucide-react';
import useReveal from '../hooks/useReveal';
import { projects } from '../data/projects';

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const titleRef = useReveal();
  const filterRef = useReveal('up');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 ref={titleRef as React.RefObject<HTMLHeadingElement>} className="mb-4 text-primary">My Projects</h2>
          <p className="text-xl text-secondary mb-8">
            Explore the projects I've worked on during my academic journey
          </p>

          <div ref={filterRef as React.RefObject<HTMLDivElement>} className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                filter === 'all' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                filter === 'web' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Web Development
            </button>
            <button
              onClick={() => setFilter('mobile')}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                filter === 'mobile' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Mobile Apps
            </button>
            <button
              onClick={() => setFilter('ml')}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                filter === 'ml' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Machine Learning
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            View more on GitHub <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    github?: string;
    demo?: string;
    category: string;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useReveal('up');
  
  return (
    <div 
      ref={cardRef as React.RefObject<HTMLDivElement>}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {project.github && (
            <a 
              href={project.github}
              target="_blank" 
              rel="noreferrer"
              className="bg-white p-2 rounded-full text-gray-900 hover:bg-primary hover:text-white transition-colors"
              aria-label="GitHub repository"
            >
              <GitHub size={18} />
            </a>
          )}
          
          {project.demo && (
            <a 
              href={project.demo}
              target="_blank" 
              rel="noreferrer"
              className="bg-white p-2 rounded-full text-gray-900 hover:bg-primary hover:text-white transition-colors"
              aria-label="Live demo"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-secondary mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;