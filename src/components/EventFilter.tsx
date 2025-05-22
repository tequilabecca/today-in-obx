import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Music, Filter } from 'lucide-react';
import { FilterOptions } from '../types';
import { venues } from '../data/venues';

interface EventFilterProps {
  onFilterChange: (filters: FilterOptions) => void;
  availableGenres: string[];
}

const EventFilter: React.FC<EventFilterProps> = ({ onFilterChange, availableGenres }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({});

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    const newFilters = { ...filters, [key]: value };
    if (value === '') {
      delete newFilters[key];
    }
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    setFilters({});
    onFilterChange({});
  };

  const toggleFilterMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Upcoming Events</h2>
        <button
          onClick={toggleFilterMenu}
          className="flex items-center text-blue-600 hover:text-blue-700"
        >
          <Filter size={20} className="mr-2" />
          <span>Filter</span>
        </button>
      </div>

      {isOpen && (
        <motion.div
          className="bg-white rounded-lg shadow-md p-4 mb-6"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="flex items-center text-gray-700 mb-2">
                <Calendar size={16} className="mr-2" />
                <label htmlFor="dateFilter" className="font-medium">Date</label>
              </div>
              <input
                id="dateFilter"
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={filters.date || ''}
                onChange={(e) => handleFilterChange('date', e.target.value)}
              />
            </div>

            <div>
              <div className="flex items-center text-gray-700 mb-2">
                <MapPin size={16} className="mr-2" />
                <label htmlFor="venueFilter" className="font-medium">Venue</label>
              </div>
              <select
                id="venueFilter"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={filters.venue || ''}
                onChange={(e) => handleFilterChange('venue', e.target.value)}
              >
                <option value="">All Venues</option>
                {venues.map((venue) => (
                  <option key={venue.id} value={venue.id}>
                    {venue.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <div className="flex items-center text-gray-700 mb-2">
                <Music size={16} className="mr-2" />
                <label htmlFor="genreFilter" className="font-medium">Genre</label>
              </div>
              <select
                id="genreFilter"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={filters.genre || ''}
                onChange={(e) => handleFilterChange('genre', e.target.value)}
              >
                <option value="">All Genres</option>
                {availableGenres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button
              onClick={clearFilters}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Clear Filters
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default EventFilter;