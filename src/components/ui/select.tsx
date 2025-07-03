'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

import { cn } from '@/lib/utils';

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'reactplayer-flex reactplayer-h-10 reactplayer-w-full reactplayer-items-center reactplayer-justify-between !reactplayer-rounded-[4px] reactplayer-border reactplayer-border-input reactplayer-bg-background reactplayer-px-3 reactplayer-py-2 reactplayer-text-sm reactplayer-ring-offset-background data-[placeholder]:reactplayer-text-muted-foreground focus:reactplayer-outline-none focus:reactplayer-ring-2 focus:reactplayer-ring-ring focus:reactplayer-ring-offset-2 disabled:reactplayer-cursor-not-allowed disabled:reactplayer-opacity-50 [&>span]:reactplayer-line-clamp-1',
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="reactplayer-h-4 reactplayer-w-4 reactplayer-opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      'reactplayer-flex reactplayer-cursor-default reactplayer-items-center reactplayer-justify-center reactplayer-py-1',
      className
    )}
    {...props}
  >
    <ChevronUp className="reactplayer-h-4 reactplayer-w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      'reactplayer-flex reactplayer-cursor-default reactplayer-items-center reactplayer-justify-center reactplayer-py-1',
      className
    )}
    {...props}
  >
    <ChevronDown className="reactplayer-h-4 reactplayer-w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'reactplayer-relative reactplayer-z-50 reactplayer-max-h-[--radix-select-content-available-height] reactplayer-min-w-[8rem] reactplayer-overflow-y-auto reactplayer-overflow-x-hidden !reactplayer-rounded-[4px] reactplayer-border reactplayer-bg-popover reactplayer-text-popover-foreground reactplayer-shadow-md data-[state=open]:reactplayer-animate-in data-[state=closed]:reactplayer-animate-out data-[state=closed]:reactplayer-fade-out-0 data-[state=open]:reactplayer-fade-in-0 data-[state=closed]:reactplayer-zoom-out-95 data-[state=open]:reactplayer-zoom-in-95 data-[side=bottom]:reactplayer-slide-in-from-top-2 data-[side=left]:reactplayer-slide-in-from-right-2 data-[side=right]:reactplayer-slide-in-from-left-2 data-[side=top]:reactplayer-slide-in-from-bottom-2 reactplayer-origin-[--radix-select-content-transform-origin]',
        position === 'popper' &&
          'data-[side=bottom]:reactplayer-translate-y-1 data-[side=left]:reactplayer--translate-x-1 data-[side=right]:reactplayer-translate-x-1 data-[side=top]:reactplayer--translate-y-1',
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          'reactplayer-p-1',
          position === 'popper' &&
            'reactplayer-h-[var(--radix-select-trigger-height)] reactplayer-w-full reactplayer-min-w-[var(--radix-select-trigger-width)]'
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('reactplayer-py-1.5 reactplayer-pl-8 reactplayer-pr-2 reactplayer-text-sm reactplayer-font-semibold', className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'reactplayer-relative reactplayer-flex reactplayer-w-full reactplayer-cursor-default reactplayer-select-none reactplayer-items-center reactplayer-rounded-sm reactplayer-py-1.5 reactplayer-pl-8 reactplayer-pr-2 reactplayer-text-sm reactplayer-outline-none focus:reactplayer-bg-accent focus:reactplayer-text-accent-foreground data-[disabled]:reactplayer-pointer-events-none data-[disabled]:reactplayer-opacity-50',
      className
    )}
    {...props}
  >
    <span className="reactplayer-absolute reactplayer-left-2 reactplayer-flex reactplayer-h-3.5 reactplayer-w-3.5 reactplayer-items-center reactplayer-justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="reactplayer-h-4 reactplayer-w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>
      {children}
    </SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('reactplayer--mx-1 reactplayer-my-1 reactplayer-h-px reactplayer-bg-muted', className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
