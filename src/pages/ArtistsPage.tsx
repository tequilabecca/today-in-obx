import React from 'react';
import { motion } from 'framer-motion';
import ArtistCard from '../components/ArtistCard';
import { artists } from '../data/artists';

const ArtistsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Live Music Artists</h1>
      <p className="text-gray-600 mb-8">Discover the talented musicians performing in the Outer Banks</p>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {artists.map(artist => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </motion.div>
      
      <div className="mt-16 bg-blue-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Are you a local artist?</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-700 md:max-w-xl mb-4 md:mb-0">
            If you perform at venues in the Outer Banks and would like to be featured on our site, 
            please get in touch. We'd love to include you in our comprehensive guide to local music.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtistsPage;