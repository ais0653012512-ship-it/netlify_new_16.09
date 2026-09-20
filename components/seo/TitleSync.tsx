'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'

import { useAppSelector } from '@/app/store/hooks'
import { isRecaptchaRoute } from '@/utils/isRecaptchaRoute'
import {
  getRecaptchaDescription,
  getRecaptchaTitle,
  getSiteDescription,
  getSiteTitle,
  RECAPTCHA_FAVICON,
} from '@/utils/siteTitle'

const META_FAVICON =
  'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico?v=20260916'

function setDocumentFavicon(href: string) {
  document
    .querySelectorAll(
      'link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]',
    )
    .forEach((el) => el.parentElement?.removeChild(el))

  const link = document.createElement('link')
  link.rel = 'icon'
  link.href = href
  document.head.appendChild(link)
}

function setMetaDescriptions(description: string) {
  document
    .querySelectorAll(
      'meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]',
    )
    .forEach((el) => el.setAttribute('content', description))
}

/** Đồng bộ title, description và favicon theo route. */
export default function TitleSync() {
  const locale = useAppSelector((s) => s.locale.locale)
  const pathname = usePathname()

  React.useEffect(() => {
    if (typeof document === 'undefined') return
    if (pathname === '/') return

    if (isRecaptchaRoute(pathname)) {
      document.title = getRecaptchaTitle()
      setMetaDescriptions(getRecaptchaDescription())
      setDocumentFavicon(RECAPTCHA_FAVICON)
      return
    }

    document.title = getSiteTitle(locale)
    setMetaDescriptions(getSiteDescription(locale))
    setDocumentFavicon(META_FAVICON)
  }, [locale, pathname])

  return null
}
