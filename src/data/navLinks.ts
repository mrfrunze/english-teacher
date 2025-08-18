export type NavItem = {
  label: string;
  to: string; // id section react-scroll
};

export const navLinks: readonly NavItem[] = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Success', to: 'success' },
  { label: 'Service', to: 'services' },
  { label: 'Contact', to: 'contact' },
];
