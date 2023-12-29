import React from "react";
import Image from "next/image";
import Link from "next/link";

const title = "Welcome to Tawhid Academy";
const description = (
  <div>
    <p>
      Tawhid Academy is an Islamic institution based in the borough of Barking
      and Dagenham; established to resolve the concerning shortage of madrasahs
      in the area.
    </p>
    <br />
    <p>
      Tawhid Academy is an Islamic institution based in the borough of Barking
      and Dagenham; established to resolve the concerning shortage of madrasahs
      in the area. We also recognize the importance of the quality of education
      being provided for our children, who deserve excellent, extensive
      curriculums catered to delivering them the best Islamic education
      possible. It is the duty of all Muslim parents to teach their children
      Islam, and provide them with the knowledge to develop into virtuous
      individuals who live their lives representing the teachings and values of
      Islam.
    </p>
  </div>
);

const Welcome = () => {
  return (
    <section className="my-8 container max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start space-x-4">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-semibold mb-4">{title}</h1>
        <div className="mb-6">{description}</div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#read-more"
            className="bg-blue-500 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition duration-300"
          >
            Read More
          </Link>
          <Link
            href="#register"
            className="items-center bg-green-500 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition duration-300"
          >
            Register Now
          </Link>
        </div>
      </div>

      <div className="h-96 w-full md:w-1/2 mt-8 md:mt-0 relative">
        <Image
          src="/welcome.png"
          alt="Educational Image"
          fill={true}
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </section>
  );
};

export default Welcome;
