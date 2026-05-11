'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ExternalLink, Briefcase, Zap } from 'lucide-react';

import eng1 from '../Engineer/1.jpeg';
import eng2 from '../Engineer/2.jpeg';
import eng3 from '../Engineer/3.jpeg';
import eng4 from '../Engineer/4.jpeg';
import eng5 from '../Engineer/5.jpeg';
import eng6 from '../Engineer/6.jpeg';

import pilot7 from '../Pilot/7.jpeg';
import pilot8 from '../Pilot/8.jpeg';
import pilot9 from '../Pilot/9.jpeg';
import pilot10 from '../Pilot/10.jpeg';
import pilot11 from '../Pilot/11.jpeg';
import pilot12 from '../Pilot/12.jpeg';

interface ProjectImage {
  src: string;
  title?: string;
  description: string;
}

interface Project {
  id: string;
  title: string;
  client: string;
  role: string;
  description: string;
  technologies: string[];
  impact: string;
  images: ProjectImage[];
}

const projects: Project[] = [
  {
    id: "engineer",
    title: "UAV Engineer",
    client: "UAV Systems Integration",
    role: "Engineering & Design",
    description: "UAV Engineer with hands-on experience in ArduPilot & PX4 systems, drone integration, VTOL & multirotor operations, aerial mapping, LiDAR surveying, payload integration, and autonomous mission execution. Skilled in UAV assembly, parameter tuning, PPK geotagging, flight testing, and Pix4D data processing for industrial drone applications.",
    technologies: ["ArduPilot", "PX4", "VTOL", "LiDAR", "Pix4D"],
    impact: "Industrial drone applications",
    images: [
      {
        src: eng1,
        title: "PX4 Octocopter Integration",
        description: "Worked on PX4-based Octocopter integration involving frame assembly, motor and ESC connections, wiring management, power module setup, and flight controller integration. Experienced in hardware-level troubleshooting, drone system architecture, calibration processes, and overall UAV integration workflow. Focused on achieving stable communication between components and ensuring reliable flight-ready configuration for testing and deployment."
      },
      {
        src: eng2,
        title: "ArduPilot Heavy-Lift Quad Coaxial",
        description: "Worked on the development and integration of a heavy-lift Quad Coaxial drone platform powered by the ArduPilot flight control system. Involved in complete UAV assembly including frame integration, motor and ESC setup, power distribution, wiring management, and flight controller configuration. Performed in-house flight testing, calibration, and system troubleshooting to validate flight stability and payload performance. The platform is currently under internal testing for high payload operations with an estimated lifting capability of up to 300 kg for industrial and specialized UAV applications."
      },
      {
        src: eng3,
        title: "Industrial Facade Cleaning Drone",
        description: "Built and prepared an industrial facade cleaning drone for real-time cleaning applications and successfully completed a live demo at L&T. Worked on complete system setup including frame assembly, payload integration, wiring, calibration, safety checks, and operational testing. Handled on-site troubleshooting and ensured stable drone performance during the demonstration. Gained hands-on experience in industrial UAV deployment, field operations, and application-based drone solutions for high-rise maintenance and cleaning tasks."
      },
      {
        src: eng4,
        title: "Striver Mini VTOL Platform",
        description: "Integrated and developed a Striver Mini VTOL platform using an externally sourced airframe and completed the full in-house UAV setup. Worked on wiring integration, motor and ESC installation, power distribution, and overall system configuration. Integrated a Sony Alpha 6000 camera payload for aerial mapping and survey applications. Handled wire routing, parameter tuning, and flight controller configuration to ensure stable flight performance and reliable mission execution. Experienced in VTOL system integration, payload setup, UAV electronics, mission-ready configuration, and in-house testing workflows."
      },
      {
        src: eng5,
        title: "Multirotor Mapping Drone",
        description: "Developed and integrated a multirotor mapping drone for aerial survey and mapping applications. Worked on complete drone assembly including frame setup, wiring integration, motor and ESC installation, power distribution, and flight controller configuration. Successfully achieved a total drone weight of 2 kg with an approximate flight endurance of 30 minutes. Conducted successful flight tests and completed aerial mapping missions with stable flight performance and reliable data acquisition. Experienced in multirotor UAV integration, mapping workflows, parameter tuning, flight testing, and mission-based drone operations."
      },
      {
        src: eng6,
        title: "Autonomous Egg Dropping Drone",
        description: "Developed an autonomous egg dropping drone project for Sai India with fully automated mission execution capabilities. Configured the UAV to perform autonomous takeoff, waypoint navigation, precision landing, payload release, and automatic return-to-home operations based on predefined mission inputs. Worked on mission planning, flight controller configuration, payload mechanism integration, parameter tuning, and overall system testing to achieve reliable autonomous operation. Successfully implemented automated egg drop functionality with stable navigation and controlled landing performance. Experienced in autonomous UAV workflows, mission automation, payload delivery systems, waypoint navigation, and flight testing."
      }
    ]
  },
  {
    id: "pilot",
    title: "UAV Pilot",
    client: "Operational Expertise",
    role: "Flight Operations & Mapping",
    description: "UAV Pilot with hands-on experience in multirotor & VTOL operations, autonomous mission planning, aerial mapping, LiDAR surveys, telemetry monitoring, and industrial drone applications. Skilled in flight operations, PPK workflows, geotagging, safety procedures, and Pix4D-based mapping data processing.",
    technologies: ["Multirotor", "VTOL", "LiDAR", "PPK", "Pix4D"],
    impact: "",
    images: [
      {
        src: pilot7,
        title: "A200 Aerial Mapping",
        description: "Performed aerial mapping and survey operations using the A200 Drone for beach and mining survey applications. Conducted complete flight missions including mission planning, autonomous flight execution, telemetry monitoring, and on-field UAV operations to capture accurate aerial survey data. After successful flight completion, processed the collected mapping data using Pix4D to generate orthomosaic outputs, mapping models, and survey reports. Experienced in end-to-end mapping workflows from flight operations to data processing and final report submission for industrial survey projects."
      },
      {
        src: pilot8,
        title: "Striver Mini VTOL Survey",
        description: "Handled complete aerial mapping operations using the Striver Mini VTOL platform for large-area survey missions covering 800+ sq. ft. Performed mission planning, autonomous flight execution, telemetry monitoring, and field operations for accurate aerial data collection. Worked with Emlid PPK systems using both base and rover setups to achieve high-precision geotagging and improved mapping accuracy. Responsible for daily geotagging workflows for all completed flight missions and ensuring proper synchronization of captured survey data. After mission completion, processed aerial datasets using Pix4D to generate mapping outputs, orthomosaics, and client-required deliverables. Experienced in complete end-to-end survey workflow including UAV operations, PPK processing, geotagging, data validation, and final report submission."
      },
      {
        src: pilot9,
        title: "Bridge Infrastructure Inspection",
        description: "Performed aerial photo and video documentation of railway track bridge infrastructure using the DJI Mavic 2 Pro. Conducted controlled flight operations to capture high-quality aerial visuals for inspection, monitoring, and documentation purposes. Handled mission planning, camera operation, flight safety procedures, and stable low-altitude flying to ensure clear visual coverage of bridge structures and railway track areas. Experienced in aerial cinematography, infrastructure inspection support, and industrial drone operations for real-world field applications."
      },
      {
        src: pilot10,
        title: "LiDAR Mapping - M350 RTK",
        description: "Executed a LiDAR mapping project using the DJI Matrice 350 RTK integrated with the Zenmuse L1 for aerial surveying and terrain data collection. Successfully completed LiDAR data acquisition covering approximately 450+ sq. ft area with accurate point cloud capture and stable autonomous flight performance. Handled mission planning, payload operation, telemetry monitoring, flight safety procedures, and on-field UAV operations during the project execution. Experienced in LiDAR-based survey workflows, RTK-enabled mapping operations, autonomous mission execution, and industrial UAV applications."
      },
      {
        src: pilot11,
        title: "Solar Panel Thermal Inspection",
        description: "Performed solar panel thermal inspection missions using the DJI Mavic 3T for identifying hotspots, faulty cells, and temperature variations in solar farm infrastructure. Conducted autonomous flight operations, mission planning, telemetry monitoring, and thermal data acquisition for efficient inspection workflows. Experienced in UAV-based thermal inspections, industrial drone operations, aerial monitoring, and renewable energy survey applications."
      },
      {
        src: pilot12,
        title: "DGPS/RTK Survey Workflow",
        description: "Experienced in DGPS/RTK survey workflows for mapping projects, including ground control point (GCP) collection, coordinate validation, and high-accuracy positioning before UAV mission execution. Skilled in improving mapping precision and georeferencing accuracy for aerial survey operations."
      }
    ]
  }
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden relative" id="projects">
      {/* Background blobs */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">Portfolio Showcase</span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Featured <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              onClick={() => openProject(project)}
              className="group relative flex flex-col bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-slate-800 hover:border-blue-500/40 transition-all duration-700 cursor-pointer group shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-80 w-full overflow-hidden">
                <img 
                  src={project.images[0].src} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                

              </div>

              {/* Content */}
              <div className="p-10 flex flex-col flex-grow relative">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 font-bold text-xs mt-2 uppercase tracking-widest">{project.client}</p>
                  </div>
                  <div className="p-3 bg-slate-800 rounded-2xl text-slate-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-all duration-500">
                    <Briefcase size={24} />
                  </div>
                </div>

                <p className="text-slate-400 text-base leading-relaxed mb-8 flex-grow line-clamp-3">
                  {project.description}
                </p>

                <div className="space-y-6 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 bg-slate-800/80 text-slate-300 rounded-xl border border-slate-700/50 group-hover:border-blue-500/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-slate-800/50 flex items-center justify-between">

                    <span className="text-slate-600 text-xs font-bold">{project.images.length} Photos</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && selectedProject.images && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/98 backdrop-blur-2xl p-4 md:p-8"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={closeProject}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-all bg-white/5 hover:bg-white/10 rounded-full p-4 z-[110] border border-white/10"
            >
              <X size={24} />
            </motion.button>

            <div 
              className="relative w-full max-w-7xl h-full flex flex-col md:flex-row items-center justify-center gap-12"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Display */}
              <div className="relative flex-grow h-full max-h-[55vh] md:max-h-full w-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 0.95, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95, x: -20 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="relative max-h-full max-w-full group/modal"
                  >
                    <img
                      src={selectedProject.images[currentImageIndex].src}
                      className="max-h-full max-w-full object-contain rounded-3xl shadow-[0_0_100px_rgba(37,99,235,0.1)] border border-white/5"
                      alt={selectedProject.images[currentImageIndex].title}
                    />
                    
                    {/* Floating Title Overlay */}
                    {selectedProject.images[currentImageIndex].title && (
                      <div className="absolute bottom-6 left-6 right-6 p-6 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl opacity-0 group-hover/modal:opacity-100 transition-opacity duration-300 hidden md:block">
                        <h4 className="text-xl font-bold text-white">{selectedProject.images[currentImageIndex].title}</h4>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-blue-600 text-white p-5 rounded-full backdrop-blur-md transition-all border border-white/10 hover:border-blue-500 group -translate-x-1/2 hidden md:flex"
                    >
                      <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-blue-600 text-white p-5 rounded-full backdrop-blur-md transition-all border border-white/10 hover:border-blue-500 group translate-x-1/2 hidden md:flex"
                    >
                      <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    {/* Mobile Navigation */}
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 md:hidden">
                      <button onClick={prevImage} className="p-3 bg-white/10 rounded-full text-white"><ChevronLeft size={24}/></button>
                      <span className="text-white font-bold text-sm">{currentImageIndex + 1} / {selectedProject.images.length}</span>
                      <button onClick={nextImage} className="p-3 bg-white/10 rounded-full text-white"><ChevronRight size={24}/></button>
                    </div>
                  </>
                )}
              </div>

              {/* Sidebar Content */}
              <div className="w-full md:w-[450px] flex-shrink-0 bg-slate-900/60 p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-xl flex flex-col max-h-[45vh] md:max-h-full overflow-y-auto shadow-2xl">
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400">
                      <Briefcase size={20} />
                    </div>
                    <span className="text-blue-500 font-bold uppercase tracking-widest text-[11px]">Case Study</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                    {selectedProject.images[currentImageIndex].title || selectedProject.title}
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
                </div>
                
                <div className="bg-slate-800/40 p-6 rounded-2xl border border-white/5 mb-8">
                  <p className="text-slate-300 text-base leading-relaxed">
                    {selectedProject.images[currentImageIndex].description}
                  </p>
                </div>

                <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {selectedProject.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`h-1.5 rounded-full transition-all duration-500 ${
                            idx === currentImageIndex ? 'w-10 bg-blue-500' : 'w-3 bg-white/20 hover:bg-white/40'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                      {currentImageIndex + 1} of {selectedProject.images.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

