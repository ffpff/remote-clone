'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, Check, X } from 'lucide-react';

interface DropdownOption {
  value: string;
  label: string;
  count?: number;
}

interface SalaryOption {
  label: string;
  min: number;
  max: number;
}

interface FilterDropdownProps {
  title: string;
  icon?: React.ReactNode;
  options?: DropdownOption[];
  salaryOptions?: SalaryOption[];
  selectedValues?: string[];
  selectedSalaryRange?: { min: number; max: number };
  onSelectionChange?: (values: string[]) => void;
  onSalaryChange?: (range: { min: number; max: number } | null) => void;
  multiSelect?: boolean;
  placeholder?: string;
  maxHeight?: string;
}

export function FilterDropdown({
  title,
  icon,
  options = [],
  salaryOptions = [],
  selectedValues = [],
  selectedSalaryRange,
  onSelectionChange,
  onSalaryChange,
  multiSelect = true,
  placeholder = "Select...",
  maxHeight = "max-h-80"
}: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 关闭下拉菜单当点击外部时
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOptionClick = (value: string) => {
    if (multiSelect) {
      const newValues = selectedValues.includes(value)
        ? selectedValues.filter(v => v !== value)
        : [...selectedValues, value];
      onSelectionChange?.(newValues);
    } else {
      const newValues = selectedValues.includes(value) ? [] : [value];
      onSelectionChange?.(newValues);
      setIsOpen(false);
    }
  };

  const handleSalaryClick = (salaryOption: SalaryOption) => {
    if (selectedSalaryRange && 
        selectedSalaryRange.min === salaryOption.min && 
        selectedSalaryRange.max === salaryOption.max) {
      onSalaryChange?.(null);
    } else {
      onSalaryChange?.({ min: salaryOption.min, max: salaryOption.max });
    }
    setIsOpen(false);
  };

  const clearSelection = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (salaryOptions.length > 0) {
      onSalaryChange?.(null);
    } else {
      onSelectionChange?.([]);
    }
  };

  const hasSelection = selectedValues.length > 0 || (selectedSalaryRange && selectedSalaryRange.min !== undefined && selectedSalaryRange.max !== undefined);

  const getDisplayText = () => {
    if (salaryOptions.length > 0 && selectedSalaryRange) {
      const option = salaryOptions.find(opt => 
        opt.min === selectedSalaryRange.min && opt.max === selectedSalaryRange.max
      );
      return option?.label || `$${selectedSalaryRange.min/1000}k - $${selectedSalaryRange.max/1000}k`;
    }
    
    if (selectedValues.length === 0) {
      return title;
    } else if (selectedValues.length === 1) {
      return selectedValues[0];
    } else {
      return `${selectedValues.length} selected`;
    }
  };

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className={`text-foreground text-sm md:text-base flex-shrink-0 whitespace-nowrap transition-colors ${
          hasSelection ? 'bg-primary/10 hover:bg-primary/20' : 'hover:bg-muted'
        }`}
      >
        {icon && <span className="mr-1">{icon}</span>}
        <span>{getDisplayText()}</span>
        <ChevronDown 
          className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
        {hasSelection && (
          <button
            onClick={clearSelection}
            className="ml-1 p-1 hover:bg-destructive hover:text-destructive-foreground rounded-full transition-colors"
            type="button"
          >
            <X className="h-3 w-3" />
          </button>
        )}
      </Button>

      {isOpen && (
        <div className={`dropdown-menu ${maxHeight}`}>
          {/* 薪资选项 */}
          {salaryOptions.length > 0 && (
            <div className="p-2">
              <div className="text-xs font-medium text-muted-foreground mb-2 px-2">
                Salary Range
              </div>
              {salaryOptions.map((option) => {
                const isSelected = selectedSalaryRange && 
                  selectedSalaryRange.min === option.min && 
                  selectedSalaryRange.max === option.max;
                
                return (
                  <button
                    key={`${option.min}-${option.max}`}
                    onClick={() => handleSalaryClick(option)}
                    className={`w-full text-left px-3 py-2 rounded hover:bg-muted transition-colors flex items-center justify-between ${
                      isSelected ? 'bg-primary/10 text-primary' : ''
                    }`}
                  >
                    <span>{option.label}</span>
                    {isSelected && <Check className="h-4 w-4" />}
                  </button>
                );
              })}
            </div>
          )}

          {/* 普通选项 */}
          {options.length > 0 && (
            <div className="p-2">
              {options.map((option) => {
                const isSelected = selectedValues.includes(option.value);
                
                return (
                  <button
                    key={option.value}
                    onClick={() => handleOptionClick(option.value)}
                    className={`w-full text-left px-3 py-2 rounded hover:bg-muted transition-colors flex items-center justify-between ${
                      isSelected ? 'bg-primary/10 text-primary' : ''
                    }`}
                  >
                    <span className="flex items-center">
                      <span>{option.label}</span>
                      {option.count !== undefined && (
                        <span className="ml-2 text-xs text-muted-foreground">
                          ({option.count})
                        </span>
                      )}
                    </span>
                    {isSelected && <Check className="h-4 w-4" />}
                  </button>
                );
              })}
            </div>
          )}

          {options.length === 0 && salaryOptions.length === 0 && (
            <div className="p-4 text-center text-muted-foreground text-sm">
              No options available
            </div>
          )}
        </div>
      )}
    </div>
  );
}