import React from 'react';
import { Github, Linkedin, Mail, Heart, Code, SquareCode } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 dark:bg-gray-950 text-white py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-mono">{personal.name}</h3>
            <p className="text-gray-300 mb-4">
            Code with Courage. Build with Pride.
            </p>
            <p className="text-gray-400 text-sm">
              Based in {personal.location}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Skills', 'Education', 'Projects', 'Certificates', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${item === 'Experience' ? 'experience' : item.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href={`https://${personal.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={`https://${personal.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`https://${personal.gfg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-green-600 transition-colors duration-200"
              >
                <Code className="h-5 w-5" />
              </a>
              <a
                href={`https://${personal.leetcode}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-orange-600 transition-colors duration-200"
              >
                <SquareCode className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-red-600 transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              <a href={`mailto:${personal.email}`} className="hover:text-white transition-colors">
                {personal.email}
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-gray-400 text-sm">
              © {currentYear} {personal.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center mt-2 md:mt-0">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;