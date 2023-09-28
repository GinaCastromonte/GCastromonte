import React from "react";
import Image from "next/image"


const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white ">
      <div className="container py-2 px-4 mx-auto flex justify-between items-center">
        <div className="flex items-center ">
       
          <Image src="/images/logo2.png" width={160} height={40} alt="" />
        </div>
        <div>
          <p className="text-slate-600">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
