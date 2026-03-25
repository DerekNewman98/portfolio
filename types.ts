export interface ResearchTopic {
  title: string;
  description: string;
  details?: string[];
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  links: { name: string; url: string }[];
}

export interface Course {
  title:string;
  id: string;
  description: string;
  imageUrl: string;
}

export interface Demo {
    title: string;
    description: string;
    latexEquation?: string;
    codeSnippet?: string;
    language?: string;
}

export interface AcademicItem {
  tenure: string;
  title: string;
  institution: string;
  description: string;
}

export interface Presentation {
  title: string;
  authors: string;
  event: string;
  year: number;
  location: string;
  link?: { name: string; url: string };
}

export interface Award {
  year: string;
  name: string;
  awardedBy: string;
}