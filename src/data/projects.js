export const categories = [
  {
    id: 'course',
    label: 'Course',
    slug: 'course',
    tagline: 'SCORM & interactive e-learning modules',
    description:
      'Fully packaged SCORM and interactive course modules built for LMS delivery, combining instructional design with interactive learning sequences.',
  },
  {
    id: 'learning-module',
    label: 'Learning Module',
    slug: 'learning-module',
    tagline: 'Structured training & educator materials',
    description:
      'Teacher-facing and learner-facing training modules designed around curriculum objectives and professional development goals.',
  },
  {
    id: 'interactive-media',
    label: 'Interactive Media',
    slug: 'interactive-media',
    tagline: 'Gamified & multimedia learning experiences',
    description:
      'Game-based and multimedia learning experiences that engage learners through interactivity, animations, and immersive storytelling.',
  },
  {
    id: 'learning-video',
    label: 'Learning Video',
    slug: 'learning-video',
    tagline: 'Educational video & motion content',
    description:
      'Explainer videos, MOOC content, and podcast productions created with professional-grade video editing and motion graphics.',
  },
]

export const allProjects = [
  // ── Course ──────────────────────────────────────────────────────────────────
  {
    id: 'scorm-lms',
    category: 'course',
    title: 'SCORM File for LMS',
    desc: 'Developed SCORM 1.2/2004 interactive learning modules for Samsung Singapore using Chameleon Creator V2 with LMS integration and learner tracking.',
    tools: 'Chameleon Creator V2',
    link: '/scorm-launch.html',
    embed: '/scorm-launch.html',
    scorm: true,
    featured: true,
  },
  {
    id: 'floor-gymnastics',
    category: 'course',
    title: 'Floor Gymnastics Learning Media',
    desc: 'Developed drill-and-practice interactive learning content using Articulate Storyline aligned with curriculum objectives.',
    tools: 'Articulate Storyline',
    link: 'https://your-project-link.com',
    featured: false,
  },

  // ── Learning Module ──────────────────────────────────────────────────────────
  {
    id: 'assemblr-training',
    category: 'learning-module',
    title: 'Training Module — Assemblr',
    desc: 'Created teacher-focused learning modules and Training of Trainers (ToT) materials integrated with Assemblr Edu features.',
    tools: 'Canva',
    link: 'https://asblr.com/SAnB7d',
    previewLabel: 'Open Assemblr Project',
    featured: true,
  },

  // ── Interactive Media ────────────────────────────────────────────────────────
  {
    id: 'naruna',
    category: 'interactive-media',
    title: 'Interactive Media — Naruna',
    desc: 'Designed gamified Japanese learning media using Construct 2 with multimedia assets, animations, and interactive gameplay.',
    tools: 'Construct 2',
    link: 'https://your-project-link.com',
    featured: true,
  },

  // ── Learning Video ───────────────────────────────────────────────────────────
  {
    id: 'learning-video-production',
    category: 'learning-video',
    title: 'Learning Video Production',
    desc: 'Produced educational explainer videos, animations, and MOOC learning content using Adobe Premiere Pro & After Effects.',
    tools: 'Adobe Premiere Pro & After Effects',
    link: 'https://drive.google.com/file/d/1YjA4hoguWSDsiK2D4O27wp3UvExlK4A9/view?usp=drive_link',
    embed: 'https://drive.google.com/file/d/1YjA4hoguWSDsiK2D4O27wp3UvExlK4A9/preview',
    featured: true,
  },
  {
    id: 'podcast-video',
    category: 'learning-video',
    title: 'Podcast Learning Video',
    desc: 'Worked as videographer, editor, and motion graphic designer for educational podcast series including NgoPi Care and Book-O-Latte.',
    tools: 'Adobe Premiere Pro & After Effects',
    link: 'https://drive.google.com/file/d/1YjA4hoguWSDsiK2D4O27wp3UvExlK4A9/view?usp=drive_link',
    featured: false,
  },
]

export function getFeaturedProject(categoryId) {
  return allProjects.find((p) => p.category === categoryId && p.featured)
}

export function getProjectsByCategory(categoryId) {
  return allProjects.filter((p) => p.category === categoryId)
}

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug)
}
