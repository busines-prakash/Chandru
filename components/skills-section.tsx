'use client';

import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Technical Skills',
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
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-slate-300">{name}</span>
      <span className="text-blue-400 font-semibold text-sm">{level}%</span>
    </div>
    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full rounded-full"
      />
    </div>
  </div>
);

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-slate-800 bg-opacity-50 backdrop-blur p-8 rounded-lg border border-blue-500 border-opacity-30 hover:border-opacity-60 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-8">{category.category}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar key={skillIdx} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-blue-900 bg-opacity-30 border border-blue-500 border-opacity-50 rounded-lg p-8"
        >
          <h3 className="text-xl font-bold text-blue-300 mb-4">Additional Qualifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full" />
              <span>FPV Drone Flying</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full" />
              <span>Advanced Thermal Imaging Operations</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full" />
              <span>Geospatial Surveying & Mapping Expertise</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full" />
              <span>UAV Maintenance & Troubleshooting</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
