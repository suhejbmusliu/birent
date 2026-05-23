export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/logo.png"
        alt="BiRent"
        className="h-16 w-auto object-contain"
      />
    </div>
  );
}
