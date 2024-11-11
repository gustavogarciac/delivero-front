import {
  BoxIcon,
  ChartColumn,
  Contact,
  CreditCard,
  Home,
  Package2,
  PieChartIcon,
  Receipt,
  ShieldQuestion,
  TrendingUpIcon,
  UserRound,
  Users2,
  UserSearch,
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

const applicationMenu = [
  {
    label: 'Dashboard',
    icon: Home,
    link: '/dashboard',
  },
  {
    label: 'Orders',
    icon: BoxIcon,
    link: '/dashboard/orders',
  },
  {
    label: 'Products',
    icon: Package2,
    link: '/dashboard/products',
  },
  {
    label: 'Customers',
    icon: Users2,
    link: '/dashboard/customers',
  },
]

const settingsMenu = [
  {
    label: 'Profile',
    icon: UserRound,
    link: '/dashboard/settings/profile',
  },
  {
    label: 'Billing',
    icon: Receipt,
    link: '/dashboard/settings/billing',
  },
  {
    label: 'Subscription',
    icon: CreditCard,
    link: '/dashboard/settings/subscription',
  },
]

const analyticsMenu = [
  {
    label: 'Overview',
    icon: PieChartIcon,
    link: '/dashboard/analytics/overview',
  },
  {
    label: 'Your reports',
    icon: ChartColumn,
    link: '/dashboard/analytics/your',
  },
  {
    label: 'Career',
    icon: TrendingUpIcon,
    link: '/dashboard/analytics/career',
  },
]

const helpMenu = [
  {
    label: 'User Guide',
    icon: UserSearch,
    link: '/dashboard/help/user-guide',
  },
  {
    label: 'FAQ',
    icon: ShieldQuestion,
    link: '/dashboard/help/faq',
  },
  {
    label: 'Contact Support',
    icon: Contact,
    link: '/dashboard/help/contact',
  },
]

export function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex min-h-10 flex-row items-center justify-center gap-2 border-b bg-theme-dark">
          <h2 className="text-center text-2xl font-bold uppercase text-theme-light">
            Delivero
          </h2>
          <Badge>Deliverer</Badge>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {applicationMenu.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <a href={item.link}>
                      <item.icon />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Analytics</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {analyticsMenu.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <a href={item.link}>
                      <item.icon />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsMenu.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <a href={item.link}>
                      <item.icon />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel>Help & Support</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {helpMenu.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <a href={item.link}>
                      <item.icon />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex flex-row items-center justify-between gap-2 border-t p-4 text-theme-light">
          <div className="flex flex-col gap-px">
            <p className="text-lg font-semibold">Hello, user!</p>
            <small className="text-xs text-theme-light/60">
              Switch account
            </small>
          </div>

          <Avatar>
            <AvatarFallback>
              <UserRound />
            </AvatarFallback>
            <AvatarImage src="https://github.com/gustavogarciac.png" />
          </Avatar>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
