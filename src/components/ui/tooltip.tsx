'use client';

import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '@/lib/utils';

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'reactplayer-z-50 reactplayer-overflow-hidden reactplayer-rounded-md reactplayer-border reactplayer-bg-popover reactplayer-px-3 reactplayer-py-1.5 reactplayer-text-sm reactplayer-text-popover-foreground reactplayer-shadow-md reactplayer-animate-in reactplayer-fade-in-0 reactplayer-zoom-in-95 data-[state=closed]:reactplayer-animate-out data-[state=closed]:reactplayer-fade-out-0 data-[state=closed]:reactplayer-zoom-out-95 data-[side=bottom]:reactplayer-slide-in-from-top-2 data-[side=left]:reactplayer-slide-in-from-right-2 data-[side=right]:reactplayer-slide-in-from-left-2 data-[side=top]:reactplayer-slide-in-from-bottom-2 reactplayer-origin-[--radix-tooltip-content-transform-origin]',
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
