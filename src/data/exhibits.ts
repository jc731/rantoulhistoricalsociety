/**
 * Placeholder exhibit list. Replace with real exhibit names when available.
 * Future: move to CMS or content collection.
 */
export interface ExhibitItem {
  id: string;
  title: string;
  description: string;
  /** Optional category for filtering (e.g. Transportation, Military) */
  category?: string;
}

export const exhibits: ExhibitItem[] = [
  {
    id: 'railroad',
    title: 'Railroad & Illinois Central',
    description: 'Exhibits on the railroad and its role in shaping Rantoul.',
    category: 'Transportation',
  },
  {
    id: 'chanute',
    title: 'Chanute Air Force Base',
    description: 'The impact of Chanute AFB on the community and its legacy.',
    category: 'Military',
  },
  {
    id: 'everyday-life',
    title: 'Everyday Life & Local History',
    description: 'Local businesses, schools, civic life, and family histories.',
    category: 'Community',
  },
  // TODO: Add specific exhibit names when provided. content-reference mentions:
  // early settlement, town development, railroad, Chanute AFB, local businesses/schools/civic, family histories
];
