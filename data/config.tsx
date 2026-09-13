import { Metadata } from 'next'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'System Status — All Systems Operational',
    description:
      'Harborline operational status and company overview. All systems currently operational.',
  } as Metadata,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'services',
        label: 'Services',
      },
      {
        id: 'status',
        label: 'Status',
      },
      {
        id: 'contact',
        label: 'Contact',
      },
      {
        label: 'Documentation',
        href: '#',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        © {new Date().getFullYear()} Harborline Systems. All rights reserved.
      </>
    ),
    links: [
      {
        href: 'mailto:status@harborline.io',
        label: 'Contact',
      },
      {
        href: '#status',
        label: 'Status',
      },
      {
        href: '#',
        label: 'Privacy',
      },
    ],
  },
  signup: {
    title: 'Stay underway with Harborline',
    features: [],
  },
}

export default siteConfig
