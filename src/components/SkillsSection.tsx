import React from 'react';
import useReveal from '../hooks/useReveal';
import { skills } from '../data/skills';

interface SkillCategoryProps {
  title: string;
  skills: {
    name: string;
    level: number;
    icon?: string;
  }[];
  delay: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, delay }) => {
  const categoryRef = useReveal('up');
  
  return (
    <div 
      ref={categoryRef as React.RefObject<HTMLDivElement>} 
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span className="text-secondary">{skill.level * 10}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.level * 10}%`, transitionDelay: `${index * 100 + 300}ms` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const titleRef = useReveal();
  
  return (
    <section id="skills" className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 ref={titleRef as React.RefObject<HTMLHeadingElement>} className="mb-4 text-primary">My Skills</h2>
          <p className="text-xl text-secondary mb-8">
            Technologies and tools I've worked with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory 
            title="Programming Languages" 
            skills={skills.languages} 
            delay={100}
          />
          <SkillCategory 
            title="Frontend Development" 
            skills={skills.frontend} 
            delay={200}
          />
          <SkillCategory 
            title="Backend Development" 
            skills={skills.backend} 
            delay={300}
          />
          <SkillCategory 
            title="Mobile Development" 
            skills={skills.mobile} 
            delay={400}
          />
          <SkillCategory 
            title="Tools & Technologies" 
            skills={skills.tools} 
            delay={500}
          />
          <SkillCategory 
            title="Other Skills" 
            skills={skills.other} 
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;