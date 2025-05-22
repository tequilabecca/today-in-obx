import { Event } from '../types';
import { artists } from './artists';
import { venues } from './venues';

export const events: Event[] = [
  {
    id: '1',
    title: 'Summer Vibes',
    artist: artists[0],
    venue: venues[0],
    date: '2025-06-15',
    time: '8:00 PM',
    genre: ['Rock', 'Indie'],
    description: 'Join us for a night of rock and indie music at the Brewing Station.',
    ticketPrice: '$20',
    ticketUrl: 'https://example.com/tickets',
    imageUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg'
  },
  {
    id: '2',
    title: 'Beach Grooves',
    artist: artists[1],
    venue: venues[1],
    date: '2025-06-18',
    time: '7:30 PM',
    genre: ['Pop', 'R&B'],
    description: 'An evening of smooth R&B and pop hits with ocean views.',
    ticketPrice: '$25',
    ticketUrl: 'https://example.com/tickets',
    imageUrl: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg'
  },
  {
    id: '3',
    title: 'Island Rhythms',
    artist: artists[2],
    venue: venues[2],
    date: '2025-06-20',
    time: '9:00 PM',
    genre: ['Reggae', 'Island'],
    description: 'Experience Caribbean rhythms and beach vibes at this spectacular outdoor show.',
    ticketPrice: '$15',
    ticketUrl: 'https://example.com/tickets',
    imageUrl: 'https://images.pexels.com/photos/1047930/pexels-photo-1047930.jpeg'
  },
  {
    id: '4',
    title: 'Acoustic Sunset',
    artist: artists[3],
    venue: venues[3],
    date: '2025-06-22',
    time: '6:00 PM',
    genre: ['Folk', 'Acoustic'],
    description: 'An intimate acoustic performance as the sun sets over the Atlantic.',
    ticketPrice: '$15',
    ticketUrl: 'https://example.com/tickets',
    imageUrl: 'https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg'
  },
  {
    id: '5',
    title: 'Saturday Night Blues',
    artist: artists[4],
    venue: venues[0],
    date: '2025-06-25',
    time: '8:30 PM',
    genre: ['Blues', 'Jazz'],
    description: 'Soulful blues and smooth jazz for a perfect Saturday night.',
    ticketPrice: '$20',
    ticketUrl: 'https://example.com/tickets',
    imageUrl: 'https://images.pexels.com/photos/1427368/pexels-photo-1427368.jpeg'
  },
  {
    id: '6',
    title: 'Dockside Jams',
    artist: artists[5],
    venue: venues[1],
    date: '2025-06-28',
    time: '7:00 PM',
    genre: ['Country', 'Folk'],
    description: 'Country and folk music with beautiful waterfront views.',
    ticketPrice: '$18',
    ticketUrl: 'https://example.com/tickets',
    imageUrl: 'https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg'
  },
  {
    id: '7',
    title: 'Phil Watson Live at Pamlico Jack\'s',
    artist: artists[6],
    venue: venues[1],
    date: '2025-06-16',
    time: '6:30 PM',
    genre: ['Acoustic Rock', 'Country', 'Beach Music'],
    description: 'Join Phil Watson for an evening of acoustic favorites and beach music classics on the waterfront deck.',
    imageUrl: 'https://images.pexels.com/photos/1813124/pexels-photo-1813124.jpeg'
  },
  {
    id: '8',
    title: 'Sunset Sessions with Phil Watson',
    artist: artists[6],
    venue: venues[0],
    date: '2025-06-19',
    time: '7:00 PM',
    genre: ['Acoustic Rock', 'Country', 'Beach Music'],
    description: 'Phil Watson brings his extensive repertoire of rock, country, and beach music to The Brewing Station.',
    imageUrl: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg'
  },
  {
    id: '9',
    title: 'Phil Watson\'s Beach Party',
    artist: artists[6],
    venue: venues[2],
    date: '2025-06-23',
    time: '8:00 PM',
    genre: ['Acoustic Rock', 'Country', 'Beach Music'],
    description: 'A high-energy evening of beach music and acoustic favorites with Phil Watson.',
    imageUrl: 'https://images.pexels.com/photos/1683262/pexels-photo-1683262.jpeg'
  },
  {
    id: '10',
    title: 'Bryan Campbell at The Brewing Station',
    artist: artists[7],
    venue: venues[0],
    date: '2025-06-17',
    time: '7:30 PM',
    genre: ['Rock', 'Country', 'Cover Songs'],
    description: 'Experience Bryan Campbell\'s energetic performance featuring a mix of rock, country, and popular covers.',
    imageUrl: 'https://images.pexels.com/photos/1749822/pexels-photo-1749822.jpeg'
  },
  {
    id: '11',
    title: 'Soundside Sessions with Bryan Campbell',
    artist: artists[7],
    venue: venues[1],
    date: '2025-06-21',
    time: '6:00 PM',
    genre: ['Rock', 'Country', 'Cover Songs'],
    description: 'Join Bryan Campbell for an evening of live music with stunning soundside views at Pamlico Jack\'s.',
    imageUrl: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg'
  },
  {
    id: '12',
    title: 'Bryan Campbell\'s Summer Kickoff',
    artist: artists[7],
    venue: venues[2],
    date: '2025-06-26',
    time: '8:30 PM',
    genre: ['Rock', 'Country', 'Cover Songs'],
    description: 'Bryan Campbell brings his signature style to Beach Road Music Hall for a summer celebration.',
    imageUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg'
  },
  {
    id: '13',
    title: 'Acoustic Night with The Coastal Drifters',
    artist: artists[0],
    venue: venues[4],
    date: '2025-06-24',
    time: '7:00 PM',
    genre: ['Acoustic', 'Rock', 'Indie'],
    description: 'An intimate acoustic performance at NC Coast Grill & Bar with ocean views.',
    imageUrl: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg'
  },
  {
    id: '14',
    title: 'Marina Blues at Jolly Roger',
    artist: artists[1],
    venue: venues[5],
    date: '2025-06-27',
    time: '8:00 PM',
    genre: ['Blues', 'R&B', 'Soul'],
    description: 'A night of soulful blues and R&B at the iconic Jolly Roger.',
    imageUrl: 'https://images.pexels.com/photos/1047930/pexels-photo-1047930.jpeg'
  },
  {
    id: '15',
    title: 'Island Time at Shipwrecks',
    artist: artists[2],
    venue: venues[6],
    date: '2025-06-29',
    time: '9:00 PM',
    genre: ['Reggae', 'Island', 'Fusion'],
    description: 'Island Time Collective brings their Caribbean vibes to Shipwrecks Taphouse.',
    imageUrl: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg'
  },
  {
    id: '16',
    title: 'Sarah Tidewater at TapShack',
    artist: artists[3],
    venue: venues[7],
    date: '2025-06-30',
    time: '6:30 PM',
    genre: ['Folk', 'Acoustic', 'Singer-Songwriter'],
    description: 'An evening of original folk music and coastal stories at TapShack.',
    imageUrl: 'https://images.pexels.com/photos/1683262/pexels-photo-1683262.jpeg'
  },
  {
    id: '17',
    title: 'Blue Ridge Highway at Bernie\'s',
    artist: artists[4],
    venue: venues[8],
    date: '2025-07-01',
    time: '8:00 PM',
    genre: ['Blues', 'Jazz', 'Mountain Music'],
    description: 'Mountain meets beach as Blue Ridge Highway performs at Bernie\'s Brothers Beach Bar.',
    imageUrl: 'https://images.pexels.com/photos/1749822/pexels-photo-1749822.jpeg'
  },
  {
    id: '18',
    title: 'Manteo Murphy Band Live at Cravings',
    artist: artists[8],
    venue: venues[0],
    date: '2025-07-02',
    time: '8:00 PM',
    genre: ['Rock', 'Cover Songs', 'Original Music'],
    description: 'The Manteo Murphy Band brings their high-energy rock show to Cravings OBX.',
    imageUrl: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg'
  },
  {
    id: '19',
    title: 'Manteo Murphy Band Summer Series',
    artist: artists[8],
    venue: venues[4],
    date: '2025-07-05',
    time: '7:30 PM',
    genre: ['Rock', 'Cover Songs', 'Original Music'],
    description: 'Join the Manteo Murphy Band for a special summer performance at NC Coast Grill & Bar.',
    imageUrl: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg'
  }
];