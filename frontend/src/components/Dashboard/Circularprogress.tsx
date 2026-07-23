interface CircularProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  label?: string;
  sublabel?: string;
}

export default function CircularProgress({
  value,
  size = 80,
  strokeWidth = 8,
  colorFrom = "#a855f7",
  colorTo = "#3b82f6",
  label,
  sublabel,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  const gradientId = `progress-gradient-${colorFrom}-${colorTo}`.replace(
    /[^a-zA-Z0-9-]/g,
    ""
  );

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colorFrom} />
            <stop offset="100%" stopColor={colorTo} />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      {(label || sublabel) && (
        <div className="absolute flex flex-col items-center justify-center">
          {label && <span className="text-lg font-bold text-white">{label}</span>}
          {sublabel && (
            <span className="text-[10px] text-gray-400">{sublabel}</span>
          )}
        </div>
      )}
    </div>
  );
}