import React from "react";
import Link from "next/link";
import { BadgeDollarSign, BadgeDollarSignIcon } from "lucide-react";
import Balance from "@/components/Balance";
import BalanceSmall from "@/components/BalanceSmall";

const potsDetails = [
  {
    title: "Savings",
    badgeColor: "",
    value: 159,
    color: "#9C27B0",
  },
  {
    title: "Concert Ticket",
    badgeColor: "",
    value: 110,
    color: "#F2CEAF",
  },
  {
    title: "Gift",
    badgeColor: "",
    value: 40,
    color: "#625F6E",
  },
  {
    title: "New Laptop",
    badgeColor: "",
    value: 10,
    color: "hsl(189, 50%, 67%)",
  },
];

const TOP_2_POT_DETAILS = potsDetails.slice(0, 2);
const LAST_2_POT_DETAILS = potsDetails.slice(
  potsDetails.length - 2,
  potsDetails.length
);

const PotsCard = () => {
  return (
    <div className="w-full px-6 py-7 bg-white rounded-3xl flex flex-col gap-4">
      <div className="w-full flex justify-between items-center">
        <p className="font-medium text-[20px] font-young-serif">Pots</p>
        <Link
          href={"/pots"}
          className="text-[14px] flex gap-3"
          style={{
            color: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <span>See Details</span> <span>{">"}</span>
        </Link>
      </div>
      <div className="flex w-full gap-4 md:flex-row flex-col">
        <div className="bg-[#E4E0F3] flex-1/2 flex items-center px-5 py-5 gap-5 rounded-2xl">
          <BadgeDollarSignIcon className="text-[100px]" />
          <div className="flex flex-col gap-1">
            <p
              className="text-[14px]"
              style={{
                color: "rgba(0, 0, 0, 0.8)",
              }}
            >
              Total saved
            </p>
            <Balance>100</Balance>
          </div>
        </div>
        <div className="flex-1/2 flex gap-2">
          <div className="flex-1/2 flex flex-col justify-between gap-4">
            {TOP_2_POT_DETAILS.map((i, idx) => {
              return (
                <div key={idx} className="flex gap-3">
                  <div
                    className="min-w-[4px]"
                    style={{
                      backgroundColor: i.color,
                    }}
                  />
                  <div className="flex flex-col">
                    <p
                      className="text-[14px]"
                      style={{
                        color: "rgba(0, 0, 0, 0.8)",
                      }}
                    >
                      {i.title}
                    </p>
                    <BalanceSmall>{i.value}</BalanceSmall>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex-1/2 flex flex-col justify-between gap-4">
            {LAST_2_POT_DETAILS.map((i, idx) => {
              return (
                <div key={idx} className="flex gap-3">
                  <div
                    className="min-w-[4px]"
                    style={{
                      backgroundColor: i.color,
                    }}
                  />
                  <div className="flex flex-col">
                    <p
                      className="text-[14px]"
                      style={{
                        color: "rgba(0, 0, 0, 0.8)",
                      }}
                    >
                      {i.title}
                    </p>
                    <BalanceSmall>{i.value}</BalanceSmall>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PotsCard;
