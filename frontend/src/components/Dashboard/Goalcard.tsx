import CircularProgress from "./CircularProgress";

export default function GoalCard() {
  return (
    <div className="flex shrink-0 items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4">
      <div className="text-right">
        <p className="text-xs text-gray-400">Today's Goal</p>
      </div>
      <CircularProgress value={75} size={56} strokeWidth={6} label="75%" />
      <div className="border-l border-white/10 pl-4">
        <p className="text-sm font-semibold text-white">Great progress!</p>
        <p className="text-xs text-gray-400">Keep it up and achieve more.</p>
      </div>
    </div>
  );
}