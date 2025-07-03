'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@/lib/utils';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'reactplayer-relative reactplayer-flex reactplayer-w-full reactplayer-touch-none reactplayer-select-none reactplayer-items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="reactplayer-relative reactplayer-h-2 reactplayer-w-full reactplayer-grow reactplayer-overflow-hidden reactplayer-rounded-full reactplayer-bg-secondary">
      <SliderPrimitive.Range className="reactplayer-absolute reactplayer-h-full reactplayer-bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="reactplayer-block reactplayer-h-5 reactplayer-w-5 reactplayer-rounded-full reactplayer-border-2 reactplayer-border-primary reactplayer-bg-background reactplayer-ring-offset-background reactplayer-transition-colors focus-visible:reactplayer-outline-none focus-visible:reactplayer-ring-2 focus-visible:reactplayer-ring-ring focus-visible:reactplayer-ring-offset-2 disabled:reactplayer-pointer-events-none disabled:reactplayer-opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
