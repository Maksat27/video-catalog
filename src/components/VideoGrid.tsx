import type { Video } from '@/lib/types';
import VideoCard from './VideoCard';

export default function VideoGrid({ items }: { items: Video[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {items.map((v) => (
        <VideoCard key={v.id} v={v} />
      ))}
    </div>
  );
}
