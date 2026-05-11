'use client';

import { motion } from 'framer-motion';
import { Cpu, Code, Plane, Users, CheckCircle2 } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Technical Skills',
    icon: <Cpu className="text-blue-400" size={24} />,
    skills: [
      { name: 'Drone Assembly & Fabrication', level: 95 },
      { name: 'System Integration', level: 90 },
      { name: 'PID Tuning & Calibration', level: 88 },
      { name: 'Payload Integration', level: 92 },
      { name: 'Flight Control Systems', level: 89 },
      { name: 'Telemetry Data Analysis', level: 87 },
    ]
  },
  {
    category: 'Software & Tools',
    icon: <Code className="text-cyan-400" size={24} />,
    skills: [
      { name: 'Mission Planner', level: 92 },
      { name: 'QGroundControl', level: 90 },
      { name: 'Pix4D & Agisoft Metashape', level: 88 },
      { name: 'DJI Terra', level: 85 },
      { name: 'PX4 & ArduPilot Firmware', level: 87 },
      { name: 'AeroGCS Software', level: 84 },
    ]
  },
  {
    category: 'Drone Platforms',
    icon: <Plane className="text-blue-500" size={24} />,
    skills: [
      { name: 'DJI Enterprise Series (Matrice 300, 350)', level: 94 },
      { name: 'DJI Mavic Series', level: 92 },
      { name: 'Fixed Wing UAVs', level: 88 },
      { name: 'Custom Multicopters', level: 90 },
      { name: 'Thermal Imaging Drones', level: 89 },
      { name: 'EVTOL Aircraft', level: 85 },
    ]
  },
  {
    category: 'Professional Skills',
    icon: <Users className="text-cyan-500" size={24} />,
    skills: [
      { name: 'Teamwork & Collaboration', level: 95 },
      { name: 'Communication', level: 92 },
      { name: 'Project Management', level: 88 },
      { name: 'Technical Documentation', level: 90 },
      { name: 'Leadership', level: 86 },
      { name: 'Safety Compliance', level: 93 },
    ]
  }
];

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="space-y-2 group/bar">
    <div className="flex justify-between items-center">
      <span className="text-slate-300 text-sm font-medium group-hover/bar:text-white transition-colors">{name}</span>
      <span className="text-blue-400 font-bold text-xs">{level}%</span>
    </div>
    <div className="w-full bg-slate-800/50 rounded-full h-1.5 overflow-hidden border border-slate-700/50">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'circOut' }}
        className="bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 h-full rounded-full relative"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] animate-[shimmer_2s_infinite]" />
      </motion.div>
    </div>
  </div>
);

export function SkillsSection() {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden" id="skills">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Technical <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl hover:border-blue-500/30 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-slate-800 rounded-2xl group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-all duration-500">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
              </div>
              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar key={skillIdx} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Qualifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <CheckCircle2 className="text-blue-400" />
              Additional Qualifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-slate-300">
              {[
                "FPV Drone Flying",
                "Advanced Thermal Imaging Operations",
                "Geospatial Surveying & Mapping",
                "UAV Maintenance & Troubleshooting"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-slate-800/30 rounded-2xl border border-slate-700/30 hover:border-blue-500/30 transition-colors">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

