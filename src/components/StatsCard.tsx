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
        borderRadius: "10px",
        width: "200px",
      }}
    >
      <h3>{title}</h3>
      <h1>{count}</h1>
    </div>
  );
};

export default StatsCard;