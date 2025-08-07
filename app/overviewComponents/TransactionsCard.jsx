import React from "react";
import Link from "next/link";
import BalanceSmall from "@/components/BalanceSmall";
const transactionDetails = [
  { name: "Andy", isPlus: true, date: "06-08-2025", nominal: 150 },
  { name: "Brian", isPlus: false, date: "05-08-2025", nominal: 75 },
  { name: "Claire", isPlus: true, date: "04-08-2025", nominal: 200 },
  { name: "Diana", isPlus: false, date: "03-08-2025", nominal: 50 },
  { name: "Ethan", isPlus: true, date: "02-08-2025", nominal: 120 },
];

const shortMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const TransactionsCard = () => {
  return (
    <div className="w-full px-6 py-7 bg-white rounded-3xl flex flex-col gap-4">
      <div className="w-full flex justify-between items-center">
        <p className="font-medium text-[20px] font-young-serif">Transactions</p>
        <Link
          href={"/transactions"}
          className="text-[14px] flex gap-3"
          style={{
            color: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <span>View all</span> <span>{">"}</span>
        </Link>
      </div>
      <div className="flex flex-col w-full gap-5">
        {transactionDetails.map((i, idx) => {
          const month = i.date.slice(3, 5);
          const date = i.date.slice(0, 2);
          const year = i.date.slice(6, 10);
          const fullDate = `${date} ${shortMonths[Number(month) - 1]} ${year}`;
          return (
            <div className="w-full flex justify-between items-center" key={idx}>
              <p className="font-bold">{i.name}</p>
              <div className="flex flex-col gap-1">
                <div className={`${i.isPlus ? "text-green-500" : ""} flex gap-1`}>
                  <p className="font-bold">{i.isPlus ? "+" : "-"}</p>
                  <BalanceSmall className={`${i.isPlus ? "text-green-500" : ""}`}>{i.nominal}</BalanceSmall>
                </div>
                <p
                  className="text-[14px]"
                  style={{
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  {fullDate}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransactionsCard;
