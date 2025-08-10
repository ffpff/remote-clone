import { Job, SearchFilters, SearchResult, FilterOptions } from '@/types/job';
import { searchJobs, getFilterOptions } from '@/lib/search';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Full-Stack Developer',
    company: 'TechFlow',
    location: 'Worldwide',
    salary: '$80k - $120k',
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    timeAgo: '2h',
    isVerified: true,
    isFeatured: true,
    type: 'remote',
    category: 'Engineering',
    backgroundColor: 'bg-blue-100',
    benefits: ['Health Insurance', '401k', 'Flexible Hours', 'Remote Work']
  },
  {
    id: '2',
    title: 'Product Designer',
    company: 'DesignLab',
    location: 'Europe',
    salary: '$65k - $95k',
    skills: ['Figma', 'Adobe Creative Suite', 'Prototyping'],
    timeAgo: '4h',
    isVerified: true,
    type: 'remote',
    category: 'Design',
    backgroundColor: 'bg-purple-100',
    benefits: ['Health Insurance', 'Flexible Hours', 'Remote Work', 'Learning Budget']
  },
  {
    id: '3',
    title: 'DevOps Engineer',
    company: 'CloudNine',
    location: 'Americas',
    salary: '$90k - $140k',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    timeAgo: '6h',
    type: 'remote',
    category: 'Engineering',
    backgroundColor: 'bg-green-100',
    benefits: ['Health Insurance', '401k', 'Stock Options', 'Remote Work']
  },
  {
    id: '4',
    title: 'Marketing Manager',
    company: 'GrowthHackers',
    location: 'United States',
    salary: '$70k - $100k',
    skills: ['SEO', 'Content Marketing', 'Analytics', 'Social Media'],
    timeAgo: '8h',
    type: 'remote',
    category: 'Marketing',
    backgroundColor: 'bg-pink-100',
    benefits: ['Health Insurance', 'Flexible Hours', 'Performance Bonus', 'Remote Work']
  },
  {
    id: '5',
    title: 'Data Scientist',
    company: 'DataMind',
    location: 'Worldwide',
    salary: '$95k - $130k',
    skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow'],
    timeAgo: '12h',
    isVerified: true,
    type: 'remote',
    category: 'Data Science',
    backgroundColor: 'bg-orange-100',
    benefits: ['Health Insurance', '401k', 'Learning Budget', 'Stock Options']
  },
  {
    id: '6',
    title: 'Customer Success Manager',
    company: 'SupportPro',
    location: 'Europe',
    salary: '$55k - $75k',
    skills: ['Customer Relations', 'CRM', 'Communication'],
    timeAgo: '1d',
    type: 'remote',
    category: 'Customer Success',
    backgroundColor: 'bg-teal-100',
    benefits: ['Health Insurance', 'Flexible Hours', 'Remote Work']
  },
  {
    id: '7',
    title: 'Frontend Developer',
    company: 'WebCrafters',
    location: 'Asia Pacific',
    salary: '$60k - $90k',
    skills: ['Vue.js', 'Tailwind CSS', 'JavaScript', 'Webpack'],
    timeAgo: '1d',
    type: 'remote',
    category: 'Engineering',
    backgroundColor: 'bg-indigo-100',
    benefits: ['Health Insurance', '401k', 'Remote Work', 'Learning Budget']
  },
  {
    id: '8',
    title: 'Content Writer',
    company: 'WordSmith Co',
    location: 'Worldwide',
    salary: '$40k - $60k',
    skills: ['SEO Writing', 'Content Strategy', 'WordPress'],
    timeAgo: '2d',
    type: 'remote',
    category: 'Content',
    backgroundColor: 'bg-yellow-100',
    benefits: ['Flexible Hours', 'Remote Work', 'Performance Bonus']
  },
  {
    id: '9',
    title: 'iOS Developer',
    company: 'MobileFirst',
    location: 'Americas',
    salary: '$85k - $115k',
    skills: ['Swift', 'Objective-C', 'UIKit', 'Core Data'],
    timeAgo: '2d',
    isVerified: true,
    type: 'remote',
    category: 'Mobile Development',
    backgroundColor: 'bg-gray-100',
    benefits: ['Health Insurance', '401k', 'Stock Options', 'Remote Work']
  },
  {
    id: '10',
    title: 'UX Researcher',
    company: 'UserLab',
    location: 'Europe',
    salary: '$70k - $95k',
    skills: ['User Research', 'Usability Testing', 'Analytics'],
    timeAgo: '3d',
    type: 'remote',
    category: 'Research',
    backgroundColor: 'bg-red-100',
    benefits: ['Health Insurance', 'Flexible Hours', 'Remote Work', 'Learning Budget']
  }
];

export const getJobs = (): Job[] => {
  return mockJobs;
};

export const getFeaturedJobs = (): Job[] => {
  return mockJobs.filter(job => job.isFeatured);
};

export const getJobsByCategory = (category: string): Job[] => {
  return mockJobs.filter(job => job.category === category);
};

/**
 * 搜索工作岗位
 */
export const searchJobsWithFilters = (filters: SearchFilters): SearchResult => {
  return searchJobs(mockJobs, filters);
};

/**
 * 获取过滤选项
 */
export const getJobFilterOptions = (): FilterOptions => {
  return getFilterOptions(mockJobs);
};

/**
 * 根据ID获取工作详情
 */
export const getJobById = (id: string): Job | undefined => {
  return mockJobs.find(job => job.id === id);
};

/**
 * 获取热门搜索关键词
 */
export const getPopularSearchTerms = (): string[] => {
  return [
    'React',
    'Node.js',
    'Python',
    'Senior',
    'Manager',
    'Designer',
    'Developer',
    'Engineer'
  ];
};

/**
 * 获取热门技能
 */
export const getPopularSkills = (): string[] => {
  const allSkills = mockJobs.flatMap(job => job.skills);
  const skillCounts = allSkills.reduce((acc, skill) => {
    acc[skill] = (acc[skill] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(skillCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([skill]) => skill);
};