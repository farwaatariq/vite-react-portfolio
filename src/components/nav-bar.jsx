import React from "react";
import {Link} from "react-scroll";
import portfolio from "../assets/portfolio.png";

export default function NavBar () {
    const menuItems = [
        { name: "About", to: "about" },
        { name: "Expertise", to: "expertise" },
        { name: "Projects", to: "projects" },
        { name: "Contact Me", to: "contact-me" },
    ];

    return (
        <div className="max-w-full bg-transparent flex justify-between px-8">
            <img src={portfolio} alt="portfolio logo" className="h-10"/>
            <div className="flex font-semibold">
                {menuItems.map((item) => (
                    <Link
                        key={item.to}
                        to={item.to}
                        smooth={true}
                        spy={true}
                        // offset={-70} // Adjust to match your navbar height
                        duration={500}
                        className="text-gray-600 cursor-pointer hover:text-black px-4 py-2 transition-all duration-300"
                        activeClass="text-black font-bold border-purple-400 border-b-2"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}