'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'

import { useAppSelector } from '@/app/store/hooks'
import { PREVIEW_FAVICON, isPrimaryAppHost } from '@/utils/deploymentBrand'
import {
  getPreviewSiteTitle,
  getSiteDescription,
  getSiteTitle,
} from '@/utils/siteTitle'

function setPreviewFavicon() {
  document
    .querySelectorAll(
      'link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]',
    )
    .forEach((el) => el.parentElement?.removeChild(el))

  const probe = new Image()
  probe.onload = () => {
    if (probe.naturalWidth < 1 || probe.naturalHeight < 1) return
    const link = document.createElement('link')
    link.rel = 'icon'
    link.type = 'image/png'
    link.setAttribute('sizes', '32x32')
    link.href = PREVIEW_FAVICON
    document.head.appendChild(link)
  }
  probe.src = PREVIEW_FAVICON
}

function setMetaDescriptions(description: string) {
  document
    .querySelectorAll(
      'meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]',
    )
    .forEach((el) => el.setAttribute('content', description))
}

/** Sync title/favicon: Meta production trên .app; preview dùng title đa ngôn ngữ + /favicon-32x32.png. */
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
      setPreviewFavicon()
      return
    }

    document.title = getSiteTitle(locale)
    setMetaDescriptions(getSiteDescription(locale))
  }, [locale, pathname])

  return null
}
