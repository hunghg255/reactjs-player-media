'use client';

import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';

import { cn } from '@/lib/utils';

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'reactplayer-flex reactplayer-cursor-default reactplayer-select-none reactplayer-items-center reactplayer-gap-2 reactplayer-rounded-sm reactplayer-px-2 reactplayer-py-1.5 reactplayer-text-sm reactplayer-outline-none focus:reactplayer-bg-accent data-[state=open]:reactplayer-bg-accent [&_svg]:reactplayer-pointer-events-none [&_svg]:reactplayer-size-4 [&_svg]:reactplayer-shrink-0',
      inset && 'reactplayer-pl-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="reactplayer-ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      'reactplayer-z-50 reactplayer-min-w-[8rem] reactplayer-overflow-hidden reactplayer-rounded-md reactplayer-border reactplayer-bg-popover reactplayer-p-1 reactplayer-text-popover-foreground reactplayer-shadow-lg data-[state=open]:reactplayer-animate-in data-[state=closed]:reactplayer-animate-out data-[state=closed]:reactplayer-fade-out-0 data-[state=open]:reactplayer-fade-in-0 data-[state=closed]:reactplayer-zoom-out-95 data-[state=open]:reactplayer-zoom-in-95 data-[side=bottom]:reactplayer-slide-in-from-top-2 data-[side=left]:reactplayer-slide-in-from-right-2 data-[side=right]:reactplayer-slide-in-from-left-2 data-[side=top]:reactplayer-slide-in-from-bottom-2 reactplayer-origin-[--radix-dropdown-menu-content-transform-origin]',
      className
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'reactplayer-z-50 reactplayer-max-h-[var(--radix-dropdown-menu-content-available-height)] reactplayer-min-w-[8rem] reactplayer-overflow-y-auto reactplayer-overflow-x-hidden reactplayer-rounded-md reactplayer-border reactplayer-bg-popover reactplayer-p-1 reactplayer-text-popover-foreground reactplayer-shadow-md data-[state=open]:reactplayer-animate-in data-[state=closed]:reactplayer-animate-out data-[state=closed]:reactplayer-fade-out-0 data-[state=open]:reactplayer-fade-in-0 data-[state=closed]:reactplayer-zoom-out-95 data-[state=open]:reactplayer-zoom-in-95 data-[side=bottom]:reactplayer-slide-in-from-top-2 data-[side=left]:reactplayer-slide-in-from-right-2 data-[side=right]:reactplayer-slide-in-from-left-2 data-[side=top]:reactplayer-slide-in-from-bottom-2 reactplayer-origin-[--radix-dropdown-menu-content-transform-origin]',
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      'reactplayer-relative reactplayer-flex reactplayer-cursor-default reactplayer-select-none reactplayer-items-center reactplayer-gap-2 reactplayer-rounded-sm reactplayer-px-2 reactplayer-py-1.5 reactplayer-text-sm reactplayer-outline-none reactplayer-transition-colors focus:reactplayer-bg-accent focus:reactplayer-text-accent-foreground data-[disabled]:reactplayer-pointer-events-none data-[disabled]:reactplayer-opacity-50 [&_svg]:reactplayer-pointer-events-none [&_svg]:reactplayer-size-4 [&_svg]:reactplayer-shrink-0',
      inset && 'reactplayer-pl-8',
      className
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'reactplayer-relative reactplayer-flex reactplayer-cursor-default reactplayer-select-none reactplayer-items-center reactplayer-rounded-sm reactplayer-py-1.5 reactplayer-pl-8 reactplayer-pr-2 reactplayer-text-sm reactplayer-outline-none reactplayer-transition-colors focus:reactplayer-bg-accent focus:reactplayer-text-accent-foreground data-[disabled]:reactplayer-pointer-events-none data-[disabled]:reactplayer-opacity-50',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="reactplayer-absolute reactplayer-left-2 reactplayer-flex reactplayer-h-3.5 reactplayer-w-3.5 reactplayer-items-center reactplayer-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="reactplayer-h-4 reactplayer-w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      'reactplayer-relative reactplayer-flex reactplayer-cursor-default reactplayer-select-none reactplayer-items-center reactplayer-rounded-sm reactplayer-py-1.5 reactplayer-pl-8 reactplayer-pr-2 reactplayer-text-sm reactplayer-outline-none reactplayer-transition-colors focus:reactplayer-bg-accent focus:reactplayer-text-accent-foreground data-[disabled]:reactplayer-pointer-events-none data-[disabled]:reactplayer-opacity-50',
      className
    )}
    {...props}
  >
    <span className="reactplayer-absolute reactplayer-left-2 reactplayer-flex reactplayer-h-3.5 reactplayer-w-3.5 reactplayer-items-center reactplayer-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="reactplayer-h-2 reactplayer-w-2 reactplayer-fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      'reactplayer-px-2 reactplayer-py-1.5 reactplayer-text-sm reactplayer-font-semibold',
      inset && 'reactplayer-pl-8',
      className
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn('reactplayer--mx-1 reactplayer-my-1 reactplayer-h-px reactplayer-bg-muted', className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

function DropdownMenuShortcut ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn('reactplayer-ml-auto reactplayer-text-xs reactplayer-tracking-widest reactplayer-opacity-60', className)}
      {...props}
    />
  );
}
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
