'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, ExternalLink, CheckCircle } from "lucide-react";
import { Job } from "@/types/job";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedJob?: Job;
}

export function RegisterModal({ isOpen, onClose, selectedJob }: RegisterModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const validateForm = () => {
    const newErrors: typeof errors = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you can add actual registration logic
      console.log('Registration info:', { email, password });
      setIsSuccess(true);
    }
  };

  // Generate application link
  const generateApplicationLink = (job: Job) => {
    // Here you can generate real application links based on actual requirements
    // For now, generating a sample link
    return `https://apply.remoteok.io/job/${job.id}?email=${encodeURIComponent(email)}`;
  };

  const handleClose = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors({});
    setIsSuccess(false);
    onClose();
  };

  const handleApplyAnother = () => {
    setIsSuccess(false);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors({});
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-in fade-in duration-300">
      {/* 背景遮罩 */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300"
        onClick={handleClose}
      />
      
      {/* 弹窗内容 */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6 animate-in slide-in-from-bottom-4 zoom-in-95 duration-300">
        {/* 关闭按钮 */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-1 transition-all duration-200"
        >
          <X size={20} />
        </button>
        
        {/* 标题 */}
        <div className="text-center mb-6">
          {isSuccess ? (
            <>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h2>
              <p className="text-gray-600">Congratulations, your account has been created</p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Account</h2>
              <p className="text-gray-600">Sign up to view job details and apply</p>
            </>
          )}
        </div>
        
        {/* 内容区域 */}
        {isSuccess && selectedJob ? (
          /* 成功状态 - 显示申请链接 */
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
                    {selectedJob.companyLogo || selectedJob.company.charAt(0).toUpperCase()}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{selectedJob.title}</h3>
                  <p className="text-gray-600 text-sm">{selectedJob.company}</p>
                  <p className="text-gray-500 text-sm">{selectedJob.location} · {selectedJob.salary}</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-700 mb-4 font-medium">Your job application link:</p>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4 mb-4">
                <a
                  href={generateApplicationLink(selectedJob)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-remoteok-red hover:bg-remoteok-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  <span>Apply Now</span>
                  <ExternalLink size={18} />
                </a>
              </div>
              <div className="text-xs text-gray-500 bg-gray-50 rounded p-2 font-mono break-all">
                {generateApplicationLink(selectedJob)}
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={handleApplyAnother}
                className="flex-1"
              >
                Apply to Another Job
              </Button>
              <Button
                type="button"
                onClick={handleClose}
                className="flex-1 bg-remoteok-red hover:bg-remoteok-red-600 text-white"
              >
                Done
              </Button>
            </div>
          </div>
        ) : (
          /* 注册表单 */
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className={errors.email ? "border-red-500 focus:border-red-500" : "focus:border-remoteok-red"}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password (at least 6 characters)"
                className={errors.password ? "border-red-500 focus:border-red-500" : "focus:border-remoteok-red"}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className={errors.confirmPassword ? "border-red-500 focus:border-red-500" : "focus:border-remoteok-red"}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-remoteok-red hover:bg-remoteok-red-600 text-white"
              >
                Sign Up
              </Button>
            </div>
          </form>
        )}
        
        {/* Login link - only shown in registration form state */}
        {!isSuccess && (
          <div className="text-center mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Already have an account?
              <button className="text-remoteok-red hover:underline ml-1">
                Sign In
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}