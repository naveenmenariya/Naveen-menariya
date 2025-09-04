import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../data/mock';
import { Code, Palette, Brain, Database, Wrench, Lightbulb, MessageSquare, Globe } from 'lucide-react';

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: skills.programming,
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Web Development",
      icon: Palette,
      skills: skills.webDevelopment,
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Machine Learning & Data Science",
      icon: Brain,
      skills: skills.machineLearning,
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: [...skills.databases, ...skills.tools],
      color: "bg-orange-100 text-orange-800"
    },
    {
      title: "Core CS Concepts",
      icon: Lightbulb,
      skills: skills.concepts,
      color: "bg-red-100 text-red-800"
    },
    {
      title: "Soft Skills",
      icon: MessageSquare,
      skills: skills.softSkills,
      color: "bg-indigo-100 text-indigo-800"
    },
    {
      title: "Languages",
      icon: Globe,
      skills: skills.languages,
      color: "bg-gray-100 text-gray-800"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-mono transition-colors">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            A comprehensive toolkit of technical and soft skills developed through academic learning 
            and practical project experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all duration-300 bg-white dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
                      <Icon className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                    </div>
                    <span className="text-gray-900 dark:text-white transition-colors">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        className={`${category.color} hover:opacity-80 transition-opacity duration-200`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;