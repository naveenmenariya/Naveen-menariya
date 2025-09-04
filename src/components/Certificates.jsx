import React from 'react';
import { Card, CardContent } from './ui/card';
import { Award, Calendar } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Certificates = () => {
  const { certificates } = portfolioData;

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-mono transition-colors">
            Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            Professional certifications and courses that enhance my technical expertise 
            and demonstrate continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Card key={cert.id} className="border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all duration-300 bg-white dark:bg-gray-900">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                    <Award className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors">{cert.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3 transition-colors">{cert.issuer}</p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{cert.year}</span>
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

export default Certificates;