import type { Education } from './types';

export const education: Education[] = [
  {
    id: "uom",
    institution: "University of Moratuwa",
    degree: "BSc (Hons.) in Information Technology (First Class)",
    location: "Sri Lanka",
    period: "Aug 2022 – Jul 2026",
    gpa: "3.823/4.0",
    achievements: [
      "Dean's List in 4 out of 8 semesters",
    ],
  },
  {
    id: "shibaura",
    institution: "Shibaura Institute of Technology",
    degree: "Research Exchange Program",
    location: "Tokyo, Japan",
    period: "Sep 2025 – Oct 2025",
    isInternational: true,
    internationalBadge: "International Student Exchange",
    achievements: [
      "Computer vision research",
      "Research and development standards and exposure",
      "International academic experience"
    ],
  },
  {
    id: "musaeus",
    institution: "Musaeus College",
    degree: "G.C.E. Advanced Level (Physical Science)",
    location: "Colombo, Sri Lanka",
    period: "2007 - 2020",
    isInternational: false,

  }
];
