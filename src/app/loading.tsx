export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-mist">
      <div className="glass-panel flex items-center gap-3 rounded-lg px-5 py-4 text-sm font-semibold text-graphite">
        <span className="h-3 w-3 animate-ping rounded-full bg-aqua" />
        Loading portfolio
      </div>
    </div>
  );
}

