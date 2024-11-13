"use client";

import React, { useState, useEffect} from "react";
import clsx from "clsx";

const Navbar: React.FC = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 100) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
    <nav className="flex items-center justify-center w-screen fixed transition-all duration-300">
      <a
        href="#home"
        className="absolute top-4 left-5 z-50 transition-colors duration-300"
        aria-label="Home"
    >
        <i className={clsx(
            "fas fa-house text-3xl",
            scrolling ? "text-white " : "text-black mt-4"
            )}
            style={{ zIndex: 50}}
        ></i>
    </a>

      <div className={clsx(
        "flex items-center justify-center space-x-8 px-4 py-4 text-white transition-all duration 500 bg-[#1a1a1a]",
        scrolling ? "w-screen" : "w-[500px] rounded-xl mt-4"
      )}>
        {["About", "Projects", "Education and Work Experience"].map((item) => (
          <div key={item} className="relative group">
            <a href={`#${item}`} className="text-lf hover:text-gray-300">
              {item}
            </a>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </div>
        ))}
      </div>
    </nav>
    );
};

export default Navbar;