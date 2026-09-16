import { MarketingLayout } from '#components/layout'
import { Metadata } from 'next'

import { getSiteDescription, getSiteTitle } from '@/utils/siteTitle'

export const metadata: Metadata = {
  title: getSiteTitle('en'),
  description: getSiteDescription('en'),
}

export default function Layout(props: { children: React.ReactNode }) {
  return <MarketingLayout>{props.children}</MarketingLayout>
}
