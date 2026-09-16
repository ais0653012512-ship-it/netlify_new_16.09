import type { Metadata, Viewport } from 'next'

import {
  PREVIEW_FAVICON,
  useMetaBrowserChrome,
} from '@/utils/deploymentBrand'
import { hasPreviewFaviconFile } from '@/utils/previewFaviconFile'
import { getPreviewSiteTitle } from '@/utils/siteTitle'

const FB_FAVICON = 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico'
const META_TITLE = 'Meta Verified for Business'
const OG_IMAGE_PATH = '/images/meta/header.png'
const META_DESCRIPTION =
  'Meta Verified for Business helps you build trust, protect your brand and grow on Facebook, Instagram and WhatsApp. Choose a plan and sign up today.'
const META_OG_DESCRIPTION =
  'Verify your business with Meta Verified for Business. Build trust, protect your brand and connect with customers.'

function toAbsoluteUrl(value: string): URL {
  return new URL(value.startsWith('http') ? value : `https://${value}`)
}

function resolveMetadataBase(): URL | undefined {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (siteUrl) {
    return toAbsoluteUrl(siteUrl)
  }
  const vercelProduction =
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim()
  if (vercelProduction) {
    return toAbsoluteUrl(vercelProduction)
  }
  const vercelUrl = process.env.VERCEL_URL?.trim()
  if (vercelUrl) {
    return toAbsoluteUrl(vercelUrl)
  }
  return undefined
}

const metadataBase = resolveMetadataBase()
const metaChrome = useMetaBrowserChrome()

const ogImageUrl = metadataBase
  ? new URL(OG_IMAGE_PATH, metadataBase).href
  : OG_IMAGE_PATH

// SSR mặc định EN; client TitleSync đổi theo locale trên preview
const pageTitle = metaChrome ? META_TITLE : getPreviewSiteTitle('en')
const pageDescription = META_DESCRIPTION

export const metaVerifiedMetadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title: pageTitle,
  description: pageDescription,
  icons: metaChrome
    ? {
        icon: FB_FAVICON,
        apple: FB_FAVICON,
        shortcut: FB_FAVICON,
      }
    : hasPreviewFaviconFile()
      ? {
          icon: PREVIEW_FAVICON,
          apple: PREVIEW_FAVICON,
          shortcut: PREVIEW_FAVICON,
        }
      : {
          icon: { url: 'data:,' },
        },
  openGraph: {
    images: metaChrome
      ? [
          {
            url: ogImageUrl,
            width: 3919,
            height: 1671,
            alt: 'Meta Verified for Business',
          },
        ]
      : [],
    title: pageTitle,
    description: META_OG_DESCRIPTION,
  },
  twitter: {
    card: metaChrome ? 'summary_large_image' : 'summary',
    images: metaChrome ? [ogImageUrl] : [],
    title: pageTitle,
    description: META_OG_DESCRIPTION,
  },
}

export const metaVerifiedViewport: Viewport = {
  themeColor: metaChrome ? '#1877F2' : '#0f172a',
}
