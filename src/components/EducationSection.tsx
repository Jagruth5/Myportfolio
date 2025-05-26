import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import useReveal from '../hooks/useReveal';
import { education } from '../data/education';

const EducationSection: React.FC = () => {
  const titleRef = useReveal();
  const timelineRef = useReveal('up');

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 ref={titleRef as React.RefObject<HTMLHeadingElement>} className="mb-4 text-primary">Education</h2>
          <p className="text-xl text-secondary mb-8">
            My academic journey and achievements
          </p>
        </div>

        <div 
          ref={timelineRef as React.RefObject<HTMLDivElement>}
          className="max-w-3xl mx-auto relative"
        >
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform md:translate-x-[-0.5px]"></div>

          {education.map((item, index) => (
            <div 
              key={index}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Circle on timeline */}
              <div className={`absolute top-0 ${
                index % 2 === 0 
                  ? 'left-0 md:-left-3.5' 
                  : 'left-0 md:-left-3.5'
              } w-7 h-7 rounded-full bg-primary transform md:translate-x(${index % 2 === 0 ? '0' : '0'})`}>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md ml-8 md:ml-0 relative">
                {/* Date & Location */}
                <div className="flex flex-wrap justify-between mb-3 text-sm text-secondary">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{item.location}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
                <p className="text-secondary mb-3">{item.institution}</p>
                <p className="mb-4">{item.description}</p>

                {item.achievements && item.achievements.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-2">Achievements:</h4>
                    <ul className="list-disc list-inside text-secondary space-y-1">
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;