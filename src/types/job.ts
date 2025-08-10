export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  skills: string[];
  timeAgo: string;
  isVerified?: boolean;
  isFeatured?: boolean;
  companyLogo?: string;
  description?: string;
  type: 'remote' | 'hybrid' | 'onsite';
  category: string;
  backgroundColor?: string;
  benefits?: string[];
}

export interface JobsData {
  jobs: Job[];
  totalJobs: number;
  featuredJobs: Job[];
}

export interface SearchFilters {
  query?: string;
  location?: string;
  category?: string;
  skills?: string[];
  minSalary?: number;
  maxSalary?: number;
  type?: 'remote' | 'hybrid' | 'onsite';
  isVerified?: boolean;
  isFeatured?: boolean;
  benefits?: string[];
}

export interface SearchResult {
  jobs: Job[];
  totalCount: number;
  filteredCount: number;
}

export interface FilterOptions {
  locations: string[];
  categories: string[];
  skills: string[];
  types: ('remote' | 'hybrid' | 'onsite')[];
  benefits: string[];
  salaryRanges: { label: string; min: number; max: number }[];
}