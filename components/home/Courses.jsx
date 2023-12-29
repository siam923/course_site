"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CourseItem from "./CourseItem";

const slides = [
  {
    title: "On Demand",
    imageSrc: "/courses/1.jpg",
    alt: "image1",
    description:
      "The tawhid academy course trains student to fully prepare for the course",
  },
  {
    title: "Hifz",
    imageSrc: "/courses/2.jpg",
    alt: "image2",
    description:
      "The tawhid academy course trains student to fully prepare for the course",
  },
  {
    title: "Adult Classes",
    imageSrc: "/courses/3.jpg",
    alt: "image2",
    description:
      "The tawhid academy course trains student to fully prepare for the course",
  },
  {
    title: "Youth Programme",
    imageSrc: "/courses/4.jpg",
    alt: "image2",
    description:
      "The tawhid academy course trains student to fully prepare for the course",
  },
  {
    title: "Children Madrashah",
    imageSrc: "/courses/5.jpg",
    alt: "image2",
    description:
      "The tawhid academy course trains student to fully prepare for the course",
  },
  // ... add more slides as needed
];

const Courses = () => {
  return (
    <section className="my-8 max-w-full container mx-auto flex flex-col justify-center items-center">
      <div class="mb-4">
        <div class="border-b-4 border-blue-500 mb-2"></div>
        <h2 class="text-3xl font-bold text-gray-800 mb-4">
          Discover Our Courses
        </h2>
        <div class="border-b-4 border-blue-500"></div>
      </div>

      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full max-w-sm md:max-w-xl lg:max-w-5xl"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              className="pl-1  md:basis-1/2 lg:basis-1/3"
            >
              <CourseItem
                imageUrl={slide.imageSrc}
                title={slide.title}
                details={slide.description}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Courses;
