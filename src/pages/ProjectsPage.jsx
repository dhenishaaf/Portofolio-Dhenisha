import { Link } from 'wouter'
import FadeIn from '../components/FadeIn'
import ProjectCard from '../components/ProjectCard'
import {
  getCategoryBySlug,
  getProjectsByCategory,
  getSubCategories,
  categories,
} from '../data/projects'

function SubCategorySection({ subCat, projects, catSlug }) {
  const items = projects.filter(p => p.subcategory === subCat.id)
  if (items.length === 0) return null
  return (
    <div className="mb-20">
      <FadeIn>
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">{subCat.label}</span>
          <div className="flex-1 h-px bg-neutral-200" />
          <span className="text-xs text-neutral-300 font-mono">{items.length} project{items.length !== 1 ? 's' : ''}</span>
        </div>
      </FadeIn>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} embedHeight={400} />
        ))}
      </div>
    </div>
  )
}

export default function ProjectsPage({ params }) {
  const slug = params?.slug
  const category = getCategoryBySlug(slug)
  const projects = getProjectsByCategory(slug)
  const subCategories = getSubCategories(slug)
  const hasSubCategories = subCategories.length > 0

  if (!category) {
    return (
      <div className="min-h-screen bg-[#f7f5f2] flex flex-col items-center justify-center gap-4">
        <p className="text-neutral-400 text-sm">Category not found.</p>
        <Link href="/" className="text-sm underline text-neutral-600 hover:text-black">← Back to Portfolio</Link>
      </div>
    )
  }

  const currentIndex = categories.findIndex(c => c.slug === slug)
  const prevCat = categories[currentIndex - 1]
  const nextCat = categories[currentIndex + 1]

  // Projects without a subcategory (flat)
  const flatProjects = projects.filter(p => !p.subcategory)

  return (
    <div className="min-h-screen bg-[#f7f5f2] text-black" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* HEADER */}
      <section className="pt-36 pb-14 px-6 md:px-20 bg-white border-b border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-neutral-900 transition-colors mb-8 font-medium"
              data-testid="link-back"
            >
              ← Back to Portfolio
            </Link>
            <p className="uppercase tracking-[0.25em] text-xs text-neutral-400 mb-3 font-medium">
              Projects / {category.label}
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 mb-4">
              {category.label}
            </h1>
            <p className="text-neutral-400 text-base max-w-xl leading-relaxed">{category.description}</p>
          </FadeIn>
        </div>
      </section>

      {/* CATEGORY FILTER BAR */}
      <div className="px-6 md:px-20 py-4 border-b border-neutral-200 bg-white sticky top-[72px] z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <p className="text-xs text-neutral-400 font-mono hidden md:block">
            {projects.length} project{projects.length !== 1 ? 's' : ''}
          </p>
          <div className="flex gap-2 flex-wrap">
            {categories.map(c => (
              <Link
                key={c.slug}
                href={`/projects/${c.slug}`}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  c.slug === slug
                    ? 'bg-neutral-900 text-white'
                    : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-800'
                }`}
                data-testid={`filter-${c.slug}`}
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <section className="px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          {projects.length === 0 ? (
            <FadeIn>
              <div className="py-24 text-center">
                <p className="text-neutral-300 text-lg">No projects yet in this category.</p>
              </div>
            </FadeIn>
          ) : hasSubCategories ? (
            <>
              {subCategories.map(subCat => (
                <SubCategorySection
                  key={subCat.id}
                  subCat={subCat}
                  projects={projects}
                  catSlug={slug}
                />
              ))}
              {/* Flat items that don't have a subcategory */}
              {flatProjects.length > 0 && (
                <div className="grid md:grid-cols-2 gap-6">
                  {flatProjects.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} embedHeight={400} />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} embedHeight={400} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PREV / NEXT */}
      <section className="px-6 md:px-20 py-12 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          {prevCat ? (
            <Link href={`/projects/${prevCat.slug}`} className="flex flex-col gap-1 group" data-testid="link-prev-category">
              <span className="text-xs text-neutral-400 group-hover:text-neutral-600 transition-colors">← Previous</span>
              <span className="text-base font-semibold text-neutral-900 group-hover:underline">{prevCat.label}</span>
            </Link>
          ) : <div />}
          {nextCat ? (
            <Link href={`/projects/${nextCat.slug}`} className="flex flex-col gap-1 items-end group" data-testid="link-next-category">
              <span className="text-xs text-neutral-400 group-hover:text-neutral-600 transition-colors">Next →</span>
              <span className="text-base font-semibold text-neutral-900 group-hover:underline">{nextCat.label}</span>
            </Link>
          ) : <div />}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-20 py-8 border-t border-neutral-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors">Dhenisha Agustine</Link>
          <span className="text-xs text-neutral-300">Educational Technology</span>
        </div>
      </footer>
    </div>
  )
}
