import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  items: string[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={item} className="flex items-center gap-2">
            {isLast ? (
              <span className="font-medium text-white">{item}</span>
            ) : (
              <button className="cursor-pointer text-gray-400 transition hover:text-white">
                {item}
              </button>
            )}
            {!isLast && <ChevronRight className="h-3.5 w-3.5 text-gray-600" />}
          </span>
        );
      })}
    </nav>
  );
}