export const portfolioData = {
  name: "Cindy Kivala",
  title: "Full-Stack Engineer & Scrum Master",
  tagline: "Full-stack developer specializing in building scalable applications and leading teams to deliver high-quality software solutions",
  stats: [
    { value: "100%", label: "Sprint Success" },
    { value: "20+", label: "Projects" },
    { value: "45%", label: "Team Velocity ↑" }
  ],
  contact: {
    email: "cindykivala@gmail.com",
    github: "https://github.com/cindy-kivala",
    linkedin: "https://www.linkedin.com/in/cindy-kivala-a51274382",
    // twitter: "your-twitter"
  },
  projects: [
    {
      id: 1,
      title: "ReelBrief",
      description: "Full-stack SaaS platform connecting agencies with vetted freelancers",
      tech: ["React", "Flask", "PostgreSQL", "Cloudinary", "SendGrid"],
      liveUrl: "https://reel-brief-frontend.vercel.app/",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Cartify",
      description: "Secure authentication, shopping cart, real-time inventory",
      tech: ["React", "Flask", "PostgreSQL", "Redux"],
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "IndieGames",
      description: "Browse and favorite indie games with advanced filtering",
      tech: ["React", "JSON-Server", "JavaScript"],
      liveUrl: "https://indiegames-db.netlify.app/",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Fitness Logger",
      description: "Track workouts with data visualization and analytics",
      tech: ["Python", "SQLite"],
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop"
    }
  ],
  skills: [
    {
      category: "Frontend Development",
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js & Redux", level: 95 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 }
      ]
    },
    {
      category: "Backend & APIs",
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js & Express", level: 90 },
        { name: "Python & Flask", level: 88 },
        { name: "RESTful APIs", level: 92 },
        { name: "WebSocket", level: 85 }
      ]
    },
    {
      category: "Database & Tools",
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "Git & GitHub", level: 95 },
        { name: "Redis", level: 80 }
      ]
    },
    {
      category: "AI & Project Leadership",
      gradient: "from-orange-500 to-red-500",
      skills: [
        { name: "Tesseract & NLP", level: 85 },
        { name: "Agile/Scrum", level: 95 },
        { name: "Docker", level: 90 },
        { name: "CI/CD", level: 88 }
      ]
    }
  ],
  experience: [
    {
      id: 1,
      company: "IndieCode Technologies",
      position: "Scrum Master & Project Coordinator",
      period: "June 2025 - Present",
      location: "Nairobi, Kenya",
      achievements: [
        "Led teams of 5-8 delivering 3+ enterprise applications",
        "Improved team velocity by 45%",
        "Achieved 100% sprint completion rate",
        "Reduced development bottlenecks by 35%"
      ]
    },
    {
      id: 2,
      company: "Mbusyani Pharmacy Limited",
      position: "Researcher",
      period: "Oct 2023 - Apr 2025",
      location: "Kenya",
      achievements: [
        "Analyzed 50,000+ pharmaceutical records with 100% accuracy",
        "Improved data integrity by 30%",
        "Maintained 98% on-time delivery rate",
        "Led cross-departmental coordination across 3 departments"
      ]
    },
    {
      id: 3,
      company: "Nzilu Nzioka and Company Advocates",
      position: "Legal Consultant",
      period: "Apr 2023 - Aug 2023",
      location: "Kenya",
      achievements: [
        "Launched translation services (25% satisfaction increase)",
        "Managed 500+ case files with zero misplacements",
        "Achieved 100% on-time court submission rate"
      ]
    }
  ],
  education: [
    {
      degree: "Full-Stack Software Engineering",
      institution: "Moringa School",
      year: "Nov 2025"
    },
    {
      degree: "Scrum Master Certification",
      institution: "In Progress",
      year: "2025"
    },
    {
      degree: "B.A. International Relations",
      institution: "Technical University of Kenya",
      year: "Dec 2023",
      honors: "Second Upper"
    }
  ]
};