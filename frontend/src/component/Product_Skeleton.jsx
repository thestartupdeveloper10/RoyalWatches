export default function Product_Skeleton() {
  return (
    <div style={{ backgroundColor: "var(--rw-bg)" }}>
      <div className="rw-container pt-6 pb-2">
        <div
          className="h-4 w-16 rounded animate-pulse"
          style={{ backgroundColor: "var(--rw-elevated)" }}
        />
      </div>
      <div className="rw-container py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Image placeholder */}
          <div
            className="lg:w-1/2 flex-shrink-0 rounded-2xl animate-pulse"
            style={{
              aspectRatio: "4/5",
              backgroundColor: "var(--rw-surface)",
              border: "1px solid var(--rw-border)",
            }}
          />
          {/* Info placeholders */}
          <div className="lg:w-1/2 flex flex-col justify-center gap-5 pt-4">
            <div className="h-3 w-28 rounded animate-pulse" style={{ backgroundColor: "var(--rw-elevated)" }} />
            <div className="h-12 w-3/4 rounded animate-pulse" style={{ backgroundColor: "var(--rw-elevated)" }} />
            <div className="h-8 w-24 rounded animate-pulse" style={{ backgroundColor: "var(--rw-elevated)" }} />
            <div style={{ height: "1px", backgroundColor: "var(--rw-border)" }} />
            <div className="flex flex-col gap-2">
              <div className="h-4 w-full rounded animate-pulse" style={{ backgroundColor: "var(--rw-elevated)" }} />
              <div className="h-4 w-full rounded animate-pulse" style={{ backgroundColor: "var(--rw-elevated)" }} />
              <div className="h-4 w-2/3 rounded animate-pulse" style={{ backgroundColor: "var(--rw-elevated)" }} />
            </div>
            <div className="h-3 w-16 rounded animate-pulse mt-4" style={{ backgroundColor: "var(--rw-elevated)" }} />
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full animate-pulse"
                  style={{ backgroundColor: "var(--rw-elevated)" }}
                />
              ))}
            </div>
            <div className="flex gap-3 mt-2">
              <div className="h-12 w-28 rounded-xl animate-pulse" style={{ backgroundColor: "var(--rw-elevated)" }} />
              <div className="h-12 flex-1 rounded-xl animate-pulse" style={{ backgroundColor: "var(--rw-elevated)" }} />
              <div className="h-12 w-12 rounded-xl animate-pulse" style={{ backgroundColor: "var(--rw-elevated)" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
