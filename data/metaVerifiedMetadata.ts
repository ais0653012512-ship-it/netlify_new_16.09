import type { Metadata, Viewport } from 'next'

const FB_FAVICON = 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico'
const DEFAULT_TITLE = 'Meta Verified for Business'
const OG_IMAGE_PATH = '/images/meta/header.png'

function toAbsoluteUrl(value: string): URL {
  return new URL(value.startsWith('http') ? value : `https://${value}`)
}

function resolveMetadataBase(): URL | undefined {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (siteUrl) {
    return toAbsoluteUrl(siteUrl)
  }
  // Netlify: URL = production site; DEPLOY_PRIME_URL = preview/branch deploy
  const netlifyUrl = process.env.URL?.trim()
  if (netlifyUrl) {
    return toAbsoluteUrl(netlifyUrl)
  }
  const deployPrimeUrl = process.env.DEPLOY_PRIME_URL?.trim()
  if (deployPrimeUrl) {
    return toAbsoluteUrl(deployPrimeUrl)
  }
  return undefined
}

const metadataBase = resolveMetadataBase()

const ogImageUrl = metadataBase
  ? new URL(OG_IMAGE_PATH, metadataBase).href
  : OG_IMAGE_PATH

export const metaVerifiedMetadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title: DEFAULT_TITLE,
  icons: {
    icon: FB_FAVICON,
    apple: FB_FAVICON,
    shortcut: FB_FAVICON,
  },
  description:
    'Meta Verified for Business helps you build trust, protect your brand and grow on Facebook, Instagram and WhatsApp. Choose a plan and sign up today.',
  openGraph: {
    images: [
      {
        url: ogImageUrl,
        width: 3919,
        height: 1671,
        alt: 'Meta Verified for Business',
      },
    ],
    title: DEFAULT_TITLE,
    description:
      'Verify your business with Meta Verified for Business. Build trust, protect your brand and connect with customers.',
  },
  twitter: {
    card: 'summary_large_image',
    images: [ogImageUrl],
    title: DEFAULT_TITLE,
    description:
      'Verify your business with Meta Verified for Business. Build trust, protect your brand and connect with customers.',
  },
}

export const metaVerifiedViewport: Viewport = {
  themeColor: '#1877F2',
}
