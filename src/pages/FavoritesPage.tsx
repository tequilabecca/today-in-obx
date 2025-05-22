import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, Music, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/date';
import { events } from '../data/events';
import { Event } from '../types';
import EventCard from '../components/EventCard';

const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<Event[]>([]);
  const [hasFavorites, setHasFavorites] = useState(false);
  
  // In a real app, we would fetch favorites from local storage or a backend
  // For demo purposes, we'll just show some random events as favorites
  useEffect(() => {
    // Simulate loading favorites
    const demoFavorites = events.filter((_, index) => index % 2 === 0);
    setFavorites(demoFavorites);
    setHasFavorites(demoFavorites.length > 0);
  }, []);
  
  const removeFavorite = (eventId: string) => {
    setFavorites(favorites.filter(event => event.id !== eventId));
    if (favorites.length <= 1) {
      setHasFavorites(false);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="flex items-center mb-6">
        <Heart className="text-red-500 mr-3" size={24} />
        <h1 className="text-3xl font-bold text-gray-800">Your Favorite Events</h1>
      </div>
      
      {hasFavorites ? (
        <div>
          <p className="text-gray-600 mb-8">
            Here are the events you've saved. You'll receive notifications before these events begin.
          </p>
          
          <motion.div 
            className="grid grid-cols-1 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {favorites.map(event => (
              <motion.div 
                key={event.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 h-48 md:h-auto">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/4 p-4 md:p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h2 className="text-xl font-bold text-gray-800 mb-1">{event.title}</h2>
                        <button 
                          onClick={() => removeFavorite(event.id)}
                          className="text-red-500 hover:text-red-700"
                          aria-label="Remove from favorites"
                        >
                          <Heart fill="currentColor" size={20} />
                        </button>
                      </div>
                      <p className="text-gray-600 mb-2">{event.artist.name}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        <div className="flex items-center text-gray-600 text-sm">
                          <Calendar size={14} className="mr-1" />
                          <span>{formatDate(event.date)} • {event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <MapPin size={14} className="mr-1" />
                          <span>{event.venue.name}</span>
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <Music size={14} className="mr-1" />
                          <span>{event.genre.join(', ')}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4 line-clamp-2">{event.description}</p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      {event.ticketPrice && (
                        <span className="text-green-700 font-medium">{event.ticketPrice}</span>
                      )}
                      <div className="flex space-x-3">
                        <Link
                          to={`/events/${event.id}`}
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          View Details
                        </Link>
                        {event.ticketUrl && (
                          <a 
                            href={event.ticketUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 transition-colors"
                          >
                            Get Tickets
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <Heart className="mx-auto text-gray-300 mb-4" size={64} />
          <h3 className="text-xl text-gray-600 mb-2">No favorites yet</h3>
          <p className="text-gray-500 mb-6">You haven't saved any events to your favorites list.</p>
          <Link 
            to="/events" 
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            Browse Events
          </Link>
        </div>
      )}
      
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended For You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.slice(0, 3).map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;