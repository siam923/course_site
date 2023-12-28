"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import CourseItem from "./CourseItem";

const slides = [
  {
    imageSrc: "/ad1.jpg",
    alt: "image1",
  },
  {
    imageSrc: "/ad2.jpeg",
    alt: "image2",
  },
  {
    imageSrc: "/ad3.jpg",
    alt: "image2",
  },
  // ... add more slides as needed
];

const Courses = () => {
  return (
    <CourseItem imageUrl={"/ad1.jpg"} title="helllo" description={"sdffaf"} />
  );
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={4}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      <div className=" justify-center">
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="min-h-96 flex flex-col justify-center items-center">
              <Image
                src="/ad1.jpg"
                height={500}
                width={300}
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default Courses;
