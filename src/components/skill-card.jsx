import React from "react";
// import ui from "../assets/ui.png";

export default function SkillCard ({skill}) {

    return (
        <div className="flex flex-col gap-6 items-center justify-center border-cream border-2 p-8 rounded-lg">
            <img src={skill.img} alt={skill.name} className="rounded-md h-40"/>
            <h3 className="text-lg font-semibold text-cream">{skill.name}</h3>
        </div>
    );
}