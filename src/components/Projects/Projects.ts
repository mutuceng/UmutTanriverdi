export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  imageUrls: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "mesajx",
    title: "MesajX",
    description: "Scalable real-time group chat application",
    longDescription: `MesajX is a real-time group chat platform developed using microservices architecture for scalability and modularity. It features three independent services:

- User Service for authentication and identity management.
- Chat Service for real-time message handling using Redis (TTL 1-day) and PostgreSQL.
- Sync Service for syncing messages from Redis to PostgreSQL using RabbitMQ events.

SignalR provides real-time conversation updates. Secure token-based authentication and authorization are handled by Duende IdentityServer. A modern React + TypeScript frontend ensures a dynamic and smooth user experience.

The system uses YARP Gateway for routing and service communication.`,
    techStack: ["ASP.NET", "SignalR", "Redis", "PostgreSQL", "RabbitMQ", "Duende IdentityServer", "React", "Microservices", "YARP"],
    imageUrls: [
      `${import.meta.env.BASE_URL}images/mesajxreeltime.png`
    ],
    githubUrl: "https://github.com/mutuceng/MesajX",
    liveDemoUrl: undefined 
  },
  {
    id: "baristashop",
    title: "BaristaShop",
    description: "Microservices-based e-commerce site for barista tools",
    longDescription: `BaristaShop is an e-commerce platform for barista equipment.
- Built using 8 microservices (catalog, user, order, etc.).
- Services use different DBs: MSSQL, MongoDB, Redis, PostgreSQL.
- Applied Onion + N-Tier architecture per service.
- CQRS + MediatR used for write/read segregation.
- Ocelot API Gateway for routing.
- IdentityServer4 for secure, role-based access.`,
    techStack: ["ASP.NET", "Microservices", "Docker", "Ocelot", "IdentityServer4", "CQRS", "Redis", "MongoDB", "PostgreSQL"],
    imageUrls: [
      `${import.meta.env.BASE_URL}images/BaristaShop1.jpg`,
      `${import.meta.env.BASE_URL}images/BaristaShop2.png`,
      `${import.meta.env.BASE_URL}images/BaristaShop3.jpg`,
      `${import.meta.env.BASE_URL}images/BaristaShop4.jpg`
    ],
    githubUrl: "https://github.com/mutuceng/BaristaShop",
    liveDemoUrl: undefined
  },
  {
    id: "depression-risk",
    title: "Depression Risk API",
    description: "ML-based depression prediction API integrated with .NET frontend",
    longDescription: `Built an end-to-end depression risk prediction tool.
- Preprocessed and cleaned dataset from competition.
- Trained a machine learning model using Python.
- Deployed model behind a RESTful API using FastAPI + Docker.
- Created a .NET-based frontend to interact with the model.`,
    techStack: ["Python", "FastAPI", "Docker", "ASP.NET"],
    imageUrls: [
      `${import.meta.env.BASE_URL}images/DepressionProject.jpg`,
      `${import.meta.env.BASE_URL}images/DepressionProject2.jpg`,
      `${import.meta.env.BASE_URL}images/DepressionProject3.jpg`,
      `${import.meta.env.BASE_URL}images/DepressionProject4.jpg`
    ],
    githubUrl: "https://github.com/mutuceng/depression-risk-classification",
    liveDemoUrl: undefined
  },
  {
    id: "blogsite",
    title: "Blog & Portfolio Platform",
    description: "Multi-user blogging platform",
    longDescription: `Created a personal blog and portfolio site using ASP.NET MVC.
- Role-based authorization: only approved bloggers can post.
- Admin panel for content and user management.
- Relational DB (SQLite) used for blogs, users, tags.
- Responsive and accessible design.
- Frontend: HTML, CSS, JavaScript.`,
    techStack: ["ASP.NET", "MVC", "HTML", "CSS", "JavaScript", "SQLite"],
    imageUrls: [
      `${import.meta.env.BASE_URL}images/Blog1.jpg`,
      `${import.meta.env.BASE_URL}images/Blog2.jpg`
    ],
    githubUrl: "https://github.com/mutuceng/dotnet-blog-",
    liveDemoUrl: undefined
  },
  {
    id: "filmiyorum",
    title: "Filmiyorum",
    description: "Windows Form App movie discovery & rating app",
    longDescription: `Developed with C# Windows Forms.
- Users can browse and view movie data.
- Verified/premium users allowed to rate.
- Object-Oriented Design: roles, ratings, movies.
- UI designed for simplicity and clarity.`,
    techStack: ["C#", "PostgreSQL", "Windows Forms"],
    imageUrls: [
      `${import.meta.env.BASE_URL}images/Filmiyorum1.jpg`,
      `${import.meta.env.BASE_URL}images/Filmiyorum2.jpg`,
      `${import.meta.env.BASE_URL}images/Filmiyorum3.jpg`,
      `${import.meta.env.BASE_URL}images/Filmiyorum4.jpg`
    ],
    githubUrl: "https://github.com/mutuceng/FilmiYorum",
    liveDemoUrl: undefined
  }
];
