import type React from "react";
import ChartContainer from "../components/ChartContainer";
import NoData from "./NoData";

interface ResultsProps {
  jsonData: any[] | null;
}

const Results: React.FC<ResultsProps> = ({ jsonData }) => {
  return (
    <section className="min-h-screen w-full">
      {jsonData ? <ChartContainer /> : <NoData />}
    </section>
  );
};

export default Results;
