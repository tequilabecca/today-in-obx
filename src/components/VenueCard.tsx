import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Globe, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Venue } from '../types';

interface VenueCardProps {
  venue: Venue;
}

const VenueCard: React.FC<VenueCardProps> = ({ venue }) => {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/venues/${venue.id}`}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={venue.imageUrl}
            alt={venue.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
            <h3 className="text-white text-xl font-bold">{venue.name}</h3>
            <p className="text-white/80 text-sm">{venue.city}</p>
          </div>
        </div>
      </Link>
      <div className="p-4">
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin size={16} className="mr-2 flex-shrink-0" />
          <span className="truncate">{venue.address}</span>
        </div>
        
        {venue.website && (
          <div className="flex items-center text-gray-600 mb-2">
            <Globe size={16} className="mr-2 flex-shrink-0" />
            <a 
              href={venue.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 truncate"
              onClick={(e) => e.stopPropagation()}
            >
              {venue.website.replace(/^https?:\/\//, '')}
            </a>
          </div>
        )}
        
        {venue.phone && (
          <div className="flex items-center text-gray-600">
            <Phone size={16} className="mr-2 flex-shrink-0" />
            <span>{venue.phone}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default VenueCard;