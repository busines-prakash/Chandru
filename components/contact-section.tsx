'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, MapPin, Globe, ExternalLink } from 'lucide-react';

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
    className="group relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 hover:border-blue-500/50 p-6 rounded-2xl transition-all duration-300"
  >
    <div className="flex items-start gap-4">
      <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
        {icon}
      </div>
      <div>
        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{label}</p>
        {href ? (
          <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white font-bold text-base hover:text-blue-400 transition-colors flex items-center gap-2"
          >
            {value}
            <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
          </a>
        ) : (
          <p className="text-white font-bold text-base">{value}</p>
        )}
      </div>
    </div>
  </motion.div>
);

export function ContactSection() {
  const stats = [
    { label: "Experience", value: "4+", unit: "Years" },
    { label: "Area Mapped", value: "150+", unit: "Sq.km" },
    { label: "Area Sprayed", value: "400+", unit: "Acres" },
    { label: "Surveyed", value: "1000+", unit: "Km" },
  ];

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden" id="contact">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          
          {/* Left Side: Text & Contact Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">
              Let&apos;s Build the Future of <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">UAVs Together</span>
            </h2>
            

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
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
              />
            </motion.div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-900/30 border border-slate-800/50 p-4 rounded-2xl">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-slate-500 text-xs font-medium">{stat.unit} {stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Language & Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-6 md:p-8 rounded-[2.5rem] border border-slate-800 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <Globe className="text-blue-500 mb-6" size={48} />
                <h3 className="text-2xl font-bold text-white mb-8">Language Proficiency</h3>
                
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-3">
                      <span className="text-white font-bold">Tamil</span>
                      <span className="text-blue-400 font-bold">Native</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-gradient-to-r from-blue-600 to-cyan-500 h-full rounded-full"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-3">
                      <span className="text-white font-bold">English</span>
                      <span className="text-blue-400 font-bold">Professional (B1-B2)</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "80%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="bg-gradient-to-r from-blue-600 to-cyan-500 h-full rounded-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-blue-500/5 rounded-2xl border border-blue-500/10">
                  <p className="text-slate-400 text-sm italic">
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
