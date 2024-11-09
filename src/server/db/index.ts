import { drizzle } from 'drizzle-orm/vercel-postgres'
import { createClient } from '@vercel/postgres'
import * as schema from './schema'

const client = createClient()
export const db = drizzle(client, { schema })
