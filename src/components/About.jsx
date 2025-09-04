import React from 'react';
import { Card, CardContent } from './ui/card';
import { Code, Database, Brain, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Proficient in modern web technologies including React.js, JavaScript, and responsive design"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Experience in building ML models, data preprocessing, and predictive analytics"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Strong foundation in databases, SQL, and data structures & algorithms"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Excellent communication skills and experience working in agile methodologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-mono transition-colors">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            A passionate computer science student dedicated to creating innovative solutions 
            and contributing to meaningful projects in the tech industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all duration-300 bg-white dark:bg-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                    <Icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 transition-colors">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-mono transition-colors">My Journey</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
            Currently pursuing my BTech in Computer Science and Engineering at Amrita Vishwa Vidyapeetham 
            with a CGPA of 8.38/10. I have developed a strong foundation in programming, web development, 
            and machine learning through both academic coursework and hands-on projects.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4 transition-colors">
            My passion lies in building scalable, user-focused solutions that make a real impact. 
            I enjoy exploring new technologies and applying them to solve complex problems, whether 
            it's developing responsive websites or creating machine learning models for predictive analytics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;