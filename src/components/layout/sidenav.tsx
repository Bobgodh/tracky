'use client'

import { HouseIcon } from '../ui/icons'
import { Dumbbell, Ham, NotepadText, Settings } from 'lucide-react'
import SidenavButton from './sidenav-button'
import { usePathname } from 'next/navigation'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from '~/components/ui/sidebar'

export default function SideNav() {
	const pathname = usePathname()

	if (pathname === '/' || pathname === '/onboarding') return null

	return (
		<Sidebar>
			<SidebarHeader />
			<SidebarContent>
				<SidenavButton label='Overview' href='/dashboard' enabled>
					<HouseIcon className='h-5 w-5 md:h-4 md:w-4' />
				</SidenavButton>
				<SidenavButton label='Food' href='/food' enabled>
					<Ham className='h-6 w-6 md:h-5 md:w-5' />
				</SidenavButton>
			</SidebarContent>
		</Sidebar>
	)
}
