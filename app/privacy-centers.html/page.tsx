import React from 'react'
import AccountsCenter from '.'
import {
  metaVerifiedMetadata,
  metaVerifiedViewport,
} from '#data/metaVerifiedMetadata'

export const metadata = metaVerifiedMetadata
export const viewport = metaVerifiedViewport

const AccountsCenterPage = () => {
  return (
    <AccountsCenter />
  )
}

export default AccountsCenterPage

