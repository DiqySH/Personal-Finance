import { cn } from "@/lib/utils";
import React from "react";

const BalanceSmall = ({ children, className, style }) => {
  return (
    <p className={cn("text-black font-bold", className)} style={style}>
      {new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(children)}
    </p>
  );
};

export default BalanceSmall;
