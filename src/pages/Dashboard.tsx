import AddJob from "../components/AddJob";
import JobCard from "../components/JobCard";
import StatsCard from "../components/StatsCard";
import Navbar from "../components/Navbar";

type Job = {
  id: number;
  company: string;
  position: string;
  status: string;
};

type Props = {
  jobs: Job[];
  search: string;
  setSearch: (value: string) => void;
  addJob: (job: any) => void;
  deleteJob: (id: number) => void;
  changeStatus: (id: number) => void;
};

const Dashboard = ({
  jobs,
  search,
  setSearch,
  addJob,
  deleteJob,
  changeStatus,
}: Props) => {
  const appliedCount = jobs.filter(
    (job) => job.status === "Applied"
  ).length;

  const interviewCount = jobs.filter(
    (job) => job.status === "Interview"
  ).length;

  const rejectedCount = jobs.filter(
    (job) => job.status === "Rejected"
  ).length;

  return (
    <div
      style={{
        flex: 1,
        padding: "30px",
        background: "#f1f5f9",
        minHeight: "100vh",
      }}
    >
     <Navbar title="Dashboard"/>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <StatsCard title="Applied" count={appliedCount} />
        <StatsCard title="Interview" count={interviewCount} />
        <StatsCard title="Rejected" count={rejectedCount} />
      </div>

      <AddJob onAddJob={addJob} />

      <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {jobs.map((job) => (
        <JobCard
          key={job.id}
          id={job.id}
          company={job.company}
          position={job.position}
          status={job.status}
          onDelete={() => deleteJob(job.id)}
          onStatusChange={changeStatus}
        />
      ))}
    </div>
  );
};

export default Dashboard;