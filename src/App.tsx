import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

type Job = {
  id: number;
  company: string;
  position: string;
  status: string;
};

function App() {
  const [search, setSearch] = useState("");

  const [jobs, setJobs] = useState<Job[]>(() => {
    const savedJobs = localStorage.getItem("jobs");

    return savedJobs
      ? JSON.parse(savedJobs)
      : [
          {
            id: 1,
            company: "Google",
            position: "Frontend Developer",
            status: "Applied",
          },

          {
            id: 2,
            company: "Microsoft",
            position: "React Developer",
            status: "Interview",
          },

          {
            id: 3,
            company: "Netflix",
            position: "UI Engineer",
            status: "Rejected",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem(
      "jobs",
      JSON.stringify(jobs)
    );
  }, [jobs]);

  const addJob = (job: Job) => {
    setJobs([...jobs, job]);
  };

  const deleteJob = (id: number) => {
    setJobs(
      jobs.filter(
        (job) => job.id !== id
      )
    );
  };

  const changeStatus = (id: number) => {
    setJobs(
      jobs.map((job) => {
        if (job.id === id) {
          let newStatus = "Applied";

          if (job.status === "Applied") {
            newStatus = "Interview";
          } else if (
            job.status === "Interview"
          ) {
            newStatus = "Rejected";
          }

          return {
            ...job,
            status: newStatus,
          };
        }

        return job;
      })
    );
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.company
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      job.position
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        display: "flex",
        background: "#e2e8f0",
        minHeight: "100vh",
      }}
    >
      <Sidebar />

      <Dashboard
        jobs={filteredJobs}
        search={search}
        setSearch={setSearch}
        addJob={addJob}
        deleteJob={deleteJob}
        changeStatus={changeStatus}
      />
    </div>
  );
}

export default App;