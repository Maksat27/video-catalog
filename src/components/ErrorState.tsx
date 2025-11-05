'use client';
export default function ErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="rounded-xl border p-6 text-center">
      <p className="mb-3">Что-то пошло не так. Попробуйте ещё раз.</p>
      <button
        onClick={onRetry}
        className="rounded-lg bg-indigo-600 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Повторить
      </button>
    </div>
  );
}
