'use client';

import { motion } from 'framer-motion';

export function ContactSection() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <p className="text-xl text-slate-300">
            Ready to discuss your UAV and drone projects? Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {/* Phone */}
          <motion.a
            variants={itemVariants}
            href="tel:+917868038227"
            className="group bg-slate-800 bg-opacity-50 backdrop-blur border border-blue-500 border-opacity-30 hover:border-opacity-100 rounded-lg p-8 text-center transition duration-300"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition transform">
              📞
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
            <p className="text-blue-400 font-semibold hover:text-cyan-400">
              +91 7868038227
            </p>
          </motion.a>

          {/* Email */}
          <motion.a
            variants={itemVariants}
            href="mailto:chandrus625@gmail.com"
            className="group bg-slate-800 bg-opacity-50 backdrop-blur border border-blue-500 border-opacity-30 hover:border-opacity-100 rounded-lg p-8 text-center transition duration-300"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition transform">
              ✉️
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-blue-400 font-semibold hover:text-cyan-400 break-all">
              chandrus625@gmail.com
            </p>
          </motion.a>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-800 bg-opacity-50 backdrop-blur border border-blue-500 border-opacity-30 rounded-lg p-8 text-center"
          >
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold text-white mb-2">Location</h3>
            <p className="text-blue-400 font-semibold">
              Sivaganga, Tamil Nadu<br />
              India
            </p>
          </motion.div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-blue-900 bg-opacity-30 border border-blue-500 border-opacity-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">4+</div>
            <p className="text-slate-300">Years Experience</p>
          </div>
          <div className="bg-blue-900 bg-opacity-30 border border-blue-500 border-opacity-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">150+</div>
            <p className="text-slate-300">Sq.km Mapped</p>
          </div>
          <div className="bg-blue-900 bg-opacity-30 border border-blue-500 border-opacity-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">400+</div>
            <p className="text-slate-300">Acres Sprayed</p>
          </div>
          <div className="bg-blue-900 bg-opacity-30 border border-blue-500 border-opacity-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">1000+</div>
            <p className="text-slate-300">Km Surveyed</p>
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-slate-800 bg-opacity-50 backdrop-blur border border-blue-500 border-opacity-30 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold text-blue-400 mb-6">Languages</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white font-semibold">Tamil (Native)</span>
                <span className="text-blue-400">Native</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full w-full" />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white font-semibold">English</span>
                <span className="text-blue-400">B1-B2 Level</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full w-4/5" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
