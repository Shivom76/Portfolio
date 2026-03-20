import { useState } from "react"
import SkillProgress from "./SkillProgress"

export default function Tools() {
    const [activeSkillSet, setactiveSkillSet] = useState("front")

    const tools = [
        { id: 1, name: "Git", logo: <i className="fa-brands fa-git-alt mr-2 text-orange-500"></i> },
        { id: 2, name: "Github", logo: <i className="fa-brands fa-github mr-2 text-white"></i> },
        { id: 3, name: "Canva", logo: <i className="fa-solid fa-pen mr-2 text-blue-400"></i> },
        { id: 4, name: "VS Code", logo: <i className="fa-solid fa-code mr-2 text-blue-500"></i> },
    ]

    const skillSets = {
        front: [
            { id: 1, name: "React.js", level: 90 }, // We keep the level for the internal bar but emphasize the name
            { id: 2, name: "Tailwind CSS", level: 95 },
            { id: 3, name: "JavaScript (ES6+)", level: 90 },
            { id: 4, name: "UI/UX (Figma)", level: 75 },
            { id: 5, name: "Next.js", level: 80 },
        ],
        back: [
            { id: 1, name: "Node.js", level: 90 },
            { id: 2, name: "Express", level: 85 },
            { id: 3, name: "REST APIs", level: 95 },
            { id: 4, name: "Python", level: 80 },
            { id: 5, name: "Socket.io", level: 85 },
        ],
        database: [
            { id: 1, name: "MongoDB", level: 90 },
            { id: 2, name: "MySQL", level: 80 },
            { id: 3, name: "PostgreSQL", level: 75 },
            { id: 4, name: "Redis", level: 70 },
        ]
    }

    const renderSkills = skillSets[activeSkillSet]

    return (
        <div className="py-20 px-6 max-w-6xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-white mb-4">Tech Stack & Ecosystem</h2>
                <p className="text-slate-400">Specialized in building scalable MERN applications and IoT integrations.</p>
            </div>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-10" data-aos="fade-up">
                {Object.keys(skillSets).map((type) => (
                    <button
                        key={type}
                        onClick={() => setactiveSkillSet(type)}
                        className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border ${
                            activeSkillSet === type 
                            ? "bg-blue-600 border-blue-400 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]" 
                            : "bg-blue-950/30 border-white/10 text-slate-400 hover:border-blue-500/50"
                        }`}
                    >
                        {type.toUpperCase()}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Tools Sidebar - Using a Card-like layout */}
                <div 
                    className="p-8 rounded-3xl bg-blue-950/10 backdrop-blur-xl border border-white/5 shadow-2xl"
                    data-aos="fade-right"
                >
                    <h3 className="text-xl font-bold mb-6 text-sky-400 flex items-center">
                        <i className="fa-solid fa-screwdriver-wrench mr-3"></i> Core Infrastructure
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        {tools.map((item) => (
                            <div key={item.id} className="flex items-center p-3 rounded-xl bg-white/5 border border-white/5 hover:border-sky-500/30 transition-all">
                                <span className="text-xl">{item.logo}</span>
                                <span className="text-slate-200 font-medium ml-2">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills Section - Animated List */}
                <div 
                    className="p-8 rounded-3xl bg-blue-950/10 backdrop-blur-xl border border-white/5 shadow-2xl"
                    data-aos="fade-left"
                >
                    <h3 className="text-xl font-bold mb-6 text-sky-400 flex items-center">
                        <i className="fa-solid fa-layer-group mr-3"></i> Proficiency
                    </h3>
                    <div className="space-y-2">
                        {renderSkills.map((skill) => (
                            <SkillProgress 
                                key={skill.id} 
                                skill={skill.name} 
                                percentage={skill.level} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}