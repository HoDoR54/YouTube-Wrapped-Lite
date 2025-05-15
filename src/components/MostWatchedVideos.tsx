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
import YouTubeThumbnail from "./reusable/VideoThumbnail";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MostWatchedVideos = () => {
  const { dataArray } = useSelector(
    (state: RootState) => state.currentJsonData
  );

  const getTopTen = () => {
    const videoCount: Record<string, { count: number; title: string }> = {};

    dataArray?.forEach((vid) => {
      const videoUrl = vid.titleUrl;
      if (videoUrl) {
        if (!videoCount[videoUrl]) {
          videoCount[videoUrl] = { count: 0, title: vid.title };
        }
        videoCount[videoUrl].count++;
      }
    });

    return Object.entries(videoCount)
      .sort((a, b) => b[1].count - a[1].count)
      .slice(0, 10)
      .map(([url, { count, title }]) => ({ url, count, title }));
  };

  const topVideos = getTopTen();

  return (
    <section className="flex flex-col items-center w-full min-h-screen p-6 text-gray-800 bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="flex flex-col gap-4 w-full max-w-5xl mb-8">
        <h2 className="font-bold text-xl text-gray-800">
          Most Rewatched Videos
        </h2>
        {topVideos.map((video, i) => (
          <div
            key={video.url}
            className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-gray-600">
                {i + 1}
              </span>
              <YouTubeThumbnail videoUrl={video.url} />
              <span className="text-sm text-gray-700">{video.title}</span>
            </div>
            <div>
              <span>{video.count} Times</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MostWatchedVideos;
