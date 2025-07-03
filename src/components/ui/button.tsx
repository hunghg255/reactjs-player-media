import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'reactplayer-inline-flex reactplayer-items-center reactplayer-justify-center reactplayer-gap-2 reactplayer-whitespace-nowrap reactplayer-rounded-md reactplayer-text-sm reactplayer-font-medium reactplayer-ring-offset-background reactplayer-transition-colors focus-visible:reactplayer-outline-none focus-visible:reactplayer-ring-2 focus-visible:reactplayer-ring-ring focus-visible:reactplayer-ring-offset-2 disabled:reactplayer-pointer-events-none disabled:reactplayer-opacity-50 [&_svg]:reactplayer-pointer-events-none [&_svg]:reactplayer-size-4 [&_svg]:reactplayer-shrink-0',
  {
    variants: {
      variant: {
        default: 'reactplayer-bg-primary reactplayer-text-primary-foreground hover:reactplayer-bg-primary/90',
        destructive:
          'reactplayer-bg-destructive reactplayer-text-destructive-foreground hover:reactplayer-bg-destructive/90',
        outline:
          'reactplayer-border reactplayer-border-input reactplayer-bg-background hover:reactplayer-bg-accent hover:reactplayer-text-accent-foreground',
        secondary:
          'reactplayer-bg-secondary reactplayer-text-secondary-foreground hover:reactplayer-bg-secondary/80',
        ghost: 'hover:reactplayer-bg-accent hover:reactplayer-text-accent-foreground',
        link: 'reactplayer-text-primary reactplayer-underline-offset-4 hover:reactplayer-underline',
      },
      size: {
        default: 'reactplayer-h-10 reactplayer-px-4 reactplayer-py-2',
        sm: 'reactplayer-h-9 reactplayer-rounded-md reactplayer-px-3',
        lg: 'reactplayer-h-11 reactplayer-rounded-md reactplayer-px-8',
        icon: 'reactplayer-h-10 reactplayer-w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
