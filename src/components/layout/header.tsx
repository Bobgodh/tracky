'use client'

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { ModeToggle } from '~/components/theme/mode-toggle'
import { Button, buttonVariants } from '../ui/button'
import { Github } from '../ui/icons'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import ExternalLink from '../ui/external-link'
import NavLinks from './nav-links'
import { usePathname } from 'next/navigation'

export function Header() {
	const pathname = usePathname()

	if (pathname === '/onboarding') return null
	return (
		<nav className='flex w-full items-center justify-between px-5 pb-2 pt-8 text-xl font-semibold md:px-10 lg:px-16'>
			<div className='flex flex-row items-center gap-3'>
				<ExternalLink
					href='https://github.com/fraineralex/tracky'
					className={buttonVariants({ variant: 'ghost', size: 'icon' })}
				>
					<Github className='h-6 w-6' />
				</ExternalLink>

				<ModeToggle />
				<SignedOut>
					<Button
						className='rounded-full bg-forest-300 font-medium text-wood-950 hover:bg-forest-400 dark:bg-forest-600 dark:text-wood-100 dark:hover:bg-forest-500'
						asChild
					>
						<SignInButton>Sign In</SignInButton>
					</Button>
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</div>
		</nav>
	)
}
