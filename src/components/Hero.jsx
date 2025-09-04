import React, { useState, useRef, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, MapPin, Code, SquareCode } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../data/mock';

const Hero = () => {
  const { personal } = portfolioData;
  const profileImageUrl = "/PFP.png";
  const alternateImageUrl = "/nav.png";
  const [currentImage, setCurrentImage] = useState(profileImageUrl);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const imageRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  
  // Function to handle image transition with animation
  const transitionToImage = (newImage) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImage(newImage);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 100);
  };
  
  // Function to handle mouse enter (hover)
  const handleMouseEnter = () => {
    setIsHovering(true);
    transitionToImage(alternateImageUrl);
  };
  
  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setIsHovering(false);
    transitionToImage(profileImageUrl);
  };
  
  // Function to handle touch start
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  
  // Function to handle touch end
  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };
  
  // Function to handle swipe
  const handleSwipe = () => {
    const swipeDistance = touchEndX.current - touchStartX.current;
    
    // If swipe distance is significant enough (more than 50px)
    if (Math.abs(swipeDistance) > 50) {
      if (currentImage === profileImageUrl) {
        setIsHovering(true);
        transitionToImage(alternateImageUrl);
      } else {
        setIsHovering(false);
        transitionToImage(profileImageUrl);
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div 
              className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-gray-200 dark:ring-gray-700 transition-colors"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              ref={imageRef}
            >
              <img 
                src={currentImage}
                alt="Naveen Menariya"
                className="w-full h-full object-cover transition-colors duration-200"
                style={{
                  opacity: isTransitioning ? '0' : '1',
                  filter: 'none',
                  transition: 'all 0.2s ease-in-out',
                  transform: isHovering ? 'scale(1.05)' : 'scale(1)'
                }}
                onError={(e) => {
                  // Fallback to initials if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div 
                className="w-full h-full bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-600 dark:to-gray-400 hidden items-center justify-center text-white text-4xl font-bold"
              >
                NM
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 font-mono transition-colors">
              {personal.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 transition-colors">
              {personal.title}
            </h2>
            <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 mb-6 transition-colors">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{personal.location}</span>
            </div>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-5xl mx-auto mb-8 leading-relaxed transition-colors">
            {personal.objective}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button 
              className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 dark:text-gray-900 text-white px-6 py-2 transition-colors"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Mail className="h-4 w-4 mr-2" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-white px-6 py-2 transition-colors"
              onClick={() => {
                // This would trigger resume download in a real implementation
                window.open('\NAVEEN MENARIYA.pdf', '_blank');
              }}
            >
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <a
              href={`https://${personal.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={`https://${personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors duration-200"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`https://${personal.gfg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-white hover:bg-green-600 dark:hover:bg-green-600 transition-colors duration-200"
            >
              <Code className="h-5 w-5" />
            </a>
            <a
              href={`https://${personal.leetcode}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-white hover:bg-orange-600 dark:hover:bg-orange-600 transition-colors duration-200"
            >
              <SquareCode className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-white hover:bg-red-600 dark:hover:bg-red-600 transition-colors duration-200"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;