'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchVideos } from '@/lib/api';
import { Video } from '@/lib/types';

export default function Catalog() {
  const { data, isLoading, isError } = useQuery<Video[]>({
    queryKey: ['videos'],
    queryFn: fetchVideos,
  });

  if (isLoading) return <p>Loading videos...</p>;
  if (isError) return <p>Failed to load videos 😔</p>;

  return (
    <ul className="p-6 space-y-2">
      {data?.map((v) => (
        <li key={v.id} className="border-b border-gray-200 pb-2">
          <strong>{v.title}</strong> — {v.author}
        </li>
      ))}
    </ul>
  );
}
