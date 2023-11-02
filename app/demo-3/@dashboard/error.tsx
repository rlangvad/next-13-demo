"use client";

const Error = ({}: { error: Error & { digest?: string } }) => {
  return (
    <div className="text-red-400">
      <h3>Failed to fetch dashboard data...</h3>
    </div>
  );
};

export default Error;
