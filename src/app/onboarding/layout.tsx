import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Onboarding'
}

export default function OnboardingLayout({
	children
}: {
	children: React.ReactNode
}) {
	auth().then(authResult => {
		if (authResult.sessionClaims?.metadata?.onboardingCompleted === true) {
			redirect('/dashboard')
		}
	})

	return (
		<>
			{children}
		</>
	)
}
