import { Badge } from "@/components/ui/badge";
import { Job } from "@/types/job";
import { cn } from "@/lib/utils";

interface JobCardProps {
  job: Job;
  className?: string;
}

export function JobCard({ job, className }: JobCardProps) {
  const cardBgClass = job.isFeatured 
    ? "bg-remoteok-red text-white" 
    : job.backgroundColor || "bg-white border";

  const textColorClass = job.isFeatured ? "text-white" : "text-gray-900";
  const subtextColorClass = job.isFeatured ? "text-red-100" : "text-gray-700";
  const timeColorClass = job.isFeatured ? "text-red-100" : "text-gray-500";

  return (
    <div className={cn(
      "rounded-lg p-6 job-card cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1",
      cardBgClass,
      className
    )}>
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <div className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center text-2xl",
            job.isFeatured ? "bg-white text-remoteok-red" : "bg-gray-100 text-gray-600"
          )}>
            {job.companyLogo || job.company.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <h3 className={cn("text-xl font-bold", textColorClass)}>
                {job.title}
              </h3>
              {job.isVerified && (
                <Badge className="bg-green-500 text-white text-xs">
                  VERIFIED
                </Badge>
              )}
            </div>
            <p className={subtextColorClass}>{job.company}</p>
            <div className="flex items-center space-x-4 mt-2 text-sm">
              <span className={subtextColorClass}>
                🌍 {job.location}
              </span>
              <span className={subtextColorClass}>
                💰 {job.salary}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {job.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant={job.isFeatured ? "outline" : "secondary"}
                  className={cn(
                    "text-xs",
                    job.isFeatured 
                      ? "bg-white text-remoteok-red border-white" 
                      : "bg-gray-200 text-gray-700"
                  )}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="text-right">
          <span className={cn("text-sm", timeColorClass)}>
            {job.timeAgo}
          </span>
        </div>
      </div>
    </div>
  );
}