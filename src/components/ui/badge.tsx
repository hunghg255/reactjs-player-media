import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "richtext-inline-flex richtext-items-center richtext-rounded-full richtext-border richtext-px-2.5 richtext-py-0.5 richtext-text-xs richtext-font-semibold richtext-transition-colors focus:richtext-outline-none focus:richtext-ring-2 focus:richtext-ring-ring focus:richtext-ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "richtext-border-transparent richtext-bg-primary richtext-text-primary-foreground hover:richtext-bg-primary/80",
        secondary:
          "richtext-border-transparent richtext-bg-secondary richtext-text-secondary-foreground hover:richtext-bg-secondary/80",
        destructive:
          "richtext-border-transparent richtext-bg-destructive richtext-text-destructive-foreground hover:richtext-bg-destructive/80",
        outline: "richtext-text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
