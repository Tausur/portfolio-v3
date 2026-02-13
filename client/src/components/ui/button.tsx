import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils"; // your utility to merge class names

// Static button variants without cva
const BUTTON_VARIANTS = {
  default: "bg-primary text-primary-foreground border border-primary-border",
  destructive: "bg-destructive text-destructive-foreground border border-destructive-border",
  outline: "border border-gray-300 shadow-sm active:shadow-none",
  secondary: "border bg-secondary text-secondary-foreground border-secondary-border",
  ghost: "border border-transparent",
};

const BUTTON_SIZES = {
  default: "min-h-9 px-4 py-2",
  sm: "min-h-8 px-3 text-xs rounded-md",
  lg: "min-h-10 px-8 rounded-md",
  icon: "h-9 w-9 flex items-center justify-center",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof BUTTON_VARIANTS;
  size?: keyof typeof BUTTON_SIZES;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(BUTTON_VARIANTS[variant], BUTTON_SIZES[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };