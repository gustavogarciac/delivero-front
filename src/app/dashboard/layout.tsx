import { PropsWithChildren } from 'react'

import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

import { DashboardSidebar } from './_components/dashboard-sidebar'

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
