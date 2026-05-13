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

// Sub-categories for categories that need them
export const subCategoryConfig = {
  'learning-video': [
    { id: 'animation', label: 'Animation' },
    { id: 'teacher-explainer', label: 'Teacher Explainer' },
    { id: 'podcast', label: 'Podcast Learning Video' },
  ],
  'interactive-media': [
    { id: '3d-simulation', label: '3D Simulation' },
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
    id: 'assemblr-edu-module',
    category: 'learning-module',
    title: 'Assemblr Edu',
    desc: 'Organized learning materials according to the learning objectives to ensure alignment with educational goals. Created interactive 3D media as supporting materials to enhance the learning experience. Developed Student Worksheets to reinforce key concepts and facilitate active learning.',
    tools: 'Canva & Assemblr Studio',
    link: 'https://www.canva.com/design/DAGXiRytfKU/CWJAr5uLHzLqFoB4IfZHXw/view',
    embed: 'https://www.canva.com/design/DAGXiRytfKU/CWJAr5uLHzLqFoB4IfZHXw/view?embed',
    embedType: 'slides',
    featured: true,
  },
  {
    id: 'edu-tech-module',
    category: 'learning-module',
    title: 'Educational Technology',
    desc: 'Organized learning materials, ensuring effective structure for optimal learning. Aligned learning materials with handouts and learning objectives to maintain consistency and clarity. Adjusted the layout of modules to enhance readability and alignment with educational goals.',
    tools: 'Microsoft PowerPoint',
    link: 'https://docs.google.com/presentation/d/1S5JD6DZlRE5TOMC_PHMQXdHxQntoMwgW/edit?usp=sharing',
    embed: 'https://docs.google.com/presentation/d/1S5JD6DZlRE5TOMC_PHMQXdHxQntoMwgW/embed?start=false&loop=false&delayms=3000',
    embedType: 'slides',
    featured: false,
  },
  {
    id: 'telkom-module',
    category: 'learning-module',
    title: 'Telkom Indonesia',
    desc: 'Developed training materials, including quizzes as assessments to measure learner progress. Adjusted the layout and structure of modules to ensure clarity and alignment with learning objectives. Uploaded training materials to the Learning Management System (LMS), My Digiverse, ensuring accessibility and organization for users.',
    tools: 'Microsoft PowerPoint & Microsoft Excel',
    link: 'https://docs.google.com/presentation/d/16XNJ_1Ie4jeDXWhpsIuLWaS1rwc82Ieb/edit?usp=drive_link',
    embed: 'https://docs.google.com/presentation/d/16XNJ_1Ie4jeDXWhpsIuLWaS1rwc82Ieb/embed?start=false&loop=false&delayms=3000',
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
    featured: false,
  },

  // ── Interactive Media — 3D Simulation ────────────────────────────────────────
  {
    id: 'temp-scale',
    category: 'interactive-media',
    subcategory: '3d-simulation',
    title: 'Temperature Scale',
    desc: 'Interactive 3D simulation exploring temperature scales and conversions designed for science learning.',
    tools: 'Assemblr Studio',
    link: 'https://app-edu.assemblrworld.com/edukits/665',
    featured: true,
  },
  {
    id: 'budaya-sunda',
    category: 'interactive-media',
    subcategory: '3d-simulation',
    title: 'Budaya Sunda',
    desc: 'Immersive 3D learning media presenting Sundanese cultural heritage through interactive AR elements.',
    tools: 'Assemblr Studio',
    link: 'https://app-edu.assemblrworld.com/edukits/691',
    featured: false,
  },
  {
    id: 'sel-hewan',
    category: 'interactive-media',
    subcategory: '3d-simulation',
    title: 'Sel Hewan dan Tumbuhan',
    desc: 'Interactive 3D simulation comparing animal and plant cell structures for biology education.',
    tools: 'Assemblr Studio',
    link: 'https://app-edu.assemblrworld.com/edukits/706',
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
    featured: true,
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
    featured: false,
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

  // ── Learning Video — Podcast ──────────────────────────────────────────────────
  {
    id: 'ilo-podcast',
    category: 'learning-video',
    subcategory: 'podcast',
    title: 'Ngopi Care — ILO Indonesia',
    desc: 'Produced an educational video podcast series titled "Ngopi Care: Ngobrol Pintar Care Economy", aimed at raising awareness and understanding of the care economy. The series consisted of 8 episodes, combining insightful discussions with engaging visuals. Contributed as videographer and video editor, responsible for capturing high-quality footage and enhancing the content with supporting visuals.',
    tools: 'Adobe Premiere Pro & After Effects',
    link: 'https://www.youtube.com/watch?v=Guq1jXhEj08',
    embed: 'https://www.youtube.com/embed/Guq1jXhEj08',
    embedType: 'video',
    featured: false,
  },
  {
    id: 'bookolatte',
    category: 'learning-video',
    subcategory: 'podcast',
    title: 'Book-O-Latte Podcast',
    desc: 'Bookolatte Podcast Video is a video podcast series consisting of 25 episodes, discussing various popular science books in an interesting and easy to understand way. Acting as Videographer, Editor, and Motion Graphic Designer, ensuring each episode has optimal visual and narrative quality.',
    tools: 'Adobe Premiere Pro & After Effects',
    link: 'https://www.youtube.com/watch?v=LAvDhpVbxAk',
    embed: 'https://www.youtube.com/embed/LAvDhpVbxAk',
    embedType: 'video',
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

export function getSubCategories(categoryId) {
  return subCategoryConfig[categoryId] || []
}
