import { useInView } from './FadeIn'

function EmbedBlock({ project, embedHeight }) {
  const { embed, embedType, link, title } = project

  if (!embed) return null

  const commonStyle = { border: 'none', display: 'block', width: '100%', height: '100%' }

  if (embedType === 'scorm') {
    return (
      <div className="mb-5">
        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white" style={{ height: `${embedHeight}px` }}>
          <iframe src={embed} width="100%" height="100%" allow="fullscreen" title={title} style={commonStyle} />
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          className="mt-3 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-neutral-300 text-xs font-medium text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-all"
        >
          Open Full Screen →
        </a>
      </div>
    )
  }

  if (embedType === 'video') {
    return (
      <div className="mb-6 rounded-2xl overflow-hidden border border-neutral-200 bg-black" style={{ aspectRatio: '16/9' }}>
        <iframe src={embed} width="100%" height="100%" allow="autoplay; fullscreen" title={title} style={commonStyle} allowFullScreen />
      </div>
    )
  }

  if (embedType === 'slides') {
    return (
      <div className="mb-6 rounded-2xl overflow-hidden border border-neutral-200 bg-white" style={{ aspectRatio: '16/9' }}>
        <iframe src={embed} width="100%" height="100%" allowFullScreen title={title} style={commonStyle} />
      </div>
    )
  }

  if (embedType === 'document') {
    return (
      <div className="mb-6 rounded-2xl overflow-hidden border border-neutral-200 bg-white" style={{ height: `${embedHeight}px` }}>
        <iframe src={embed} width="100%" height="100%" title={title} style={commonStyle} />
      </div>
    )
  }

  return null
}

export default function ProjectCard({ project, index = 0, embedHeight = 360 }) {
  const [ref, inView] = useInView(0.08)
  const isScorm = project.embedType === 'scorm'

  const cardStyle = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(36px)',
    transition: `opacity 0.55s ease ${Math.min(index * 0.07, 0.4)}s, transform 0.55s ease ${Math.min(index * 0.07, 0.4)}s, box-shadow 0.25s ease`,
    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
  }

  const inner = (
    <>
      <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-3 font-medium">
        {project.category.replace(/-/g, ' ')}
        {project.subcategory && (
          <span className="ml-2 text-neutral-300">/ {project.subcategory.replace(/-/g, ' ')}</span>
        )}
      </p>
      <h3 className="text-xl font-semibold mb-3 text-neutral-900 group-hover:text-black transition-colors leading-snug">
        {project.title}
      </h3>
      <p className="text-neutral-500 leading-relaxed mb-5 text-sm">
        {project.desc}
      </p>

      <EmbedBlock project={project} embedHeight={embedHeight} />

      {project.previewLabel && (
        <div className="mb-6">
          <div className="w-full rounded-2xl border border-neutral-200 bg-white p-5 text-center">
            <p className="text-neutral-700 font-medium mb-1 text-sm">{project.previewLabel}</p>
            <p className="text-xs text-neutral-400">Click this card to open the live project.</p>
          </div>
        </div>
      )}

      <div className="text-xs text-neutral-400 border-t border-neutral-200 pt-4 flex items-center justify-between">
        <span>Tools: {project.tools}</span>
        {!isScorm && <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>}
      </div>
    </>
  )

  const baseClass = 'bg-[#f7f5f2] rounded-3xl p-7 block group'

  if (isScorm) {
    return (
      <div
        ref={ref}
        data-testid={`card-project-${project.id}`}
        className={baseClass}
        style={cardStyle}
        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.10)' }}
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
      className={`${baseClass} cursor-pointer`}
      style={cardStyle}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.10)'
        e.currentTarget.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)'
        e.currentTarget.style.transform = inView ? 'translateY(0)' : 'translateY(36px)'
      }}
    >
      {inner}
    </a>
  )
}
