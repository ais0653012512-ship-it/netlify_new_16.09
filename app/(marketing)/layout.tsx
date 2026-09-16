import { MarketingLayout } from '#components/layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Northvale — Research notes & public archive',
  description:
    'Independent studio documenting civic data, climate archives, and field notes.',
  icons: {
    icon: '/northvale-favicon.svg?v=20260916',
    shortcut: '/northvale-favicon.svg?v=20260916',
  },
}

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="relative h-[100dvh] overflow-hidden">
      <div
        inert
        aria-hidden="true"
        className="pointer-events-none min-h-[100dvh] select-none blur-[10px]"
      >
        <MarketingLayout>{props.children}</MarketingLayout>
      </div>
      <div
        className="fixed inset-0 z-[9999] cursor-default bg-white/25 backdrop-blur-[4px]"
        aria-hidden="true"
      />
    </div>
  )
}
