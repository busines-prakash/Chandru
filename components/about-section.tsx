'use client';

import { motion } from 'framer-motion';

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

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl blur-2xl opacity-50" />
              <img
                src="/profile.jpg"
                alt="Chandru S - UAV Engineer"
                className="relative rounded-2xl object-cover shadow-2xl w-full h-full"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded" />
            </div>

            <p className="text-xl text-slate-200 leading-relaxed font-medium">
              UAV Engineer with hands-on experience in ArduPilot & PX4 systems, drone integration, VTOL & multirotor operations, aerial mapping, LiDAR surveying, payload integration, and autonomous mission execution. Skilled in UAV assembly, parameter tuning, PPK geotagging, flight testing, and Pix4D data processing for industrial drone applications.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-5">
                <div className="w-2.5 h-2.5 bg-blue-400 rounded-full mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
                <div>
                  <h3 className="font-bold text-xl text-white mb-2">System Integration & Design</h3>
                  <p className="text-slate-300 text-lg leading-relaxed">Experience in micro, small, and medium multirotor drone design and development.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-2.5 h-2.5 bg-blue-400 rounded-full mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
                <div>
                  <h3 className="font-bold text-xl text-white mb-2">Mission-Critical Operations</h3>
                  <p className="text-slate-300 text-lg leading-relaxed">Expertise in DGPS operations, thermal inspections, and large-scale surveying projects.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-2.5 h-2.5 bg-blue-400 rounded-full mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
                <div>
                  <h3 className="font-bold text-xl text-white mb-2">Flight Performance Optimization</h3>
                  <p className="text-slate-300 text-lg leading-relaxed">PID tuning, calibration, and validation using telemetry data analysis.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex gap-4">
              <a
                href="tel:+917868038227"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition duration-300"
              >
                Get in Touch
              </a>
              <a
                href="mailto:chandrus625@gmail.com"
                className="px-8 py-3 border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg font-semibold transition duration-300"
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
