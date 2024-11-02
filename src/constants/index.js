import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    java,
    github,
    html,
    javascript,
    portfolio,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    logo1,
    logo2,
    typescript,
    figma,
    Cplusplus
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    // {
    //     imageUrl: git,
    //     name: "Git",
    //     type: "Version Control",
    // },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "Animation",
    },
    {
        imageUrl: Cplusplus,
        name: "C++",
        type: "Frontend",
    },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: java,
    //     name: "Java",
    //     type: "Programming Language",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "Music Web Application",
        company_name: "Borcelle Podcast",
        icon: logo1,
        iconBg: "#accbe1",
        date: "September 2024",
        points: [
            "Simple Music Player: A straightforward web application that plays a selection of pre-loaded songs.",
            "Basic Controls: Includes essential features like play, pause, and stop, providing a seamless music experience for the user.",
            "User-Friendly Interface: Designed with a clean and minimal layout, making it easy to navigate and use.",
            "HTML, CSS, and JavaScript: Built using core web technologies, showcasing a solid foundation in front-end development.",
        ],
    },
    {
        title: "AI-Content Generator",
        company_name: "WordWiz",
        icon: logo2,
        iconBg: "#fbc3bc",
        date: "October 2024",
        points: [
            "AI-Powered Content Generation: Leveraging the Gemini API, WordWiz generates high-quality, contextually relevant content tailored to user input.",
            "Seamless Authentication: Integrated with Clerk for secure and smooth user authentication, providing a personalized experience.",
            "Modern Tech Stack: Built with Next.js, React, Tailwind CSS, and TypeScript, combining speed, scalability, and a dynamic user experience.",
            "Intuitive UI: Styled with Tailwind CSS, the interface is clean, responsive, and optimized for accessibility, offering an engaging user experience.",
            "Real-Time Content Output: Immediate content generation and display, enhancing productivity and efficiency for users.",
            "Customizable Parameters: Users can adjust content length, tone, and style, making it adaptable for various content needs.",
        ],
    },
    {
        title: "3D Portfolio",
        company_name: "My Portfolio",
        icon: portfolio,
        iconBg: "#b7e4c7",
        date: "Sept 2024 - Oct 2024",
        points: [
            "Immersive 3D Experience: Built with Three.js, the portfolio features dynamic 3D visuals that create an interactive and engaging user experience.",
            "Responsive and Adaptive Design: The 3D models and animations are optimized for different screen sizes, ensuring a seamless experience on both desktop and mobile devices.",
            "Dynamic 3D Model Elements: Includes unique, interactive elements like a Plane model with continuously rotating blades, adding visual interest and technical sophistication.",
            "React Integration: Leveraging React for smooth component management and fast rendering, enhancing both performance and scalability.",
            "Showcase of Skills: Serves as a visual representation of technical skills in modern front-end technologies and creative 3D design.",
            "User-Friendly Navigation: Despite complex visuals, the layout remains intuitive and accessible, focusing on a streamlined user journey.",
        ],
    },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];