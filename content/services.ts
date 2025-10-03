import type { ServiceSlug } from '@/config/site';

interface ServiceDetail {
  title: string;
  hero: {
    intro: string;
    summary: string;
  };
  deliverables: string[];
  tools: string[];
  result: {
    headline: string;
    description: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const serviceDetails: Record<ServiceSlug, ServiceDetail> = {
  frontend: {
    title: 'Frontend Engineering',
    hero: {
      intro: 'Stunning user interfaces built with any technology you prefer.',
      summary:
        'From React to Vue, Angular to Svelte - we build responsive, accessible, and performant frontends that work perfectly across all devices. We adapt to your existing tech stack and deliver exceptional user experiences.',
    },
    deliverables: [
      'Responsive web applications with mobile-first design',
      'Progressive Web Apps (PWA) with offline capabilities',
      'Component libraries and design system implementation',
      'Accessibility compliance (WCAG 2.1 AA standards)',
      'Performance optimization and Core Web Vitals',
      'Cross-browser compatibility and testing',
      'SEO optimization and meta tag management',
      'Integration with CMS and headless systems',
    ],
    tools: [
      'React', 'Vue.js', 'Angular', 'Svelte', 'Next.js', 'Nuxt.js', 'SvelteKit', 'Gatsby',
      'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Sass', 'Less', 'Tailwind CSS',
      'Styled Components', 'Material-UI', 'Chakra UI', 'Bootstrap', 'Bulma',
      'Webpack', 'Vite', 'Parcel', 'Babel', 'ESLint', 'Prettier', 'Storybook',
      'Jest', 'Cypress', 'Playwright', 'Testing Library'
    ],
    result: {
      headline: 'E-commerce platform redesign',
      description:
        'Achieved 95+ Lighthouse scores across all pages and increased conversion rates by 28% with improved user experience.',
    },
    faqs: [
      {
        question: 'Which frontend frameworks do you work with?',
        answer:
          'We work with all major frameworks including React, Vue.js, Angular, Svelte, and vanilla JavaScript. We choose the best technology for your specific project requirements and team expertise.',
      },
      {
        question: 'Do you ensure mobile responsiveness?',
        answer:
          'Absolutely. We follow mobile-first design principles and test across all device sizes to ensure your application looks and works perfectly on phones, tablets, and desktops.',
      },
      {
        question: 'How do you handle accessibility?',
        answer:
          'We implement WCAG 2.1 AA standards, conduct accessibility audits, and ensure your application is usable by everyone, including users with disabilities.',
      },
    ],
  },
  'backend-apis': {
    title: 'Backend & APIs',
    hero: {
      intro: 'Powerful server-side solutions in any language you need.',
      summary:
        'Whether Python, Node.js, PHP, Java, or Go - we build robust APIs, microservices, and database systems that scale with your business. We work with any technology stack and ensure security, performance, and reliability.',
    },
    deliverables: [
      'RESTful and GraphQL API development',
      'Microservices architecture and containerization',
      'Database design, optimization, and migration',
      'Authentication and authorization systems',
      'Real-time applications with WebSockets',
      'Third-party integrations and webhooks',
      'API documentation and testing suites',
      'Performance monitoring and optimization',
    ],
    tools: [
      'Python', 'Node.js', 'PHP', 'Java', 'Go', 'C#', 'Ruby', 'Rust',
      'Django', 'Flask', 'Express.js', 'Laravel', 'Spring Boot', 'Gin', 'ASP.NET', 'Rails',
      'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'SQLite', 'Oracle',
      'AWS', 'Google Cloud', 'Azure', 'DigitalOcean', 'Heroku', 'Vercel', 'Netlify',
      'Docker', 'Kubernetes', 'GraphQL', 'REST', 'gRPC', 'WebSockets'
    ],
    result: {
      headline: 'Multi-tenant SaaS platform',
      description:
        'Built scalable microservices architecture supporting 10,000+ concurrent users with 99.99% uptime and sub-100ms API response times.',
    },
    faqs: [
      {
        question: 'Which programming languages do you support?',
        answer:
          'We work with all major backend languages including Python, Node.js, PHP, Java, Go, C#, Ruby, and Rust. We choose the best language for your project requirements and team expertise.',
      },
      {
        question: 'How do you ensure API security?',
        answer:
          'We implement industry-standard security practices including JWT authentication, OAuth2, rate limiting, input validation, encryption, and regular security audits.',
      },
      {
        question: 'Can you work with existing databases?',
        answer:
          'Yes. We can work with any database system and help optimize, migrate, or integrate with your existing data infrastructure.',
      },
    ],
  },
  'full-stack': {
    title: 'Full-Stack Development',
    hero: {
      intro: 'Complete end-to-end solutions using any tech stack.',
      summary:
        'From traditional LAMP stacks to modern JAMstack, we deliver complete products that match your existing infrastructure and team preferences. We handle everything from concept to deployment.',
    },
    deliverables: [
      'Complete web application development',
      'Mobile app development (React Native, Flutter)',
      'Database design and backend architecture',
      'Frontend and backend integration',
      'Third-party service integrations',
      'Deployment and DevOps setup',
      'Testing and quality assurance',
      'Documentation and training',
    ],
    tools: [
      'React', 'Vue.js', 'Angular', 'Next.js', 'Nuxt.js', 'SvelteKit',
      'Node.js', 'Python', 'PHP', 'Java', 'Go', 'C#',
      'PostgreSQL', 'MySQL', 'MongoDB', 'Redis',
      'AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes',
      'React Native', 'Flutter', 'Ionic', 'Cordova',
      'Git', 'GitHub Actions', 'Jenkins', 'CircleCI'
    ],
    result: {
      headline: 'Healthcare management platform',
      description:
        'Delivered complete full-stack solution in 16 weeks, supporting 5,000+ users with 99.9% uptime and seamless mobile experience.',
    },
    faqs: [
      {
        question: 'What tech stacks do you work with?',
        answer:
          'We work with any combination of technologies including LAMP, MEAN, MERN, JAMstack, and custom stacks. We adapt to your existing infrastructure and preferences.',
      },
      {
        question: 'Do you provide mobile app development?',
        answer:
          'Yes. We develop both native and cross-platform mobile apps using React Native, Flutter, Ionic, and other technologies.',
      },
      {
        question: 'How do you ensure code quality?',
        answer:
          'We follow best practices including code reviews, automated testing, CI/CD pipelines, and comprehensive documentation to ensure maintainable, scalable code.',
      },
    ],
  },
  'ecommerce-cms': {
    title: 'E-commerce & CMS',
    hero: {
      intro: 'Powerful online stores and content management systems.',
      summary:
        'From WordPress/WooCommerce to headless solutions with Shopify, Magento, or custom builds - we create the perfect online store for your business. We build what works for you.',
    },
    deliverables: [
      'E-commerce platform development and customization',
      'Content management system setup and training',
      'Payment gateway integration and security',
      'Inventory management and order processing',
      'Multi-channel selling and marketplace integration',
      'SEO optimization and performance tuning',
      'Analytics and reporting dashboards',
      'Mobile commerce and responsive design',
    ],
    tools: [
      'WordPress', 'WooCommerce', 'Shopify', 'Magento', 'BigCommerce', 'PrestaShop',
      'Stripe', 'PayPal', 'Square', 'SquareSpace', 'Contentful', 'Sanity',
      'Drupal', 'Joomla', 'Strapi', 'Ghost', 'Forestry',
      'React', 'Next.js', 'Vue.js', 'Node.js', 'PHP', 'Python',
      'MySQL', 'PostgreSQL', 'MongoDB', 'Redis'
    ],
    result: {
      headline: 'Multi-brand e-commerce platform',
      description:
        'Increased online sales by 45% and reduced cart abandonment by 32% with improved user experience and streamlined checkout process.',
    },
    faqs: [
      {
        question: 'Which e-commerce platforms do you work with?',
        answer:
          'We work with all major platforms including WordPress/WooCommerce, Shopify, Magento, BigCommerce, and custom solutions. We choose the best platform for your business needs and budget.',
      },
      {
        question: 'Can you integrate with existing systems?',
        answer:
          'Yes. We can integrate with your existing ERP, CRM, inventory management, and other business systems to create a seamless workflow.',
      },
      {
        question: 'Do you provide ongoing maintenance?',
        answer:
          'Absolutely. We offer comprehensive maintenance and support services including updates, security patches, performance monitoring, and feature enhancements.',
      },
    ],
  },
  'cloud-devops': {
    title: 'Cloud & DevOps',
    hero: {
      intro: 'Infrastructure that scales with your ambitions.',
      summary:
        'From AWS to Azure, we architect cloud-native solutions with automated deployments, monitoring, and security. Your applications will be fast, secure, and cost-optimized.',
    },
    deliverables: [
      'Cloud architecture design & migration strategies',
      'CI/CD pipeline setup with automated testing',
      'Infrastructure as Code (Terraform, CloudFormation)',
      'Monitoring, logging, and alerting systems',
      'Security hardening & compliance frameworks',
      'Cost optimization & performance tuning',
    ],
    tools: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitLab CI', 'Prometheus', 'Grafana'],
    result: {
      headline: 'Multi-cloud migration',
      description:
        'Reduced infrastructure costs by 40% and achieved 99.99% uptime with automated failover across regions.',
    },
    faqs: [
      {
        question: 'Which cloud providers do you work with?',
        answer:
          'We work with all major cloud providers including AWS, Google Cloud, Azure, and DigitalOcean. We choose the best platform for your specific needs and budget.',
      },
      {
        question: 'How do you ensure security in the cloud?',
        answer:
          'We implement security best practices including network segmentation, encryption at rest and in transit, IAM policies, and regular security audits.',
      },
    ],
  },
  'maintenance-support': {
    title: 'Maintenance & Support',
    hero: {
      intro: 'Keep your applications running smoothly.',
      summary:
        '24/7 support for any technology stack with proactive monitoring and updates. Whether it\'s legacy PHP, modern React, or enterprise Java applications - we provide expert maintenance and support for all technologies.',
    },
    deliverables: [
      '24/7 monitoring and incident response',
      'Security updates and vulnerability patching',
      'Performance optimization and tuning',
      'Bug fixes and feature enhancements',
      'Database maintenance and optimization',
      'Backup and disaster recovery planning',
      'Code reviews and quality assurance',
      'Documentation updates and training',
    ],
    tools: [
      'All Technology Stacks', 'Legacy Systems', 'Modern Frameworks',
      'Datadog', 'New Relic', 'Sentry', 'PagerDuty', 'GitHub Actions',
      'Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'Azure',
      'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch',
      'Git', 'Jenkins', 'CircleCI', 'Travis CI', 'Linear', 'Jira'
    ],
    result: {
      headline: 'Enterprise application maintenance',
      description:
        'Reduced downtime by 75% and improved system performance by 40% with proactive monitoring and regular maintenance updates.',
    },
    faqs: [
      {
        question: 'Do you support legacy systems?',
        answer:
          'Yes. We have extensive experience with legacy systems and can provide maintenance and support for any technology, including older versions and deprecated frameworks.',
      },
      {
        question: 'What response times do you offer?',
        answer:
          'We offer flexible SLAs with response times ranging from 1 hour to 24 hours depending on the severity and your specific requirements.',
      },
      {
        question: 'Can you work with our existing team?',
        answer:
          'Absolutely. We can work alongside your internal team, providing additional expertise and support while maintaining your existing workflows and processes.',
      },
    ],
  },
};