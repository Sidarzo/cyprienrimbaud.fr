"use client"
import { motion } from "framer-motion";

export default function AboutSection() {
    const events = [
        { y:50, x: -325 ,year: "2023 - 2025", title: "Expert en informatique et Systèmes d'Information - EPSI"},
        { y:150, x: -325 ,year: "2022 - 2023", title: "Concepteur développeur d'Applications - EPSI"},
        { y:250, x: 70 ,year: "2022 - 2025", title: "Développeur alternant Groupe HUET"},
        { y:350 , x: 70 ,year: "2022", title: "Stage développeur Yellow Network"},
        { y:450 , x: 70 ,year: "2021", title: "Stage développeur Gustav by Cocktail"},
        { y:550 , x: 70 ,year: "2024", title: "BTS Services Informatiques aux Organisations - Notre Dame du Roc"},
      ];
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            À propos de moi
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full flex justify-center col-span-1">
             <svg
                width="800"
                height="450"
                viewBox="0 0 100 500"
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
                    M50 500
                    Q 30 450, 50 400
                    Q 70 350, 50 300
                    Q 30 250, 50 200
                    Q 70 150, 50 100
                    Q 30 50, 50 0
                "
                stroke="url(#lineGradient)"
                strokeWidth="5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                />
                {/* Points */}
                {events.map((event, index) => (
                <g key={index}>
                    <motion.circle
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                    cx="50"
                    cy={event.y}
                    r="8"
                    fill="#4f46e5"
                    stroke="white"
                    strokeWidth="2"
                    />

                    <text
                    x={event.x}
                    y={event.y}     
                    fontSize="13"
                    fill="black"
                    textAnchor="start"
                    alignmentBaseline="middle"
                    >
                    {event.year} - {event.title}
                    </text>
                </g>
                ))}
            </svg>
        </div>
            
            <div className="bg-gray-100 rounded-lg p-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">
                Mes compétences
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>React / Next.js</span>
                  <span className="text-blue-600 font-semibold">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
                
                <div className="flex justify-between">
                  <span>TypeScript</span>
                  <span className="text-blue-600 font-semibold">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
                
                <div className="flex justify-between">
                  <span>Node.js</span>
                  <span className="text-blue-600 font-semibold">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 