export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-purple-600/25 blur-[160px]" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-700/25 blur-[160px]" />
      <div className="absolute right-1/3 top-1/2 h-72 w-72 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-fuchsia-600/15 blur-[180px]" />
      <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-indigo-600/10 blur-[140px]" />
    </div>
  );
}