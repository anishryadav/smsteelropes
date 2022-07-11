import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import  { Autoplay, Navigation, Pagination } from "swiper";
// import { LazyLoadImage } from "react-lazy-load-image-component";

import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "./AboutSlider.scss";

import aboutimage from "./aboutimage";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AboutSlider = () => {
  // SwiperCore.use([Autoplay]);

  return (
    <div className="aboutslide">
      <Swiper
        className="aboutSlider"
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        loop={true}
        autoplay
        navigation
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
      >
        {aboutimage.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="image" key={index}>
              <LazyLoadImage loading="lazy" src={item.url} alt={item.alt} />
              <div className="data">
                <h3 style={{ textDecoration: "underline" }}>{item.name}</h3>
                <h5>{item.data}</h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default AboutSlider;
