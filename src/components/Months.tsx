import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Months = () => {
  const { dataArray } = useSelector(
    (state: RootState) => state.currentJsonData
  );

  const getVideoCountWithMonths = () => {
    if (!dataArray?.length) return [];

    const videoCountWithMonths: Record<string, number> = {};

    const latestTime = new Date(
      Math.max(...dataArray.map((vid) => new Date(vid.time).getTime()))
    );

    const startDate = new Date(latestTime);
    startDate.setMonth(startDate.getMonth() - 11);

    dataArray.forEach((vid) => {
      const vidTime = new Date(vid.time);

      if (vidTime >= startDate && vidTime <= latestTime) {
        const key = vidTime.toLocaleString("default", {
          month: "long",
          year: "numeric",
        });

        videoCountWithMonths[key] = (videoCountWithMonths[key] || 0) + 1;
      }
    });

    const sortedArray = Object.entries(videoCountWithMonths)
      .map(([label, count]) => {
        const [monthName, year] = label.split(" ");
        const date = new Date(`${monthName} 1, ${year}`);
        return { label, count, date };
      })
      .sort((a, b) => a.date.getTime() - b.date.getTime())
      .map(({ label, count }) => ({ label, count }));

    return sortedArray;
  };

  const videoCountWithMonths = getVideoCountWithMonths();

  const data = {
    labels: videoCountWithMonths.map((item) => item.label),
    datasets: [
      {
        label: "Videos Watched",
        data: videoCountWithMonths.map((item) => item.count),
        fill: true,
        backgroundColor: "rgba(128, 128, 128, 0.3)",
        borderColor: "rgba(64, 64, 64, 1)",
        tension: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    indexAxis: "x" as const,
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <section className="flex justify-center w-full h-full p-4">
      <div className="w-full max-w-7xl flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold text-gray-800">
          Your Most Active Months
        </h2>
        <Line data={data} options={options} />
      </div>
    </section>
  );
};

export default Months;
