"use client";
import React from "react";
import { User, Shield, Phone, Heart, FileText } from "lucide-react"; // Replace with actual icons

const icons = [<User />, <Shield />, <Phone />, <Heart />, <FileText />]; // Array of icons

const ProgressBar = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex justify-center items-center space-x-4">
      {icons.slice(0, totalSteps).map((icon, index) => (
        <div key={index} className="flex flex-col items-center">
          {/* Circular Icon */}
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-full ${
              index <= currentStep ? "bg-blue-600 text-white" : "bg-gray-300"
            }`}
          >
            {React.cloneElement(icon, {
              className: "text-2xl",
            })}
          </div>

          {/* Step Text */}
          <div
            className={`mt-2 ${
              index <= currentStep ? "text-blue-600" : "text-gray-300"
            }`}
          >
            Step {index + 1}
          </div>

          {/* Connecting Line */}
          {index !== totalSteps - 1 && (
            <div
              className={`${
                index <= currentStep - 2 ? "bg-blue-600" : "bg-gray-300"
              } h-px w-6`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
