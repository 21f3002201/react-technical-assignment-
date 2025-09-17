import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { initializeJobs } from "./services/db/jobsDb";
import { initializeCandidates } from "./services/db/candidatesDb";
import { initializeAssessments } from "./services/db/assessmentsDb";

const startApp = () => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
};

// Always start MSW (mock API) in all environments
import("./services/mocks/browser")
  .then(({ worker }) => {
    worker
      .start({
        onUnhandledRequest: "warn",
      })
      .then(() => {
        initializeJobs();
        initializeCandidates();
        initializeAssessments();
        startApp();
      })
      .catch((error) => console.error("MSW failed to start:", error));
  })
  .catch((error) => console.error("Failed to import MSW:", error));
