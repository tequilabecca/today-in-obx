import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Music, Heart, Ticket, Share2, ExternalLink } from 'lucide-react';
import { events } from '../data/events';
import { Event } from '../types';
import { formatDate } from '../utils/date';

const EventDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  
  useEffect(() => {
    // In a real app, we would fetch the specific event from an API
    if (id) {
      const foundEvent = events.find(e => e.id === id);
      setEvent(foundEvent || null);
      setLoading(false);
      
      // Simulate checking if it's a favorite
      setIsFavorite(Math.random() > 0.5);
    }
  }, [id]);
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // In a real app, we would update this in the user's profile/localStorage
  };
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-24 flex justify-center items-center">
        <div className="animate-pulse">Loading event details...</div>
      </div>
    );
  }
  
  if (!event) {
    return (
      <div className="container mx-auto px-4 py-24">
        <div className="bg-red-50 text-red-700 rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold mb-2">Event Not Found</h2>
          <p className="mb-4">The event you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/events" 
            className="bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700 transition-colors inline-block"
          >
            Browse All Events
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${event.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-end container mx-auto px-4 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              {event.title}
            </h1>
            <p className="text-xl text-white/90 mb-4">{event.artist.name}</p>
            
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/80 mb-6">
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                <span>{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>{event.venue.name}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {event.genre.map((genre, index) => (
                <span 
                  key={index} 
                  className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm"
                >
                  {genre}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:gap-8">
          {/* Main Content */}
          <div className="md:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Event Details</h2>
                <div className="flex space-x-3">
                  <button 
                    onClick={toggleFavorite}
                    className={`flex items-center ${
                      isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                    } transition-colors`}
                    aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                  >
                    <Heart fill={isFavorite ? 'currentColor' : 'none'} size={20} className="mr-1" />
                    <span className="text-sm">{isFavorite ? 'Saved' : 'Save'}</span>
                  </button>
                  <button 
                    className="flex items-center text-gray-400 hover:text-blue-500 transition-colors"
                    aria-label="Share event"
                  >
                    <Share2 size={20} className="mr-1" />
                    <span className="text-sm">Share</span>
                  </button>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">{event.description}</p>
              
              {event.ticketPrice && (
                <div className="flex items-center mb-4">
                  <Ticket size={20} className="mr-2 text-green-600" />
                  <span className="text-lg font-semibold text-green-700">{event.ticketPrice}</span>
                </div>
              )}
              
              {event.ticketUrl && (
                <a 
                  href={event.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
                >
                  <Ticket size={18} className="mr-2" />
                  Get Tickets
                </a>
              )}
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About the Artist</h2>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <img 
                  src={event.artist.imageUrl} 
                  alt={event.artist.name} 
                  className="w-full md:w-40 h-40 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{event.artist.name}</h3>
                  <p className="text-gray-700 mb-4">{event.artist.bio}</p>
                  <div className="flex flex-wrap gap-3">
                    {event.artist.website && (
                      <a 
                        href={event.artist.website} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Artist Website
                      </a>
                    )}
                    {event.artist.socialLinks?.spotify && (
                      <a 
                        href={event.artist.socialLinks.spotify} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-600 hover:text-green-800"
                      >
                        <Music size={16} className="mr-1" />
                        Spotify
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Venue Information</h2>
              <div className="mb-4">
                <img 
                  src={event.venue.imageUrl} 
                  alt={event.venue.name} 
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="font-bold text-gray-800 mb-1">{event.venue.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{event.venue.address}, {event.venue.city}</p>
                <p className="text-gray-700 text-sm mb-4">{event.venue.description}</p>
                
                <Link 
                  to={`/venues/${event.venue.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  <MapPin size={16} className="mr-1" />
                  View Venue Details
                </Link>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">More Events at This Venue</h2>
              {events
                .filter(e => e.venue.id === event.venue.id && e.id !== event.id)
                .slice(0, 3)
                .map(relatedEvent => (
                  <Link 
                    key={relatedEvent.id}
                    to={`/events/${relatedEvent.id}`}
                    className="block bg-white rounded-lg p-3 mb-3 hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-bold text-gray-800">{relatedEvent.title}</h3>
                    <p className="text-gray-600 text-sm">{relatedEvent.artist.name}</p>
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      <Calendar size={14} className="mr-1" />
                      <span>{formatDate(relatedEvent.date)}</span>
                    </div>
                  </Link>
                ))}
              
              <Link 
                to={`/venues/${event.venue.id}`}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                View all events at {event.venue.name}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;