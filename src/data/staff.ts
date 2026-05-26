export interface StaffMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  /** file_name from image-assets.json — optional */
  photo?: string;
}

// TODO: Replace placeholder entries with real staff data from client.
// Fields needed per person: full name, title/role, 1–2 sentence bio, headshot photo (optional).
export const staff: StaffMember[] = [
  {
    id: 'placeholder-1',
    name: 'TODO: Staff Name',
    role: 'TODO: Role / Title',
    bio: 'TODO: Short bio (1–2 sentences). To be provided by client.',
  },
  {
    id: 'placeholder-2',
    name: 'TODO: Staff Name',
    role: 'TODO: Role / Title',
    bio: 'TODO: Short bio (1–2 sentences). To be provided by client.',
  },
  {
    id: 'placeholder-3',
    name: 'TODO: Staff Name',
    role: 'TODO: Role / Title',
    bio: 'TODO: Short bio (1–2 sentences). To be provided by client.',
  },
];
