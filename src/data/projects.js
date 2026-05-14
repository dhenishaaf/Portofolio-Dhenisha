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

export const subCategoryConfig = {
  'interactive-media': [
    { id: 'game', label: 'Interactive Game', singleColumn: true },
    { id: '3d-simulation', label: '3D Simulation' },
  ],
  'learning-video': [
    { id: 'animation', label: 'Animation' },
    { id: 'teacher-explainer', label: 'Teacher Explainer' },
    { id: 'podcast', label: 'Podcast Learning Video' },
  ],
}

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
    embedType: 'scorm',
    featured: true,
  },

  // ── Learning Module ──────────────────────────────────────────────────────────
  {
    id: 'edu-tech-module',
    category: 'learning-module',
    title: 'Educational Technology',
    desc: 'Organized learning materials, ensuring effective structure for optimal learning. Aligned learning materials with handouts and learning objectives to maintain consistency and clarity. Adjusted the layout of modules to enhance readability and alignment with educational goals.',
    tools: 'Microsoft PowerPoint',
    link: 'https://www.canva.com/design/DAHJjlPtmVg/6uUZUx6bhdA-d7d6iTiSKQ/view',
    embed: 'https://www.canva.com/design/DAHJjlPtmVg/6uUZUx6bhdA-d7d6iTiSKQ/view?embed',
    embedType: 'slides',
    featured: true,
  },
  {
    id: 'telkom-module',
    category: 'learning-module',
    title: 'Telkom Indonesia',
    desc: 'Developed training materials, including quizzes as assessments to measure learner progress. Adjusted the layout and structure of modules to ensure clarity and alignment with learning objectives. Uploaded training materials to the LMS, My Digiverse, ensuring accessibility and organization for users.',
    tools: 'Microsoft PowerPoint & Microsoft Excel',
    link: 'https://www.canva.com/design/DAHJjojuguk/1FTl7kucJUtp31ELlAcR4w/view',
    embed: 'https://www.canva.com/design/DAHJjojuguk/1FTl7kucJUtp31ELlAcR4w/view?embed',
    embedType: 'slides',
    featured: false,
  },
  {
    id: 'pjok-module',
    category: 'learning-module',
    title: 'Pendidikan Jasmani dan Olahraga',
    desc: 'Organized learning materials to ensure clarity and structure. Designed and adjusted the layout to enhance readability and engagement. Aligned materials with learning objectives to ensure consistency and educational effectiveness.',
    tools: 'Microsoft Word',
    link: 'https://drive.google.com/file/d/1dpmoBx4-gQ_81ZVdxK9j4-HnJbHfvuo_/view?usp=sharing',
    embed: 'https://drive.google.com/file/d/1dpmoBx4-gQ_81ZVdxK9j4-HnJbHfvuo_/preview',
    embedType: 'document',
    customEmbedHeight: 620,
    featured: false,
  },
  {
    id: 'assemblr-edu-doc',
    category: 'learning-module',
    title: 'Assemblr EDU Module',
    desc: 'Developed a structured learning module for Assemblr EDU, integrating interactive 3D augmented reality content to support student engagement and curriculum alignment.',
    tools: 'Assemblr Studio & Microsoft Word',
    link: 'https://drive.google.com/file/d/1zQOgTSJHYRSeNeuy1J2HgXneXzRbu1G5/view?usp=sharing',
    embed: 'https://drive.google.com/file/d/1zQOgTSJHYRSeNeuy1J2HgXneXzRbu1G5/preview',
    embedType: 'document',
    customEmbedHeight: 620,
    featured: false,
  },
  {
    id: 'assemblr-edu-module',
    category: 'learning-module',
    title: 'Assemblr Edu',
    desc: 'Organized learning materials according to the learning objectives to ensure alignment with educational goals. Created interactive 3D media as supporting materials to enhance the learning experience. Developed Student Worksheets to reinforce key concepts and facilitate active learning.',
    tools: 'Canva & Assemblr Studio',
    link: 'https://www.canva.com/design/DAGXiRytfKU/CWJAr5uLHzLqFoB4IfZHXw/view',
    embed: 'https://www.canva.com/design/DAGXiRytfKU/CWJAr5uLHzLqFoB4IfZHXw/view?embed',
    embedType: 'slides',
    featured: false,
  },

  // ── Interactive Media — Game ──────────────────────────────────────────────────
  {
    id: 'naruna',
    category: 'interactive-media',
    subcategory: 'game',
    title: 'Interactive Media — Naruna',
    desc: 'Designed gamified Japanese language learning media using Construct 2 with multimedia assets, custom animations, and interactive gameplay mechanics. Features vocabulary building, hiragana recognition, and cultural exploration through game-based learning.',
    tools: 'Construct 2',
    link: '/naruna-launch.html',
    embed: '/naruna-launch.html',
    embedType: 'interactive',
    clickToPlay: true,
    thumbnail: '/naruna2/NARUNA/images/naruna-sheet0.png',
    featured: true,
  },
  {
    id: 'berprograma',
    category: 'interactive-media',
    subcategory: 'game',
    title: 'Senam Lantai (Floor Gymnastics)',
    desc: 'Developed drill-and-practice interactive learning content for floor gymnastics using Articulate Storyline, aligned with Physical Education curriculum objectives. Includes step-by-step movement guides, video demonstrations, and formative assessments.',
    tools: 'Articulate Storyline',
    link: '/berprograma-launch.html',
    embed: '/berprograma-launch.html',
    embedType: 'interactive',
    featured: false,
  },

  // ── Interactive Media — 3D Simulation ────────────────────────────────────────
  {
    id: 'sel-hewan',
    category: 'interactive-media',
    subcategory: '3d-simulation',
    title: 'Sel Hewan dan Tumbuhan',
    desc: 'Interactive 3D simulation comparing animal and plant cell structures for biology education. Learners can rotate, zoom, and explore labeled cell components in augmented reality.',
    tools: 'Assemblr Studio',
    link: 'https://app-edu.assemblrworld.com/edukits/706',
    embed: 'https://viewer-edu.assemblrworld.com/Embed/-FfxGsjsfXpSWdrnKzew',
    embedType: 'assemblr-3d',
    featured: true,
  },
  {
    id: 'temp-scale',
    category: 'interactive-media',
    subcategory: '3d-simulation',
    title: 'Temperature Scale',
    desc: 'Interactive 3D simulation exploring temperature scales and conversions designed for science learning.',
    tools: 'Assemblr Studio',
    link: 'https://app-edu.assemblrworld.com/edukits/665',
    embed: 'https://viewer-edu.assemblrworld.com/Embed/-owrC4jVFmfuR2yPgFYz',
    embedType: 'assemblr-3d',
    featured: false,
  },
  {
    id: 'budaya-sunda',
    category: 'interactive-media',
    subcategory: '3d-simulation',
    title: 'Budaya Sunda',
    desc: 'Immersive 3D learning media presenting Sundanese cultural heritage through interactive AR elements.',
    tools: 'Assemblr Studio',
    link: 'https://app-edu.assemblrworld.com/edukits/691',
    embed: 'https://viewer-edu.assemblrworld.com/Embed/-UxldSYlimtAJ4KythY7',
    embedType: 'assemblr-3d',
    featured: false,
  },
  {
    id: 'perbandingan-berat',
    category: 'interactive-media',
    subcategory: '3d-simulation',
    title: 'Perbandingan Berat',
    desc: 'Gamified simulation helping learners understand weight comparison through interactive 3D objects.',
    tools: 'Assemblr Studio',
    link: 'https://app-edu.assemblrworld.com/edukits/755',
    embed: 'https://viewer-edu.assemblrworld.com/Embed/-UAqabfAWvYAlmdJjhps',
    embedType: 'assemblr-3d',
    featured: false,
  },
  {
    id: 'pengelasan-smaw',
    category: 'interactive-media',
    subcategory: '3d-simulation',
    title: 'Pengelasan SMAW',
    desc: 'Vocational 3D simulation of SMAW (Shielded Metal Arc Welding) techniques for technical education.',
    tools: 'Assemblr Studio',
    link: 'https://app-edu.assemblrworld.com/edukits/786',
    embed: 'https://viewer-edu.assemblrworld.com/Embed/-Srnaie6LcKiw7WRd22k',
    embedType: 'assemblr-3d',
    featured: false,
  },
  {
    id: 'sambungan-las',
    category: 'interactive-media',
    subcategory: '3d-simulation',
    title: 'Jenis Sambungan Las',
    desc: 'Interactive 3D reference for types of welding joints, supporting vocational engineering learners.',
    tools: 'Assemblr Studio',
    link: 'https://app-edu.assemblrworld.com/edukits/785',
    embed: 'https://viewer-edu.assemblrworld.com/Embed/-ksLUd2eK7nPtG5oo5Qw',
    embedType: 'assemblr-3d',
    featured: false,
  },

  // ── Learning Video — Animation ────────────────────────────────────────────────
  {
    id: 'creators-challenge',
    category: 'learning-video',
    subcategory: 'animation',
    title: 'Creators Challenge 2022: One Health',
    desc: 'Animated educational video created in collaboration with Kok Bisa and FAO for the One Health Creators Challenge 2022, communicating the link between human, animal, and environmental health.',
    tools: 'Adobe After Effects & Premiere Pro',
    link: 'https://drive.google.com/file/d/1qC8o9-vteCogVIywx36uhjLTHqpT7bD2/view?usp=sharing',
    embed: 'https://drive.google.com/file/d/1qC8o9-vteCogVIywx36uhjLTHqpT7bD2/preview',
    embedType: 'video',
    thumbnail: 'https://drive.google.com/thumbnail?id=1qC8o9-vteCogVIywx36uhjLTHqpT7bD2&sz=w640',
    featured: false,
  },
  {
    id: 'media-script',
    category: 'learning-video',
    subcategory: 'animation',
    title: 'Procedure for Writing Media Script',
    desc: 'Animated instructional video explaining the step-by-step procedure for writing an effective media script for educational content production.',
    tools: 'Adobe After Effects & Premiere Pro',
    link: 'https://drive.google.com/file/d/1s3tvIqMbmH6hpHCF3ycpPkPVIFccWehT/view?usp=sharing',
    embed: 'https://drive.google.com/file/d/1s3tvIqMbmH6hpHCF3ycpPkPVIFccWehT/preview',
    embedType: 'video',
    thumbnail: 'https://drive.google.com/thumbnail?id=1s3tvIqMbmH6hpHCF3ycpPkPVIFccWehT&sz=w640',
    featured: false,
  },
  {
    id: 'psa-driving',
    category: 'learning-video',
    subcategory: 'animation',
    title: 'Public Service Announcement — Driving',
    desc: 'Animated public service announcement promoting safe driving behavior through engaging motion graphics and storytelling.',
    tools: 'Adobe After Effects & Premiere Pro',
    link: 'https://drive.google.com/file/d/1HsyIfIQRgHe0-XJJgmxjlztZ9D8hQbgR/view?usp=drive_link',
    embed: 'https://drive.google.com/file/d/1HsyIfIQRgHe0-XJJgmxjlztZ9D8hQbgR/preview',
    embedType: 'video',
    thumbnail: 'https://drive.google.com/thumbnail?id=1HsyIfIQRgHe0-XJJgmxjlztZ9D8hQbgR&sz=w640',
    featured: false,
  },

  // ── Learning Video — Teacher Explainer ─────────────────────────────────────────
  {
    id: 'animal-reproduction',
    category: 'learning-video',
    subcategory: 'teacher-explainer',
    title: 'Perkembangbiakan Hewan',
    desc: 'Educational explainer video covering animal reproduction concepts, designed to support biology teachers and students with clear visual explanations.',
    tools: 'Adobe Premiere Pro & After Effects',
    link: 'https://drive.google.com/file/d/1YjA4hoguWSDsiK2D4O27wp3UvExlK4A9/view?usp=drive_link',
    embed: 'https://drive.google.com/file/d/1YjA4hoguWSDsiK2D4O27wp3UvExlK4A9/preview',
    embedType: 'video',
    featured: true,
  },
  {
    id: 'cooperative-learning',
    category: 'learning-video',
    subcategory: 'teacher-explainer',
    title: 'Cooperative Learning',
    desc: 'Explainer video introducing cooperative learning strategies to educators, highlighting how collaborative methods improve student outcomes.',
    tools: 'Adobe Premiere Pro & After Effects',
    link: 'https://drive.google.com/file/d/19lwkNbh35FrZShvsAouMI6J5gIFSO2mG/view?usp=drive_link',
    embed: 'https://drive.google.com/file/d/19lwkNbh35FrZShvsAouMI6J5gIFSO2mG/preview',
    embedType: 'video',
    featured: false,
  },
  {
    id: 'universitas-cakrawala',
    category: 'learning-video',
    subcategory: 'teacher-explainer',
    title: 'Universitas Cakrawala',
    desc: 'Learning video produced for Universitas Cakrawala, supporting course delivery with professionally edited visual content aligned to the curriculum objectives.',
    tools: 'Adobe Premiere Pro & After Effects',
    link: 'https://drive.google.com/file/d/140xt0TmKXzMXSVaMIEOuemaPiioAUOmM/view?usp=drive_link',
    embed: 'https://drive.google.com/file/d/140xt0TmKXzMXSVaMIEOuemaPiioAUOmM/preview',
    embedType: 'video',
    featured: false,
  },
  {
    id: 'mooc-ut',
    category: 'learning-video',
    subcategory: 'teacher-explainer',
    title: 'MOOC Universitas Terbuka',
    desc: 'Learning video produced for the MOOC platform of Universitas Terbuka, supporting online distance learners with structured visual content.',
    tools: 'Adobe Premiere Pro & After Effects',
    link: 'https://drive.google.com/file/d/1YQeV6qtJwzu9vY0zjtWmpdveimu1fqRI/view?usp=sharing',
    embed: 'https://drive.google.com/file/d/1YQeV6qtJwzu9vY0zjtWmpdveimu1fqRI/preview',
    embedType: 'video',
    featured: false,
  },
  {
    id: 'belajar-riset',
    category: 'learning-video',
    subcategory: 'teacher-explainer',
    title: 'Belajar Riset',
    desc: 'Educational explainer video introducing research methodology concepts to students, designed to guide learners through the process of conducting academic research in a clear and engaging way.',
    tools: 'Adobe Premiere Pro & After Effects',
    link: 'https://drive.google.com/file/d/1PHSC_dvxPWL6pJ1EXDHtN-H-t1Pf5NBy/view?usp=sharing',
    embed: 'https://drive.google.com/file/d/1PHSC_dvxPWL6pJ1EXDHtN-H-t1Pf5NBy/preview',
    embedType: 'video',
    portrait: true,
    customEmbedHeight: 500,
    featured: false,
  },

  // ── Learning Video — Podcast ──────────────────────────────────────────────────
  {
    id: 'ilo-podcast',
    category: 'learning-video',
    subcategory: 'podcast',
    title: 'Ngopi Care — ILO Indonesia',
    desc: 'Produced an educational video podcast series titled "Ngopi Care: Ngobrol Pintar Care Economy", aimed at raising awareness of the care economy. 8 episodes combining insightful discussions with engaging visuals. Contributed as videographer and video editor.',
    tools: 'Adobe Premiere Pro & After Effects',
    link: 'https://www.youtube.com/watch?v=Guq1jXhEj08',
    embed: 'https://www.youtube.com/embed/Guq1jXhEj08',
    embedType: 'video',
    thumbnail: 'https://img.youtube.com/vi/Guq1jXhEj08/maxresdefault.jpg',
    featured: false,
  },
  {
    id: 'bookolatte',
    category: 'learning-video',
    subcategory: 'podcast',
    title: 'Book-O-Latte Podcast',
    desc: 'Video podcast series consisting of 25 episodes discussing popular science books in an engaging way. Acting as Videographer, Editor, and Motion Graphic Designer, ensuring each episode has optimal visual and narrative quality.',
    tools: 'Adobe Premiere Pro & After Effects',
    link: 'https://www.youtube.com/watch?v=LAvDhpVbxAk',
    embed: 'https://www.youtube.com/embed/LAvDhpVbxAk',
    embedType: 'video',
    thumbnail: 'https://img.youtube.com/vi/LAvDhpVbxAk/maxresdefault.jpg',
    featured: false,
  },
]

export function getFeaturedProjects(categoryId) {
  return allProjects.filter((p) => p.category === categoryId && p.featured)
}

// Keep singular for backward compat
export function getFeaturedProject(categoryId) {
  return allProjects.find((p) => p.category === categoryId && p.featured)
}

export function getProjectsByCategory(categoryId) {
  return allProjects.filter((p) => p.category === categoryId)
}

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug)
}

export function getSubCategories(categoryId) {
  return subCategoryConfig[categoryId] || []
}
