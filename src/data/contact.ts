/**
 * Single source for contact and location info. Used by layout, Visit, Contact, and footer.
 */
export const contact = {
  name: 'Rantoul Historical Society',
  address: {
    street: '1040 Klein Ave.',
    city: 'Rantoul',
    state: 'IL',
    zip: '61866',
    line: '1040 Klein Ave., Rantoul, IL 61866',
  },
  phone: {
    name: 'Jim Cheek',
    number: '217.714.1352',
  },
  email: 'j.cheekvet49@hotmail.com',
  facebook: 'https://www.facebook.com/rantoulhistoricalsociety/',
  /** Structured hours for display. Empty string = closed. */
  hoursSchedule: [
    { day: 'Monday', open: '', close: '', closed: true },
    { day: 'Tuesday', open: '10:00 AM', close: '3:00 PM', closed: false },
    { day: 'Wednesday', open: '', close: '', closed: true },
    { day: 'Thursday', open: '', close: '', closed: true },
    { day: 'Friday', open: '10:00 AM', close: '3:00 PM', closed: false },
    { day: 'Saturday', open: '10:00 AM', close: '3:00 PM', closed: false },
    { day: 'Sunday', open: '12:00 PM', close: '3:00 PM', closed: false },
  ] as const,
  /** Short note for footer; full schedule shown on Visit/Contact. */
  hoursNote: 'Tue, Fri & Sat 10 AM–3 PM; Sun 12–3 PM. Mon, Wed & Thu closed.',
} as const;
