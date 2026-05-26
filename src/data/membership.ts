export interface MembershipLevel {
  id: string;
  name: string;
  price: number;
  period: string;
  blurb: string;
  /** PayPal hosted-button URL. Update when client provides account info — data file only, no code change needed. */
  paypal_url: string;
}

export const membershipLevels: MembershipLevel[] = [
  {
    id: 'individual',
    name: 'Individual Member',
    price: 10,
    period: 'year',
    blurb: 'Your membership helps keep the lights on and the doors open. Every dollar goes toward preserving the artifacts and stories that connect Rantoul to its past — so future generations can discover the same sense of place you value.',
    paypal_url: 'TODO_PAYPAL_URL_INDIVIDUAL',
  },
  {
    id: 'family',
    name: 'Family Member',
    price: 15,
    period: 'year',
    blurb: 'Bring the whole family into the story. Family membership supports the exhibits and programs that make local history tangible for kids and adults alike, and helps ensure the museum remains a resource for the community for years to come.',
    paypal_url: 'TODO_PAYPAL_URL_FAMILY',
  },
  {
    id: 'business',
    name: 'Business Sponsor',
    price: 50,
    period: 'year',
    blurb: 'As a business sponsor, you\'re investing in the identity of the town your business calls home. Your support underlines the Society\'s work to preserve and share Rantoul\'s history — strengthening the community narrative that residents and visitors alike rely on.',
    paypal_url: 'TODO_PAYPAL_URL_BUSINESS',
  },
  {
    id: 'lifetime',
    name: 'Lifetime Member',
    price: 150,
    period: 'one-time',
    blurb: 'A lifetime membership is a lasting commitment to Rantoul\'s story. Your one-time support provides a stable foundation for the Society\'s long-term mission: keeping local history accessible, accurate, and alive for everyone who walks through the door.',
    paypal_url: 'TODO_PAYPAL_URL_LIFETIME',
  },
];

export const membershipCheckPayable = 'Rantoul Historical Society';

export const membershipMailInstructions =
  'Mail with your name, address, and phone number to:';
