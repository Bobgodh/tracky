'use client'

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { ModeToggle } from '~/components/theme/mode-toggle'
import { Button, buttonVariants } from '../ui/button'
import { Github } from '../ui/icons'
import Link from 'next/link'
import ExternalLink from '../ui/external-link'
import NavLinks from './nav-links'
import { usePathname } from 'next/navigation'

export function Header() {
	const pathname = usePathname()

	if (pathname === '/onboarding') return null
	return (
		<nav className='flex w-full items-center justify-between px-5 pb-2 pt-8 text-xl font-semibold md:px-10 lg:px-16'>
			<div className='flex space-x-10 md:space-x-28'>
				<Link
					href='/'
					className='flex items-center space-x-3 transition-opacity hover:opacity-80 rtl:space-x-reverse'
				>
					<h1 className='font-serif text-3xl font-bold text-green-600 dark:text-green-500'>
						Better<span className='text-wood-950 dark:text-wood-100'>U</span>
					</h1>
				</Link>
				<NavLinks />
			</div>
			<div className='flex flex-row items-center gap-3'>
				<ExternalLink
					href='https://github.com/avalynndev/BetterU'
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
