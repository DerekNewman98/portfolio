export interface NavItem {
  label: string;
  path: string;
  type: "route" | "scroll";
}

export interface HeroMetric {
  label: string;
  value: string;
}

export interface HeroStatement {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: HeroMetric[];
}

export interface ResearchTopic {
  title: string;
  description: string;
  details?: string[];
  tags?: string[];
}

export interface PublicationLink {
  name: string;
  url: string;
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  summary?: string;
  links: PublicationLink[];
}

export interface Course {
  title: string;
  id: string;
  description: string;
  format: string;
  focus: string[];
}

export interface Demo {
  title: string;
  description: string;
  tags: string[];
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
  link?: PublicationLink;
}

export interface Award {
  year: string;
  name: string;
  awardedBy: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export interface SiteSectionIntro {
  eyebrow: string;
  title: string;
  description: string;
}
