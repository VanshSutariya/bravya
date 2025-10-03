export const siteConfig = {
  name: 'Bravya Web Solutions',
  description: 'Crafting scalable, high-performance websites & web apps you can trust.',
  url: 'https://www.bravyaweb.com',
  ogImage: '/api/og?title=Bravya%20Web%20Solutions',
  links: {
    linkedin: 'https://www.linkedin.com/company/bravya-web-solutions',
    twitter: 'https://x.com/bravyaweb',
  },
  contactEmail: 'hello@bravyaweb.com',
};

export const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const services = [
  {
    slug: 'frontend',
    title: 'Frontend Engineering',
    excerpt: 'Beautiful, responsive user interfaces built with any technology you prefer. From React to Vue, we create fast, accessible applications.',
    icon: 'MonitorSmartphone',
  },
  {
    slug: 'backend-apis',
    title: 'Backend & APIs',
    excerpt: 'Robust server-side solutions in any language. We build secure APIs, microservices, and databases that scale with your business.',
    icon: 'Server',
  },
  {
    slug: 'full-stack',
    title: 'Full-Stack Development',
    excerpt: 'Complete end-to-end solutions using any tech stack. From concept to deployment, we deliver products that match your needs.',
    icon: 'Layers',
  },
  {
    slug: 'ecommerce-cms',
    title: 'E-commerce & CMS',
    excerpt: 'Powerful online stores and content management systems. From WordPress to headless solutions, we build what works for you.',
    icon: 'ShoppingCart',
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    excerpt: 'Scalable cloud infrastructure and automated deployment pipelines. We handle hosting, monitoring, and CI/CD for any platform.',
    icon: 'Cloud',
  },
  {
    slug: 'maintenance-support',
    title: 'Maintenance & Support',
    excerpt: 'Keep your applications running smoothly. 24/7 support for any technology stack with proactive monitoring and updates.',
    icon: 'LifeBuoy',
  },
];

export type ServiceSlug = (typeof services)[number]['slug'];

export const processSteps = [
  {
    title: 'Discover',
    description:
      'Map goals, users, and success metrics through stakeholder interviews and technical audits.',
  },
  {
    title: 'Design',
    description:
      'Collaborative prototyping and user testing translate strategy into intuitive user journeys.',
  },
  {
    title: 'Build',
    description:
      'Modular engineering practices and agile development deliver maintainable, performant features.',
  },
  {
    title: 'Launch',
    description:
      'Comprehensive QA, monitoring, and seamless handover ensure a confident go-live experience.',
  },
];

export const differentiators = [
  {
    title: 'Clean Code',
    description:
      'Composable architecture with TypeScript, comprehensive test coverage, and detailed documentation that accelerates team onboarding and reduces technical debt.',
  },
  {
    title: 'Transparent Process',
    description:
      'Weekly demos, shared roadmaps, and agile ceremonies keep everyone aligned. Real-time project tracking and regular stakeholder updates ensure complete visibility.',
  },
  {
    title: 'Performance & SEO',
    description:
      'Lighthouse 90+ targets, Core Web Vitals monitoring, and technical SEO optimization baked in. We build fast, accessible, and search-engine friendly applications.',
  },
  {
    title: 'Post-Launch Support',
    description:
      'Comprehensive operational runbooks, 24/7 on-call support, and data-driven roadmap iterations. We ensure your product continues to evolve and perform optimally.',
  },
];

export const faqItems = [
  {
    question: 'What should I include in a project brief?',
    answer:
      'Share your business goals, target users, current tech stack, success metrics, and any deadlines. Screenshots, analytics, and brand assets help us respond with precision.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'Discovery & strategy typically take 2–4 weeks, with delivery ranging from 6–16 weeks depending on scope. We provide a roadmap and weekly updates along the way.',
  },
];

export const techStack = [
  'React',
  'Next.js',
  'Node.js',
  'TypeScript',
  'PostgreSQL',
  'Prisma',
  'Tailwind CSS',
  'AWS',
];

export const technologies = {
  frontend: {
    frameworks: ['React', 'Vue.js', 'Angular', 'Svelte', 'Next.js', 'Nuxt.js', 'SvelteKit', 'Gatsby'],
    languages: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Sass', 'Less'],
    tools: ['Webpack', 'Vite', 'Parcel', 'Babel', 'ESLint', 'Prettier'],
    styling: ['Tailwind CSS', 'Styled Components', 'Material-UI', 'Chakra UI', 'Bootstrap', 'Bulma']
  },
  backend: {
    languages: ['Python', 'Node.js', 'PHP', 'Java', 'Go', 'C#', 'Ruby', 'Rust'],
    frameworks: ['Django', 'Flask', 'Express.js', 'Laravel', 'Spring Boot', 'Gin', 'ASP.NET', 'Rails'],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'SQLite', 'Oracle'],
    cloud: ['AWS', 'Google Cloud', 'Azure', 'DigitalOcean', 'Heroku', 'Vercel', 'Netlify']
  },
  devops: {
    containers: ['Docker', 'Kubernetes', 'Podman'],
    ci_cd: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'CircleCI', 'Travis CI'],
    monitoring: ['New Relic', 'DataDog', 'Sentry', 'LogRocket', 'Hotjar'],
    tools: ['Terraform', 'Ansible', 'Chef', 'Puppet', 'Vagrant']
  },
  ecommerce: {
    platforms: ['WordPress', 'WooCommerce', 'Shopify', 'Magento', 'BigCommerce', 'PrestaShop'],
    headless: ['Stripe', 'PayPal', 'Square', 'SquareSpace', 'Contentful', 'Sanity'],
    cms: ['WordPress', 'Drupal', 'Joomla', 'Strapi', 'Ghost', 'Forestry']
  },
  mobile: {
    native: ['React Native', 'Flutter', 'Ionic', 'Xamarin', 'Swift', 'Kotlin'],
    hybrid: ['Cordova', 'PhoneGap', 'Capacitor'],
    tools: ['Expo', 'Firebase', 'App Store Connect', 'Google Play Console']
  },
};

export const timeline = [
  { year: '2019', detail: 'Bravya Web Solutions founded to ship robust product experiences.' },
  { year: '2020', detail: 'Expanded into API platforms and modern commerce solutions.' },
  { year: '2021', detail: 'Grew remote-first team across 3 time zones.' },
  { year: '2022', detail: 'Launched maintenance & growth retainers for long-term partners.' },
  { year: '2023', detail: 'Delivered 40+ releases with 95% client retention.' },
];

export const testimonials = [
  {
    quote:
      'Bravya orchestrated I-NSTEIN’s data pipelines so analysts see reliable incident intel in seconds. Their geospatial engineers became part of our core mission team.',
    name: 'Sara Velázquez',
    title: 'Director of Intelligence',
    company: 'I-NSTEIN',
  },
  {
    quote:
      'Visitor Tracking scaled past 20k concurrent sessions without a blip. The conversion analytics and GDPR guardrails were production-ready from day one.',
    name: 'Jonas Meyer',
    title: 'Founder & CEO',
    company: 'Visitor Tracking',
  },
  {
    quote:
      'MetricsNavigator finally gives our Shopify merchants command of LTV and payback. Bravya ships like a revenue team, not an agency.',
    name: 'Lena Kowalski',
    title: 'Head of Product',
    company: 'MetricsNavigator',
  },

];

export const logos = [
  {
    name: 'I-NSTEIN',
    sector: 'Geospatial OSINT intelligence platform',
    location: 'Global operations',
  },
  {
    name: 'Visitor Tracking',
    sector: 'Real-time analytics & attribution',
    location: 'Worldwide SaaS rollout',
  },
  {
    name: 'MetricsNavigator',
    sector: 'Shopify revenue intelligence suite',
    location: 'North America & EU',
  },
  {
    name: 'Slyce',
    sector: 'AI growth platform for delivery marketplaces',
    location: 'DACH & Nordics',
  },
  {
    name: 'HelloCrowd',
    sector: 'Enterprise event orchestration platform',
    location: 'Global events footprint',
  },
  {
    name: 'DrZio',
    sector: 'Digital health & fitness engagement',
    location: 'India & MENA',
  },
];
