import React from "react";
import NavBar from "../components/nav-bar";
import illustration from "../assets/illustration.png";
import figma from "../assets/figma.png";
import java from "../assets/java.png";
import cplusplus from "../assets/cplusplus.png";
import js from "../assets/js.png";
import html from "../assets/html-5.png";
import css from "../assets/css-3.png";
import ui from "../assets/ui.png";
import backend from "../assets/coding.png";
import frontend from "../assets/front-end.png";
import SkillCard from "../components/skill-card";

export default function Portfolio () {

    const skills = [
        { img: backend, name: "Backend Dev" },
        { img: frontend, name: "Frontend Dev" },
        { img: ui, name: "UI/UX" },
    ];

    return (
        <>
            <NavBar/>
            <section id="about" className="flex flex-col lg:flex-row justify-between max-w-full pt-20 px-20 mb-10">
                <div className="flex flex-col gap-y-6">
                    <div>
                        <h1 className="text-8xl font-bold">FARWA</h1>
                        <h2 className="mt-4 text-4xl font-bold ">WEB DEVELOPER</h2>
                        <p className="mt-10 mr-40 text-justify text-sm">
                            I build websites and applications with a focus on clean, 
                            user-friendly design and efficient, maintainable code. 
                            I’m passionate about making digital experiences better, 
                            whether that’s through development or thoughtful design. 
                            I use tools like Figma to prototype and ensure the end 
                            product looks and works just right.
                        </p>
                    </div>
                    <div className="mt-4 bg-fade p-8 rounded-md text-cream">
                        <h3 className="font-semibold text-xl text-center">What I know</h3>
                        <div className="flex gap-4 mt-8 justify-center">
                            <img src={java} alt="java" className="h-14"/>
                            <img src={cplusplus} alt="c++" className="h-14"/>
                            <img src={figma} alt="figma" className="h-14"/>
                            <img src={css} alt="csss" className="h-14"/>
                            <img src={html} alt="html" className="h-14"/>
                            <img src={js} alt="js" className="h-14"/>
                        </div>
                    </div>
                </div>
                <img src={illustration} alt="illustration" className="h-[500px]"/>
            </section>
            <section id="expertise" className="bg-fade p-8">
                <h1 className="text-center text-cream text-4xl font-semibold">My Expertise</h1>
                <div className="mt-8 flex flex-col lg:flex-row gap-6 justify-center">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))}
                </div>
            </section>
        </>
    );
}