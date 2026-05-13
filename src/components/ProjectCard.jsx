import { useInView } from './FadeIn'

export default function ProjectCard({ project, index = 0, embedHeight = 420 }) {
  const [ref, inView] = useInView(0.1)

  const cardStyle = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(40px)',
    transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s, box-shadow 0.3s ease`,
    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
  }

  const cardClass = 'bg-[#f7f5f2] rounded-3xl p-8 block group'

  const inner = (
    <>
      <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-4 font-medium">
        {project.category.replace(/-/g, ' ')}
      </p>
      <h3 className="text-xl font-semibold mb-3 text-neutral-900 group-hover:text-black transition-colors">
        {project.title}
      </h3>
      <p className="text-neutral-500 leading-relaxed mb-6 text-sm">
        {project.desc}
      </p>

      {project.scorm && project.embed && (
        <div className="mb-5">
          <div
            className="overflow-hidden rounded-2xl border border-neutral-200 bg-white"
            style={{ height: `${embedHeight}px` }}
          >
            <iframe
              src={project.embed}
              width="100%"
              height="100%"
              allow="fullscreen"
              title={project.title}
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
            height="220"
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
              Click this card to open the live project.
            </p>
          </div>
        </div>
      )}

      <div className="text-xs text-neutral-400 border-t border-neutral-200 pt-4 flex items-center justify-between">
        <span>Tools: {project.tools}</span>
        {!project.scorm && (
          <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
        )}
      </div>
    </>
  )

  if (project.scorm) {
    return (
      <div
        ref={ref}
        data-testid={`card-project-${project.id}`}
        className={cardClass}
        style={cardStyle}
        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)' }}
        onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)' }}
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
      data-testid={`card-project-${project.id}`}
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
