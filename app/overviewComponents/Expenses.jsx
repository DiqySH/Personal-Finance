import Balance from "@/components/Balance";
import React from "react";

const Expenses = () => {
  return (
    <div className="flex flex-1/3 flex-col bg px-6 py-7 rounded-3xl gap-1 bg-white">
      <p
      className="text-[14px]"
        style={{
          color: "rgba(0, 0, 0, 0.6)",
        }}
      >
        Expenses
      </p>
      <Balance>1000</Balance>
    </div>
  );
};

export default Expenses