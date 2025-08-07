"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import BudgetsCard from "./overviewComponents/BudgetsCard";
import CurrentBalance from "./overviewComponents/CurrentBalance";
import Expenses from "./overviewComponents/Expenses";
import Income from "./overviewComponents/Income";
import PotsCard from "./overviewComponents/PotsCard";
import RecurringBillsCard from "./overviewComponents/RecurringBillsCard";
import TransactionsCard from "./overviewComponents/TransactionsCard";
import { useEffect, useState } from "react";

const Home = () => {
  return (
    <main
      className="w-full h-screen overflow-hidden flex"
    >
      <section className="w-full md:px-8 md:py-8 flex flex-col gap-6 overflow-y-scroll px-4 py-4 md:pb-8 pb-28">
        <h1 className="font-young-serif text-[28px] font-medium">Overview</h1>
        <div className="w-full flex gap-4 mt-2 md:flex-nowrap flex-wrap">
          <CurrentBalance />
          <Income />
          <Expenses />
        </div>
        <div className="flex w-full gap-5 min-[1100px]:flex-row flex-col">
          <div className="flex-3/5 flex flex-col gap-5">
            <PotsCard />
            <TransactionsCard />
          </div>
          <div className="flex-2/5 gap-5 flex flex-col">
            <BudgetsCard />
            <RecurringBillsCard />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
