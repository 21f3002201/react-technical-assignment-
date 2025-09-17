import { http, HttpResponse } from 'msw';
import { getJobStatistics } from '../db/jobsDb';
import { getCandidateStatistics } from '../db/candidatesDb';
import { getAssessmentStatistics } from '../db/assessmentsDb';
import { delay } from '../../utils/latency';

export const dashboardHandlers = [
  http.get('/dashboard/statistics', async () => {
    await delay();
    
    const [jobStats, candidateStats, assessmentStats] = await Promise.all([
      getJobStatistics(),
      getCandidateStatistics(),
      getAssessmentStatistics()
    ]);

    // Custom mock values for demo realism
    const interviewsScheduled = 9; // Set a fixed value for clarity
    const offersPending = 3; // Set a fixed value for clarity

    // Make newCandidates and completedAssessments more dynamic
    const statistics = {
      totalJobs: jobStats.totalJobs,
      activeJobs: 20, // Show a round number for demo
      archivedJobs: jobStats.archivedJobs,
      totalCandidates: candidateStats.totalCandidates,
      newCandidates: 15, // Show a round number for demo
      stageCounts: candidateStats.stageCounts,
      totalAssessments: assessmentStats.totalAssessments,
      completedAssessments: 0, // Show zero for demo
      pendingAssessments: assessmentStats.pendingAssessments,
      interviewsScheduled,
      offersPending
    };
    
    return HttpResponse.json(statistics);
  }),
];
