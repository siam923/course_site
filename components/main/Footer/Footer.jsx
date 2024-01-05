import React from "react";
import Newsletter from "./Newsletter";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center">
      <div className=" max-w-4xl relative z-10">
        <Newsletter />
      </div>
      <div className="px-8 bg-gray-800 pt-16 w-full -mt-16 relative z-0">
        <FooterTop />
      </div>
    </footer>
  );
};

export default Footer;
