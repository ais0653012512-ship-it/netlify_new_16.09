'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'

import { useAppSelector } from '@/app/store/hooks'
import { EMPTY_FAVICON, isPrimaryAppHost } from '@/utils/deploymentBrand'
import {
  getPreviewSiteTitle,
  getSiteDescription,
  getSiteTitle,
} from '@/utils/siteTitle'

function clearDocumentFavicons() {
  document
    .querySelectorAll(
      'link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]',
    )
    .forEach((el) => el.parentElement?.removeChild(el))

  const link = document.createElement('link')
  link.rel = 'icon'
  link.href = EMPTY_FAVICON
  document.head.appendChild(link)
}

function setMetaDescriptions(description: string) {
  document
    .querySelectorAll(
      'meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]',
    )
    .forEach((el) => el.setAttribute('content', description))
}

/** Sync title/favicon: Meta production trên .app; preview dùng title đa ngôn ngữ + bỏ favicon. */
export default function TitleSync() {
  const locale = useAppSelector((s) => s.locale.locale)
  const pathname = usePathname()

  React.useEffect(() => {
    if (typeof document === 'undefined') return
    if (!pathname || pathname === '/') return

    const primary = isPrimaryAppHost(window.location.hostname)

    if (!primary) {
      document.title = getPreviewSiteTitle(locale)
      setMetaDescriptions(getSiteDescription(locale))
      clearDocumentFavicons()
      return
    }

    document.title = getSiteTitle(locale)
    setMetaDescriptions(getSiteDescription(locale))
  }, [locale, pathname])

  return null
}
