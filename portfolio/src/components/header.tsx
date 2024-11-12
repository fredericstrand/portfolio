import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="flex items-center justify-center space-x-8 py-4 bg-gray-800 text-white">
            {['Home','About','Projects','Education and Work Experience'].map((item) => (
                <div key={item} className="relative group">
                    <a href={`#${item}`} className="text-lf hover:text-gray-300">
                        {item}
                    </a>
                    <span className="absolute bottom-0 left-0 w0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full">
                    </span>
                </div>
            ))}
        </nav>
    );
};

export default Navbar;