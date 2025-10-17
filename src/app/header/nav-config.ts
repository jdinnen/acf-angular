export interface NavItem {
  label: string;
  path?: string;
  children?: NavItem[];
}

export const NAV_CONFIG: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Get Tickets', path: '/tickets' },
  {
    label: 'Performances',
    children: [
      { label: 'Performers', path: '/performers' },
      { label: 'Workshops', path: '/workshops' },
      { label: 'Schedules', path: '/schedules' }
    ]
  },
  {
    label: 'Get Involved',
    children: [
      { label: 'Volunteer', path: '/volunteer' },
      { label: 'Vendors', path: '/vendors' }
    ]
  },
  { label: 'Venue', path: '/venue' },
  { label: 'Animals', path: '/animals' }
];