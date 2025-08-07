import Balance from "@/components/Balance";
import React from "react";

const CurrentBalance = () => {
  return (
    <div className="flex flex-1/3 flex-col gradientBlack px-6 py-7 rounded-3xl gap-1">
      <p
      className="text-[14px]"
        style={{
          color: "rgba(255, 255, 255, 0.6)",
        }}
      >
        Current Balance
      </p>
      <Balance>1000</Balance>
    </div>
  );
};

export default CurrentBalance;
