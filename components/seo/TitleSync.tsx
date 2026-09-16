'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'

import { useAppSelector } from '@/app/store/hooks'
import { isRecaptchaRoute } from '@/utils/isRecaptchaRoute'
import {
  getSecurityVerificationTitle,
  getSiteDescription,
  getSiteTitle,
} from '@/utils/siteTitle'

function setMetaDescriptions(description: string) {
  document
    .querySelectorAll(
      'meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]',
    )
    .forEach((el) => el.setAttribute('content', description))
}

/** Đồng bộ title và description theo locale; favicon do root metadata quản lý. */
export default function TitleSync() {
  const locale = useAppSelector((s) => s.locale.locale)
  const pathname = usePathname()

  React.useEffect(() => {
    if (typeof document === 'undefined') return
    if (pathname === '/') return

    document.title = isRecaptchaRoute(pathname)
      ? getSecurityVerificationTitle(locale)
      : getSiteTitle(locale)
    setMetaDescriptions(getSiteDescription(locale))
  }, [locale, pathname])

  return null
}
