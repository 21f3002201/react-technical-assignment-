import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const HrDashboard = () => {
  const navigate = useNavigate();
  const [statistics, setStatistics] = useState<any>({
    totalJobs: 0,
    activeJobs: 0,
    archivedJobs: 0,
    totalCandidates: 0,
    newCandidates: 0,
    stageCounts: {},
    totalAssessments: 0,
    completedAssessments: 0,
    pendingAssessments: 0,
    interviewsScheduled: 0,
    offersPending: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get("/dashboard/statistics");
        setStatistics(response.data);
      } catch (error) {
        console.error("Error fetching dashboard statistics:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStatistics();
  }, []);

  const StatCard = ({
    title,
    value,
    subtitle,
    icon,
  // iconColor,
  // bgColor,
    trend,
    extraInfo,
  }: {
    title: string;
    value: string | number;
    subtitle: string;
    icon: React.ReactNode;
    trend?: string;
    extraInfo?: React.ReactNode;
  }) => (
  <div className="bg-white rounded-xl shadow-lg border border-purple-200 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className={`p-3 bg-purple-100 rounded-xl`}>
            <div className={`w-6 h-6 text-purple-600`}>{icon}</div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold text-purple-700">{title}</h3>
            <p className="text-sm text-purple-500 mb-1">{subtitle}</p>
            {extraInfo && (
              <div className="mt-2">
                <div className="bg-purple-50 rounded px-2 py-1 text-xs text-purple-700 font-semibold flex items-center gap-1">
                  <svg className="w-3 h-3 text-purple-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2" /></svg>
                  {extraInfo}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-purple-700">{value}</div>
          {trend && <div className="text-sm text-purple-500">{trend}</div>}
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            HR Dashboard
          </h1>
          <p className="text-gray-600">
            Welcome to your HR management dashboard
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 animate-pulse"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-3 bg-gray-200 rounded-lg w-12 h-12"></div>
                  <div className="ml-4">
                    <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="h-8 bg-gray-200 rounded w-12 mb-1"></div>
                  <div className="h-3 bg-gray-200 rounded w-16"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-br from-purple-50 to-purple-200 min-h-screen">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-2">HR Dashboard</h1>
        <p className="text-purple-500">Welcome to your HR management dashboard</p>
      </div>

      {/* Statistics Overview */}
  <div className="grid grid-cols-1 gap-6 mb-8">
        <StatCard
          title="Total Jobs"
          value={typeof statistics.totalJobs === 'number' && !isNaN(statistics.totalJobs) ? statistics.totalJobs : 'No data'}
          subtitle={`${typeof statistics.activeJobs === 'number' && !isNaN(statistics.activeJobs) ? statistics.activeJobs : 'No data'} active`}
          extraInfo={`Archived: ${typeof statistics.archivedJobs === 'number' && !isNaN(statistics.archivedJobs) ? statistics.archivedJobs : 'No data'}`}
          icon={
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
              />
            </svg>
          }
          // iconColor and bgColor removed, now styled in StatCard
          trend={`${Math.floor(statistics.totalJobs * 0.125)} this week`}
        />

        <StatCard
          title="Total Candidates"
          value={typeof statistics.totalCandidates === 'number' && !isNaN(statistics.totalCandidates) ? statistics.totalCandidates : 'No data'}
          subtitle={`${typeof statistics.newCandidates === 'number' && !isNaN(statistics.newCandidates) ? statistics.newCandidates : 'No data'} new this week`}
          extraInfo={statistics.stageCounts ? (
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {Object.entries(statistics.stageCounts).map(([stage, count]) => (
                <li key={stage} className="flex items-center gap-1 min-w-[90px]">
                  <svg className="w-3 h-3 text-purple-300" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" /></svg>
                  <span className="font-medium text-gray-600">{stage}:</span>
                  <span className="text-purple-700 font-bold">{String(count)}</span>
                </li>
              ))}
            </ul>
          ) : null}
          icon={
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
              />
            </svg>
          }
          // iconColor and bgColor removed, now styled in StatCard
          trend={`+${statistics.newCandidates} this week`}
        />

        <StatCard
          title="Assessments"
          value={typeof statistics.totalAssessments === 'number' && !isNaN(statistics.totalAssessments) ? statistics.totalAssessments : 'No data'}
          subtitle={`${typeof statistics.completedAssessments === 'number' && !isNaN(statistics.completedAssessments) ? statistics.completedAssessments : 'No data'} completed`}
          extraInfo={`Pending: ${typeof statistics.pendingAssessments === 'number' && !isNaN(statistics.pendingAssessments) ? statistics.pendingAssessments : 'No data'}`}
          icon={
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          }
          // iconColor and bgColor removed, now styled in StatCard
          trend={
            typeof statistics.completedAssessments === 'number' && typeof statistics.totalAssessments === 'number' && statistics.totalAssessments > 0
              ? `${Math.round((statistics.completedAssessments / statistics.totalAssessments) * 100)}% completion`
              : 'No data'
          }
        />

        <StatCard
          title="Interviews"
          value={typeof statistics.interviewsScheduled === 'number' && !isNaN(statistics.interviewsScheduled) ? statistics.interviewsScheduled : 'No data'}
          subtitle={`${typeof statistics.offersPending === 'number' && !isNaN(statistics.offersPending) ? statistics.offersPending : 'No data'} offers pending`}
          icon={
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          }
          // iconColor and bgColor removed, now styled in StatCard
          trend={typeof statistics.offersPending === 'number' && !isNaN(statistics.offersPending) ? `${statistics.offersPending} pending offers` : 'No data'}
        />
      </div>

      {/* Quick Actions */}
  <div className="mb-8">
    <h2 className="text-xl font-semibold text-purple-700 mb-4">Quick Actions</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Candidates Card */}
          <button
            onClick={() => navigate("/dashboard/candidates")}
            className="w-full min-h-[180px] bg-white rounded-2xl shadow-lg border border-purple-200 flex flex-col justify-center items-start px-12 py-8 transition-all duration-200 cursor-pointer hover:shadow-2xl hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-purple-300"
            aria-label="Go to Candidates"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="ml-4 text-2xl font-bold text-purple-700">Candidates</h3>
            </div>
            <p className="text-base text-purple-600 mb-1">Manage your candidate pipeline, review applications, and track progress through all hiring stages.</p>
            <p className="text-sm text-purple-400">Easily filter, shortlist, and communicate with candidates.</p>
          </button>

          {/* Jobs Card */}
          <button
            onClick={() => navigate("/dashboard/jobs")}
            className="w-full min-h-[180px] bg-white rounded-2xl shadow-lg border border-purple-200 flex flex-col justify-center items-start px-12 py-8 transition-all duration-200 cursor-pointer hover:shadow-2xl hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-purple-300"
            aria-label="Go to Jobs"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h3 className="ml-4 text-2xl font-bold text-purple-700">Jobs</h3>
            </div>
            <p className="text-base text-purple-600 mb-1">Create and manage job postings, set requirements, and monitor job performance.</p>
            <p className="text-sm text-purple-400">Organize jobs by type, company, and status for efficient tracking.</p>
          </button>

          {/* Assessments Card */}
          <button
            onClick={() => navigate("/dashboard/assessments")}
            className="w-full min-h-[180px] bg-white rounded-2xl shadow-lg border border-purple-200 flex flex-col justify-center items-start px-12 py-8 transition-all duration-200 cursor-pointer hover:shadow-2xl hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-purple-300"
            aria-label="Go to Assessments"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="ml-4 text-2xl font-bold text-purple-700">Assessments</h3>
            </div>
            <p className="text-base text-purple-600 mb-1">Create candidate assessments, assign tests, and review results to make informed hiring decisions.</p>
            <p className="text-sm text-purple-400">Automate evaluation and track candidate performance easily.</p>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-lg border border-purple-200 p-6">
        <h2 className="text-xl font-semibold text-purple-700 mb-4">
          Recent Activity
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-purple-700">{statistics.newCandidates} new candidates applied this week</span>
            </div>
            <span className="text-xs text-purple-500 px-3 py-1 bg-purple-50 rounded font-medium">This week</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-sm text-purple-700">{statistics.completedAssessments} assessments completed</span>
            </div>
            <span className="text-xs text-purple-500 px-3 py-1 bg-purple-50 rounded font-medium">This week</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
              <span className="text-sm text-purple-700">{statistics.activeJobs} active job postings</span>
            </div>
            <span className="text-xs text-purple-500 px-3 py-1 bg-purple-50 rounded font-medium">Current</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-200 rounded-full"></div>
              <span className="text-sm text-purple-700">{statistics.interviewsScheduled} interviews scheduled</span>
            </div>
            <span className="text-xs text-purple-500 px-3 py-1 bg-purple-50 rounded font-medium">Upcoming</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HrDashboard;
