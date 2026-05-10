'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

import eng1 from '../Engineer/1.jpeg';
import eng2 from '../Engineer/2.jpeg';
import eng3 from '../Engineer/3.jpeg';
import eng4 from '../Engineer/4.jpeg';
import eng5 from '../Engineer/5.jpeg';
import eng6 from '../Engineer/6.jpeg';

const engineerImages = [eng1, eng2, eng3, eng4, eng5, eng6];

const projects = [
  {
    id: "engineer",
    title: "UAV Engineer",
    client: "Feature Project",
    description: "UAV Engineer with hands-on experience in ArduPilot & PX4 systems, drone integration, VTOL & multirotor operations, aerial mapping, LiDAR surveying, payload integration, and autonomous mission execution. Skilled in UAV assembly, parameter tuning, PPK geotagging, flight testing, and Pix4D data processing for industrial drone applications.",
    technologies: ["ArduPilot", "PX4", "VTOL", "LiDAR", "Pix4D"],
    impact: "Industrial drone applications",
    images: engineerImages
  }
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
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

  const openProject = (project: typeof projects[0]) => {
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
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              onClick={() => openProject(project)}
              className="group relative overflow-hidden rounded-lg bg-slate-800 bg-opacity-50 backdrop-blur border border-blue-500 border-opacity-30 hover:border-opacity-100 transition duration-300 cursor-pointer flex flex-col"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition duration-300" />
              
              {/* Cover Image Preview */}
              {project.images && project.images.length > 0 && (
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-blue-500 bg-opacity-80 p-2 rounded-full text-white shadow-lg shadow-blue-500/50">
                      <ZoomIn size={24} />
                    </div>
                  </div>
                </div>
              )}

              <div className="relative p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition">
                  {project.title}
                </h3>

                <p className="text-blue-400 text-sm font-semibold mb-3">{project.client}</p>

                <p className="text-slate-300 text-sm mb-4 flex-grow line-clamp-3">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="text-xs px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full border border-blue-500 border-opacity-50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-700">
                    <p className="text-cyan-400 text-sm font-semibold">
                      💡 {project.impact}
                    </p>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm p-4 md:p-8"
          >
            <button
              onClick={closeProject}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-blue-400 transition bg-slate-800 bg-opacity-50 hover:bg-slate-700 rounded-full p-2 z-10"
            >
              <X size={32} />
            </button>

            <div 
              className="relative w-full max-w-6xl h-full max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={selectedProject.images[currentImageIndex]}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                  alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                />
              </AnimatePresence>

              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 bg-slate-800 bg-opacity-50 hover:bg-slate-700 text-white p-2 md:p-3 rounded-full transition transform hover:scale-110 z-10"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 bg-slate-800 bg-opacity-50 hover:bg-slate-700 text-white p-2 md:p-3 rounded-full transition transform hover:scale-110 z-10"
                  >
                    <ChevronRight size={32} />
                  </button>

                  <div className="absolute -bottom-12 md:-bottom-16 left-1/2 -translate-x-1/2 flex space-x-3 bg-slate-900 bg-opacity-50 px-4 py-2 rounded-full backdrop-blur-sm">
                    {selectedProject.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(idx);
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          idx === currentImageIndex 
                            ? 'bg-blue-400 scale-125' 
                            : 'bg-white bg-opacity-40 hover:bg-opacity-70'
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 md:max-w-md bg-slate-900 bg-opacity-80 p-4 rounded-xl border border-slate-700 pointer-events-none backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-2">{selectedProject.title}</h3>
              <p className="text-sm text-slate-300 line-clamp-3">{selectedProject.description}</p>
              <div className="mt-3 text-xs text-blue-400 font-medium">
                Image {currentImageIndex + 1} of {selectedProject.images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
