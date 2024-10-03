import FoodDialog from './_components/food/food-dialog'
import ExerciseDialog from './_components/exercise/exercise-dialog'
import NutritionGraphic from './_sections/nutrition-graphic'
import InsightsAndAnalitics from './_sections/insights-analytics'
import DataAndHabits from './_sections/data-habits'
import { calculateNutritionalNeeds } from '~/lib/utils'
import { currentUser } from '@clerk/nextjs/server'
import {
	NutritionMetricsPerDay,
	PublicMetadata
} from '~/types'
import { db } from '~/server/db'
import { consumption, food } from '~/server/db/schema'
import { eq, and, gte } from 'drizzle-orm'

export default async function DashboardPage() {
	const user = await currentUser()
	if (!user) return null
	const userMetadata = user.publicMetadata as PublicMetadata
	const nutritionMeatrics = calculateNutritionalNeeds(userMetadata)
	const dayOfWeek = new Date()
	dayOfWeek.setDate(dayOfWeek.getDate() - dayOfWeek.getDay() - 1)
	const result = await db
		.select()
		.from(consumption)
		.innerJoin(food, eq(consumption.foodId, food.id))
		.where(
			and(
				eq(consumption.userId, user.id),
				gte(consumption.createdAt, dayOfWeek)
			)
		)
		
	const nutritionMeatricsPerDay: NutritionMetricsPerDay = {}
	Array.from({ length: 7 }).forEach((_, index) => {
		nutritionMeatricsPerDay[index + 1] = structuredClone(nutritionMeatrics)
	})

	result.forEach(({ consumption, food }) => {
		const calories =
			(Number(consumption.portion) / Number(food.servingSize)) *
			Number(food.kcal)
		const protein =
			(Number(consumption.portion) / Number(food.servingSize)) *
			Number(food.protein)
		const carbs =
			(Number(consumption.portion) / Number(food.servingSize)) *
			Number(food.carbs)
		const fats =
			(Number(consumption.portion) / Number(food.servingSize)) *
			Number(food.fat)

		const day = consumption.createdAt.getDay()
		if (!nutritionMeatricsPerDay[day]) {
			nutritionMeatricsPerDay[day] = structuredClone(nutritionMeatrics)
		}

		nutritionMeatricsPerDay[day].calories.consumed += calories
		nutritionMeatricsPerDay[day].protein.consumed += protein
		nutritionMeatricsPerDay[day].carbs.consumed += carbs
		nutritionMeatricsPerDay[day].fats.consumed += fats
	})

	return (
		<section className='xl:ms-5 h-full w-full overflow-auto xl:px-5 pb-10 pt-10'>
			<div className='flex justify-between'>
				<h1 className='mb-5 text-xl font-semibold uppercase'>
					{new Date().toLocaleDateString('en-US', {
						weekday: 'long',
						month: 'long',
						day: 'numeric'
					})}
				</h1>

				<header className='float-end flex space-x-5'>
					<FoodDialog />
					<ExerciseDialog />
				</header>
			</div>
			<div className='lg:flex space-x-3 lg:justify-between pt-5 flex-col md:flex-row space-y-3'>
				<NutritionGraphic nutritionMetrics={nutritionMeatricsPerDay} />
				<InsightsAndAnalitics
					expenditure={nutritionMeatrics.calories.needed}
					{...userMetadata}
				/>
			</div>
			<DataAndHabits {...userMetadata} />
		</section>
	)
}
