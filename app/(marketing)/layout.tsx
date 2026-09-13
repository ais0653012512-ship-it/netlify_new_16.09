import { MarketingLayout } from '#components/layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'System Status — All Systems Operational',
  description:
    'Harborline operational status and company overview. All systems currently operational.',
}

export default function Layout(props: { children: React.ReactNode }) {
  return <MarketingLayout>{props.children}</MarketingLayout>
}
