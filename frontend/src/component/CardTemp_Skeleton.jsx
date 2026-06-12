export default function CardTemp_Skeleton() {
  return (
    <div
      className="flex flex-col overflow-hidden"
      style={{
        backgroundColor: 'var(--rw-surface)',
        border: '1px solid var(--rw-border)',
        borderRadius: '1rem',
      }}
    >
      <div className="animate-pulse" style={{ aspectRatio: '4/5', backgroundColor: 'var(--rw-elevated)' }} />
      <div className="p-4 flex flex-col gap-3">
        <div className="h-5 rounded animate-pulse" style={{ backgroundColor: 'var(--rw-elevated)', width: '72%' }} />
        <div className="h-3 rounded animate-pulse" style={{ backgroundColor: 'var(--rw-elevated)', width: '50%' }} />
        <div className="flex justify-between mt-1">
          <div className="h-4 rounded animate-pulse" style={{ backgroundColor: 'var(--rw-elevated)', width: '28%' }} />
          <div className="h-7 rounded animate-pulse" style={{ backgroundColor: 'var(--rw-elevated)', width: '22%' }} />
        </div>
      </div>
    </div>
  );
}
