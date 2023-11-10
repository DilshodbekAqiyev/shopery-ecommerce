import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { token } from './constants'

// shadcn helper
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const getUser = async () => {
  return token
}

// console.log(getUser())
