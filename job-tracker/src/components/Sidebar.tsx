const Sidebar = () => {
  return (
    <div
      style={{
        width: "250px",
        background: "#1e293b",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>Job Tracker</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ marginTop: "30px" }}>Dashboard</li>

        <li style={{ marginTop: "20px" }}>Jobs</li>

        <li style={{ marginTop: "20px" }}>Analytics</li>

        <li style={{ marginTop: "20px" }}>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;