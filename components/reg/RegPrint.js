"use client";
import React, { useState, useEffect } from "react";

const StudentRegistrationPrintable = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("regForm")));

  const handlePrint = () => {
    const printableArea = document.getElementById("printableArea");
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = printableArea.innerHTML;
    window.print();
    document.body.innerHTML = originalContent;
  };

  if (!data) {
    return (
      <div className="text-center p-10 text-gray-700">No data available</div>
    );
  }

  const {
    studentDetails,
    parentDetails,
    emergencyDetails,
    medicalDetails,
    rulesDetails,
  } = data;

  return (
    <div id="printableArea" className="p-8 bg-blue-50 shadow-xl rounded-lg">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Student Registration
        </h1>
        <p className="text-sm text-gray-600">Branch: {studentDetails.branch}</p>
      </div>

      {/* Sections */}
      {[
        { title: "Student Details", details: studentDetails },
        { title: "Parent Details", details: parentDetails },
        { title: "Emergency Details", details: emergencyDetails },
        { title: "Medical Details", details: medicalDetails },
        { title: "Rules & Regulations", details: rulesDetails },
      ].map((section, idx) => (
        <section key={idx} className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            {section.title}
          </h2>
          <div className="border-t border-gray-200 pt-4 text-sm text-gray-700">
            {Object.entries(section.details).map(([key, value], idx) => (
              <p key={idx}>
                <strong>{key.replace(/([A-Z])/g, " $1").trim()}:</strong>{" "}
                {value}
              </p>
            ))}
          </div>
        </section>
      ))}

      {/* Print Button */}
      <div className="text-center mt-10">
        <button
          onClick={handlePrint}
          className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600 transition duration-200"
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default StudentRegistrationPrintable;
