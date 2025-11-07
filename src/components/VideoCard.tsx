import Image from 'next/image';
import Link from 'next/link';
import { formatDuration } from '@/lib/format';
import type { Video } from '@/lib/types';

export default function VideoCard({ v }: { v: Video }) {
  return (
    <Link
      href={`/videos/${v.id}`}
      className="group block rounded-xl border shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      <div className="relative aspect-video overflow-hidden rounded-t-xl bg-slate-100">
        <Image
          src={v.thumbnail}
          alt={v.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-3">
        <h3 className="mb-1 line-clamp-2 text-sm font-semibold">{v.title}</h3>
        <p className="text-xs text-slate-600">{v.author}</p>
        <div className="mt-2 flex items-center justify-between text-xs text-slate-700">
          <span>{formatDuration(v.durationSec)}</span>
          <time dateTime={v.publishedAt}>{new Date(v.publishedAt).toISOString().slice(0, 10)}</time>
        </div>
      </div>
    </Link>
  );
}
