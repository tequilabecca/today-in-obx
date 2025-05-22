import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Music, Globe, Instagram, Facebook } from 'lucide-react';
import { Artist } from '../types';

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/artists/${artist.id}`}>
        <div className="relative h-56 overflow-hidden">
          <img
            src={artist.imageUrl}
            alt={artist.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
            <h3 className="text-white text-xl font-bold">{artist.name}</h3>
          </div>
        </div>
      </Link>
      <div className="p-4">
        <div className="mb-3 text-gray-600 line-clamp-2 text-sm">{artist.bio}</div>
        
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center">
            <Music size={16} className="text-blue-600" />
            <span className="ml-2 text-sm text-gray-700">Artist</span>
          </div>
          
          <div className="flex space-x-2">
            {artist.socialLinks?.instagram && (
              <a 
                href={artist.socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700"
                onClick={(e) => e.stopPropagation()}
              >
                <Instagram size={18} />
              </a>
            )}
            {artist.socialLinks?.facebook && (
              <a 
                href={artist.socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
                onClick={(e) => e.stopPropagation()}
              >
                <Facebook size={18} />
              </a>
            )}
            {artist.website && (
              <a 
                href={artist.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
                onClick={(e) => e.stopPropagation()}
              >
                <Globe size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ArtistCard;