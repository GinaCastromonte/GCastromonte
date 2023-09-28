import React from "react";
import Image from "next/image"


const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white ">
      <div className="container p-12 flex justify-between items-center">
        <div className="flex items-center lg:ml-[450px]">
       
          <Image src="/images/logo.png" width={200} height={60} alt="" />
        </div>
        <div>
          <p className="text-slate-600">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
