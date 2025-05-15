import Intro from "./Intro";
import MostWatchedChannels from "./MostWatchedChannels";
import Months from "./Months";
import MostWatchedVideos from "./MostWatchedVideos";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TimeInterval from "./TimeInterval";
import Final from "./Final";

const ChartContainer = () => {
  return (
    <section className="w-full min-h-screen">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        keyboard={{ enabled: true }}
        autoHeight={true}
        className="w-full"
      >
        <SwiperSlide className="flex items-start justify-center min-h-screen bg-gray-100">
          <Intro />
        </SwiperSlide>
        <SwiperSlide className="flex items-start justify-center min-h-screen bg-gray-200">
          <MostWatchedChannels />
        </SwiperSlide>
        <SwiperSlide className="flex items-start justify-center min-h-screen bg-gray-100">
          <MostWatchedVideos />
        </SwiperSlide>
        <SwiperSlide className="flex items-start justify-center min-h-screen bg-gray-200">
          <Months />
        </SwiperSlide>
        <SwiperSlide className="flex items-start justify-center min-h-screen bg-gray-300">
          <TimeInterval />
        </SwiperSlide>
        <SwiperSlide className="flex items-start justify-center min-h-screen bg-gray-100">
          <Final />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ChartContainer;
