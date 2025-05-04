'use client';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function FilterError({ error, reset }: ErrorProps) {
  return (
    <div className="p-4 text-red-600">
      <h2>No news for this month</h2>
      <p>{error.message}</p>
      
    </div>
  );
}
