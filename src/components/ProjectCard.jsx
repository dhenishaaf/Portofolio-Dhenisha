import { useState } from 'react'
import { useInView } from './FadeIn'

const ASSEMBLR_ALLOW =
  'camera; microphone; gyroscope; accelerometer; magnetometer; xr-spatial-tracking; fullscreen'

function ClickToPlayOverlay({ title, thumbnail, onPlay, dark = false }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center rounded-2xl cursor-pointer select-none relative overflow-hidden"
      onClick={onPlay}
    >
      {thumbnail ? (
        <>
          <img
            src={thumbnail}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-black/40" />
        </>
      ) : (
        <div className={`absolute inset-0 ${dark ? 'bg-neutral-900' : 'bg-neutral-100'}`} />
      )}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="w-16 h-16 rounded-full bg-white/20 border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors backdrop-blur-sm">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <polygon points="6,3 20,12 6,21" />
          </svg>
        </div>
        <p className="text-white text-xs font-medium tracking-wide drop-shadow">Click to play</p>
      </div>
    </div>
  )
}

function EmbedBlock({ project, embedHeight }) {
  const { embed, embedType, link, title, clickToPlay, thumbnail, portrait, customEmbedHeight } = project
  const [playing, setPlaying] = useState(false)
  const height = customEmbedHeight || embedHeight

  if (embedType === 'scorm') {
    return (
      <div className="mb-5">
        <div
          className="overflow-hidden rounded-2xl border border-neutral-200 bg-white"
          style={{ height: `${height}px` }}
        >
          <iframe
            src={embed}
            width="100%"
            height="100%"
            allow="fullscreen"
            title={title}
            style={{ border: 'none', display: 'block' }}
          />
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          className="mt-3 flex items-center justify-center w-full py-2.5 rounded-xl border border-neutral-300 text-xs font-medium text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-all"
        >
          Open Full Screen →
        </a>
      </div>
    )
  }

  if (embedType === 'video') {
    const containerStyle = portrait
      ? { height: `${height}px` }
      : { aspectRatio: '16/9' }

    return (
      <div
        className="mb-6 rounded-2xl overflow-hidden border border-neutral-200 bg-black"
        style={containerStyle}
      >
        {!playing && thumbnail ? (
          <ClickToPlayOverlay
            title={title}
            thumbnail={thumbnail}
            onPlay={() => setPlaying(true)}
          />
        ) : (
          <iframe
            src={embed}
            width="100%"
            height="100%"
            allow="autoplay; fullscreen"
            title={title}
            allowFullScreen
            style={{ border: 'none', display: 'block' }}
          />
        )}
      </div>
    )
  }

  if (embedType === 'slides') {
    return (
      <div
        className="mb-6 rounded-2xl overflow-hidden border border-neutral-200 bg-white"
        style={{ aspectRatio: '16/9' }}
      >
        <iframe
          src={embed}
          width="100%"
          height="100%"
          allowFullScreen
          title={title}
          style={{ border: 'none', display: 'block' }}
        />
      </div>
    )
  }

  if (embedType === 'document') {
    return (
      <div
        className="mb-6 rounded-2xl overflow-hidden border border-neutral-200 bg-white"
        style={{ height: `${height}px` }}
      >
        <iframe
          src={embed}
          width="100%"
          height="100%"
          title={title}
          style={{ border: 'none', display: 'block' }}
        />
      </div>
    )
  }

  if (embedType === 'assemblr-3d') {
    return (
      <div className="mb-5">
        <div
          className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-900"
          style={{ height: `${height}px` }}
        >
          <iframe
            src={embed}
            width="100%"
            height="100%"
            allow={ASSEMBLR_ALLOW}
            allowFullScreen
            title={title}
            style={{ border: 'none', display: 'block' }}
          />
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          className="mt-3 flex items-center justify-center w-full py-2.5 rounded-xl border border-neutral-300 text-xs font-medium text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-all"
        >
          Open in Assemblr →
        </a>
      </div>
    )
  }

  if (embedType === 'interactive') {
    return (
      <div className="mb-5">
        <div
          className="overflow-hidden rounded-2xl border border-neutral-200"
          style={{ height: `${height}px` }}
        >
          {clickToPlay && !playing ? (
            <ClickToPlayOverlay
              title={title}
              thumbnail={thumbnail}
              onPlay={() => setPlaying(true)}
              dark
            />
          ) : (
            <iframe
              src={embed}
              width="100%"
              height="100%"
              allow="fullscreen"
              allowFullScreen
              title={title}
              style={{ border: 'none', display: 'block' }}
            />
          )}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          className="mt-3 flex items-center justify-center w-full py-2.5 rounded-xl border border-neutral-300 text-xs font-medium text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-all"
        >
          Open Full Screen →
        </a>
      </div>
    )
  }

  return null
}

export default function ProjectCard({ project, index = 0, embedHeight = 360 }) {
  const [ref, inView] = useInView(0.08)
  const isScorm = project.embedType === 'scorm'
  const isAssemblr3d = project.embedType === 'assemblr-3d'
  const isInteractive = project.embedType === 'interactive'
  const isNonClickable = isScorm || isAssemblr3d || isInteractive || project.link === '#'

  const cardStyle = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(36px)',
    transition: `opacity 0.55s ease ${Math.min(index * 0.07, 0.4)}s, transform 0.55s ease ${Math.min(index * 0.07, 0.4)}s, box-shadow 0.25s ease`,
    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
  }

  const subcatLabel = project.subcategory
    ? project.subcategory.replace(/-/g, ' ')
    : null

  const inner = (
    <>
      <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-3 font-medium">
        {project.category.replace(/-/g, ' ')}
        {subcatLabel && (
          <span className="ml-2 text-neutral-300">/ {subcatLabel}</span>
        )}
      </p>
      <h3 className="text-xl font-semibold mb-3 text-neutral-900 group-hover:text-black transition-colors leading-snug">
        {project.title}
      </h3>
      <p className="text-neutral-500 leading-relaxed mb-5 text-sm">
        {project.desc}
      </p>

      {project.embed && (
        <EmbedBlock project={project} embedHeight={embedHeight} />
      )}

      {!project.embed && project.previewLabel && (
        <div className="mb-6">
          <div className="w-full rounded-2xl border border-neutral-200 bg-white p-5 text-center">
            <p className="text-neutral-700 font-medium mb-1 text-sm">{project.previewLabel}</p>
            <p className="text-xs text-neutral-400">Click this card to open the live project.</p>
          </div>
        </div>
      )}

      <div className="text-xs text-neutral-400 border-t border-neutral-200 pt-4 flex items-center justify-between">
        <span>Tools: {project.tools}</span>
        {!isNonClickable && (
          <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
        )}
      </div>
    </>
  )

  const baseClass = 'bg-[#f7f5f2] rounded-3xl p-7 block group'

  if (isNonClickable) {
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
