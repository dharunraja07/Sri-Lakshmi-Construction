export type ProjectCategory = "finished" | "in-progress";

export interface ProjectSpecification {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  projectType: string;
  location: "Pudukkottai" | "Karaikudi" | "Trichy" | string;
  addressSnippet: string;
  mainImage: string;
  galleryImages: string[];
  year: string;
  builtUpArea: string;
  plotArea?: string;
  floors?: string;
  bedrooms?: string;
  shortDescription: string;
  description: string[];
  specifications: ProjectSpecification[];
  highlights: string[];
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  image: string;
  features: string[];
  deliverables: string[];
  suitableFor: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: "planning" | "construction" | "pricing" | "approvals" | "general";
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  location: string;
  projectTitle: string;
  quote: string;
  completionYear: string;
}

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  bio: string;
  image: string;
}

export interface CompanyStats {
  yearsExperience: number;
  housesCompleted: number;
  citiesServed: number;
}
