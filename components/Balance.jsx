import React from "react";
import { cn } from "@/lib/utils";

const Balance = ({ children, className }) => {
  return (
    <p className={cn("mix-blend-difference text-white text-[28px] font-bold", className)}>
      {new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(children)}
    </p>
  );
};

export default Balance;
