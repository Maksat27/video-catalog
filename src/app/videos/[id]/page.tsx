import { fetchVideos } from '@/lib/api';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { formatDuration } from '@/lib/format';

export default async function VideoPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params; // ✅ wait for the promise
  const list = await fetchVideos();
  const v = list.find((x) => x.id === id);

  if (!v) return notFound();

  return (
    <div className="mx-auto max-w-3xl p-4">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl">
        <Image src={v.thumbnail} alt={v.title} fill className="object-cover" />
      </div>
      <h1 className="mt-4 text-2xl font-bold">{v.title}</h1>
      <p className="text-slate-600">{v.author}</p>
      <p className="mt-2 text-sm">
        {formatDuration(v.durationSec)} • {new Date(v.publishedAt).toISOString().slice(0, 10)}
      </p>
    </div>
  );
}
