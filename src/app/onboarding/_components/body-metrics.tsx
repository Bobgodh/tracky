import { Input } from '~/components/ui/input'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from '~/components/ui/select'
import { Button } from '~/components/ui/button'
import { ONBOARDING_SECTIONS } from '~/constants'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function BodyMetrics({
	setShowSection,
	height,
	weight,
	showSection
}: {
	setShowSection: (section: string) => void
	height: {
		value: number
		setValue: (height: number) => void
		unit: string
		setUnit: (unit: string) => void
		decimal: number
		setDecimal: (decimal: number) => void
	}
	weight: {
		value: number
		setValue: (weight: number) => void
		unit: string
		setUnit: (unit: string) => void
	}
	showSection: boolean
}) {
	let heightLength = height.unit === 'ft' ? 8 : 250
	if (height.unit === 'm') heightLength = 2

	const decimalLength = height.unit === 'ft' ? 11 : 99

	const handleClickNext = () => {
		if (height.value && weight.value) {
			setShowSection(ONBOARDING_SECTIONS.goals)
		}
	}

	return (
		<section
			className={`z-10 mx-5  ${showSection ? 'flex' : 'hidden'} flex-col items-center space-y-16 text-center sm:mx-auto`}
			hidden={!showSection}
		>
			<h1 className='font-serif text-3xl font-bold text-green-600 dark:text-green-500'>
				trac<span className='text-wood-950 dark:text-wood-100'>ky</span>
			</h1>
			<div className='space-y-10'>
				<article className='space-y-1'>
					<h2 className='font-display max-w-md text-start text-sm font-semibold transition-colors'>
						What is your height?
					</h2>
					<div
						className={`flex items-center ${height.unit === 'cm' ? 'space-x-2' : 'space-x-3'}`}
					>
						<span className='flex items-center space-x-1'>
							<Select
								name='height'
								defaultValue={height.value.toString()}
								required
								onValueChange={value => height.setValue(Number(value))}
							>
								<SelectTrigger
									className={`${height.unit === 'cm' ? 'w-[180px]' : 'w-[80px]'} border-gray-400`}
								>
									<SelectValue placeholder={height.toString()} />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Height</SelectLabel>
										{Array.from({ length: heightLength }, (_, i) => (
											<SelectItem key={i} value={String(i + 1)}>
												{i + 1}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
							{height.unit !== 'cm' && (
								<>
									<p
										className={`${height.unit === 'ft' ? '-mt-5' : 'mt-5'} font-semibold`}
									>
										{height.unit === 'ft' ? '″' : '.'}
									</p>
									<Select
										name='heightDecimal'
										defaultValue={height.decimal.toString()}
										required
										onValueChange={value => height.setDecimal(Number(value))}
									>
										<SelectTrigger className='w-[80px] border-gray-400'>
											<SelectValue placeholder={height.decimal.toString()} />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Height</SelectLabel>
												{Array.from({ length: decimalLength }, (_, i) => (
													<SelectItem key={i} value={i.toString()}>
														{i}
													</SelectItem>
												))}
											</SelectGroup>
										</SelectContent>
									</Select>
								</>
							)}
						</span>
						<Select
							name='heightUnit'
							defaultValue={height.unit}
							onValueChange={value => height.setUnit(value)}
						>
							<SelectTrigger className='w-[80px] border-gray-400'>
								<SelectValue placeholder={height.unit} />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Unity of measure</SelectLabel>
									<SelectItem value='ft'>ft</SelectItem>
									<SelectItem value='m'>m</SelectItem>
									<SelectItem value='cm'>cm</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</article>
				<article className='space-y-1'>
					<h2 className='font-display max-w-md text-start text-sm font-semibold transition-colors'>
						What is your weight?
					</h2>
					<div className='flex items-center space-x-2'>
						<Input
							type='number'
							name='weight'
							placeholder='weight'
							className='w-[180px] border-gray-400 focus:border-gray-300'
							required
							onChange={e => weight.setValue(Number(e.target.value))}
							value={weight.value > 0 ? weight.value : ''}
						/>
						<Select
							name='weightUnit'
							defaultValue={weight.unit}
							onValueChange={value => weight.setUnit(value)}
						>
							<SelectTrigger className='w-[80px] border-gray-400'>
								<SelectValue placeholder={weight.unit} />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Unity of measure</SelectLabel>
									<SelectItem value='lb'>lb</SelectItem>
									<SelectItem value='kg'>kg</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</article>
			</div>
			<footer className='flex w-full justify-between'>
				<Button
					type='button'
					variant='secondary'
					className='text-base font-medium'
					onClick={() => setShowSection(ONBOARDING_SECTIONS.personal)}
				>
					<ChevronLeft />
				</Button>
				<Button
					type='button'
					variant={`${height.value && weight.value ? 'default' : 'secondary'}`}
					className='text-base font-medium'
					onClick={handleClickNext}
					disabled={!height.value || !weight.value}
				>
					<ChevronRight />
				</Button>
			</footer>
		</section>
	)
}
