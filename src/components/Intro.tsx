import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import MostWatchedChannels from "./MostWatchedChannels";

const Intro = () => {
  const { dataArray } = useSelector(
    (state: RootState) => state.currentJsonData
  );

  let videosCount: number = 0;
  if (dataArray?.length) {
    videosCount = dataArray.length;
  }

  return (
    <section className="flex items-center min-h-screen w-full justify-center text-gray-800">
      <div className="flex flex-col pl-[100px] items-center justify-center">
        <span className="text-3xl font-bold">
          You watched a total of {videosCount} videos in the last 365 days
        </span>
        <span className="text-2xl font-semibold">
          with an average of {Math.floor(videosCount / 365)} videos a day
          {Math.floor(videosCount / 365) > 50
            ? "—you've been a good-for-nothing this whole year, basically."
            : "."}
        </span>
      </div>
    </section>
  );
};

export default Intro;
