import React from "react";
import NavBar from "../components/nav-bar";
import illustration from "../assets/illustration.png";
import pc from "../assets/pc.png";
import figma from "../assets/figma.png";
import java from "../assets/java.png";
import cplusplus from "../assets/cplusplus.png";
import js from "../assets/js.png";
import html from "../assets/html-5.png";
import css from "../assets/css-3.png";
import ui from "../assets/ui.png";
import web from "../assets/coding.png";
import frontend from "../assets/front-end.png";
import SkillCard from "../components/skill-card";
import ProjectCard from "../components/project-card";
import plantify from "../assets/plantify.png";
import blood from "../assets/blood-bank.jpg";

export default function Portfolio () {

    const skills = [
        { img: web, name: "Website Dev" },
        { img: ui, name: "UI/UX" },
        { img: frontend, name: "Frontend Dev" },
    ];

    const projects = [
        { 
            title: "Plantify",
            img: plantify, 
            description: "Plantify serves as a centralized hub where individuals, communities, and organizations can seamlessly contribute to and manage green initiatives.", 
            skills: ["react", "node", "tailwind", "mongodb"]
        },
        { 
            title: "Blood Bank",
            img: blood, 
            description: "Plantify serves as a centralized hub where individuals, communities, and organizations can seamlessly contribute to and manage green initiatives.", 
            skills: ["java"]
        },
        { 
            title: "Blood Bank",
            img: blood, 
            description: "Plantify serves as a centralized hub where individuals, communities, and organizations can seamlessly contribute to and manage green initiatives.", 
            skills: ["java"]
        },
    ];

    return (
        <>
            <div className="m-2 p-8 bg-gradient-to-br from-sage-100 via-sage-200 to-sage-300 rounded-xl">
                <NavBar/>
                {/* about */}
                {/* <section id="about" className="flex flex-col lg:flex-row justify-between max-w-full pt-20 px-20 mb-10">
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
                </section> */}
                {/* most liked */}
                {/* <section id="about" className="flex flex-col max-w-full pt-20 px-20">
                    <div className="max-w-full mb-8 text-8xl text-center font-bold bg-pie">SOFTWARE ENGINEER</div>
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="text-sm basis-1/3">
                            I build websites and applications with a focus on clean, user-friendly design and efficient, 
                            maintainable code. I’m passionate about making digital experiences better, whether that’s 
                            through development or thoughtful design.
                        </div>
                        <img src={illustration} alt="illustration" className="h-[500px] basis-1/3"/>
                        <div className="flex flex-col-reverse">
                            <div className="mt-4 bg-fade px-8 py-4 rounded-md text-cream">
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
                    </div>
                </section> */}
                <section id="about" className="max-w-full pt-20 px-20 mb-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div className="flex flex-col gap-y-6">
                            <div>
                                <h1 className="text-[#cee85d] text-4xl font-bold"><span className="text-fade">I'm </span>FARWA</h1>
                                <h2 className="mt-4 text-6xl font-bold ">SOFTWARE ENGINEER</h2>
                                <button className="mt-8 p-2 bg-transparent border-2 border-fade rounded-md text-sm">
                                    contact me
                                </button>
                            </div>
                        </div>
                        <img src={pc} alt="pc" className="h-[500px]"/>
                    </div>
                    <div className="mt-16">
                        <h2 className="text-2xl font-semibold">About me</h2>
                        <p className="mt-6 mr-40 text-justify text-md">
                            I build websites and applications with a focus on clean, 
                            user-friendly design and efficient, maintainable code. 
                            I’m passionate about making digital experiences better, 
                            whether that’s through development or thoughtful design. 
                            I use tools like Figma to prototype and ensure the end 
                            product looks and works just right.
                        </p>
                    </div>
                </section>
            </div>
            
            {/* expertise */}
            <section id="expertise" className="bg-fade p-8">
                <h1 className="text-center text-cream-100 text-4xl font-semibold">My Skills</h1>
                <div className="mt-6 px-20 flex flex-col lg:flex-row gap-6 justify-center">
                    <div className="p-4 rounded-md bg-sage-200">
                        <img src={cplusplus} alt="c++" className="w-10"/>
                    </div>
                    <div className="p-4 rounded-md bg-sage-200">
                        <img src={java} alt="java" className="w-10"/>
                    </div>
                    <div className="p-4 rounded-md bg-sage-200">
                        <img src={figma} alt="figma" className="w-10"/>
                    </div>
                    <div className="p-4 rounded-md bg-sage-200">
                        <img src={html} alt="html" className="w-10"/>
                    </div>
                    <div className="p-4 rounded-md bg-sage-200">
                        <img src={css} alt="css" className="w-10"/>
                    </div>
                    <div className="p-4 rounded-md bg-sage-200">
                        <img src={js} alt="js" className="w-10"/>
                    </div>
                </div>
                <div className="mt-8 flex flex-col lg:flex-row gap-6 justify-center">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))}
                </div>
            </section>
            {/* projects */}
            <section id="projects" className="bg-sage-200 m-2 rounded-xl p-8">
                <h3 className="text-4xl font-semibold">Projects</h3>
                <div className="flex flex-col lg:flex-row mt-2 justify-center">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project}/>
                    ))}
                </div>
            </section>
        </>
    );
}