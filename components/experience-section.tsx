'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

const experiences: Experience[] = [
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
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden" id="experience">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">Professional Journey</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Work <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-slate-800" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950 z-20" />

                {/* Content Card */}
                <div className="w-full md:w-[45%] ml-8 md:ml-0">
                  <div className="group bg-slate-900/40 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="flex flex-wrap items-center gap-3 mb-4 text-sm font-bold text-blue-400 uppercase tracking-widest">
                        <Calendar size={14} />
                        {exp.period}
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {exp.title}
                      </h3>
                      
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
                          <Briefcase size={16} className="text-blue-500" />
                          {exp.company}
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-slate-400 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-3 group/item">
                            <ChevronRight size={16} className="text-blue-500 mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                            <span className="text-slate-300 text-sm leading-relaxed">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty space for the other side on desktop */}
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

