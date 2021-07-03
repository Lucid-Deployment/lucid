import * as React from "react";
import cn from "classnames";

export const Button1 = ({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={cn(
      className,
      "btn btn-y-full btn-ghost-gray focus-visible:ring-2 focus-visible:ring-offset-2 uppercase tracking-wide font-medium linear transition-colors cursor-pointer rounded"
    )}
    {...props}
  />
);
