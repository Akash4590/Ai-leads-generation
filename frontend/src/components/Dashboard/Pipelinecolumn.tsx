import AvatarGroup from "./AvatarGroup";

interface PipelineColumnProps {
  title: string;
  count: number;
  barColor: string;
  avatarCount: number;
  extra: number;
  seed: number;
}

export default function PipelineColumn({
  title,
  count,
  barColor,
  avatarCount,
  extra,
  seed,
}: PipelineColumnProps) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <p className="text-xs text-gray-400">{title}</p>
        <p className="text-xl font-bold text-white">{count}</p>
      </div>
      <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
        <div className={`h-full w-3/4 rounded-full ${barColor}`} />
      </div>
      <AvatarGroup count={avatarCount} extra={extra} seed={seed} />
    </div>
  );
}