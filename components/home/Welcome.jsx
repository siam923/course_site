import React from "react";
import Image from "next/image";

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
    <div className="container max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center md:items-start space-x-4">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-semibold mb-4">{title}</h1>
        <div className="mb-6">{description}</div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#read-more"
            className="bg-blue-500 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition duration-300"
          >
            Read More
          </a>
          <a
            href="#register"
            className="bg-green-500 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition duration-300"
          >
            Register Now
          </a>
        </div>
      </div>

      <div className="h-96 md:w-1/2 mt-8 md:mt-0 relative">
        <Image
          src="/welcome.png"
          alt="Educational Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </div>
  );
};

export default Welcome;
