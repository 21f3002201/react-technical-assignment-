## TalentFlow – Mini Hiring Platform

A modern React + TypeScript application for managing jobs, candidates, and assessments. All data is stored locally using IndexedDB (Dexie). Artificial latency and error rates are injected for realistic network simulation.

---

### Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start development server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```

---

### Architecture
- **Frontend:** React, TypeScript, Vite, TailwindCSS
- **State & Data:** IndexedDB via Dexie for all persistence
- **Mock API Layer:** MSW (Mock Service Worker) simulates network requests
- **Seed Data:**
  - 35 jobs (active/archived)
  - 1200 candidates, randomly assigned
  - 7 assessments, each with multiple questions
- **Latency/Error Simulation:**
  - Artificial latency (200–1200ms)
  - 5–10% error rate on write endpoints
- **State Restoration:**
  - On refresh, app restores state from IndexedDB

---

### Technical Decisions
- **Local Persistence:** No backend; all data is local for privacy and speed
- **Network Simulation:** MSW used for realistic API experience
- **Scalable Structure:** Modular codebase for easy feature extension
- **Error Handling:** Simulated errors for robust UI testing

---

### Known Issues
- Data is not shared across devices (local only)
- Refresh restores state, but clearing browser storage will reset data
- Error simulation may occasionally block writes (intended for realism)

---

### Links
- **GitHub:** _To be added_
- **Deployment:** _To be added_