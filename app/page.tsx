import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { SecurityLab } from '@/components/security-lab'
import { Experience } from '@/components/experience'
import { EducationCerts } from '@/components/education-certs'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <SecurityLab />
        <Experience />
        <EducationCerts />
        <Contact />
      </main>
    </>
  )
}
