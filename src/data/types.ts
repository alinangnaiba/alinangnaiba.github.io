export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  technologies: string;
  responsibilities: string[];
}

export interface Project {
  name: string;
  description: string;
  url: string;
  type: string;
  status: string;
  technologies: string[];
  icon: string;
  iconWeight: string;
  metrics?: string;
}

export interface Skills {
  [category: string]: string[];
}

export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  topics?: string[];
}
