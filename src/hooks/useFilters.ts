'use client';
import { useMemo, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import type { Video, DurationBucket } from '@/lib/types';

function inBucket(sec: number, b?: DurationBucket) {
  if (!b) return true;
  if (b === 'short') return sec < 5 * 60;
  if (b === 'medium') return sec >= 5 * 60 && sec <= 20 * 60;
  return sec > 20 * 60;
}

export function useFilters(videos: Video[]) {
  const params = useSearchParams();
  const router = useRouter();

  const [q, setQ] = useState<string>(params.get('q') ?? '');
  const [bucket, setBucket] = useState<DurationBucket | undefined>(
    (params.get('d') as any) ?? undefined,
  );

  // sync -> URL (replace, без перезагрузки)
  useEffect(() => {
    const p = new URLSearchParams(params);
    q ? p.set('q', q) : p.delete('q');
    bucket ? p.set('d', bucket) : p.delete('d');
    router.replace('?' + p.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, bucket]);

  const filtered = useMemo(() => {
    const norm = q.trim().toLowerCase();
    return videos
      .filter((v) => (!norm ? true : v.title.toLowerCase().includes(norm)))
      .filter((v) => inBucket(v.durationSec, bucket))
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }, [videos, q, bucket]);

  return { q, setQ, bucket, setBucket, filtered };
}
