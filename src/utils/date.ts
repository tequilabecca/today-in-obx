import { format, parseISO } from 'date-fns';

export const formatDate = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, 'EEEE, MMMM d, yyyy');
};

export const formatShortDate = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, 'MMM d');
};

export const formatDayOfWeek = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, 'EEE');
};