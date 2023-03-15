import React from "react";
import HashnodeIcon from "../vectors/Hashnode";

const Footer = () => {
  return (
    <footer className=" px-4 py-14 border-t bg-[#f3f4f6]">
      <div className="flex flex-col items-center gap-y-4 2xl:mx-auto 2xl:max-w-[80%] 2xl:px-8 w-full">
        <div className="bg-white lg:max-w-[65%] mx-auto w-full border rounded-md py-6 flex flex-col gap-y-2 lg:gap-y-6">
          <span className="text-center text-sm font-bold text-[#4b5563] block">
            IMPRESSUM
          </span>
          <span className="mx-auto max-w-[85%] w-full">
            Nature is Beautiful
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[#4b5563] mt-4">2022 Seun</span>
          <div className="flex items-center mt-2 mb-4 gap-x-2">
            <span className="text-[#4b5563] underline">Archive</span>
            <span className="h-1 w-1 bg-[#8b8b8b] rounded-full"></span>
            <span className="text-[#4b5563] underline">Privacy policy</span>
            <span className="h-1 w-1 bg-[#8b8b8b] rounded-full"></span>
            <span className="text-[#4b5563] underline">Terms</span>
          </div>
          <div className="p-3 mt-4 bg-white border rounded-md">
            <span className="text-[#4b5563] font-bold flex gap-x-2">
              <HashnodeIcon color="#2963ff" />
              Publish with DevCareer
            </span>
          </div>
          <p className="text-[#4b5563] text-sm mt-4 text-center">
            Powered by <span className="underline">DevCareer</span> - Home for
            tech writers and readers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
