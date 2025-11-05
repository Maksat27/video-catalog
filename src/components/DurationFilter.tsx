'use client';
import type { DurationBucket } from '@/lib/types';

export default function DurationFilter({
  value,
  onChange,
}: {
  value?: DurationBucket;
  onChange: (v?: DurationBucket) => void;
}) {
  const items: { key?: DurationBucket; label: string }[] = [
    { key: undefined, label: 'Все' },
    { key: 'short', label: '< 5 мин' },
    { key: 'medium', label: '5–20 мин' },
    { key: 'long', label: '> 20 мин' },
  ];
  return (
    <div role="radiogroup" aria-label="Фильтр длительности" className="flex gap-2">
      {items.map((it) => (
        <button
          key={String(it.key)}
          role="radio"
          aria-checked={value === it.key}
          onClick={() => onChange(it.key)}
          className={`rounded-full border px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${value === it.key ? 'bg-indigo-600 text-white' : 'bg-white hover:bg-slate-50'}`}
        >
          {it.label}
        </button>
      ))}
    </div>
  );
}
