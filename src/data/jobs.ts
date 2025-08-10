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
    backgroundColor: 'bg-blue-100'
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
    backgroundColor: 'bg-purple-100'
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
    backgroundColor: 'bg-green-100'
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
    backgroundColor: 'bg-pink-100'
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
    backgroundColor: 'bg-orange-100'
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
    backgroundColor: 'bg-teal-100'
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
    backgroundColor: 'bg-indigo-100'
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
    backgroundColor: 'bg-yellow-100'
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
    backgroundColor: 'bg-gray-100'
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
    backgroundColor: 'bg-red-100'
  },
  {
    id: '11',
    title: 'Backend Developer',
    company: 'ServerTech',
    location: 'Worldwide',
    salary: '$75k - $105k',
    skills: ['Python', 'Django', 'REST APIs', 'Redis'],
    timeAgo: '3d',
    type: 'remote',
    category: 'Engineering',
    backgroundColor: 'bg-emerald-100'
  },
  {
    id: '12',
    title: 'Sales Development Representative',
    company: 'SalesForce Pro',
    location: 'United States',
    salary: '$50k - $70k + Commission',
    skills: ['Sales', 'CRM', 'Lead Generation', 'Cold Calling'],
    timeAgo: '4d',
    type: 'remote',
    category: 'Sales',
    backgroundColor: 'bg-cyan-100'
  },
  {
    id: '13',
    title: 'Quality Assurance Engineer',
    company: 'TestMasters',
    location: 'Asia Pacific',
    salary: '$55k - $80k',
    skills: ['Automation Testing', 'Selenium', 'Jest', 'Bug Tracking'],
    timeAgo: '5d',
    type: 'remote',
    category: 'QA',
    backgroundColor: 'bg-lime-100'
  },
  {
    id: '14',
    title: 'Project Manager',
    company: 'AgileWorks',
    location: 'Europe',
    salary: '$65k - $90k',
    skills: ['Scrum', 'Jira', 'Agile', 'Team Leadership'],
    timeAgo: '5d',
    isVerified: true,
    isFeatured: true,
    type: 'remote',
    category: 'Management',
    backgroundColor: 'bg-violet-100'
  },
  {
    id: '15',
    title: 'Blockchain Developer',
    company: 'CryptoTech',
    location: 'Worldwide',
    salary: '$100k - $150k',
    skills: ['Solidity', 'Web3.js', 'Smart Contracts', 'Ethereum'],
    timeAgo: '6d',
    type: 'remote',
    category: 'Blockchain',
    backgroundColor: 'bg-amber-100'
  },
  {
    id: '16',
    title: 'Technical Writer',
    company: 'DocuMaster',
    location: 'Americas',
    salary: '$55k - $75k',
    skills: ['Technical Writing', 'API Documentation', 'Markdown'],
    timeAgo: '7d',
    type: 'remote',
    category: 'Documentation',
    backgroundColor: 'bg-slate-100'
  },
  {
    id: '17',
    title: 'Security Engineer',
    company: 'CyberShield',
    location: 'Worldwide',
    salary: '$90k - $130k',
    skills: ['Cybersecurity', 'Penetration Testing', 'OWASP', 'Risk Assessment'],
    timeAgo: '1w',
    isVerified: true,
    type: 'remote',
    category: 'Security',
    backgroundColor: 'bg-rose-100'
  },
  {
    id: '18',
    title: 'Machine Learning Engineer',
    company: 'AI Solutions',
    location: 'Europe',
    salary: '$105k - $145k',
    skills: ['PyTorch', 'Deep Learning', 'MLOps', 'Computer Vision'],
    timeAgo: '1w',
    type: 'remote',
    category: 'AI/ML',
    backgroundColor: 'bg-fuchsia-100'
  },
  {
    id: '19',
    title: 'HR Business Partner',
    company: 'PeopleFirst',
    location: 'United States',
    salary: '$70k - $95k',
    skills: ['HR Strategy', 'Talent Management', 'Employee Relations'],
    timeAgo: '1w',
    type: 'remote',
    category: 'Human Resources',
    backgroundColor: 'bg-sky-100'
  },
  {
    id: '20',
    title: 'Growth Hacker',
    company: 'StartupLab',
    location: 'Worldwide',
    salary: '$60k - $85k',
    skills: ['Growth Marketing', 'A/B Testing', 'Analytics', 'User Acquisition'],
    timeAgo: '2w',
    isFeatured: true,
    type: 'remote',
    category: 'Growth',
    backgroundColor: 'bg-emerald-100'
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