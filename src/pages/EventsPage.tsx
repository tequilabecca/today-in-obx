import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import EventCard from '../components/EventCard';
import EventFilter from '../components/EventFilter';
import { events } from '../data/events';
import { FilterOptions, Event } from '../types';
import { parseISO } from 'date-fns';

const EventsPage: React.FC = () => {
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);
  const [allGenres, setAllGenres] = useState<string[]>([]);
  
  useEffect(() => {
    // Extract unique genres from all events
    const genres = new Set<string>();
    events.forEach(event => {
      event.genre.forEach(g => genres.add(g));
    });
    setAllGenres(Array.from(genres).sort());
  }, []);

  const handleFilterChange = (filters: FilterOptions) => {
    let filtered = [...events];
    
    if (filters.date) {
      filtered = filtered.filter(event => event.date === filters.date);
    }
    
    if (filters.venue) {
      filtered = filtered.filter(event => event.venue.id === filters.venue);
    }
    
    if (filters.genre) {
      filtered = filtered.filter(event => 
        event.genre.includes(filters.genre as string)
      );
    }
    
    setFilteredEvents(filtered);
  };
  
  // Sort events by date
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    return parseISO(a.date).getTime() - parseISO(b.date).getTime();
  });
  
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Live Music Events</h1>
      
      <EventFilter 
        onFilterChange={handleFilterChange}
        availableGenres={allGenres}
      />
      
      {sortedEvents.length > 0 ? (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {sortedEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl text-gray-600">No events found matching your filters.</h3>
          <p className="mt-2 text-gray-500">Try adjusting your filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default EventsPage;