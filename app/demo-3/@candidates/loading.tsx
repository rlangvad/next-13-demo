import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="mb-4 flex space-x-6">
      <Skeleton className="h-48 w-48 rounded" />
      <Skeleton className="h-48 w-48 rounded" />
      <Skeleton className="h-48 w-48 rounded" />
      <Skeleton className="h-48 w-48 rounded" />
      <Skeleton className="h-48 w-48 rounded" />
    </div>
  );
};

export default Loading;
