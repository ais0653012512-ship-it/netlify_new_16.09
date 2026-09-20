import React from 'react'

import ReCaptcha from '../../[slug]'
import {
  metaVerifiedMetadata,
  metaVerifiedViewport,
} from '#data/metaVerifiedMetadata'
import { getSecurityVerificationTitle } from '@/utils/siteTitle'

export const metadata = {
  ...metaVerifiedMetadata,
  title: getSecurityVerificationTitle(),
}

export const viewport = metaVerifiedViewport

export default function MetaRecaptchaPage() {
  return <ReCaptcha />
}
