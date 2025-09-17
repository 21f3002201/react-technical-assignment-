import React from "react";
import type { Job } from "../../services/seed/jobsSeed";
import Card from "../ui/Card";

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Full-time":
        return (
          <svg className="w-5 h-5 text-emerald-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9V2a1 1 0 011-1h10a1 1 0 011 1v7" /></svg>
        );
      case "Remote":
        return (
          <svg className="w-5 h-5 text-purple-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /></svg>
        );
      case "Part-time":
        return (
          <svg className="w-5 h-5 text-yellow-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" /></svg>
        );
      case "Contract":
        return (
          <svg className="w-5 h-5 text-purple-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a5 5 0 00-10 0v2" /></svg>
        );
      default:
        return null;
    }
  };

  const getCompanyInitial = (company: string) => {
    return company.charAt(0).toUpperCase();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (diffInDays === 0) return "Today";
    if (diffInDays === 1) return "1 day ago";
    return `${diffInDays} days ago`;
  };

  return (
    <Card className="hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 border-2 border-transparent hover:border-purple-400 cursor-pointer group relative">
      {/* Status Badge */}
      <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-700 shadow-sm border border-purple-200 z-10">
        {job.status}
      </span>
      <div className="flex items-start space-x-4">
        {/* Company Avatar */}
        <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
          <span className="text-white font-bold text-xl">
            {getCompanyInitial(job.company)}
          </span>
        </div>

        {/* Job Details */}
        <div className="flex-grow min-w-0">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center">
              {getTypeIcon(job.jobType)}
              <h3 className="font-semibold text-purple-700 text-lg group-hover:text-purple-500 transition-colors">
                {job.title}
              </h3>
            </div>
            <div className="text-right">
              <p className="font-semibold text-purple-700">{job.salary}</p>
              <p className="text-purple-400 text-xs">
                {formatDate(job.createdAt.toString())}
              </p>
            </div>
          </div>

          <p className="text-purple-500 text-sm mb-3 line-clamp-2">
            {job.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-purple-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
              </svg>
              <span>{job.location}</span>
            </div>

            <div className="flex items-center space-x-2">
              {job.tags.slice(0, 2).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default JobCard;
