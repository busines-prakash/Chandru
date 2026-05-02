import { Hero3D } from '@/components/hero-3d'
import { AboutSection } from '@/components/about-section'
import { ExperienceSection } from '@/components/experience-section'
import { SkillsSection } from '@/components/skills-section'
import { ProjectsSection } from '@/components/projects-section'
import { ContactSection } from '@/components/contact-section'

export function App() {
  return (
    <main className="w-full bg-slate-950">
      <Hero3D />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

      <footer className="bg-slate-950 border-t border-blue-500 border-opacity-30 py-8 text-center text-slate-400">
        <p>© 2025 Chandru S - UAV System Engineer. All rights reserved.</p>
      </footer>
    </main>
  )
}
