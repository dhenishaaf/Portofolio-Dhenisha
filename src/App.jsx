import { useEffect, useRef, useState } from 'react'
import './index.css'

const projects = [
  {
    title: "SCORM File for LMS",
    desc: "Developed SCORM 1.2/2004 interactive learning modules for Samsung Singapore using Chameleon Creator V2 with LMS integration and learner tracking.",
    category: "E-Learning",
    tools: "Chameleon Creator V2",
    link: "/scorm-launch.html",
    embed: "/scorm-launch.html",
    embedLabel: "Introduction to Block-Based Coding",
    scorm: true,
  },
  {
    title: "Training Module — Assemblr",
    desc: "Created teacher-focused learning modules and Training of Trainers (ToT) materials integrated with Assemblr Edu features.",
    category: "Training Module",
    tools: "Canva",
    link: "https://asblr.com/SAnB7d",
    previewLabel: "Open Assemblr Project",
  },
  {
    title: "Interactive Media — Naruna",
    desc: "Designed gamified Japanese learning media using Construct 2 with multimedia assets, animations, and interactive gameplay.",
    category: "Interactive Media",
    tools: "Construct 2",
    link: "https://your-project-link.com",
  },
  {
    title: "Floor Gymnastics Learning Media",
    desc: "Developed drill-and-practice interactive learning content using Articulate Storyline aligned with curriculum objectives.",
    category: "Interactive Learning",
    tools: "Articulate Storyline",
    link: "https://your-project-link.com",
  },
  {
    title: "Learning Video Production",
    desc: "Produced educational explainer videos, animations, and MOOC learning content using Adobe Premiere Pro & After Effects.",
    category: "Learning Video",
    tools: "Adobe Premiere Pro & After Effects",
    link: "https://drive.google.com/file/d/1YjA4hoguWSDsiK2D4O27wp3UvExlK4A9/view?usp=drive_link",
    embed: "https://drive.google.com/file/d/1YjA4hoguWSDsiK2D4O27wp3UvExlK4A9/preview",
  },
  {
    title: "Podcast Learning Video",
    desc: "Worked as videographer, editor, and motion graphic designer for educational podcast series including NgoPi Care and Book-O-Latte.",
    category: "Podcast Production",
    tools: "Adobe Premiere Pro & After Effects",
    link: "https://drive.google.com/file/d/1YjA4hoguWSDsiK2D4O27wp3UvExlK4A9/view?usp=drive_link",
  },
]

const skills = [
  "Instructional Design",
  "Learning Management System (LMS)",
  "Articulate Storyline",
  "Adobe Creative Suite",
  "Canva",
  "Curriculum Development",
  "Multimedia Production",
  "Educational Technology",
  "3D AR Content",
  "SCORM Development",
  "Creative Content",
]

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}

function FadeIn({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(247,245,242,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.07)' : 'none',
      }}
    >
      <span className="font-semibold text-base tracking-tight text-neutral-900">Dhenisha.</span>
      <div className="flex gap-8 text-sm text-neutral-500">
        <a href="#about" className="hover:text-black transition-colors">About</a>
        <a href="#projects" className="hover:text-black transition-colors">Projects</a>
        <a href="#experience" className="hover:text-black transition-colors">Experience</a>
        <a href="#contact" className="hover:text-black transition-colors">Contact</a>
      </div>
    </nav>
  )
}

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView(0.1)

  const cardStyle = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(40px)',
    transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s, box-shadow 0.3s ease`,
    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
  }

  const cardClass = "bg-[#f7f5f2] rounded-3xl p-8 block group"

  const inner = (
    <>
      <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-5 font-medium">
        {project.category}
      </p>
      <h3 className="text-xl font-semibold mb-3 text-neutral-900 group-hover:text-black transition-colors">
        {project.title}
      </h3>
      <p className="text-neutral-500 leading-relaxed mb-6 text-sm">
        {project.desc}
      </p>

      {project.scorm && project.embed && (
        <div className="mb-5">
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white" style={{ height: '420px' }}>
            <iframe
              src={project.embed}
              width="100%"
              height="100%"
              allow="fullscreen"
              title={project.embedLabel || project.title}
              style={{ border: 'none', display: 'block' }}
            />
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="mt-3 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-neutral-300 text-xs font-medium text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-all"
          >
            Open Full Screen →
          </a>
        </div>
      )}

      {!project.scorm && project.embed && (
        <div className="mb-6 overflow-hidden rounded-2xl">
          <iframe
            src={project.embed}
            width="100%"
            height="200"
            allow="autoplay"
            className="rounded-2xl border border-neutral-200"
            title={project.title}
          />
        </div>
      )}

      {project.previewLabel && (
        <div className="mb-6">
          <div className="w-full rounded-2xl border border-neutral-200 bg-white p-5 text-center">
            <p className="text-neutral-700 font-medium mb-1 text-sm">{project.previewLabel}</p>
            <p className="text-xs text-neutral-400">
              Click to view the live Assemblr experience.
            </p>
          </div>
        </div>
      )}

      <div className="text-xs text-neutral-400 border-t border-neutral-200 pt-4 flex items-center justify-between">
        <span>Tools: {project.tools}</span>
        {!project.scorm && <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>}
      </div>
    </>
  )

  if (project.scorm) {
    return (
      <div
        ref={ref}
        data-testid={`card-project-${index}`}
        className={cardClass}
        style={cardStyle}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)'
        }}
      >
        {inner}
      </div>
    )
  }

  return (
    <a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={`card-project-${index}`}
      className={`${cardClass} cursor-pointer`}
      style={cardStyle}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)'
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)'
        e.currentTarget.style.transform = inView ? 'translateY(0)' : 'translateY(40px)'
      }}
    >
      {inner}
    </a>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f5f2] text-black" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(180,160,255,0.08) 0%, transparent 70%)',
          }}
        />

        <div
          style={{
            opacity: 1,
            animation: 'heroFadeIn 1s ease forwards',
          }}
        >
          <p className="tracking-[0.35em] text-xs uppercase text-neutral-400 mb-6 font-medium">
            Portfolio — Educational Technology
          </p>

          <h1 className="text-6xl md:text-8xl font-semibold leading-[1.02] tracking-tight max-w-4xl text-neutral-900">
            Dhenisha<br />
            <span className="text-neutral-400">Agustine</span>
          </h1>

          <p className="mt-8 text-neutral-500 text-base md:text-lg max-w-xl leading-relaxed mx-auto">
            Educational Technology graduate focused on training development,
            instructional media, and creative digital experiences.
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
            <p className="uppercase tracking-[0.25em] text-xs text-neutral-400 mb-5 font-medium">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight text-neutral-900">
              Blending education,
              <br />
              <span className="text-neutral-400">creativity & digital</span>
              <br />
              experiences.
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-neutral-500 leading-relaxed text-base mt-2">
              Educational Technology graduate from Universitas Pendidikan Indonesia
              with hands-on experience in educational content development, e-learning,
              multimedia production, and social media creative projects.
            </p>
            <p className="text-neutral-500 leading-relaxed text-base mt-4">
              Certified by BNSP in "Develop Learning Media," with strong expertise in
              instructional design, curriculum-based learning development, and interactive
              digital media.
            </p>
            <div className="mt-8 flex gap-6">
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

      {/* PROJECTS */}
      <section id="projects" className="px-6 md:px-20 py-28 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="uppercase tracking-[0.25em] text-xs text-neutral-400 mb-4 font-medium">
              Selected Works
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-16">
              Featured Projects
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-6 md:px-20 py-28">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="uppercase tracking-[0.25em] text-xs text-neutral-400 mb-4 font-medium">
              Experience
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-16">
              Journey & Experience
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {[
              {
                role: "Education Content Development",
                org: "Assemblr",
                period: "Sep 2024 – Present",
                location: "Bandung",
                type: "work",
              },
              {
                role: "Learning Module Developer Intern",
                org: "Telkom Indonesia",
                period: "Aug 2023 – Dec 2023",
                location: "Bandung",
                type: "work",
              },
              {
                role: "Learning Content Video Production Intern",
                org: "Kompas Gramedia",
                period: "Feb 2023 – Jun 2023",
                location: "Jakarta",
                type: "work",
              },
              {
                role: "Bachelor of Educational Technology",
                org: "Universitas Pendidikan Indonesia",
                period: "GPA 3.77 / 4.00",
                location: "",
                type: "edu",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex items-start gap-8 py-8 border-b border-neutral-100 group">
                  <div className="w-32 flex-shrink-0">
                    <span className="text-xs text-neutral-400 font-medium leading-relaxed">
                      {item.period}
                    </span>
                    {item.location && (
                      <p className="text-xs text-neutral-300 mt-0.5">{item.location}</p>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-black transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-neutral-400 text-sm mt-1">{item.org}</p>
                  </div>
                  <div className="w-6 h-6 rounded-full border border-neutral-200 flex-shrink-0 flex items-center justify-center mt-1">
                    <div className={`w-2 h-2 rounded-full ${item.type === 'work' ? 'bg-neutral-800' : 'bg-neutral-300'}`} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-6 md:px-20 py-28 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="uppercase tracking-[0.25em] text-xs text-neutral-400 mb-4 font-medium">
              Skills
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">
              Tools & Expertise
            </h2>
            <p className="text-neutral-400 max-w-xl mb-14 leading-relaxed text-sm">
              Experienced in developing interactive learning experiences, educational multimedia,
              e-learning systems, and creative digital content across educational and commercial projects.
            </p>
          </FadeIn>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <FadeIn key={index} delay={index * 0.05}>
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
      <section id="contact" className="px-6 md:px-20 py-36 text-center">
        <FadeIn>
          <p className="uppercase tracking-[0.25em] text-xs text-neutral-400 mb-5 font-medium">
            Contact
          </p>
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
              href="https://linkedin.com"
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
          <span className="text-xs text-neutral-400">© 2025 Dhenisha Agustine</span>
          <span className="text-xs text-neutral-300">Educational Technology</span>
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
