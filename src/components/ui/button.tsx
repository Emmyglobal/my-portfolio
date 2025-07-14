// src/components/ui/button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = "default",
  ...props
}) => {
  const base = "px-4 py-2 rounded-md font-semibold transition";
  const variants = {
    default: "bg-royalblue-600 text-white hover:bg-royalblue-700",
    outline: "border border-royalblue-600 text-royalblue-600 hover:bg-royalblue-50",
    ghost: "text-royalblue-600 hover:underline",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
};
