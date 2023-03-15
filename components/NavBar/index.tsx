import React, { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import CaretDown from "../vectors/CaretDown";
import CloseIcon from "../vectors/CloseIcon";
import GithubIcon from "../vectors/GithubIcon";
import HamburgerIcon from "../vectors/HamburgerIcon";
import Hashnode from "../vectors/Hashnode";
import LinkedIn from "../vectors/LinkedIn";
import MoonIcon from "../vectors/MoonIcon";
import PlusIcon from "../vectors/PlusIcon";
import RssIcon from "../vectors/RssIcon";
import SearchIcon from "../vectors/SearchIcon";
import TwitterIcon from "../vectors/TwitterIcon";

const NavBar = () => {
  const [svgClass, setSvgClass] = useState({
    twitter: "",
    github: "",
    linkedIn: "",
    rss: "",
    hashnode: "",
  });
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const handleMobileMenuToggle = () => {
    setToggleMobileMenu((prev) => !prev);
  };
  const handleTwitterSvgClassIn = () => {
    setSvgClass({ ...svgClass, twitter: "svg-link" });
  };
  const handleGithubSvgClassIn = () => {
    setSvgClass({ ...svgClass, github: "svg-link" });
  };
  const handleLinkedInSvgClassIn = () => {
    setSvgClass({ ...svgClass, linkedIn: "svg-link" });
  };
  const handleRssSvgClassIn = () => {
    setSvgClass({ ...svgClass, rss: "svg-link" });
  };
  const handleHashNodeSvgClassIn = () => {
    setSvgClass({ ...svgClass, hashnode: "svg-link" });
  };
  const handleSvgClassOut = () => {
    setSvgClass({
      ...svgClass,
      twitter: "",
      linkedIn: "",
      rss: "",
      github: "",
      hashnode: "",
    });
  };
  const links = ["home", "mysql", "badges"];

  return (
    <nav className="px-4 border-b">
      <div className="flex flex-col gap-y-4 2xl:mx-auto 2xl:max-w-[80%] 2xl:px-8 w-full">
        {/*First Nav section*/}
        <div className="flex items-center justify-between pt-8 pb-2">
          <div className="items-center hidden lg:flex gap-x-2">
            <span className="relative w-12 h-12">
              <Image
                src="/img/profile-logo.webp"
                alt="profile-logo"
                fill
                className="rounded-full"
              />
            </span>
            <span className="text-2xl font-bold">Seun</span>
          </div>
          <span
            className="flex font-medium lg:hidden gap-x-1"
            onClick={handleMobileMenuToggle}
          >
            <HamburgerIcon /> Menu
          </span>
          <div
            className={clsx(
              "fixed lg:hidden h-screen bg-white border border-r z-20 top-0 w-[70%] transition-all",
              toggleMobileMenu ? "left-0" : "-left-80"
            )}
          >
            <span
              className="flex justify-end pr-4 mt-4 font-medium gap-x-1"
              onClick={handleMobileMenuToggle}
            >
              <CloseIcon /> Close
            </span>
            <div className="flex flex-col items-start justify-center h-full">
              {links.map((link, i) => (
                <span
                  key={"nav-sub-link" + i}
                  className="text-sm font-bold text-[#8B8B8B] uppercase p-3 hover:bg-[#dadada] hover:rounded-sm hover:text-black hover:cursor-pointer"
                >
                  {link}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-x-2">
            <span className="p-2 rounded-full hover:bg-slate-200 hover:cursor-pointer">
              <SearchIcon />
            </span>
            <span className="p-2 rounded-full hover:bg-slate-200 hover:cursor-pointer">
              <MoonIcon />
            </span>
            <div className="flex p-2 border rounded-md gap-x-1 hover:shadow-lg hover:cursor-pointer">
              <span className="">
                <PlusIcon />
              </span>
              <span className="block mr-1 font-semibold">Follow</span>
            </div>
            <span className="p-2 border rounded-full hover:cursor-pointer">
              <CaretDown />
            </span>
          </div>
        </div>
        <span className="text-2xl font-bold text-center lg:hidden">Seun</span>
        {/*Second Nav section*/}
        <div className="flex items-center justify-center lg:justify-between">
          <div className="hidden lg:flex">
            {links.map((link, i) => (
              <span
                key={"nav-sub-link" + i}
                className="text-sm font-bold text-[#8B8B8B] uppercase p-3 hover:bg-[#dadada] hover:rounded-sm hover:text-black hover:cursor-pointer"
              >
                {link}
              </span>
            ))}
          </div>
          <div className="flex">
            <a
              href="https://twitter.com/dev_careers?t=2mdPnncGV_XiOqv5evlIcA&s=09"
              rel="noreferrer"
              target="_blank"
              className="nav-svg-link"
              onMouseEnter={handleTwitterSvgClassIn}
              onMouseLeave={handleSvgClassOut}
            >
              <TwitterIcon isclass={svgClass.twitter} />
            </a>
            <a
              href="#"
              target="_blank"
              className="nav-svg-link"
              onMouseEnter={handleGithubSvgClassIn}
              onMouseLeave={handleSvgClassOut}
            >
              <GithubIcon isclass={svgClass.github} />
            </a>
            <a
              href="#"
              target="_blank"
              className="nav-svg-link"
              onMouseEnter={handleHashNodeSvgClassIn}
              onMouseLeave={handleSvgClassOut}
            >
              <Hashnode isclass={svgClass.hashnode} />
            </a>
            <a
              href="https://www.linkedin.com/company/devcareers/"
              rel="noreferrer"
              target="_blank"
              className="nav-svg-link"
              onMouseEnter={handleLinkedInSvgClassIn}
              onMouseLeave={handleSvgClassOut}
            >
              <LinkedIn isclass={svgClass.linkedIn} />
            </a>
            <a
              href="#"
              target="_blank"
              className="nav-svg-link"
              onMouseEnter={handleRssSvgClassIn}
              onMouseLeave={handleSvgClassOut}
            >
              <RssIcon isclass={svgClass.rss} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
