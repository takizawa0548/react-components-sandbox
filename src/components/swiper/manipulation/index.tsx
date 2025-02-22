import React, { memo } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.css";

// import required modules
import { Navigation } from "swiper/modules";

export const Component = memo(function Component() {
  return (
    <div className="w-full max-w-lg mx-auto">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={3}
        centeredSlides={true}
        allowTouchMove={false}
        style={{ height: "300px" }}
      >
        <SwiperSlide>
          Slide 1
          <button
            onClick={() => {
              console.log("1");
            }}
          >
            Button
          </button>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
});
