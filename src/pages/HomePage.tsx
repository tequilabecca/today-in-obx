import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Hero from '../components/Hero';
import EventCard from '../components/EventCard';
import VenueCard from '../components/VenueCard';
import ArtistCard from '../components/ArtistCard';
import { events } from '../data/events';
import { venues } from '../data/venues';
import { artists } from '../data/artists';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [featuredEvents, setFeaturedEvents] = useState(events.slice(0, 3));
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div>
      <Hero />
      
      <div className="container mx-auto px-4 py-12">
        {/* Featured Events */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Featured Events</h2>
            <Link 
              to="/events" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View All Events
            </Link>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {featuredEvents.map(event => (
              <motion.div key={event.id} variants={itemVariants}>
                <EventCard event={event} />
              </motion.div>
            ))}
          </motion.div>
        </section>
        
        {/* Venues Section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Popular Venues</h2>
            <Link 
              to="/venues" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View All Venues
            </Link>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
          >
            {venues.slice(0, 4).map(venue => (
              <motion.div key={venue.id} variants={itemVariants}>
                <VenueCard venue={venue} />
              </motion.div>
            ))}
          </motion.div>
        </section>
        
        {/* Artists Section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Featured Artists</h2>
            <Link 
              to="/artists" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View All Artists
            </Link>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
          >
            {artists.slice(0, 3).map(artist => (
              <motion.div key={artist.id} variants={itemVariants}>
                <ArtistCard artist={artist} />
              </motion.div>
            ))}
          </motion.div>
        </section>
        
        {/* Map Preview */}
        <section>
          <div className="bg-blue-50 rounded-lg overflow-hidden shadow-md p-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8 max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Discover Music Venues</h2>
                <p className="text-gray-600 mb-6">
                  Explore the best live music venues across the Outer Banks from Corolla to Ocracoke Island. Find everything from intimate acoustic settings to large outdoor venues.
                </p>
                <Link 
                  to="/venues"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
                >
                  <MapPin size={18} className="mr-2" />
                  Explore Venue Map
                </Link>
              </div>
              
              <div className="bg-white p-1 rounded-lg shadow-md w-full md:w-auto overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/97906/pexels-photo-97906.jpeg" 
                  alt="Map of OBX venues" 
                  className="w-full md:w-80 h-48 object-cover rounded"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;