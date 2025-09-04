import React from 'react';
import { Card, CardContent } from './ui/card';
import { Building2, MapPin, Calendar, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/mock';

const WorkExperience = () => {
  const { workExperience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-mono transition-colors">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            My professional journey and work experiences that have enhanced my skills and expertise.
          </p>
        </div>

        <div className="space-y-6">
          {workExperience.map((exp, index) => (
            <Card key={exp.id} className="border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all duration-300 bg-white dark:bg-gray-900">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start space-x-4 mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                      <Building2 className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 transition-colors">{exp.position}</h3>
                      <p className="text-lg text-gray-700 dark:text-gray-300 font-medium mb-2 transition-colors">{exp.company}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-md text-xs font-medium transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience; 