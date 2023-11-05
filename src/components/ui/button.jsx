import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

import { cn } from '/src/utils/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        border:
          'border-2 border-primary bg-white font-bold text-primary rounded-full hover:border-hardPrimary hover:bg-white hover:text-hardPrimary',
        ghost: 'bg-grays-gray100 text-primary rounded-full font-bold hover:bg-grays-gray200 hover:text-hardPrimary',
        fill: 'bg-primary rounded-full text-white hover:bg-hardPrimary',
        link: 'text-primary underline-offset-4 hover:underline',
        secondary: 'bg-white text-primary rounded-full hover:text-hardPrimary font-[600]',
      },
      size: {
        default: 'px-6 py-[14px]',
        sm: 'rounded-full px-6 py-[10px] text-[12px]',
        md: 'rounded-full px-8 py-[14px] text-[14px]',
        lg: 'rounded-full px-10 py-4 text-[16px]',
        xl: 'py-4 px-32 text-[16px] rounded-full',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})
Button.displayName = 'Button'

export { Button, buttonVariants }
