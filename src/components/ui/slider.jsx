import React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '/src/utils/utils'

const Slider = React.forwardRef(({ className, min, max, step, formatLabel, value, onValueChange, ...props }, ref) => {
  const initialValue = Array.isArray(value) ? value : [min, max]

  const handleValueChange = (newValues) => {
    // setLocalValues(newValues)
    if (onValueChange) {
      onValueChange(newValues)
    }
  }

  // console.log(localValues)

  return (
    <SliderPrimitive.Root
      ref={ref}
      min={min}
      max={max}
      step={step}
      value={initialValue}
      onValueChange={handleValueChange}
      className={cn('relative flex w-full touch-none select-none items-center', className)}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
        <SliderPrimitive.Range className="absolute h-full bg-primary" />
      </SliderPrimitive.Track>
      {initialValue.map((value, index) => (
        <React.Fragment key={index}>
          <div
            className="absolute text-center"
            style={{
              left: `calc(${((value - min) / (max - min)) * 100}% + 0px)`,
              top: `10px`,
            }}
          >
            <span className="text-xs">{formatLabel ? formatLabel(value) : value}</span>
          </div>
          <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
        </React.Fragment>
      ))}
    </SliderPrimitive.Root>
  )
})

Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
