import resume from './assets/resume.pdf'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: window.location.href,
  title: 'Omar Est.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Omar',
  role: 'Fullstack Developer',
  resume,
  social: {
    linkedin: 'https://linkedin.com/omar-estevez',
    github: 'https://github.com/OmiCoding',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up

  {
    name: 'LkRemedies',
    description:
      'A company that sells all natural plant derived medicine that helps people with imflammation, memory, mood, appetite, stress, sleep, etc.',
    stack: [
      'Bootstrap',
      'TypeScript',
      'Gatsby',
      'Webpack',
      'Accessibe',
      'BigCommerce',
    ],
    livePreview: 'https://lkremedies.com/',
  },
  {
    name: 'MediumPhormat',
    description:
      'Medium Phormat offers product photography services in packages you can book online. Completely tailor your custom product photography package to your business or brand.',
    stack: ['Shopify', 'Liquid'],
    livePreview: 'https://mediumphormat.com/',
  },
  {
    name: 'Daazzll',
    description:
      'A self promotion, social networking platform for creatives sharing short animated clips and images.',
    stack: [
      'CSS',
      'TypeScript',
      'React',
      'Node',
      'Express',
      'Webpack',
      'Jest',
      'Postgresql',
      'Redis',
      'Prisma',
      'Docker',
      'Nginx',
    ],
    sourceCode: 'https://github.com/OmiCoding/Daazzll',
  },
  {
    name: 'Blubelt',
    description: 'A simple job posting web application for blue collar workers',
    stack: [
      'Emotion',
      'TypeScript',
      'React',
      'Node',
      'Express',
      'Webpack',
      'Jest',
      'MongoDB',
      'Redis',
      'Docker',
      'Nginx',
    ],
    sourceCode: 'https://bitbucket.org/bitcoder247/blue-belt',
  },

  {
    name: 'E-commerce Demo',
    description: 'A custom e-commerce demo site using Gatsby, cloudinary, graphql to set up product items on the frontend, and some custom designs.',
    stack: ['Gatsbyjs', 'Graphql', 'Cloudinary', 'Emotion'],
    sourceCode: 'https://bitbucket.org/bitcoder247/ecommerce-project'
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'SCSS',
  'Tailwind',
  'Styled-Components',
  'JavaScript',
  'TypeScript',
  'React',
  'Gatsby',
  'Next',
  'Node',
  'Webpack',
  'Docker',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'omar-estevez@protonmail.com',
}

export { header, about, projects, skills, contact }
