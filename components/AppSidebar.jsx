"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeRounded,
  PaymentRounded,
  MoneyRounded,
  BlindsClosedRounded,
  CardMembershipRounded,
  AccountBalance,
  DoorBack,
} from "@mui/icons-material";
import { useWindowSize } from "@uidotdev/usehooks";

const sidebarContents = [
  {
    title: "Overview",
    url: "/",
    icon: <HomeRounded color="secondary" />,
  },
  {
    title: "Transactions",
    url: "/transactions",
    icon: <PaymentRounded color="secondary" />,
  },
  {
    title: "Budgets",
    url: "/budgets",
    icon: <MoneyRounded color="secondary" />,
  },
  {
    title: "Pots",
    url: "/pots",
    icon: <CardMembershipRounded color="secondary" />,
  },
  {
    title: "Recurring Bills",
    url: "/recurring-bills",
    icon: <BlindsClosedRounded color="secondary" />,
  },
];

const sidebarFooters = [
  {
    title: "Account",
    url: "/account",
    icon: <AccountBalance />,
  },
  {
    title: "Sign Out",
    url: "/sign-out",
    icon: <DoorBack />,
  },
];

const AppSidebar = () => {
  const {width, height} = useWindowSize()
  const pathName = usePathname();
  console.log(width);
  return (
    <nav className="h-fit lg:max-w-[275px] md:max-w-[80px] w-full max-w-screen min-w-[80px] gradientBlack md:rounded-tr-3xl md:rounded-br-3xl flex md:flex-col md:pt-8 flex-row md:relative fixed md:h-screen bottom-0 pt-2 z-9999999">
      <div className="pl-4 pb-6  md:flex hidden">
        <img src={width <= 1100 ? "/logo-mobile.svg" :"/logo.svg"} alt="" className="min-[1100px]:max-w-[120px] max-w-[25px]"/>
      </div>
      <div className="flex md:flex-col gap-2 flex-row md:w-fit w-full md:justify-baseline justify-around">
        {sidebarContents.map((i, idx) => {
          return (
            <Link
              key={idx}
              href={i.url}
              className={`flex gap-3 md:pl-4 md:mr-6 py-3 rounded-tr-2xl md:rounded-br-2xl md:rounded-tl-[0px] rounded-tl-2xl text-[14px] items-center border-solid font-medium md:w-full w-fit md:px-0 px-4 ${
                pathName === i.url
                  ? "text-black bg-white border-[#9C27B0] md:border-l-6 md:border-b-0 border-b-6"
                  : "border-[#1f1f1f] hover:bg-[var(--bg-white-opacity)] border-l-0"
              }`}
              style={{
                color: pathName === i.url ? "" : "rgba(255, 255, 255, 0.8)",
                transition: "all ease-in-out 250ms"
              }}
            >
              {i.icon}
              <p className="lg:flex hidden">{i.title}</p>
            </Link>
          );
        })}
      </div>
      <div></div>
    </nav>
  );
};

export default AppSidebar;
