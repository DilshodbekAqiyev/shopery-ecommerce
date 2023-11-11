import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { token } from './constants'
import { instance } from './apiRequest'

// shadcn helper
export function cn(...inputs) {
  
  return twMerge(clsx(inputs))
}

export const getUser = async () => {
  const res = await instance.get('users')
  if (res.statusText == 'OK') {
    const filteredUser = res.data.filter((user) => user.token === token)

    if (filteredUser.length > 0) {
      return filteredUser[0]
    } else {
      console.log('User not found')
      return null
    }
  } else {
    console.log('Failed to getting user')
  }
  return token
}

// getUser().then((user) => console.log(user))
