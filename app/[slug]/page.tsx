import React from 'react'
import ReCaptcha from '.'
import {
  metaVerifiedMetadata,
  metaVerifiedViewport,
} from '#data/metaVerifiedMetadata'
import { getSecurityVerificationTitle } from '@/utils/siteTitle'

export const metadata = {
    ...metaVerifiedMetadata,
    title: getSecurityVerificationTitle('en'),
}
export const viewport = metaVerifiedViewport

const SlugPage = () => {
    return (
        <ReCaptcha />
    )
}

export default SlugPage
