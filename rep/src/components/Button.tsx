import React from "react";

// Helper to merge class names
const cn = (...classes: (string | undefined | null | false)[]) =>
  classes.filter(Boolean).join(" ");

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline";
};

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  variant = "solid",
  ...props
}) => {
  const baseClasses =
    "font-mono text-sm uppercase tracking-widest font-bold py-4 px-8 transition-all duration-300 ease-in-out inline-flex items-center justify-center gap-2 disabled:opacity-50";

  const variantClasses = {
    solid: "bg-signal text-white hover:bg-oxford hover:text-white",
    outline:
      "bg-transparent border border-oxford/20 text-oxford hover:bg-oxford hover:text-white hover:border-oxford",
  };

  const mergedClasses = cn(baseClasses, variantClasses[variant], className);

  return (
    <button className={mergedClasses} {...props}>
      {children}
    </button>
  );
};
