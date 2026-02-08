import type { Project } from './types';

export const projects: Project[] = [
  {
    id: "npm-package-datacanvas",
    title: "NPM Package: DataCanvas Data Retrieval APIs",
    affiliation: "IoT and Embedded Systems Labs",
    description: "SDK Development for integration of DataCanvas platform with external applications.",
    stack: ["TypeScript", "Node"],
    year: "Ongoing",
    status: "In Progress",
    links: [{
      title: "Click to view on NPM",
      href: "https://www.npmjs.com/package/@datacanvas/sdk"
    }]
  },
  {
    id: "fyp",
    title: "Havelock Mall Adapted Blind Navigation System",
    description: "Real time navigation system for visually impaired individuals in shopping malls like Havelock City Mall, Sri Lanka",
    stack: ["In Review"],
    year: "Ongoing",
    affiliation: "Academic Project",
    status: "In Progress",
    links: []
  },
  {
    id: "verifica",
    title: "Verifica",
    affiliation: "IoT and Embedded Systems Labs",
    description: "Biometric student verification system for Center for Open Distance Learning, University of Moratuwa",
    stack: ["JavaScript", "React Native", "Next"],
    year: "2024",
    status: "Completed",
    links: []
  },
  {
    id: "datacanvas",
    title: "DataCanvas",
    affiliation: "IoT and Embedded Systems Labs",
    description: "Customizable IoT data analysis platform with real-time data visualization and integration capabilities",
    stack: ["TypeScript", "React", "Node.js", "PostgreSQL", "MQTT", "Firebase"],
    year: "2024",
    status: "Completed",
    links: []
  },
  {
    id: "umt",
    title: "University Maintenance Tracking Portal",
    description: "Maintenance request and tracking system for University of Moratuwa cleaning and security staff",
    stack: ["Next.js", "Express.js", "React.js", "React Native", "MySQL"],
    year: "2024",
    affiliation: "IoT and Embedded Systems Labs",
    status: "Completed",
    links: []
  },
  {
    id: "firststep",
    title: "FirstStep",
    description: "Modern job matching platform with algorithm-based recommendations to connect job seekers with employers",
    stack: ["Angular", "ASP.NET", "SQL Server"],
    year: "2024",
    affiliation: "Academic Project",
    status: "Completed",
    links: []
  },
];