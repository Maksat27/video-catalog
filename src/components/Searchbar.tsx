'use client';
import { useDebounce } from '@/hooks/useDebounce';
import { useEffect, useState } from 'react';

export default function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [local, setLocal] = useState(value);
  const debounced = useDebounce(local, 400);
  useEffect(() => onChange(debounced), [debounced, onChange]);
  useEffect(() => setLocal(value), [value]);
  return (
    <label className="block">
      <span className="sr-only">Поиск по названию</span>
      <input
        value={local}
        onChange={(e) => setLocal(e.target.value)}
        placeholder="Поиск по названию…"
        className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </label>
  );
}
