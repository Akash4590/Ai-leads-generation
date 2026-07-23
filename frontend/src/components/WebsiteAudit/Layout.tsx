import { ReactNode, useState } from "react";
import Sidebar from "../Dashboard/Sidebar";
import BackgroundGlow from "../Createproject/Backgroundglow";

import TopBar from "./TopBar";

interface LayoutProps {
  children: ReactNode;
  activeNav?: string;
  projectName?: string;
}

export default function Layout({
  children,
  activeNav = "Website Audit",
  projectName = "GrowRise",
}: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen overflow-hidden bg-[#050510] text-white">
      <BackgroundGlow />

      <Sidebar
        active={activeNav}
        onSelect={() => {}}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="relative z-10 min-w-0 flex-1">
        <TopBar
          onMenuClick={() => setSidebarOpen(true)}
          projectName={projectName}
        />

        <main className="px-4 pb-10 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}