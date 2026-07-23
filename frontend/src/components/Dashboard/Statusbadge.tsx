interface StatusBadgeProps {
  status: "Hot" | "Warm" | "New";
}

const styles: Record<StatusBadgeProps["status"], string> = {
  Hot: "bg-red-500/15 text-red-400",
  Warm: "bg-yellow-500/15 text-yellow-400",
  New: "bg-blue-500/15 text-blue-400",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}