interface AvatarGroupProps {
  count: number;
  extra: number;
  seed?: number;
}

export default function AvatarGroup({ count, extra, seed = 1 }: AvatarGroupProps) {
  return (
    <div className="flex items-center">
      <div className="flex -space-x-2">
        {Array.from({ length: count }).map((_, i) => (
          <img
            key={i}
            src={`https://i.pravatar.cc/32?img=${seed + i}`}
            alt="Avatar"
            className="h-7 w-7 rounded-full border-2 border-[#0d0d18] object-cover"
          />
        ))}
      </div>
      <span className="ml-2 text-xs text-gray-400">+{extra}</span>
    </div>
  );
}