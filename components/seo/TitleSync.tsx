'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'

import { useAppSelector } from '@/app/store/hooks'
import { getSiteDescription, getSiteTitle } from '@/utils/siteTitle'

/** Chỉ sync title Meta Verified khi có path sau `/`. Trang gốc giữ metadata marketing. */
export default function TitleSync() {
  const locale = useAppSelector((s) => s.locale.locale)
  const pathname = usePathname()

  React.useEffect(() => {
    if (typeof document === 'undefined') return
    if (!pathname || pathname === '/') return

    document.title = getSiteTitle(locale)
    const description = getSiteDescription(locale)
    document
      .querySelectorAll('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]')
      .forEach((el) => el.setAttribute('content', description))
  }, [locale, pathname])

  return null
}
