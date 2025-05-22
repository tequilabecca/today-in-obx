import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Music } from 'lucide-react';
import { motion } from 'framer-motion';
import { Event } from '../types';
import { formatShortDate } from '../utils/date';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/events/${event.id}`}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full p-4">
            <h3 className="text-white text-xl font-bold">{event.title}</h3>
            <p className="text-white text-sm">{event.artist.name}</p>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center text-gray-600 mb-2">
            <Calendar size={16} className="mr-2" />
            <span>{formatShortDate(event.date)} • {event.time}</span>
          </div>
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin size={16} className="mr-2" />
            <span>{event.venue.name}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Music size={16} className="mr-2" />
            <div className="flex flex-wrap gap-1">
              {event.genre.map((genre, index) => (
                <span 
                  key={index} 
                  className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default EventCard;