/**
 * Placeholder events list. Future: replace with CMS or content collection.
 */
export interface EventItem {
  id: string;
  title: string;
  date: string;
  description: string;
  /** Optional location override */
  location?: string;
}

export const events: EventItem[] = [
  // TODO: Add real events when available. Keep empty or use placeholder for launch.
  {
    id: 'placeholder',
    title: 'Events coming soon',
    date: '',
    description: 'Check back or follow us on Facebook for upcoming programs and events.',
  },
];
