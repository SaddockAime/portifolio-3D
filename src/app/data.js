/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "E-commerce Website",
    description: "Buy and Sell Products",
    date: "2024-08-15",
    demoLink: "https://e-commerce-ninjas.netlify.app/",
  },
  {
    id: 2,
    name: "Education Website",
    description: "Pulse is a platform designed to handle ratings for the companies in the Ed-tech industries with the its first paying customer being Andela.",
    date: "2024-12-16",
    demoLink: "https://atlp-devpulse-fn.vercel.app/",
  },
  {
    id: 3,
    name: "Hope To Hope Website",
    description: "Travel and Tour Website",
    date: "2025-04-28",
    demoLink: "https://hopetohope.netlify.app/",
  },
  {
    id: 4,
    name: "Agriconnect Rwanda",
    description: "Agriculture and Farming Website",
    date: "2025-05-13",
    demoLink: "https://agri-tech-rw-fn-001.netlify.app/",
  },
  {
    id:5,
    name: "Education Website",
    description: "ITS MIS Website",
    date: "2025-02-20",
    demoLink: "https://its-mis-fn.vercel.app/",
  }
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Blogs", link: "/blogs", icon: "blogs", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/SaddockAime",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/saddock-kabandana-89b914237/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "X",
    link: "https://twitter.com/SaddockAime",
    icon: "twitter",
    newTab: true,
  },
  {
    label: "Resume",
    link: "https://docs.google.com/document/d/1dZPdHn9J7bgdQrlIkEkq3J_FHNSATn_8mqJOLBzNAXw/edit?usp=sharing",
    icon: "resume",
    newTab: true,
  },
];

export const blogsData = [
  {
    id: "modern-web-development-2024",
    title: "Modern Web Development Trends in 2024",
    description: "Exploring the latest trends and technologies shaping the future of web development, from AI integration to advanced frameworks.",
    date: "2024-01-15",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop&crop=center",
    category: "Technology",
    readTime: "8 min read",
    content: {
      intro: "The web development landscape is constantly evolving, and 2024 has brought some exciting new trends that are reshaping how we build and interact with web applications. From AI-powered development tools to advanced frameworks, let's explore what's driving the industry forward.",
      sections: [
        {
          title: "AI-Powered Development Tools",
          content: "Artificial Intelligence has revolutionized the way developers write code. Tools like GitHub Copilot and ChatGPT are not just helping with code completion but are actively participating in the development process. These AI assistants can generate entire functions, debug complex issues, and even suggest architectural improvements. The integration of AI in IDEs has made developers more productive than ever before.",
          image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop&crop=center"
        },
        {
          title: "Framework Evolution: React, Vue, and Beyond",
          content: "The major frameworks have seen significant updates this year. React 18's concurrent features have improved performance dramatically, while Vue 3's composition API has gained widespread adoption. New players like Solid.js and Qwik are challenging the status quo with innovative approaches to reactivity and performance. The choice of framework now depends more on specific use cases rather than general popularity.",
          image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop&crop=center"
        },
        {
          title: "The Rise of Edge Computing",
          content: "Edge computing has moved from concept to reality in web development. Platforms like Vercel Edge Functions and Cloudflare Workers are enabling developers to run code closer to users, reducing latency and improving performance. This shift is particularly important for global applications and real-time features."
        }
      ],
      conclusion: "As we move forward in 2024, these trends will continue to shape how we build web applications. The focus on performance, developer experience, and user-centric design remains paramount. Staying updated with these trends is essential for any developer looking to build modern, efficient web applications."
    },
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop&crop=center"
    ]
  },
  {
    id: "typescript-best-practices",
    title: "TypeScript Best Practices for Large-Scale Applications",
    description: "Learn how to structure and maintain TypeScript projects that scale. Essential patterns and practices for enterprise development.",
    date: "2024-01-08",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop&crop=center",
    category: "Programming",
    readTime: "12 min read",
    content: {
      intro: "TypeScript has become the de facto standard for large-scale JavaScript applications. However, adopting TypeScript is just the first step. To truly benefit from its power, you need to follow best practices that ensure your codebase remains maintainable and scalable as your project grows.",
      sections: [
        {
          title: "Strict Type Configuration",
          content: "One of the most important decisions when starting a TypeScript project is configuring the compiler options. Enabling strict mode from the beginning prevents many common issues. Use strict: true in your tsconfig.json, and consider enabling additional checks like noUncheckedIndexedAccess and exactOptionalPropertyTypes for even better type safety.",
          image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop&crop=center"
        },
        {
          title: "Advanced Type Patterns",
          content: "Leverage TypeScript's advanced type system features like conditional types, mapped types, and template literal types. These features allow you to create more precise and flexible type definitions. For example, use branded types for better domain modeling and utility types for transforming existing types.",
          image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&h=400&fit=crop&crop=center"
        },
        {
          title: "Project Structure and Module Organization",
          content: "Organize your TypeScript project with clear boundaries between modules. Use path mapping in tsconfig.json to avoid deep relative imports. Implement a layered architecture with clear separation between presentation, business logic, and data access layers. This structure makes your codebase more maintainable and testable."
        }
      ],
      conclusion: "Following these TypeScript best practices will help you build more robust and maintainable applications. Remember that TypeScript is a tool to help you write better JavaScript, so focus on creating clear, well-typed interfaces and leveraging the type system to catch errors at compile time rather than runtime."
    },
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&h=400&fit=crop&crop=center"
    ]
  },
  {
    id: "react-performance-optimization",
    title: "React Performance Optimization Techniques",
    description: "Comprehensive guide to optimizing React applications for better performance and user experience.",
    date: "2024-01-02",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop&crop=center",
    category: "React",
    readTime: "10 min read",
    content: {
      intro: "React applications can suffer from performance issues as they grow in complexity. Understanding how to optimize React components and applications is crucial for delivering fast, responsive user experiences. This guide covers essential optimization techniques every React developer should know.",
      sections: [
        {
          title: "Memoization Strategies",
          content: "React.memo, useMemo, and useCallback are powerful tools for preventing unnecessary re-renders. However, they should be used judiciously. Wrap components in React.memo only when they receive complex props or when re-rendering is expensive. Use useMemo for expensive calculations and useCallback for functions passed to child components.",
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop&crop=center"
        },
        {
          title: "Code Splitting and Lazy Loading",
          content: "Implement code splitting using React.lazy and Suspense to reduce initial bundle size. Split your application at route level first, then consider component-level splitting for large components. Use dynamic imports for libraries that are only needed in specific scenarios. This reduces the initial JavaScript payload and improves loading times.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&crop=center"
        },
        {
          title: "Virtual Scrolling and List Optimization",
          content: "For large lists, implement virtual scrolling using libraries like react-window or react-virtualized. Only render visible items to maintain smooth performance regardless of list size. Consider using keys properly to help React identify which items have changed, and avoid using array indices as keys when the list order can change."
        }
      ],
      conclusion: "Performance optimization in React is about finding the right balance between functionality and speed. Profile your application regularly using React DevTools Profiler, measure the impact of your optimizations, and remember that premature optimization can sometimes do more harm than good. Focus on the bottlenecks that actually affect user experience."
    },
    images: [
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&crop=center"
    ]
  },
  {
    id: "fullstack-development-journey",
    title: "My Journey from Frontend to Full-Stack Development",
    description: "Personal insights and lessons learned while transitioning from frontend development to full-stack engineering.",
    date: "2023-12-28",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop&crop=center",
    category: "Career",
    readTime: "6 min read",
    content: {
      intro: "Transitioning from frontend development to full-stack engineering has been one of the most rewarding challenges in my career. This journey taught me not just new technologies, but also how to think about software architecture and system design from a holistic perspective.",
      sections: [
        {
          title: "Understanding Backend Fundamentals",
          content: "The first step was mastering backend fundamentals: databases, APIs, server architecture, and deployment. I started with Node.js since I already knew JavaScript, which made the transition smoother. Learning about RESTful APIs, database design, and server-side rendering opened up new possibilities for building complete applications.",
          image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop&crop=center"
        },
        {
          title: "Database Design and Management",
          content: "Understanding databases was crucial. I learned both SQL and NoSQL databases, starting with PostgreSQL and MongoDB. Database design principles, normalization, indexing, and query optimization became essential skills. The ability to model data effectively directly impacts application performance and scalability.",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&crop=center"
        },
        {
          title: "DevOps and Deployment",
          content: "Learning deployment and DevOps practices completed the full-stack picture. Understanding Docker, CI/CD pipelines, cloud services, and monitoring tools became essential. This knowledge helps in building applications that are not just functional but also scalable and maintainable in production environments."
        }
      ],
      conclusion: "Becoming a full-stack developer has made me a more complete engineer. I can now see the entire application lifecycle and make better architectural decisions. The key is to start with one area and gradually expand your knowledge while building real projects that challenge you to learn new concepts."
    },
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&crop=center"
    ]
  }
];

