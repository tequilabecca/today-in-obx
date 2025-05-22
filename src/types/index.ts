export interface Event {
  id: string;
  title: string;
  artist: Artist;
  venue: Venue;
  date: string; // ISO date string
  time: string; // e.g., "8:00 PM"
  genre: string[];
  description: string;
  ticketPrice?: string;
  ticketUrl?: string;
  imageUrl: string;
}

export interface Artist {
  id: string;
  name: string;
  bio: string;
  imageUrl: string;
  website?: string;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    spotify?: string;
  };
}

export interface Venue {
  id: string;
  name: string;
  address: string;
  city: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  description: string;
  imageUrl: string;
  website?: string;
  phone?: string;
}

export interface FilterOptions {
  date?: string;
  venue?: string;
  genre?: string;
}