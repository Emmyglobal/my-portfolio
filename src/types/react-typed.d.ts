declare module "react-typed" {
  import React from "react";

  interface TypedProps {
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    backDelay?: number;
    loop?: boolean;
    className?: string;
  }

  export const Typed: React.FC<TypedProps>;
}