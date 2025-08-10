'use client';

import { useState } from 'react';
import '../styles/dropdown.css';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { JobCard } from "@/components/JobCard";
import { JobSearch } from "@/components/JobSearch";
import { FilterDropdown } from "@/components/FilterDropdown";
import { RegisterModal } from "@/components/RegisterModal";
import { getJobs, getFeaturedJobs, getJobFilterOptions } from "@/data/jobs";
import { Search, MapPin, DollarSign, Heart, Star, Calendar } from "lucide-react";
import { Job, SearchResult, SearchFilters } from "@/types/job";
import { useJobSearch } from "@/hooks/useJobSearch";

export default function Home() {
  const allJobs = getJobs();
  const featuredJobs = getFeaturedJobs();
  const filterOptions = getJobFilterOptions();
  const [searchResults, setSearchResults] = useState<SearchResult | null>(null);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | undefined>(undefined);
  
  // 使用JobSearch Hook管理整体过滤状态
  const {
    searchResult,
    filters,
    updateFilters,
    clearFilters,
    hasActiveFilters,
    isEmpty
  } = useJobSearch();
  
  // 使用hook的搜索结果
  const displayJobs = searchResult.jobs;
  
  // 处理职位卡片点击事件
  const handleJobCardClick = (job: Job) => {
    setSelectedJob(job);
    setIsRegisterModalOpen(true);
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between container py-4 bg-background border-b border-border">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold logo-font">
            <span className="text-foreground">remote</span>
            <span className="text-remoteok-red">OK</span>
          </h1>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="outline" className="hidden md:inline-flex bg-blue-600 text-white border-blue-600 hover:bg-blue-700 text-sm">
            Health Insurance
          </Button>
          <Button className="bg-remoteok-red text-remoteok-red-foreground hover:bg-remoteok-red-600 text-sm md:text-base">
            <span className="hidden md:inline">Post a remote job →</span>
            <span className="md:hidden">Post Job</span>
          </Button>
          <Button variant="outline" className="text-sm md:text-base">Log In</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="relative h-64 md:h-72 lg:h-80 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://ext.same-assets.com/1803094165/821851113.jpeg')"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white container">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-center hero-title animate-fade-in">
            find a <span className="font-black">remote job</span><br />
            work from <span className="font-black">anywhere</span>
          </h2>
          <div className="w-full max-w-2xl">
            <JobSearch 
              onSearchResults={setSearchResults}
              initialFilters={filters}
            />
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="cta-banner container py-6 text-center">
        <p className="text-foreground mb-4">
          📢 Hiring remotely? Reach <span className="font-bold underline">3,900,000+</span> remote workers on the
          <span className="font-bold"> 📍 #1 Remote Job Board</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <Button className="bg-remoteok-red text-remoteok-red-foreground hover:bg-remoteok-red-600">
            Post a remote job →
          </Button>
          <Button variant="outline">Hide this</Button>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-muted-foreground">
          <span className="text-sm font-medium">trusted by</span>
          <img src="https://ext.same-assets.com/1803094165/2636456894.webp" alt="Microsoft" className="h-6 opacity-70 hover:opacity-100 transition-opacity" />
          <img src="https://ext.same-assets.com/1803094165/1863955948.webp" alt="Amazon" className="h-6 opacity-70 hover:opacity-100 transition-opacity" />
          <img src="https://ext.same-assets.com/1803094165/1750519746.webp" alt="Shopify" className="h-6 opacity-70 hover:opacity-100 transition-opacity" />
          <img src="https://ext.same-assets.com/1803094165/63518253.webp" alt="Intercom" className="h-6 opacity-70 hover:opacity-100 transition-opacity" />
          <img src="https://ext.same-assets.com/1803094165/2529836459.webp" alt="IBM" className="h-6 opacity-70 hover:opacity-100 transition-opacity" />
        </div>
      </div>

      {/* Newsletter */}
      <div className="newsletter-banner">
        <div className="container py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-remoteok-teal font-bold">📧</span>
              </div>
              <span className="text-white font-medium">Nomad Insurance by SafetyWing</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span className="text-white text-sm lg:text-base">Get new remote jobs sent to</span>
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Type your email..."
                  className="bg-white text-foreground w-64"
                />
                <Button className="bg-remoteok-red text-remoteok-red-foreground hover:bg-remoteok-red-600">Subscribe</Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">✕</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-muted/50 border-b border-border filter-section">
        <div className="container py-4">
          <div className="flex items-center gap-3 md:gap-6 overflow-x-auto pb-2 filter-row">
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
                <span className="text-background text-sm">🔧</span>
              </div>
              <FilterDropdown
                title="🔍 Search"
                options={filterOptions.categories.map(cat => ({ 
                  value: cat, 
                  label: cat,
                  count: allJobs.filter(job => job.category === cat).length
                }))}
                selectedValues={filters.category ? [filters.category] : []}
                onSelectionChange={(values) => updateFilters({ category: values[0] || undefined })}
                multiSelect={false}
              />
            </div>
            <FilterDropdown
              title="📍 Location"
              options={filterOptions.locations.map(loc => ({ 
                value: loc, 
                label: loc,
                count: allJobs.filter(job => job.location === loc).length
              }))}
              selectedValues={filters.location ? [filters.location] : []}
              onSelectionChange={(values) => updateFilters({ location: values[0] || undefined })}
              multiSelect={false}
            />
            <FilterDropdown
              title="💰 Salary"
              salaryOptions={filterOptions.salaryRanges}
              selectedSalaryRange={filters.minSalary !== undefined && filters.maxSalary !== undefined ? 
                { min: filters.minSalary, max: filters.maxSalary } : undefined}
              onSalaryChange={(range) => updateFilters({ 
                minSalary: range?.min, 
                maxSalary: range?.max 
              })}
            />
            <FilterDropdown
              title="🎁 Benefits"
              options={filterOptions.benefits.map(benefit => ({ 
                value: benefit, 
                label: benefit,
                count: allJobs.filter(job => job.benefits?.includes(benefit)).length
              }))}
              selectedValues={filters.benefits || []}
              onSelectionChange={(values) => updateFilters({ benefits: values })}
              multiSelect={true}
            />
            <div className="ml-auto flex-shrink-0">
              <Button variant="ghost" className="text-foreground text-sm md:text-base whitespace-nowrap">
                📊 Sort by
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="outline" className="text-xs md:text-sm hover:bg-primary hover:text-primary-foreground transition-colors">👨‍💻 Engineer</Badge>
            <Badge variant="outline" className="text-xs md:text-sm hover:bg-primary hover:text-primary-foreground transition-colors">👨‍💼 Executive</Badge>
            <Badge variant="outline" className="text-xs md:text-sm hover:bg-primary hover:text-primary-foreground transition-colors">👨‍🎓 Senior</Badge>
            <Badge variant="outline" className="text-xs md:text-sm hover:bg-primary hover:text-primary-foreground transition-colors">👨‍💻 Developer</Badge>
            <Badge variant="outline" className="text-xs md:text-sm hover:bg-primary hover:text-primary-foreground transition-colors">💰 Finance</Badge>
            <Badge variant="outline" className="text-xs md:text-sm hover:bg-primary hover:text-primary-foreground transition-colors">⚙️ Sys Admin</Badge>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="container py-6">
        {/* Nomad Insurance Ad */}
        <div className="bg-remoteok-teal rounded-lg p-6 mb-6 text-remoteok-teal-foreground shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-remoteok-teal text-xl">🛡️</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Nomad Insurance by SafetyWing</h3>
                <p className="text-white/90 text-sm">Global health coverage for remote workers and nomads</p>
              </div>
            </div>
            <Button className="bg-white text-remoteok-teal hover:bg-white/90 whitespace-nowrap">
              Sign up today
            </Button>
          </div>
        </div>

        {/* Job Cards */}
        <div className="space-y-4">
          {displayJobs.length > 0 ? (
            displayJobs.map((job) => (
              <JobCard 
                key={job.id} 
                job={job} 
                onClick={() => handleJobCardClick(job)}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No matching jobs found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search criteria or filters</p>
              <Button 
                variant="outline"
                onClick={clearFilters}
              >
                Show all jobs
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {/* 注册弹窗 */}
      <RegisterModal 
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        selectedJob={selectedJob}
      />
    </div>
  );
}
