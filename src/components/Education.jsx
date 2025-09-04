import React from 'react';
import { Card, CardContent } from './ui/card';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-mono transition-colors">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            My academic journey and educational achievements that have shaped my technical foundation.
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={edu.id} className="border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all duration-300 bg-white dark:bg-gray-900">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start space-x-4 mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                      <GraduationCap className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 transition-colors">{edu.degree}</h3>
                      <p className="text-lg text-gray-700 dark:text-gray-300 font-medium mb-2 transition-colors">{edu.institution}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium transition-colors">
                      {edu.score}
                    </span>
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

export default Education;