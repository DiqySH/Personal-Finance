import BalanceSmall from "@/components/BalanceSmall";
import Link from "next/link";

const recurringBillsDetails = [
  {
    title: "Paid Bills",
    value: 190.0,
    color: "#9C27B0",
  },
  {
    title: "Total Upcoming",
    value: 194.98,
    color: "#F2CEAF",
  },
  {
    title: "Due Soon",
    value: 59.98,
    color: "#625F6E",
  },
];

const RecurringBillsCard = () => {
  return (
    <div className="w-full px-6 py-7 bg-white rounded-3xl flex flex-col gap-4">
      <div className="w-full flex justify-between items-center">
        <p className="font-medium text-[20px] font-young-serif">
          Recurring Bills
        </p>
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
      <div className="flex flex-col w-full gap-3">
        {recurringBillsDetails.map((i, idx) => {
          return (
            <div
              className={`flex justify-between w-full items-center font-bold px-3 border-l-4 border-solid bg-[#E4E0F3] py-5 rounded-xl`}
              key={idx}
              style={{
                borderColor: i.color,
              }}
            >
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
          );
        })}
      </div>
    </div>
  );
};

export default RecurringBillsCard;
