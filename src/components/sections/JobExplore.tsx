import React, { useEffect, useState } from "react";
import JobCard from "../common/JobCard";
import Button from "../ui/Button";
import axios from "axios";
import { type Job } from "../../services/seed/jobsSeed";
import SimpleJobSkeleton from "../common/JobSkeleton";

const JobExplore: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleJobs, setVisibleJobs] = useState(3);
  const [selectedType, setSelectedType] = useState("All");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // console.log(
        //   "JobExplore: Making request to /jobs?status=active&pageSize=6"
        // );
        const response = await axios.get("/jobs?status=active&pageSize=6");
        // console.log("JobExplore: Response received:", response);
        // console.log("JobExplore: Response data:", response.data);

        setJobs(response.data.data);
      } catch (error) {
        console.error("JobExplore: Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  console.log(jobs);

  const jobTypes = ["All", "Full-time", "Remote", "Part-time", "Contract"];

  const filteredJobs =
    selectedType === "All"
      ? jobs
      : jobs.filter((job) => job.jobType === selectedType);

  const displayedJobs =
    filteredJobs == undefined ? [] : filteredJobs.slice(0, visibleJobs);

  const loadMore = () => {
    setVisibleJobs((prev) => Math.min(prev + 3, filteredJobs.length));
  };

  if (loading) {
    return <SimpleJobSkeleton />;
  }

  return (
  <section id="jobs" className="py-16 lg:py-24 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide mb-4 block">
            // Job Opportunities //
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6">
            Discover Your Next Opportunity
          </h2>
          <p className="text-lg text-purple-600 max-w-2xl mx-auto">
            Browse curated roles from leading organizations and take the next step in your career journey.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {jobTypes.map((type) => (
            <button
              key={type}
              onClick={() => {
                setSelectedType(type);
                setVisibleJobs(3);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedType === type
                  ? "bg-purple-600 text-white shadow-md"
                  : "bg-purple-100 text-purple-700 hover:bg-purple-200"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {displayedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* Load More Button */}
        {visibleJobs < filteredJobs?.length && (
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={loadMore}
              className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
            >
              Load More Jobs
            </Button>
          </div>
        )}

        {/* Empty State */}
        {filteredJobs?.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V8m8 0V6a2 2 0 00-2-2H10a2 2 0 00-2 2v2m8 0v8a2 2 0 01-2 2H10a2 2 0 01-2-2v-8"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-purple-700 mb-2">
              No positions match your search
            </h3>
            <p className="text-purple-500">
              Try different filters or check back soon for new opportunities.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4">
            Take the Leap Toward Your Future
          </h3>
          <p className="text-lg text-purple-600 mb-8 max-w-2xl mx-auto">
            Join a growing community of professionals who’ve unlocked new career paths with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              Browse All Jobs
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-purple-400 text-purple-700 bg-white hover:bg-purple-50">
              Create Job Alert
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobExplore;
