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
      'richtext-relative richtext-flex richtext-w-full richtext-touch-none richtext-select-none richtext-items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="richtext-relative richtext-h-2 richtext-w-full richtext-grow richtext-overflow-hidden richtext-rounded-full richtext-bg-secondary">
      <SliderPrimitive.Range className="richtext-absolute richtext-h-full richtext-bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="richtext-block richtext-h-5 richtext-w-5 richtext-rounded-full richtext-border-2 richtext-border-primary richtext-bg-background richtext-ring-offset-background richtext-transition-colors focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
