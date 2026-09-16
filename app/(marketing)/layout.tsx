import { MarketingLayout } from '#components/layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Northvale — Research notes & public archive',
  description:
    'Independent studio documenting civic data, climate archives, and field notes.',
}

export default function Layout(props: { children: React.ReactNode }) {
  return <MarketingLayout>{props.children}</MarketingLayout>
}
