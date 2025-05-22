import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[500px] md:h-[600px] bg-gradient-to-r from-blue-900 to-purple-900 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg)' }}
      />
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Discover Live Music in the Outer Banks
        </motion.h1>
        
        <motion.p 
          className="text-xl text-white max-w-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Find the best local performances, concerts, and live shows along the beautiful coast of North Carolina
        </motion.p>
        
        <motion.div 
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search for events, artists, or venues..."
              className="w-full py-3 px-12 rounded-full border-none shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          </div>
        </motion.div>
      </div>
      
      {/* Wave SVG at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#ffffff">
          <path d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,42.7C840,32,960,32,1080,37.3C1200,43,1320,53,1380,58.7L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;