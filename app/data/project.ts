// Type definition for project details
export type ProjectDetail = {
  id: number                // Unique identifier for the project
  title: string            // Project title
  company: string          // Company name
  overview: string         // Brief project overview
  mainImage: string        // Main project image path
  link: string            // Live project URL
  github?: string         // Optional GitHub repository URL
  features: {             // List of project features
    title: string         // Feature title
    description: string   // Feature description  
    image: string | string[] // Feature image(s) path
  }[]
  techStack: {            // Technical stack groupings
    category: string      // Tech category name
    items: string[]       // List of technologies
  }[]
  
}

// Project data mapping object
export const PROJECT_DATA: Record<number, ProjectDetail> = {
  1: {
    id: 1,
    title: "PG life",
    company: "internshala", 
    overview: "it has only frontend",
    mainImage: "/gallery/main.png",
    link: "https://github.com/AlkaGupta680/PGLife",
    features: [
      {
        title: "login/signup",
        description: "user can create its account or if already exit then user can login",
        image: "/gallery/feature1.png"
      },
      {
        title: "Filter option",
        description: "filter option helps user to get mostly relevant result",
        image: "/gallery/feature2.png"
      }

    ],
    techStack: [
      {
        category: "Frontend",
        items: ["React", "JavaScript", "tailwindcss"]
      }
    ],
   
  },
  2: {
    id: 2,
    title: "Voting App",
    company: "Self learning", 
    overview: "This is a full-stack web application that allows users to participate in real-time voting. It features secure authentication, dynamic vote updates, and an intuitive user interface. The backend handles vote storage, user sessions, and live data synchronization, while the frontend provides a smooth, interactive experience. Built using modern technologies to showcase backend logic, API handling, and frontend integration.",
    mainImage: "/gallery/voting.png",
    link: "https://github.com/AlkaGupta680/voting_app",
    
    features: [
      {
        title: "User sign up and login with Aadhar Card Number and password",
        description: "",
        image: "/gallery/feature.png"
      },
      {
        title: "User can view the list of candidates",
        description: "",
        image: "/gallery/feature.png"
      },
      {
        title: "Admin can manage candidates (add, update, delete)",
        description: "soon...",
        image: "/gallery/feature.png"
      }

    ],
    techStack: [
      {
        category: "Full stack",
        items: ["React", "JavaScript","TailwindCSS","Nodejs","MongoDB","express","mongoose","nextjs"]
      }
    ],
    
  },
  3: {
    id: 3,
    title: "Resturant App",
    company: "Self learning",
    overview: "This is a full-stack restaurant web application that allows users to explore the menu, place orders, and reserve tables online. It features user authentication, dynamic order management, and an admin dashboard for handling menu items and customer requests. The backend manages data flow, order tracking, and user sessions, while the frontend offers a visually engaging and user-friendly interface for a smooth dining experience online.", 
    mainImage: "/gallery/hotel_logo.png",
    link: "https://github.com/AlkaGupta680/node_hotels",
    features: [
      {
        title: "Make reservation",
        description: "user can make reservation",
        image: "/example2/feature.png"
      }
    ],
    techStack: [
      {
        category: "Full Stack",
        items: ["React","Vite" ,"JavaScript","TailwindCSS","Nodejs","MongoDB","express",]
      }
    ]
   
  },
  4: {
    id: 4,
    title: "Drama Blossom",
    company: "Self learning",
    overview: "Drama Blossom is a full-stack MERN web application for K-drama and K-movie enthusiasts. Users can create personal accounts to explore a curated library of Korean dramas and movies, bookmark favorites, and engage in community discussions through comments and reviews. The platform features secure user authentication, personalized watchlists, and an admin dashboard for managing content and user activity. The backend efficiently handles data management, authentication, and user sessions, while the frontend offers a modern, responsive, and user-friendly interface for a seamless entertainment experience.", 
    mainImage: "/gallery/dramaBlossom.png",
    link: "https://github.com/AlkaGupta680/MERN-Drama-Blossom",
    features: [
      {
        title: "Make reservation",
        description: "user can make reservation",
        image: "/example2/feature.png"
      }
    ],
    techStack: [
      {
        category: "Full Stack",
        items: ["React","Vite" ,"JavaScript","TailwindCSS","Nodejs","MongoDB","express",]
      }
    ],
   
  }
}

// Helper function: Get project by ID
export const getProjectById = (id: number): ProjectDetail | undefined => {
  if (!Object.keys(PROJECT_DATA).length) {
    console.warn('PROJECT_DATA is empty');
    return undefined;
  }
  return PROJECT_DATA[id] || Object.values(PROJECT_DATA)[0];
}