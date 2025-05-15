import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MostWatchedChannels = () => {
  const { dataArray } = useSelector(
    (state: RootState) => state.currentJsonData
  );

  const getTopTen = () => {
    const channelCount: Record<string, number> = {};

    dataArray?.forEach((vid) => {
      const channel = vid.subtitles?.[0]?.name;
      if (channel) {
        channelCount[channel] = (channelCount[channel] || 0) + 1;
      }
    });

    const sortedChannels = Object.entries(channelCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);

    return sortedChannels;
  };

  const mostWatched = getTopTen();
  const data = {
    labels: mostWatched.map((channel) => channel[0]),
    datasets: [
      {
        label: "Views",
        data: mostWatched.map((channel) => channel[1]),
        backgroundColor: "rgba(33, 33, 33, 0.2)",
        borderColor: "rgba(100, 100, 100, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    indexAxis: "y" as const,
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <section className="flex justify-center w-full h-full p-4">
      <div className="w-full max-w-7xl flex items-center justify-center flex-col">
        <h2 className="text-xl font-bold text-gray-800">
          Most Watched Channels
        </h2>
        <Bar data={data} options={options} />
      </div>
    </section>
  );
};

export default MostWatchedChannels;
