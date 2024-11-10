import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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
import { BoxIcon, CreditCard, Home, Package2, Receipt, Settings2, UserRound, Users2 } from 'lucide-react'

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
  }
]
 
export function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
         <div className="flex min-h-10 items-center justify-center border-b bg-theme-dark">
           <h2 className="text-center text-2xl font-bold uppercase text-theme-light">
             Delivero
           </h2>
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
          <SidebarGroupLabel>
            Settings
          </SidebarGroupLabel>
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
      </SidebarContent>

      <SidebarFooter>
        <div className='flex flex-row gap-2 items-center text-theme-light justify-between border-t p-4'>
          <div className='flex flex-col gap-px'>
            <p className='font-semibold text-lg'>Hello, user!</p>
            <small className='text-xs text-theme-light/60'>Switch account</small>
          </div>

          <Avatar>
            <AvatarFallback>
              <UserRound />
            </AvatarFallback>
            <AvatarImage src='https://github.com/gustavogarciac.png' />
          </Avatar>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
