import type { Education } from './types';

export const education: Education[] = [
  {
    id: "uom",
    institution: "University of Moratuwa",
    degree: "BSc (Hons.) in Information Technology",
    location: "Sri Lanka",
    period: "Aug 2022 – Aug 2026 (Expected)",
    gpa: "3.81/4.0",
    achievements: [
      "Dean's List in 3 semesters",
      "Batch first in 1 semester",
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
    degree: "G.C.E. Advanced Level",
    location: "Colombo, Sri Lanka",
    period: "Jan 2018 - Oct 2020",
    isInternational: false,

  }
];
