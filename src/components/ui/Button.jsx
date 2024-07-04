import * as React from "react"
import PropTypes from "prop-types";
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"
import { Icons } from "../Icons";

const buttonVariants = cva(
  "inline-flex items-center font-roboto justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-70 active:scale-[.98]",
  {
    variants: {
      variant: {
        default: "bg-red-500 border border-red-700 text-white hover:bg-red-500/95",
        black: "bg-black text-white hover:bg-black/95",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-gray-400 bg-background/60 hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        danger: "bg-red-500 text-white",
        ghost: "text-gray-800/80 hover:bg-accent hover:text-gray-900",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        ghost: "p-1.5",
        default: "h-8 px-4 py-2",
        sm: "h-8 rounded-md px-[.55rem] text-[.8rem]",
        lg: "h-12 rounded-md px-4 text-[1.15rem]",
        icon: "h-9 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, isLoading, children, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <>
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props} 
      >
        {children}
        {isLoading && (
          <Icons.loader strokeWidth={2.8} className="w-4 h-4 animate-spin ml-2" />
        )}
      </Comp>
    </>
  );
})
Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node,
  asChild: PropTypes.bool,
  isLoading: PropTypes.bool,
}
Button.displayName = "Button"

export { Button, buttonVariants }
