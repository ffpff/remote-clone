'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, X, MapPin, Briefcase, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useJobSearch, useDebounce, useSearchSuggestions } from '@/hooks/useJobSearch';
import { SearchFilters, SearchResult } from '@/types/job';
import { getJobs } from '@/data/jobs';

interface JobSearchProps {
  onSearchResults?: (results: SearchResult) => void;
  initialFilters?: SearchFilters;
}

export function JobSearch({ onSearchResults, initialFilters }: JobSearchProps) {
  const [searchInput, setSearchInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const debouncedSearch = useDebounce(searchInput, 300);
  const searchRef = useRef<HTMLDivElement>(null);

  const {
    searchResult,
    filters,
    filterOptions,
    updateFilters,
    clearFilters,
    hasActiveFilters,
    isEmpty
  } = useJobSearch(initialFilters);

  const suggestions = useSearchSuggestions(searchInput, getJobs());

  // 当搜索输入改变时更新过滤器
  useEffect(() => {
    updateFilters({ query: debouncedSearch });
  }, [debouncedSearch, updateFilters]);

  // 将搜索结果传递给父组件
  useEffect(() => {
    onSearchResults?.(searchResult);
  }, [searchResult, onSearchResults]);

  // 点击外部关闭建议
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSuggestionClick = (suggestion: string) => {
    setSearchInput(suggestion);
    setShowSuggestions(false);
  };

  const handleLocationFilter = (location: string) => {
    updateFilters({ location: location === filters.location ? '' : location });
  };

  const handleCategoryFilter = (category: string) => {
    updateFilters({ category: category === filters.category ? '' : category });
  };

  const handleSkillFilter = (skill: string) => {
    const currentSkills = filters.skills || [];
    const newSkills = currentSkills.includes(skill)
      ? currentSkills.filter(s => s !== skill)
      : [...currentSkills, skill];
    updateFilters({ skills: newSkills });
  };

  return (
    <div className="space-y-4">
      {/* 主搜索框 */}
      <div className="relative" ref={searchRef}>
        <div className="flex items-center bg-white rounded-full px-4 py-3 shadow-lg border border-gray-200">
          <Search className="text-muted-foreground mr-3" size={20} />
          <Input
            placeholder="Search jobs, companies, skills..."
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            className="border-0 text-base text-foreground placeholder:text-muted-foreground focus-visible:ring-0 bg-transparent flex-1"
          />
          {searchInput && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSearchInput('');
                updateFilters({ query: '' });
              }}
              className="p-1"
            >
              <X size={16} />
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className={`ml-2 ${showFilters ? 'bg-gray-100' : ''}`}
          >
            <Filter size={16} />
          </Button>
        </div>

        {/* 搜索建议 */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-[9999] max-h-60 overflow-y-auto">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full text-left px-4 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
              >
                <div className="flex items-center">
                  <Search size={14} className="text-gray-400 mr-2" />
                  <span>{suggestion}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 过滤器面板 */}
      {showFilters && (
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 space-y-4">
          {/* 地点过滤 */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
              <MapPin size={16} className="mr-1" />
              Location
            </label>
            <div className="flex flex-wrap gap-2">
              {filterOptions.locations.slice(0, 8).map(location => (
                <Badge
                  key={location}
                  variant={filters.location === location ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                  onClick={() => handleLocationFilter(location)}
                >
                  {location}
                </Badge>
              ))}
            </div>
          </div>

          {/* 分类过滤 */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
              <Briefcase size={16} className="mr-1" />
              Category
            </label>
            <div className="flex flex-wrap gap-2">
              {filterOptions.categories.slice(0, 10).map(category => (
                <Badge
                  key={category}
                  variant={filters.category === category ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                  onClick={() => handleCategoryFilter(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* 热门技能 */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2">Popular Skills</label>
            <div className="flex flex-wrap gap-2">
              {filterOptions.skills.slice(0, 12).map(skill => (
                <Badge
                  key={skill}
                  variant={(filters.skills || []).includes(skill) ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                  onClick={() => handleSkillFilter(skill)}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* 其他过滤选项 */}
          <div className="flex flex-wrap gap-4 pt-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.isVerified === true}
                onChange={(e) => updateFilters({ isVerified: e.target.checked ? true : undefined })}
                className="rounded"
              />
              <span className="text-sm">Verified companies only</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.isFeatured === true}
                onChange={(e) => updateFilters({ isFeatured: e.target.checked ? true : undefined })}
                className="rounded"
              />
              <span className="text-sm">Featured jobs</span>
            </label>
          </div>
        </div>
      )}

      {/* 活跃过滤器显示 */}
      {hasActiveFilters && (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm text-gray-600">Active filters:</span>
          {filters.query && (
            <Badge variant="secondary" className="gap-1">
              Search: {filters.query}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  updateFilters({ query: '' });
                }}
                className="cursor-pointer hover:bg-gray-200 rounded-full p-0.5"
                type="button"
              >
                <X size={14} />
              </button>
            </Badge>
          )}
          {filters.location && (
            <Badge variant="secondary" className="gap-1">
              Location: {filters.location}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  updateFilters({ location: '' });
                }}
                className="cursor-pointer hover:bg-gray-200 rounded-full p-0.5"
                type="button"
              >
                <X size={14} />
              </button>
            </Badge>
          )}
          {filters.category && (
            <Badge variant="secondary" className="gap-1">
              Category: {filters.category}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  updateFilters({ category: '' });
                }}
                className="cursor-pointer hover:bg-gray-200 rounded-full p-0.5"
                type="button"
              >
                <X size={14} />
              </button>
            </Badge>
          )}
          {(filters.skills || []).map(skill => (
            <Badge key={skill} variant="secondary" className="gap-1">
              Skill: {skill}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSkillFilter(skill);
                }}
                className="cursor-pointer hover:bg-gray-200 rounded-full p-0.5"
                type="button"
              >
                <X size={14} />
              </button>
            </Badge>
          ))}
          <Button variant="outline" size="sm" onClick={clearFilters}>
            Clear all filters
          </Button>
        </div>
      )}

      {/* 搜索结果统计 */}
      <div className="text-sm text-gray-600">
        {isEmpty ? (
          <span>No matching jobs found</span>
        ) : (
          <span>
            Found <span className="font-medium">{searchResult.filteredCount}</span> jobs
            {searchResult.filteredCount !== searchResult.totalCount && (
              <span> (of {searchResult.totalCount} total)</span>
            )}
          </span>
        )}
      </div>
    </div>
  );
}