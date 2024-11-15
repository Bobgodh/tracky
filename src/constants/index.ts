import { CircleDot, Coffee, Moon, Sun, Utensils } from 'lucide-react'
import {
	Cleaner,
	Contruction,
	Cycling,
	Gym,
	Runnig,
	SoccerKick,
	Stretching,
	Treadmill
} from '~/components/ui/icons'

export const ONBOARDING_SECTIONS = {
	personal: 'personal-info',
	metrics: 'body-metrics',
	goals: 'fitness-goals'
}

export const GOALS_OPTIONS = {
	loss: 'loss',
	maintain: 'maintain',
	gain: 'gain'
}

export const ACTIVITY_LEVELS = {
	sedentary: 'sedentary',
	moderate: 'moderate',
	active: 'active'
}

export const STAGGER_CHILD_VARIANTS = {
	hidden: {
		opacity: 0,
		y: 20
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			type: 'spring'
		}
	}
}

export const UNITS_MAP = {
	g: 'gram',
	ml: 'milliliter',
	oz: 'ounce',
	cup: 'cup'
}

export const EXERCISE_ICONS: {
	[key: string]: React.FC<React.SVGProps<SVGSVGElement>>
} = {
	Gym: Gym,
	Cardio: Treadmill,
	'Household Activity': Cleaner,
	'Individual Sport': Runnig,
	'Team Sport': SoccerKick,
	'Outdoor Activity': Cycling,
	'Stretching & Mobility': Stretching,
	'Ocupational Activity': Contruction
}

export const EFFORT_LEVELS = {
	easy: { label: 'Easy', multiplier: 1 },
	moderate: { label: 'Moderate', multiplier: 1.2 },
	hard: { label: 'Hard', multiplier: 1.55 },
	'very-hard': { label: 'Very Hard', multiplier: 1.725 }
}

export const GOAL_FACTORS = {
	gain: 1.1,
	maintain: 1.0,
	lose: 0.9
}

export const ACTIVITY_FACTORS = {
	sedentary: 1.2,
	moderate: 1.55,
	active: 1.9
}

export const DAILY_MEAL_ICONS = {
	breakfast: Sun,
	lunch: Utensils,
	snack: Coffee,
	dinner: Moon,
	uncategorized: CircleDot
}
