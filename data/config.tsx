import { Metadata } from 'next'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Northvale — Research notes & public archive',
    description:
      'Independent studio documenting civic data, climate archives, and field notes.',
  } as Metadata,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'practice',
        label: 'Practice',
      },
      {
        id: 'notes',
        label: 'Notes',
      },
      {
        id: 'studio',
        label: 'Studio',
      },
      {
        label: 'Archive',
        href: '#notes',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        © {new Date().getFullYear()} Northvale Studio. All rights reserved.
      </>
    ),
    links: [
      {
        href: 'mailto:studio@northvale.org',
        label: 'Contact',
      },
      {
        href: '#notes',
        label: 'Notes',
      },
      {
        href: '#',
        label: 'Privacy',
      },
    ],
  },
  signup: {
    title: 'Follow the Northvale journal',
    features: [],
  },
}

export default siteConfig
