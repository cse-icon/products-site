/**
 * Header and footer menus copied from www.cse-icon.com so this site matches it.
 * When the main site's menus change, update them here.
 *
 * Links to this site's own pages are root-relative so they work locally too.
 */

export interface MenuItem {
  label: string;
  href?: string;
  children?: MenuItem[];
}

const MAIN = 'https://www.cse-icon.com';

const realTimeDataProducts: MenuItem[] = [
  { label: 'HISTORIAN BRIDGE', href: '/historian-bridge/' },
  { label: 'INTERLINK', href: '/interlink/' },
  { label: 'MCP FOR GEO SCADA', href: '/geoscada-mcp/' },
  { label: 'MCP FOR HISTORIANS', href: '/historian-mcp/' },
];

const servicesSolutions: MenuItem[] = [
  {
    label: 'ENTERPRISE SCADA',
    href: `${MAIN}/services-solutions/enterprise-scada/`,
    children: [
      { label: 'ACCELERATOR FOR IGNITION', href: `${MAIN}/services-solutions/enterprise-scada/accelerator-for-ignition/` },
      { label: 'XVIEW MOBILE SOLUTIONS', href: `${MAIN}/services-solutions/xview-mobile-solutions/` },
    ],
  },
  {
    label: 'REAL-TIME DATA',
    href: `${MAIN}/services-solutions/real-time-data/`,
    children: realTimeDataProducts,
  },
  { label: 'INFRASTRUCTURE', href: `${MAIN}/services-solutions/infrastructure/` },
  { label: 'INDUSTRIAL AUTOMATION', href: `${MAIN}/services-solutions/industrial-automation/` },
  { label: 'INDUSTRIAL INTERNET OF THINGS (IIOT)', href: `${MAIN}/services-solutions/industrial-internet-of-things/` },
  { label: 'APPLICATION INTEGRATION', href: `${MAIN}/services-solutions/application-integration/` },
];

const about: MenuItem[] = [
  { label: 'WHO WE ARE', href: `${MAIN}/who-we-are/` },
  { label: 'LEADERSHIP TEAM', href: `${MAIN}/leadership-team/` },
  { label: 'TECHNOLOGY PARTNERS', href: `${MAIN}/technology-partners/` },
];

export const mainSiteUrl = `${MAIN}/`;

export const headerMenu: MenuItem[] = [
  { label: 'SERVICES + SOLUTIONS', href: `${MAIN}/services-solutions/`, children: servicesSolutions },
  { label: 'NEWS + INSIGHTS', href: `${MAIN}/news-insights/` },
  { label: 'ABOUT', children: about },
  { label: 'CAREERS', href: `${MAIN}/careers/` },
  { label: 'CONTACT', href: `${MAIN}/contact/` },
];

export const footer = {
  email: 'contact@cse-icon.com',
  locations: [
    { city: 'The Woodlands, TX', phone: '+1.281.670.1010' },
    { city: 'Lafayette, LA', phone: '+1.337.419.2799' },
  ],
  legal: [
    { label: 'Privacy Notice', href: `${MAIN}/privacy-policy/` },
    { label: 'Terms of Use', href: `${MAIN}/terms-and-conditions/` },
    { label: 'Cookie Policy', href: `${MAIN}/cookie-policy/` },
  ],
  services: { label: 'SERVICES + SOLUTIONS', href: `${MAIN}/services-solutions/`, items: servicesSolutions },
  news: {
    label: 'NEWS + INSIGHTS',
    href: `${MAIN}/news-insights/`,
    items: [
      { label: 'CASE STUDIES', href: `${MAIN}/category/case-studies/` },
      { label: 'OPERATIONAL TECHNOLOGY', href: `${MAIN}/category/operational-technology/` },
      { label: 'REAL-TIME DATA', href: `${MAIN}/category/real-time-data/` },
      { label: 'SCADA', href: `${MAIN}/category/scada/` },
    ] as MenuItem[],
  },
  about: { label: 'ABOUT', items: about },
  careers: { label: 'CAREERS', href: `${MAIN}/careers/` },
  contact: { label: 'CONTACT', href: `${MAIN}/contact/` },
};
