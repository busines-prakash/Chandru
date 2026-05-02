'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'DGPS Surveying Operations',
    client: 'Survey of India & Mining (Ryno Drone)',
    description: 'High-precision DGPS mapping and data collection for geological surveys',
    technologies: ['DGPS', 'Ryno Drone', 'RTK', 'Geospatial Analysis'],
    impact: 'Achieved ±5cm accuracy in large-scale surveying'
  },
  {
    title: 'Highway Surveillance Project',
    client: 'NHAI (1000+ km)',
    description: 'Extended corridor monitoring and infrastructure assessment',
    technologies: ['DJI Mavic Air 2s', 'Aerial Mapping', 'Real-time Monitoring'],
    impact: 'Covered 1000+ km of highway infrastructure'
  },
  {
    title: 'Solar Panel Mapping',
    client: 'Renewable Energy Project',
    description: 'Thermal and visual mapping of large-scale solar installations',
    technologies: ['DJI Matrice 300', 'Thermal Imaging', 'Photogrammetry'],
    impact: 'Complete 360° thermal assessment of 50+ hectares'
  },
  {
    title: 'Power Transmission Line Inspection',
    client: 'Utilities Infrastructure',
    description: 'Detailed inspection of high-voltage transmission lines',
    technologies: ['DJI Mavic 2 Advanced', 'Thermal Imaging', 'FPV Operations'],
    impact: 'Reduced inspection time by 60% vs traditional methods'
  },
  {
    title: 'Industrial Refinery Inspection',
    client: 'IOCL Refinery, Gujarat',
    description: '4-month dedicated inspection project of refinery infrastructure',
    technologies: ['Multi-platform UAVs', 'Thermal Analysis', 'Report Generation'],
    impact: 'Comprehensive structural assessment completed safely'
  },
  {
    title: 'Agricultural Spraying Operations',
    client: 'Agri-Tech Companies',
    description: 'Pesticide and insecticide application across large farms',
    technologies: ['Pixhawk', 'K++ Drones', 'K3 Pro', 'Spray System Integration'],
    impact: 'Successfully covered 400+ acres with precision spraying'
  },
];

export function ProjectsSection() {
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
              className="group relative overflow-hidden rounded-lg bg-slate-800 bg-opacity-50 backdrop-blur border border-blue-500 border-opacity-30 hover:border-opacity-100 transition duration-300"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition duration-300" />

              <div className="relative p-6 h-full flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition">
                  {project.title}
                </h3>

                <p className="text-blue-400 text-sm font-semibold mb-3">{project.client}</p>

                <p className="text-slate-300 text-sm mb-4 flex-grow">
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
    </section>
  );
}
