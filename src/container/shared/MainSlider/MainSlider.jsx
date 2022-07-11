import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import CData from "./CData";

import "./MainSlider.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MainSlider = () => {
  // SwiperCore.use([Autoplay]);

  return (
    <div className="mainSlide">
      <Swiper
        className="mainSwipper"
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={true}
        slidesPerView={1}
        spaceBetween={40}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
      >
        {CData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="mainImage" key={index}>
              <LazyLoadImage src={item.url} alt={item.alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainSlider;
