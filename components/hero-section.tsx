'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="w-full h-screen relative overflow-hidden bg-slate-950 flex flex-col items-center justify-center px-4" id="home">
      
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated Orbs */}
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.span 
            initial={{ opacity: 0, tracking: '0.1em' }}
            animate={{ opacity: 1, tracking: '0.3em' }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-blue-500 font-bold uppercase text-sm md:text-base block"
          >
            Pioneering the Sky
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white drop-shadow-2xl">
            Chandru <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">S</span>
          </h1>
          
          <div className="relative inline-block">
            <h2 className="text-2xl md:text-4xl text-slate-300 font-bold tracking-tight">
              UAV System Engineer & Pilot
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-600 to-transparent rounded-full"
            />
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-xl mx-auto text-slate-400 text-lg md:text-xl font-medium leading-relaxed pt-4"
          >
            Engineering excellence in autonomous flight systems and advanced aerial robotics.
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div 
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 group cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em] group-hover:text-blue-400 transition-colors">Discover More</span>
          <div className="w-6 h-10 rounded-full border-2 border-slate-800 flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 bg-blue-500 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

