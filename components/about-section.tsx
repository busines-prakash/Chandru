'use client';

import { motion } from 'framer-motion';
import { User, Target, Zap, Award } from 'lucide-react';

export function AboutSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const features = [
    {
      icon: <Target className="text-blue-400" size={24} />,
      title: "System Integration & Design",
      description: "Experience in micro, small, and medium multirotor drone design and development."
    },
    {
      icon: <Zap className="text-cyan-400" size={24} />,
      title: "Mission-Critical Operations",
      description: "Expertise in DGPS operations, thermal inspections, and large-scale surveying projects."
    },
    {
      icon: <Award className="text-blue-500" size={24} />,
      title: "Flight Performance Optimization",
      description: "PID tuning, calibration, and validation using telemetry data analysis."
    }
  ];

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden" id="about">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image Side */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative h-full w-full rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Chandru S - UAV Engineer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-slate-900/90 backdrop-blur-xl border border-slate-700 p-4 rounded-2xl shadow-xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Experience</p>
                    <p className="text-white font-bold">4+ Years Professional</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">Professional Background</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                UAV Engineer with hands-on experience in ArduPilot & PX4 systems, drone integration, VTOL & multirotor operations, aerial mapping, LiDAR surveying, payload integration, and autonomous mission execution. Skilled in UAV assembly, parameter tuning, PPK geotagging, flight testing, and Pix4D data processing for industrial drone applications.
              </p>
            </div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-all duration-300">
                  <div className="p-2.5 bg-slate-800 rounded-xl mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all duration-300 shadow-lg shadow-blue-900/20 active:scale-95"
              >
                Get in Touch
              </a>
              <a
                href="mailto:chandrus625@gmail.com"
                className="px-8 py-4 border border-slate-700 text-white hover:bg-slate-900 rounded-xl font-bold transition-all duration-300 active:scale-95"
              >
                Email
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

