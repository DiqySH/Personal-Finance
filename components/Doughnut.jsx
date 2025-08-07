"use client";
import { ResponsivePie } from "@nivo/pie";
import { useWindowSize } from "@uidotdev/usehooks";

const data = [
  {
    id: "Entertainment",
    label: "ruby",
    value: 50,
    color: "#9C27B0",
  },
  {
    id: "Bills",
    label: "sass",
    value: 750,
    color: "#F2CEAF",
  },
  {
    id: "Personal Care",
    label: "lisp",
    value: 100,
    color: "#625F6E",
  },
  {
    id: "Dining Out",
    label: "elixir",
    value: 75,
    color: "hsl(189, 50%, 67%)",
  },
];

const Doughnut = () => {
  const { width } = useWindowSize();
  return (
    <ResponsivePie
      data={data}
      innerRadius={0.7}
      padAngle={0.6}
      margin={{ right: 10, top: 10, left: 10, bottom: 10 }}
      width={width <= 1100 ? 200 : 250}
      height={width <= 1100 ? 200 : 250}
      cornerRadius={2}
      borderWidth={2}
      motionConfig={"wobbly"}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      activeInnerRadiusOffset={8}
      enableArcLinkLabels={false}
      enableArcLabels={false}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      colors={{ datum: "data.color" }}
    />
  );
};

export default Doughnut;
