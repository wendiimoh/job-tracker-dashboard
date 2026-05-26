type Props = {
  title: string;
  count: number;
};

const StatsCard = ({ title, count }: Props) => {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "16px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        width: "220px",
      }}
    >
      <h3
        style={{
          color: "#64748b"
        }}
      >
        {title}
      </h3>

      <h1
        style={{
          fontSize: "32px",
          marginTop: "10px"
        }}
      >
        {count}
      </h1>
    </div>
  );
};

export default StatsCard;