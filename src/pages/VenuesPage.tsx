import React from 'react';
import { motion } from 'framer-motion';
import VenueCard from '../components/VenueCard';
import { venues } from '../data/venues';

const VenuesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Music Venues</h1>
      <p className="text-gray-600 mb-8">Discover the best places to enjoy live music in the Outer Banks</p>
      
      <div className="bg-blue-50 rounded-lg p-6 mb-10">
        <p className="text-blue-800">
          The Outer Banks offers diverse venues for live music, from casual beachfront bars to dedicated music halls. 
          Many restaurants and breweries feature local and touring artists throughout the week, especially during summer months.
        </p>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {venues.map(venue => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </motion.div>
      
      <div className="mt-16 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Venue Map</h2>
          <p className="text-gray-600 mb-4">
            Explore live music venues across the Outer Banks area, from Corolla to Ocracoke Island.
          </p>
        </div>
        
        <div className="h-96 bg-blue-100 w-full">
          <div className="h-full flex items-center justify-center bg-gray-200">
            <p className="text-gray-500 text-center p-4">
              Interactive map would be displayed here.
              <br />
              <span className="text-sm">In a real application, this would be an interactive Google Maps or Mapbox integration showing venue locations.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenuesPage;