'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { SearchFilters, SearchResult, FilterOptions, Job } from '@/types/job';
import { searchJobsWithFilters, getJobFilterOptions } from '@/data/jobs';

export interface UseJobSearchReturn {
  // 搜索状态
  searchResult: SearchResult;
  filters: SearchFilters;
  filterOptions: FilterOptions;
  isLoading: boolean;
  
  // 搜索操作
  updateFilters: (newFilters: Partial<SearchFilters>) => void;
  clearFilters: () => void;
  setSearchQuery: (query: string) => void;
  
  // 便利方法
  hasActiveFilters: boolean;
  isEmpty: boolean;
}

const defaultFilters: SearchFilters = {
  query: '',
  location: '',
  category: '',
  skills: [],
  type: undefined,
  isVerified: undefined,
  isFeatured: undefined,
};

export function useJobSearch(initialFilters: SearchFilters = {}): UseJobSearchReturn {
  const [filters, setFilters] = useState<SearchFilters>({ 
    ...defaultFilters, 
    ...initialFilters 
  });
  const [isLoading, setIsLoading] = useState(false);
  
  // 获取过滤选项
  const filterOptions = useMemo(() => getJobFilterOptions(), []);
  
  // 执行搜索
  const searchResult = useMemo(() => {
    setIsLoading(true);
    try {
      return searchJobsWithFilters(filters);
    } finally {
      // 模拟异步搜索的loading状态
      setTimeout(() => setIsLoading(false), 100);
    }
  }, [filters]);

  // 更新过滤器
  const updateFilters = useCallback((newFilters: Partial<SearchFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  // 清空过滤器
  const clearFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  // 设置搜索查询
  const setSearchQuery = useCallback((query: string) => {
    setFilters(prev => ({ ...prev, query }));
  }, []);

  // 检查是否有活跃的过滤器
  const hasActiveFilters = useMemo(() => {
    return !!(
      filters.query ||
      filters.location ||
      filters.category ||
      (filters.skills && filters.skills.length > 0) ||
      filters.type ||
      filters.isVerified ||
      filters.isFeatured ||
      filters.minSalary ||
      filters.maxSalary
    );
  }, [filters]);

  // 检查是否为空结果
  const isEmpty = useMemo(() => {
    return searchResult.jobs.length === 0;
  }, [searchResult.jobs.length]);

  return {
    searchResult,
    filters,
    filterOptions,
    isLoading,
    updateFilters,
    clearFilters,
    setSearchQuery,
    hasActiveFilters,
    isEmpty,
  };
}

// 防抖钩子，用于搜索输入
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// 搜索建议钩子
export function useSearchSuggestions(query: string, jobs: Job[]) {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (!query || query.length < 2) {
      setSuggestions([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const titleSuggestions = jobs
      .map(job => job.title)
      .filter(title => title.toLowerCase().includes(lowerQuery))
      .slice(0, 3);

    const companySuggestions = jobs
      .map(job => job.company)
      .filter(company => company.toLowerCase().includes(lowerQuery))
      .slice(0, 3);

    const skillSuggestions = jobs
      .flatMap(job => job.skills)
      .filter(skill => skill.toLowerCase().includes(lowerQuery))
      .slice(0, 4);

    const allSuggestions = [
      ...new Set([...titleSuggestions, ...companySuggestions, ...skillSuggestions])
    ].slice(0, 8);

    setSuggestions(allSuggestions);
  }, [query, jobs]);

  return suggestions;
}