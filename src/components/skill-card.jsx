import React from "react";
import { motion } from "framer-motion";
// import ui from "../assets/ui.png";

export default function SkillCard ({skill}) {

    return (
        <motion.div
            className="flex flex-col gap-6 items-center justify-center border-cream border-2 p-8 rounded-lg"
            whileHover={{ rotate: 4, scale: 1 }} // Tilt slightly and scale up on hover
            initial={{ opacity: 0, y: 50 }} // Start invisible and move from bottom
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible and stationary
            viewport={{ amount: 0.3 }} // Trigger animation when 30% of the card is in view
            transition={{ duration: 0.6, ease: "easeOut" }} // Customize the animation timing
        >
            <img src={skill.img} alt={skill.name} className="rounded-md h-40"/>
            <h3 className="text-lg font-semibold text-cream">{skill.name}</h3>
        </motion.div>
    );
}