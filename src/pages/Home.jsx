import { Link } from 'wouter'
import FadeIn from '../components/FadeIn'
import ProjectCard from '../components/ProjectCard'
import { categories, getFeaturedProjects } from '../data/projects'

const categoryNumbers = {
  'interactive-media': '01',
  'learning-module': '02',
  'learning-video': '03',
}

const skills = [
  'Instructional Design',
  'Learning Management System (LMS)',
  'Articulate Storyline',
  'Adobe Creative Suite',
  'Canva',
  'Curriculum Development',
  'Multimedia Production',
  'Camera Operation',
  '3D AR Content',
  'SCORM Development',
  'Creative Content',
  'AI Content Generation',
]

const workExperience = [
  {
    role: 'Education Content Development',
    org: 'Assemblr',
    period: 'Sep 2024 – Present',
    location: 'Bandung',
  },
  {
    role: 'Learning Module Developer Intern',
    org: 'Telkom Indonesia',
    period: 'Aug 2023 – Dec 2023',
    location: 'Bandung',
  },
  {
    role: 'Learning Content Video Production Intern',
    org: 'Kompas Gramedia',
    period: 'Feb 2023 – Jun 2023',
    location: 'Jakarta',
  },
]

const education = [
  {
    degree: 'Bachelor of Educational Technology',
    institution: 'Universitas Pendidikan Indonesia',
    detail: 'GPA 3.77 / 4.00',
    period: '2020 – 2024',
  },
  {
    degree: 'Multimedia',
    institution: 'SMK Negeri 2 Cimahi',
    detail: '',
    period: '2017 – 2020',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f5f2] text-black" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(180,160,255,0.08) 0%, transparent 70%)' }}
        />
        <div style={{ animation: 'heroFadeIn 1s ease forwards' }}>
          <p className="tracking-[0.35em] text-xs uppercase text-neutral-400 mb-6 font-medium">
            Portfolio — Instructional Designer
          </p>
          <h1 className="text-6xl md:text-8xl font-semibold leading-[1.02] tracking-tight max-w-4xl text-neutral-900">
            Dhenisha<br />
            <span className="text-neutral-400">Agustine Fadilla</span>
          </h1>
          <p className="mt-8 text-neutral-500 text-base md:text-lg max-w-xl leading-relaxed mx-auto">
            Instructional designer and e-learning content developer with experience in creating interactive learning media, digital training materials, and creative educational experiences.
          </p>
          <div className="mt-10 flex gap-3 flex-wrap justify-center">
            <a
              href="#projects"
              data-testid="button-view-projects"
              className="bg-neutral-900 text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-black transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              data-testid="button-contact"
              className="border border-neutral-300 text-neutral-700 px-7 py-3 rounded-full text-sm font-medium hover:border-neutral-900 hover:text-neutral-900 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 border border-neutral-300 rounded-full flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 bg-neutral-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 md:px-20 py-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <p className="uppercase tracking-[0.25em] text-xs text-neutral-400 mb-5 font-medium">About Me</p>
            <h2 className="text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight text-neutral-900">
              Blending education,<br />
              <span className="text-neutral-400">creativity & digital</span><br />
              experiences.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-neutral-500 leading-relaxed text-base mt-2">
              Instructional designer with 3+ years of experience in educational content development, e-learning, multimedia production, and social media creative projects across various digital platforms. Skilled in developing interactive learning media, curriculum-based educational content, and engaging digital learning experiences that support effective knowledge delivery and learner engagement.
            </p>
            <p className="text-neutral-500 leading-relaxed text-base mt-4">
              Certified by BNSP in "Develop Learning Media," with strong expertise in
              instructional design, curriculum-based learning development, and interactive
              digital media.
            </p>
            <div className="mt-8 flex flex-wrap gap-y-5 gap-x-6">
              <div>
                <p className="text-2xl font-semibold text-neutral-900">3+</p>
                <p className="text-xs text-neutral-400 mt-0.5">Years Experience</p>
              </div>
              <div className="w-px bg-neutral-200" />
              <div>
                <p className="text-2xl font-semibold text-neutral-900">3.77</p>
                <p className="text-xs text-neutral-400 mt-0.5">GPA / 4.00</p>
              </div>
              <div className="w-px bg-neutral-200" />
              <div>
                <p className="text-2xl font-semibold text-neutral-900">BNSP</p>
                <p className="text-xs text-neutral-400 mt-0.5">Certified</p>
              </div>
              <div className="w-px bg-neutral-200" />
              <div>
                <p className="text-2xl font-semibold text-neutral-900">3+</p>
                <p className="text-xs text-neutral-400 mt-0.5">Companies</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PROJECTS — 4 Sub-Categories */}
      <section id="projects" className="px-6 md:px-20 py-28 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="uppercase tracking-[0.25em] text-xs text-neutral-400 mb-4 font-medium">Selected Works</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl mb-20 leading-relaxed">
              Three areas of work — each with a live preview of a featured project. Click any category to see all projects.
            </p>
          </FadeIn>

          <div className="space-y-24">
            {categories.map((cat, catIdx) => {
              const featured = getFeaturedProjects(cat.id)
              if (!featured.length) return null

              return (
                <FadeIn key={cat.id} delay={catIdx * 0.04}>
                  <div className="grid md:grid-cols-[260px_1fr] gap-10 items-start">
                    {/* Label column */}
                    <div className="md:sticky md:top-28">
                      <p className="text-xs text-neutral-300 font-mono mb-2">{categoryNumbers[cat.id]}</p>
                      <h3 className="text-2xl font-semibold text-neutral-900 mb-2">{cat.label}</h3>
                      <p className="text-sm text-neutral-400 leading-relaxed mb-6">{cat.tagline}</p>
                      <Link
                        href={`/projects/${cat.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 border border-neutral-300 px-4 py-2 rounded-full hover:border-neutral-900 hover:text-neutral-900 transition-all"
                        data-testid={`link-view-all-${cat.id}`}
                      >
                        View All →
                      </Link>
                    </div>

                    {/* Featured cards — 1 or 2 side by side */}
                    <div className={featured.length > 1 ? 'grid md:grid-cols-2 gap-5' : ''}>
                      {featured.map((p, i) => {
                        // With an odd number of featured cards, the first one is shown large (full width)
                        const isHero = featured.length > 1 && featured.length % 2 === 1 && i === 0
                        return (
                          <div key={p.id} className={isHero ? 'md:col-span-2' : ''}>
                            <ProjectCard
                              project={p}
                              index={catIdx * 2 + i}
                              embedHeight={isHero ? 440 : featured.length > 1 ? 300 : 380}
                            />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section id="experience" className="px-6 md:px-20 py-28">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="uppercase tracking-[0.25em] text-xs text-neutral-400 mb-4 font-medium">Work Experience</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-16">
              Professional Journey
            </h2>
          </FadeIn>
          <div className="space-y-0">
            {workExperience.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex items-start gap-8 py-8 border-b border-neutral-100 group">
                  <div className="w-36 flex-shrink-0">
                    <span className="text-xs text-neutral-400 font-medium leading-relaxed">{item.period}</span>
                    <p className="text-xs text-neutral-300 mt-0.5">{item.location}</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-neutral-900">{item.role}</h3>
                    <p className="text-neutral-400 text-sm mt-1">{item.org}</p>
                  </div>
                  <div className="w-6 h-6 rounded-full border border-neutral-200 flex-shrink-0 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-neutral-800" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="px-6 md:px-20 py-28 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="uppercase tracking-[0.25em] text-xs text-neutral-400 mb-4 font-medium">Education</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-16">
              Academic Background
            </h2>
          </FadeIn>
          <div className="space-y-0">
            {education.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex items-start gap-8 py-8 border-b border-neutral-100">
                  <div className="w-36 flex-shrink-0">
                    <span className="text-xs text-neutral-400 font-medium">{item.period}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-neutral-900">{item.degree}</h3>
                    <p className="text-neutral-400 text-sm mt-1">{item.institution}</p>
                    <p className="text-xs text-neutral-300 mt-1 font-mono">{item.detail}</p>
                  </div>
                  <div className="w-6 h-6 rounded-full border border-neutral-200 flex-shrink-0 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-neutral-300" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-6 md:px-20 py-28">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="uppercase tracking-[0.25em] text-xs text-neutral-400 mb-4 font-medium">Skills</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">
              Tools & Expertise
            </h2>
            <p className="text-neutral-400 max-w-xl mb-14 leading-relaxed text-sm">
              Experienced in developing interactive learning experiences, educational multimedia,
              e-learning systems, and creative digital content.
            </p>
          </FadeIn>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <FadeIn key={index} delay={index * 0.04}>
                <div
                  data-testid={`skill-tag-${index}`}
                  className="px-5 py-2.5 rounded-full bg-[#f7f5f2] border border-neutral-200 text-neutral-600 text-sm font-medium hover:border-neutral-400 hover:text-neutral-900 transition-all cursor-default"
                >
                  {skill}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 md:px-20 py-36 text-center bg-white">
        <FadeIn>
          <p className="uppercase tracking-[0.25em] text-xs text-neutral-400 mb-5 font-medium">Contact</p>
          <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight max-w-3xl mx-auto text-neutral-900">
            Let's create meaningful<br />
            <span className="text-neutral-400">digital experiences</span><br />
            together.
          </h2>
          <div className="mt-12 flex flex-wrap gap-3 justify-center">
            <a
              href="mailto:dhenishafadilla@gmail.com"
              data-testid="link-email"
              className="bg-neutral-900 text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-black transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              dhenishafadilla@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/dhenishaaf"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-linkedin"
              className="border border-neutral-300 text-neutral-700 px-7 py-3.5 rounded-full text-sm font-medium hover:border-neutral-900 hover:text-neutral-900 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              LinkedIn Profile
            </a>
          </div>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-20 py-8 border-t border-neutral-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-xs text-neutral-400">© 2026 Dhenisha Agustine Fadilla</span>
          <span className="text-xs text-neutral-300">Instructional Designer</span>
        </div>
      </footer>

      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
