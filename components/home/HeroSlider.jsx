"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const slides = [
  {
    imageSrc: "/slider1.jpg",
    title: "Welcome to Tawihid Academy",
    description: "Excellence in Education",
  },
  {
    imageSrc: "/slider2.jpg",
    title: "Learn With Us",
    description: "Expand your knowledge",
  },
  // ... add more slides as needed
];

const HeroSlider = () => {
  return (
    <section className="relative z-0 -mt-16 text-black bg-yellow-500 ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="h-96 justify-center">
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="h-96 flex flex-col justify-center items-center">
                <Image
                  src={slide.imageSrc}
                  alt={slide.title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col justify-center items-center">
                  <h1 className="text-3xl md:text-5xl text-white font-bold text-center">
                    {slide.title}
                  </h1>
                  <p className="text-white text-center">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default HeroSlider;
