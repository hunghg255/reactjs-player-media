import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'reactplayer-inline-flex reactplayer-items-center reactplayer-rounded-full reactplayer-border reactplayer-px-2.5 reactplayer-py-0.5 reactplayer-text-xs reactplayer-font-semibold reactplayer-transition-colors focus:reactplayer-outline-none focus:reactplayer-ring-2 focus:reactplayer-ring-ring focus:reactplayer-ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'reactplayer-border-transparent reactplayer-bg-primary reactplayer-text-primary-foreground hover:reactplayer-bg-primary/80',
        secondary:
          'reactplayer-border-transparent reactplayer-bg-secondary reactplayer-text-secondary-foreground hover:reactplayer-bg-secondary/80',
        destructive:
          'reactplayer-border-transparent reactplayer-bg-destructive reactplayer-text-destructive-foreground hover:reactplayer-bg-destructive/80',
        outline: 'reactplayer-text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
