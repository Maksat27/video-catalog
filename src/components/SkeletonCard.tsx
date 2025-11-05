export default function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-xl border">
      <div className="aspect-video rounded-t-xl bg-slate-200" />
      <div className="space-y-2 p-3">
        <div className="h-4 w-3/4 rounded bg-slate-200" />
        <div className="h-3 w-1/3 rounded bg-slate-200" />
        <div className="h-3 w-1/2 rounded bg-slate-200" />
      </div>
    </div>
  );
}
