import React from "react";
import Card from "../card";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "./style.scss";

export const CardList = ({ data }) => {
  let colour = [
    "#41ca6e",
    "#fab153",
    "#7277d5",
    "#f87d51",
    "#ed5466",
    "#4ec2e7",
  ];
  const innerWidth = window.innerWidth;
  console.log(innerWidth, "innerWidth");
  return (
    <>
      <div
        className={`cardList---container ${
          innerWidth > 767 ? "hide" : "show"
        }`}>
        <Swiper
          // install Swiper modules
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Mousewheel,
            Keyboard,
            Pagination,
          ]}
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          spaceBetween={50}
          slidesPerView={1}
          centeredSlides={true}
          navigation
          pagination
          scrollbar={{ draggable: true }}>
          {data?.features?.map((items, index) => {
            return (
              <SwiperSlide key={index}>
                <Card
                  items={items}
                  colour={colour[index]}
                  logo={index == 0 ? data?.logo : ""}
                  className="mobile"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div
        className={`cardList---container ${
          innerWidth < 767 ? "hide" : "show desktop"
        }`}>
        {data?.features?.map((items, index) => {
          return (
            <Card
              items={items}
              colour={colour[index]}
              logo={index == 0 ? data?.logo : ""}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardList;
