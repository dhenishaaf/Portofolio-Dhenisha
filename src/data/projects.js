export const categories = [
  {
    id: 'interactive-media',
    label: 'Interactive Media',
    slug: 'interactive-media',
    tagline: 'SCORM courses, e-learning & 3D experiences',
    description:
      'Interactive e-learning built for LMS delivery, plus game-based, multimedia, and 3D learning experiences that engage learners through interactivity, animation, and immersive storytelling.',
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
    { id: 'interactive-elearning', label: 'E-Learning', singleColumn: true },
    { id: '3d-simulation', label: '3D Simulation' },
  ],
  'learning-video': [
    { id: 'ai-generated-video', label: 'AI-Generated Video' },
    { id: 'animation', label: 'Animation' },
    { id: 'teacher-explainer', label: 'Teacher Explainer' },
    { id: 'tutorials', label: 'Tutorials' },
    { id: 'podcast', label: 'Podcast Learning Video' },
  ],
}

export const allProjects = [

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
    title: 'Physical Education and Sports',
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
    link: 'https://drive.google.com/file/d/1P7GRrFDAVunRBwPjHqI5tNattiJpCZNC/view?usp=sharing',
    embed: 'https://drive.google.com/file/d/1P7GRrFDAVunRBwPjHqI5tNattiJpCZNC/preview',
    embedType: 'document',
    customEmbedHeight: 620,
    featured: false,
  },

  // ── Interactive Media — E-Learning ───────────────────────────────────────────
  {
    id: 'scorm-lms',
    category: 'interactive-media',
    subcategory: 'interactive-elearning',
    title: 'Samsung Singapore Courses',
    desc: 'Developed 12 interactive SCORM-based learning courses for Samsung Singapore, featuring structured learning content, interactive activities, and LMS integration to support digital learning delivery.',
    tools: 'Chameleon Creator V2',
    link: '/scorm-launch.html',
    embed: '/scorm-launch.html',
    embedType: 'scorm',
    featured: true,
  },
  {
    id: 'naruna',
    category: 'interactive-media',
    subcategory: 'interactive-elearning',
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
    subcategory: 'interactive-elearning',
    title: 'Floor Gymnastics',
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
    title: 'Animal and Plant Cells',
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
    title: 'Sundanese Culture',
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
    title: 'Weight Comparison',
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
    title: 'SMAW Welding',
    desc: 'Vocational 3D simulation of SMAW (Shielded Metal Arc Welding) techniques for technical education.',
    tools: 'Assemblr Studio',
    link: 'https://app-edu.assemblrworld.com/edukits/786',
    embed: 'https://viewer-edu.assemblrworld.com/Embed/-Srnaie6LcKiw7WRd22k',
    embedType: 'assemblr-3d',
    featured: false,
  },
  {
    id: 'elephant-war',
    category: 'interactive-media',
    subcategory: '3d-simulation',
    title: 'The Elephant War',
    desc: 'An immersive 3D storytelling experience bringing the legendary Elephant War to life through interactive visual scenes, recreating key moments of the historical narrative to support engaging and memorable learning experiences.',
    tools: 'Assemblr Studio',
    link: 'https://viewer-edu.assemblrworld.com/Embed/-EKsujHxn6fV3J8j8yqw',
    embed: 'https://viewer-edu.assemblrworld.com/Embed/-EKsujHxn6fV3J8j8yqw',
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
    title: 'Animal Reproduction',
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
    title: 'Learning Research',
    desc: 'Educational explainer video introducing research methodology concepts to students, designed to guide learners through the process of conducting academic research in a clear and engaging way.',
    tools: 'Adobe Premiere Pro & After Effects',
    link: 'https://drive.google.com/file/d/1Ieu5FltjI6RFN68zxZwpAz2Cc7mj2sig/view?usp=sharing',
    embed: 'https://drive.google.com/file/d/1Ieu5FltjI6RFN68zxZwpAz2Cc7mj2sig/preview',
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

  // ── Learning Video — Tutorials ────────────────────────────────────────────────
  {
    id: 'assemblr-editor-tutorial',
    category: 'learning-video',
    subcategory: 'tutorials',
    title: 'Assemblr Edu Editor Tutorial',
    desc: 'Tutorial video introducing the Assemblr Edu Editor, guiding users through its features and tools to create, customize, and develop interactive 3D and AR learning experiences.',
    tools: 'CapCut',
    embeds: [
      {
        title: 'Using the Execute Block to Reuse Action',
        embed: 'https://www.youtube.com/embed/xijYao_n_Tg',
      },
      {
        title: 'Creating Camera Movement with the Animation Frame',
        embed: 'https://www.youtube.com/embed/UFBwz0Y7qy8',
      },
    ],
    featured: false,
  },

  // ── Learning Video — AI-Generated Video ───────────────────────────────────────
  {
    id: 'ai-generated-video',
    category: 'learning-video',
    subcategory: 'ai-generated-video',
    title: 'AI-Generated Video',
    desc: 'Created end-to-end AI-generated videos, from initial concept development and scriptwriting to final video production, using AI-driven workflows without manual video editing.',
    tools: 'Claude',
    embeds: [
      { embed: 'https://drive.google.com/file/d/1Uy1b7mMkd8Iyt0s47a-K0nCV6tc-nXcf/preview' },
      { embed: 'https://drive.google.com/file/d/1BhJLDA-_m4dTA_FZ2LZUol0YL5uBJbtA/preview' },
    ],
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

export function getSubCategoryLabel(categoryId, subId) {
  const sub = (subCategoryConfig[categoryId] || []).find((x) => x.id === subId)
  return sub ? sub.label : null
}
