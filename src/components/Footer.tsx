import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Music } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Music size={28} className="mr-2" />
              <span className="text-xl font-bold">OBX Live Music</span>
            </div>
            <p className="text-blue-200 mb-4">
              Your guide to live music events in the beautiful Outer Banks of North Carolina.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:info@obxlivemusic.com" className="text-white hover:text-blue-300 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-blue-200 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/venues" className="text-blue-200 hover:text-white transition-colors">
                  Venues
                </Link>
              </li>
              <li>
                <Link to="/artists" className="text-blue-200 hover:text-white transition-colors">
                  Artists
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  OBX Travel Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  Local Restaurants
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  Accommodations
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  Beach Access
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-blue-200 mb-2">
              Have questions or suggestions?
            </p>
            <a 
              href="mailto:info@obxlivemusic.com" 
              className="inline-block bg-white text-blue-900 px-4 py-2 rounded font-medium hover:bg-blue-100 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-6 text-center text-blue-300">
          <p>&copy; {new Date().getFullYear()} OBX Live Music. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;