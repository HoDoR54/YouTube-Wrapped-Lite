import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

ChartJS.register(ArcElement, Tooltip, Legend);

const TimeInterval = () => {
  const { dataArray } = useSelector(
    (state: RootState) => state.currentJsonData
  );

  const getVideoCountWithIntervals = () => {
    const videoCountWithIntervals: Record<string, number> = {
      "00:00 - 03:00": 0,
      "03:00 - 06:00": 0,
      "06:00 - 09:00": 0,
      "09:00 - 12:00": 0,
      "12:00 - 15:00": 0,
      "15:00 - 18:00": 0,
      "18:00 - 21:00": 0,
      "21:00 - 00:00": 0,
    };

    dataArray?.forEach((vid) => {
      const hour = new Date(vid?.time).getHours();

      let interval = "";

      if (hour < 3) interval = "00:00 - 03:00";
      else if (hour < 6) interval = "03:00 - 06:00";
      else if (hour < 9) interval = "06:00 - 09:00";
      else if (hour < 12) interval = "09:00 - 12:00";
      else if (hour < 15) interval = "12:00 - 15:00";
      else if (hour < 18) interval = "15:00 - 18:00";
      else if (hour < 21) interval = "18:00 - 21:00";
      else interval = "21:00 - 00:00";

      videoCountWithIntervals[interval]++;
    });

    return videoCountWithIntervals;
  };

  const videoCountWithIntervals = getVideoCountWithIntervals();

  const grayscaleShades = [
    "#f9fafb",
    "#e5e7eb",
    "#d1d5db",
    "#9ca3af",
    "#6b7280",
    "#4b5563",
    "#374151",
    "#1f2937",
  ];

  const data = {
    labels: Object.keys(videoCountWithIntervals),
    datasets: [
      {
        label: "Videos Watched",
        data: Object.values(videoCountWithIntervals),
        backgroundColor: grayscaleShades,
        borderColor: "#ffffff",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          color: "#374151",
        },
      },
    },
  };

  return (
    <section className="flex items-center justify-center flex-col">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Viewing Time Distribution
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Number of videos watched across 3-hour time intervals.
      </p>
      <div className="w-[600px] aspect-square">
        <Pie data={data} options={options} />
      </div>
    </section>
  );
};

export default TimeInterval;
