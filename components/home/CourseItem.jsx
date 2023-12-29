import Image from "next/image";
import React from "react";

const CourseItem = ({ imageUrl, title, details }) => {
  return (
    <div className=" max-w-sm px-6">
      <div className="relative  h-56 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out">
        <Image
          src={imageUrl}
          alt="Card image"
          fill={true}
          objectFit="cover"
          className="rounded-xl hover:opacity-90 transition-opacity duration-500 ease-in-out"
        />
      </div>

      <div className="relative  -mt-12 ">
        <div className="p-6  lcolor text-center">
          <h4 className="text-xl font-semibold uppercase leading-tight truncate">
            {title}
          </h4>
          <hr className="w-48 h-1 my-2 mx-auto bg-white rounded" />
          <div className="my-2 text-xs tracking-wider">{details}</div>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
