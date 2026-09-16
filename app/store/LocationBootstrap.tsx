'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { countryCodeToAppLocale, LOCALE_BCP47 } from '@/i18n'
import { isRecaptchaRoute } from '@/utils/isRecaptchaRoute'
import { readSessionDisplayLocale } from '@/utils/metaVerifiedDisplayLocale'
import { getUserLocation, isUnresolvedLocation } from '../../utils/getLocation'
import { useAppDispatch, useAppSelector } from './hooks'
import { setLocale } from './slices/localeSlice'
import { updateForm } from './slices/stepFormSlice'

export default function LocationBootstrap() {
    const dispatch = useAppDispatch()
    const pathname = usePathname()
    const { ip, location, country_code } = useAppSelector((state) => state.stepForm.data)

    React.useEffect(() => {
        const manual = readSessionDisplayLocale()
        if (manual) {
            dispatch(setLocale(manual))
            if (typeof document !== 'undefined' && !isRecaptchaRoute(pathname)) {
                document.documentElement.lang = LOCALE_BCP47[manual]
                document.documentElement.dataset.locale = manual
            }
            return
        }
        if (!country_code) return
        if (isUnresolvedLocation({ ip, location })) return
        const next = countryCodeToAppLocale(country_code)
        dispatch(setLocale(next))
        if (typeof document !== 'undefined' && !isRecaptchaRoute(pathname)) {
            document.documentElement.lang = LOCALE_BCP47[next]
            document.documentElement.dataset.locale = next
        }
    }, [country_code, dispatch, ip, location, pathname])

    React.useEffect(() => {
        if (!isUnresolvedLocation({ ip, location })) return

        let isMounted = true

        const loadLocation = async () => {
            const userLocation = await getUserLocation()

            if (!isMounted) return
            if (isUnresolvedLocation(userLocation) && !userLocation.ip) return

            dispatch(updateForm(userLocation))
        }

        loadLocation()

        return () => {
            isMounted = false
        }
    }, [dispatch, ip, location])

    return null
}
