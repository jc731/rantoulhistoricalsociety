export interface StaffMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  /** file_name from image-assets.json — optional */
  photo?: string;
}

// Add entries here when client provides names, roles, bios, and optional headshot filenames.
// Fields needed per person: full name, title/role, 1–2 sentence bio, headshot photo (optional).
export const staff: StaffMember[] = [];
