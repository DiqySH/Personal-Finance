import Link from "next/link";
import Doughnut from "@/components/Doughnut";
import BalanceSmall from "@/components/BalanceSmall";

const data = [
  {
    title: "Entertainment",
    value: 50,
    color: "#9C27B0",
  },
  {
    title: "Bills",
    value: 750,
    color: "#F2CEAF",
  },
  {
    title: "Personal Care",
    value: 100,
    color: "#625F6E",
  },
  {
    title: "Dining Out",
    value: 75,
    color: "hsl(189, 50%, 67%)",
  },
];

const BudgetsCard = () => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  return (
    <div className="w-full px-6 py-7 bg-white rounded-3xl flex flex-col gap-4 overflow-hidden">
      <div className="w-full flex justify-between items-center">
        <p className="font-medium text-[20px] font-young-serif">Budgets</p>
        <Link
          href={"/budgets"}
          className="text-[14px] flex gap-3"
          style={{
            color: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <span>See details</span> <span>{">"}</span>
        </Link>
      </div>
      <div className="flex w-full items-center md:gap-4 flex-col gap-8">
        <div className="flex max-w-[200px] w-full h-[200px] relative min-[1100px]:max-w-[250px] min-[1100px]:h-[250px]">
          <Doughnut />
          <BalanceSmall
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {total}
          </BalanceSmall>
        </div>
        <div className="flex gap-6 flex-wrap w-full">
          {data.map((i, idx) => {
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
  );
};

export default BudgetsCard;
