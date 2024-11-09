import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import { Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { CaloriesChart } from '~/components/landing/calories-chart'
import { Button } from '~/components/ui/button'
import { Github, HouseIcon } from '~/components/ui/icons'

export default function HomePage() {
	return (
		<>
			<section className='grid h-full grid-cols-3 place-items-center'>
				<>
					<article className='col-span-3 flex flex-col pb-10 lg:col-span-2'>
						<h2 className='text-center font-serif text-[5.5rem] font-bold lg:text-8xl 2xl:text-[7rem]'>
							<span
								className='mb-2 block text-nowrap text-[6rem] tracking-wide text-wood-950 dark:text-wood-100 lg:mb-6 lg:text-8xl 2xl:text-9xl'
								style={{ lineHeight: 1 }}
							>
								Smart,
								<span className='block md:inline-block lg:ms-5'>simple</span>
							</span>{' '}
							<span
								className='block tracking-tight text-green-600 dark:text-green-500 md:text-nowrap'
								style={{ lineHeight: 1 }}
							>
								Fitness Tracking
							</span>
						</h2>
						<h3 className='mt-8 hidden text-pretty pe-5 text-center text-2xl font-normal text-neutral-950 dark:text-neutral-50 md:block lg:text-3xl'>
							Follow your fitness journey, every step of the way
						</h3>
						<div className='mt-10 flex h-full place-content-center items-center space-x-3 pb-10 lg:mt-20 lg:space-x-10'>
							<SignedOut>
								<Button
									variant='default'
									size='lg'
									className='group h-12 cursor-pointer px-6 hover:opacity-90 dark:hover:opacity-70'
									asChild
								>
									<span className='flex space-x-2'>
										<Play className='h-5 w-5 duration-100 ease-in-out group-hover:scale-110' />
										<SignInButton>
											<i className='text-base font-medium not-italic'>
												Get started
											</i>
										</SignInButton>
									</span>
								</Button>
							</SignedOut>
							<SignedIn>
								<Button
									variant='default'
									size='lg'
									className='group h-12 cursor-pointer px-6 hover:opacity-90 dark:hover:opacity-70'
									asChild
								>
									<Link className='flex space-x-2' href='/dashboard'>
										<HouseIcon className='h-4 w-4 duration-100 ease-in-out group-hover:scale-110' />
										<i className='text-base font-medium not-italic'>
											Dashboard
										</i>
									</Link>
								</Button>
							</SignedIn>
							<Button
								asChild
								variant='outline'
								size='lg'
								className='group h-12 cursor-pointer border-slate-600 px-4 hover:bg-slate-300/80 dark:border-neutral-500 dark:hover:bg-neutral-600'
							>
								<span className='flex items-center space-x-2'>
									<Github className='h-5 w-5 duration-100 ease-in-out group-hover:scale-110' />
									<i className='text-base font-medium not-italic'>
										Star on GitHub
									</i>
								</span>
							</Button>
						</div>
					</article>
					<div className='hidden flex-col place-content-center lg:flex'>
						<figure className='z-10 max-w-96 items-center p-3 pb-0 md:p-0 lg:max-w-128'>
							<Image
								src='/home/banner.webp'
								alt='banner image'
								height={534}
								width={845}
								className='h-auto w-full'
							/>
						</figure>
						<article className='z-10 mt-1 flex min-h-40 place-content-center ps-16'>
							<CaloriesChart />
						</article>
					</div>
				</>
			</section>
		</>
	)
}
