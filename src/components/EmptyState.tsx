'use client';
export default function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="rounded-xl border p-6 text-center">
      <p className="mb-3">Ничего не нашлось по текущим фильтрам.</p>
      <button
        onClick={onReset}
        className="rounded-lg bg-slate-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Сбросить фильтры
      </button>
    </div>
  );
}
