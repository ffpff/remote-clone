import { Job } from '@/types/job';

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

/**
 * 提取薪资数字范围
 */
function extractSalaryRange(salary: string): { min: number; max: number } {
  const salaryNumbers = salary.match(/\d+/g);
  if (!salaryNumbers || salaryNumbers.length < 2) {
    return { min: 0, max: 0 };
  }
  
  const min = parseInt(salaryNumbers[0]) * 1000; // 假设是k为单位
  const max = parseInt(salaryNumbers[1]) * 1000;
  
  return { min, max };
}

/**
 * 搜索和过滤工作岗位
 */
export function searchJobs(jobs: Job[], filters: SearchFilters): SearchResult {
  let filteredJobs = [...jobs];

  // 关键词搜索 - 搜索标题、公司、技能
  if (filters.query && filters.query.trim()) {
    const query = filters.query.toLowerCase().trim();
    filteredJobs = filteredJobs.filter(job => 
      job.title.toLowerCase().includes(query) ||
      job.company.toLowerCase().includes(query) ||
      job.skills.some(skill => skill.toLowerCase().includes(query)) ||
      job.category.toLowerCase().includes(query)
    );
  }

  // 地点过滤
  if (filters.location && filters.location !== 'all') {
    filteredJobs = filteredJobs.filter(job => 
      job.location.toLowerCase().includes(filters.location!.toLowerCase())
    );
  }

  // 分类过滤
  if (filters.category && filters.category !== 'all') {
    filteredJobs = filteredJobs.filter(job => 
      job.category.toLowerCase() === filters.category!.toLowerCase()
    );
  }

  // 技能过滤
  if (filters.skills && filters.skills.length > 0) {
    filteredJobs = filteredJobs.filter(job =>
      filters.skills!.some(skill => 
        job.skills.some(jobSkill => 
          jobSkill.toLowerCase().includes(skill.toLowerCase())
        )
      )
    );
  }

  // 福利过滤
  if (filters.benefits && filters.benefits.length > 0) {
    filteredJobs = filteredJobs.filter(job =>
      filters.benefits!.some(benefit => 
        (job.benefits || []).some(jobBenefit => 
          jobBenefit.toLowerCase().includes(benefit.toLowerCase())
        )
      )
    );
  }

  // 工作类型过滤
  if (filters.type) {
    filteredJobs = filteredJobs.filter(job => job.type === filters.type);
  }

  // 认证过滤
  if (filters.isVerified) {
    filteredJobs = filteredJobs.filter(job => job.isVerified === true);
  }

  // 特色过滤
  if (filters.isFeatured) {
    filteredJobs = filteredJobs.filter(job => job.isFeatured === true);
  }

  // 薪资范围过滤
  if (filters.minSalary || filters.maxSalary) {
    filteredJobs = filteredJobs.filter(job => {
      const { min, max } = extractSalaryRange(job.salary);
      if (min === 0 && max === 0) return true; // 无法解析薪资的保留

      if (filters.minSalary && max < filters.minSalary) return false;
      if (filters.maxSalary && min > filters.maxSalary) return false;
      
      return true;
    });
  }

  return {
    jobs: filteredJobs,
    totalCount: jobs.length,
    filteredCount: filteredJobs.length
  };
}

/**
 * 获取所有可用的过滤选项
 */
export function getFilterOptions(jobs: Job[]) {
  const locations = Array.from(new Set(jobs.map(job => job.location))).sort();
  const categories = Array.from(new Set(jobs.map(job => job.category))).sort();
  const skills = Array.from(new Set(jobs.flatMap(job => job.skills))).sort();
  const types = Array.from(new Set(jobs.map(job => job.type))).sort();
  const benefits = Array.from(new Set(jobs.flatMap(job => job.benefits || []))).sort();
  
  const salaryRanges = [
    { label: '$0 - $50k', min: 0, max: 50000 },
    { label: '$50k - $80k', min: 50000, max: 80000 },
    { label: '$80k - $120k', min: 80000, max: 120000 },
    { label: '$120k - $150k', min: 120000, max: 150000 },
    { label: '$150k+', min: 150000, max: 999999 }
  ];

  return {
    locations,
    categories,
    skills,
    types,
    benefits,
    salaryRanges
  };
}

/**
 * 高亮搜索关键词
 */
export function highlightSearchTerm(text: string, searchTerm: string): string {
  if (!searchTerm) return text;
  
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>');
}