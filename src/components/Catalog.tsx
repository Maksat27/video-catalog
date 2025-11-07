'use client';
import { useQuery } from '@tanstack/react-query';
import { fetchVideos } from '@/lib/api';
import { useFilters } from '@/hooks/useFilters';
import SearchBar from './Searchbar';
import DurationFilter from './DurationFilter';
import VideoGrid from './VideoGrid';
import SkeletonCard from './SkeletonCard';
import ErrorState from './ErrorState';
import EmptyState from './EmptyState';

export default function Catalog() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['videos'],
    queryFn: fetchVideos,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const { q, setQ, bucket, setBucket, filtered } = useFilters(data ?? []);

  return (
    <main className="mx-auto max-w-6xl p-4">
      <h1 className="mb-4 text-2xl font-semibold">Video Catalog</h1>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <SearchBar value={q} onChange={setQ} />
        <DurationFilter value={bucket} onChange={setBucket} />
      </div>

      {isLoading && (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}

      {isError && <ErrorState onRetry={() => refetch()} />}

      {!isLoading && !isError && filtered.length === 0 && (
        <EmptyState
          onReset={() => {
            setQ('');
            setBucket(undefined);
          }}
        />
      )}

      {!isLoading && !isError && filtered.length > 0 && <VideoGrid items={filtered} />}
    </main>
  );
}
