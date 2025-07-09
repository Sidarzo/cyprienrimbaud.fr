"use client"
import { motion,useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
const events = [
    { y:50,x: -10, textX: -190 ,year: "2023 - 2025", title: "EISI - EPSI"},
    { y:150,x: 10, textX: -175 ,year: "2022 - 2023", title: "CDA - EPSI"},
    { y:250,x: -10, textX: 10 ,year: "2022 - 2025", title: "Développeur alternant Groupe HUET"},
    { y:350 ,x: 10, textX: 20 ,year: "2022", title: "Stage développeur Yellow Network"},
    { y:450 ,x: -10, textX: 10 ,year: "2021", title: "Stage développeur Gustav by Cocktail"},
    { y:550 ,x: 10, textX: -295 ,year: "2020 - 2022", title: "BTS SIO - Notre Dame du Roc"},
    ];

const skills = [
    { name: "React / Next.js", logo: "/logos/react-logo.png" },
    { name: "TypeScript", logo: "/logos/typescript-logo.png" },
    { name: "Node.js", logo: "/logos/nodejs-logo.png" },
];

const ref = useRef(null);
const refSkills = useRef(null);

const isInView = useInView(ref, { once: true, amount: 0.3 });
const isInViewSkills = useInView(refSkills, { once: true, amount: 0.3 });

return (
<section id="about" className="py-20 bg-white">
    <div className="container mx-auto">
    <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Mes expériences
        </h2>
        
        <div className="flex justify-center w-full">
            <svg
            width="100%"
            height="750"
            viewBox="0 0 1 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
        <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="600" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2563eb" />  {/* blue-600 */}
                <stop offset="60%" stopColor="#9333ea" /> {/* purple-600 */}
            </linearGradient>
        </defs>
        <motion.path
            d="
                M0 600
                Q 20 550, 0 500
                Q -20 450, 0 400
                Q 20 350, 0 300
                Q -20 250, 0 200
                Q 20 150, 0 100
                Q -20 50, 0 0
            "
            stroke="url(#lineGradient)"
            strokeWidth="5"
            fill="none"
            initial={{ pathLength: 0 }}
            ref={ref}   
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 3, ease: "easeInOut" }}
            />
            {/* Points */}
            {events.map((event, index) => (
            <motion.g 
            key={index}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 3, ease: "easeInOut" }}
            >
                <circle
                cx={event.x}
                cy={event.y}
                r="8"
                fill="#4f46e5"
                stroke="white"
                strokeWidth="2"
                />

                <text
                x={event.textX}
                y={event.y}     
                fontSize="15"
                fill="black"
                textAnchor="start"
                alignmentBaseline="middle"
                >
                {event.year} {event.title}
                </text>
            </motion.g>
            ))}
        </svg>
    </div>

    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Mes compétences
    </h2>
    <div className="bg-gray-100 rounded-lg p-8 col-span-1 w-full">
            <h4 className="text-xl font-semibold mb-4 text-gray-800">
            Mes compétences
            </h4>
            <div className="space-y-3" ref={refSkills}>
            {skills.map((skill, index) => (
            <div key={index}>
                   <img
                    src={skill.logo}
                    alt="Logo"
                    className="h-12 w-auto mb-6 mx-auto"
                    />
            </div>
            
            ))}
        </div>
        </div>
    </div>
    </div>
</section>
);
} 