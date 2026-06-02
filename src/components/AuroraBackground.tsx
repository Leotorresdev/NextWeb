export function AuroraBackground() {
  return (
  
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Blob 1 - Primary color */}
      <div
        className="animate-aurora absolute left-[-10%] top-[-20%] h-[60vw] w-[60vw] rounded-full bg-primary/20 blur-[120px]"
        aria-hidden="true"
      />

      {/* Blob 2 - Secondary color con delay */}
      <div
        className="animate-aurora absolute right-[-10%] top-[40%] h-[50vw] w-[50vw] rounded-full bg-secondary/15 blur-[120px] [animation-delay:2s]"
        aria-hidden="true"
      />

      {/* Blob 3 - Accent color con delay mayor */}
      <div
        className="animate-aurora absolute bottom-[-10%] left-[30%] h-[40vw] w-[40vw] rounded-full bg-accent/10 blur-[140px] [animation-delay:4s]"
        aria-hidden="true"
      />
    </div>
  );
}