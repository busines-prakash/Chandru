'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'UAV System Engineer & Pilot',
    company: 'Hawking Robotics Private Limited',
    location: 'Chennai',
    period: 'Jan 2024 - Present',
    description: 'Drone engineering and piloting for complex system integration and mapping applications',
    achievements: [
      'Assembly and testing of Fixed Wing EVTOL aircraft',
      'Design and fabrication of mapping drones for photogrammetry',
      'Thermal inspection using DJI Mavic 3 and Matrix 350 RTK',
      '2D mapping of 150+ sq.km area using STRIVER VTOL drone',
      'Data processing and report generation for inspection projects'
    ]
  },
  {
    title: 'UAV Pilot',
    company: 'Garuda Aerospace Private Limited',
    location: 'Chennai',
    period: 'Mar 2022 - Dec 2023',
    description: 'Heavy-lifting drone operations and specialized aerial missions',
    achievements: [
      'Pilot for heavy-lifting drone operations',
      'Power transmission line inspection projects',
      'Pipeline and infrastructure inspection missions',
      'Agricultural surveying and spraying operations (400+ acres)'
    ]
  }
];

export function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 border-l-2 border-blue-500"
            >
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-3 top-2" />

              <div className="bg-slate-800 bg-opacity-50 backdrop-blur p-6 rounded-lg hover:bg-opacity-70 transition duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <p className="text-blue-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-slate-400">{exp.period}</p>
                    <p className="text-slate-500 text-sm">{exp.location}</p>
                  </div>
                </div>

                <p className="text-slate-300 mb-4">{exp.description}</p>

                <div className="space-y-2">
                  <p className="text-sm text-slate-400 font-semibold">Key Achievements:</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
