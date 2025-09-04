import * as React from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "../../utils/cn";

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof RadixCheckbox.Root> {}

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof RadixCheckbox.Root>,
  CheckboxProps
>(({ className, ...props }, ref) => {
  return (
    <RadixCheckbox.Root
      ref={ref}
      className={cn(
        "w-5 h-5 border rounded flex items-center justify-center focus-visible:outline-none",
        className
      )}
      {...props}
    >
      <RadixCheckbox.Indicator>
        <Check className="w-5 h-5 text-[var(--color-primary)]" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
});

Checkbox.displayName = "Checkbox";
