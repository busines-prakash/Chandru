'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, MapPin, Globe, ExternalLink, Send } from 'lucide-react';

interface ContactInfoProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const ContactInfo = ({ icon, label, value, href }: ContactInfoProps) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    className="group relative bg-slate-900/40 backdrop-blur-xl border border-slate-800 hover:border-blue-500/40 p-8 rounded-3xl transition-all duration-500 overflow-hidden"
  >
    <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="flex items-start gap-5 relative z-10">
      <div className="p-4 bg-slate-800 rounded-2xl text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-500">
        {icon}
      </div>
      <div>
        <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">{label}</p>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold text-lg hover:text-blue-400 transition-colors flex items-center gap-3"
          >
            {value}
            <ExternalLink size={16} className="opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0" />
          </a>
        ) : (
          <p className="text-white font-bold text-lg">{value}</p>
        )}
      </div>
    </div>
  </motion.div>
);

export function ContactSection() {
  const stats = [
    { label: "Experience", value: "4+", unit: "Years" },
    { label: "Area Mapped", value: "800+", unit: "Sq.km" },
    { label: "Area Sprayed", value: "400+", unit: "Acres" },
    { label: "Surveyed", value: "1000+", unit: "Km" },
  ];

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden" id="contact">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">

          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Communication</span>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight leading-tight">
              Let&apos;s Build the Future of <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">UAVs Together</span>
            </h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
            >
              <ContactInfo
                icon={<Phone size={24} />}
                label="Phone"
                value="+91 7868038227"
                href="tel:+917868038227"
              />
              <ContactInfo
                icon={<Mail size={24} />}
                label="Email"
                value="chandrus625@gmail.com"
                href="mailto:chandrus625@gmail.com"
              />
              <ContactInfo
                icon={<Linkedin size={24} />}
                label="LinkedIn"
                value="Professional Profile"
                href="https://www.linkedin.com/in/chandru-s-88bb58259/"
              />
              <ContactInfo
                icon={<MapPin size={24} />}
                label="Location"
                value="Sivaganga, TN, India"
                href="https://www.google.com/maps/search/?api=1&query=Sivaganga,+TN,+India"
              />
            </motion.div>

            {/* Premium Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="group p-6 bg-slate-900/30 border border-slate-800/50 rounded-3xl hover:border-blue-500/20 transition-all duration-500">
                  <div className="text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{stat.value}</div>
                  <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{stat.unit} {stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-10 md:p-12 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-500">
                    <Globe size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Language Proficiency</h3>
                </div>

                <div className="space-y-10">
                  <div className="group/lang">
                    <div className="flex justify-between mb-4">
                      <span className="text-white font-bold text-lg group-hover/lang:text-blue-400 transition-colors">Tamil</span>
                      <span className="text-blue-500 font-bold text-sm tracking-widest uppercase">Native</span>
                    </div>
                    <div className="w-full bg-slate-800/50 h-2 rounded-full overflow-hidden border border-slate-700/30">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        className="bg-gradient-to-r from-blue-600 to-cyan-500 h-full rounded-full"
                      />
                    </div>
                  </div>

                  <div className="group/lang">
                    <div className="flex justify-between mb-4">
                      <span className="text-white font-bold text-lg group-hover/lang:text-blue-400 transition-colors">English</span>
                      <span className="text-blue-500 font-bold text-sm tracking-widest uppercase">Professional (B1-B2)</span>
                    </div>
                    <div className="w-full bg-slate-800/50 h-2 rounded-full overflow-hidden border border-slate-700/30">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        className="bg-gradient-to-r from-blue-600 to-cyan-500 h-full rounded-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-16 p-8 bg-blue-500/5 rounded-[2rem] border border-blue-500/10 relative group-hover:bg-blue-500/10 transition-colors duration-500">
                  <p className="text-slate-400 text-base italic leading-relaxed text-center">
                    "Driving innovation in UAV technology through engineering excellence and operational precision."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

