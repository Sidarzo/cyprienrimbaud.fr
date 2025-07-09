"use client"
import { motion,useInView } from "framer-motion";
import { Montserrat_Alternates } from "next/font/google";
import { useRef, useState } from "react";

export default function AboutSection() {
const events = [
    { y:50,x: -10, textX: -190 ,year: "2023 - 2025", title: "EISI - EPSI", link: "https://www.epsi.fr/ecole/europeenne-d-ingenierie-de-systemes-informatiques-eisi/"},
    { y:150,x: 10, textX: -175 ,year: "2022 - 2023", title: "CDA - EPSI", link: "https://www.epsi.fr/ecole/conception-et-developpement-d-applications-cda/"},
    { y:250,x: -10, textX: 10 ,year: "2022 - 2025", title: "Développeur alternant Groupe HUET", link: "https://www.huet.fr/"},
    { y:350 ,x: 10, textX: 20 ,year: "2022", title: "Stage développeur Yellow Network", link: "https://www.yellownetwork.fr/"},
    { y:450 ,x: -10, textX: 10 ,year: "2021", title: "Stage développeur Gustav by Cocktail", link: "https://www.gustav.fr/"},
    { y:550 ,x: 10, textX: -295 ,year: "2020 - 2022", title: "BTS SIO - Notre Dame du Roc", link: "https://www.notredameduroc.fr/"},
    ];

const skills = [
    { name: "React / Next.js", logo: "/logos/react.svg" },
    { name: "C#", logo: "/logos/csharp.svg" },
    { name: "Flutter", logo: "/logos/flutter.svg" },
    { name: "Docker", logo: "/logos/docker.svg" },
    { name: "GitLab", logo: "/logos/gitlab.svg" },
    { name: "VueJs", logo: "/logos/vuejs.svg" },
    { name: "SQL", logo: "/logos/sql.svg" },
    { name: "PHP", logo: "/logos/php.svg" },
    { name: "Laravel", logo: "/logos/laravel.svg" },
];

const [mouseY, setMouseY] = useState(0);
const [svgHeight, setSvgHeight] = useState(700); // hauteur du SVG

const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - rect.top;
    setMouseY(Math.max(0, Math.min(y, svgHeight)));
  };
const pathLength = mouseY / svgHeight;


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
            strokeWidth="7"
            fill="none"
            initial={{ pathLength: 0 }}
            ref={ref}   
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 3, ease: "easeInOut" }}
            whileHover={{ pathLength: pathLength }}
            className="cursor-pointer"
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
                className="cursor-pointer hover:fill-blue-600 transition-all duration-300"
                onClick={() => {
                    window.open(event.link, "_blank");
                }}
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
            <div className="space-y-3 grid grid-cols-3 p-10 items-center justify-center space-x-10" ref={refSkills}>
            {skills.map((skill, index) => (
                <motion.div className="flex flex-col items-center justify-center" key={index}
                initial={{ opacity: 0 }}
                animate={isInViewSkills ? { opacity: 1 } : {}}
                transition={{ duration: index * 0.8, ease: "easeInOut" }}
                >
                    <img
                        src={skill.logo}
                        alt={"Logo_ " + skill.name}
                        className="h-24 w-auto mb-6 mx-auto"
                        />
                </motion.div>
                ))}
        </div>
        </div>
    </div>
    </div>
</section>
);
} 