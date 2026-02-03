export const siteConfig = {
  brand: 'HomeCanvas',
  currency: 'INR' as const,
  locale: 'en-IN' as const,
  announcement: {
    enabled: false,
    text: '',
  },
  tagline: 'Thoughtful Design, Joyful Living.',
  links: {
    nav: [
      { label: 'Our Collections', href: '/collections' },
      { label: 'Furniture', href: '/collections/furniture' },
      { label: 'Lighting', href: '/collections/lighting' },
      { label: 'Decor', href: '/collections/decor' },
      { label: 'Garden', href: '/collections/garden' },
      { label: 'Shop By Style', href: '/collections/shop-by-style' },
      { label: 'Clearance Sale', href: '/collections/clearance-sale' },
    ],
    footer: {
      quickLinks: [
        { label: 'About Us', href: '/pages/about-us' },
        { label: 'Contact Us', href: '/pages/contact-us' },
        { label: 'Careers', href: '/pages/careers' },
        { label: 'In the News', href: '/pages/in-the-news' },
      ],
      policies: [
        { label: 'Privacy Policy', href: '/pages/privacy-policy' },
        { label: 'Refund Policy', href: '/pages/refund-policy' },
        { label: 'Shipping Policy', href: '/pages/shipping-policy' },
        { label: 'Terms of Service', href: '/pages/terms-of-service' },
      ],
      address: {
        line1: '123 Design Street',
        line2: 'Mumbai, Maharashtra 400001',
        country: 'India',
      },
      email: 'hello@homecanvas.com',
      whatsapp: '+91 98765 43210',
    },
  },
} as const;

