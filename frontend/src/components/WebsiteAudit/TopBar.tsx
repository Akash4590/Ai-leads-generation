import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Plus,
  Bell,
  Moon,
  Menu,
  FolderKanban,
  Settings,
  User,
  LogOut,
  Sparkles,
  Check,
} from "lucide-react";

interface TopBarProps {
  onMenuClick: () => void;
  projectName: string;
}

export default function TopBar({
  onMenuClick,
  projectName,
}: TopBarProps) {
  const [projectOpen, setProjectOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const projectRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        projectRef.current &&
        !projectRef.current.contains(e.target as Node)
      ) {
        setProjectOpen(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between gap-3 px-4 py-4 sm:px-8 sm:py-5">
      {/* Mobile Menu */}
      <button
        onClick={onMenuClick}
        aria-label="Open Sidebar"
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-gray-300 transition-all duration-300 hover:border-purple-500/40 hover:bg-white/5 hover:text-white lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="hidden flex-1 lg:block" />

      <div className="flex items-center gap-3">
        {/* Project Dropdown */}
        <div className="relative hidden sm:block" ref={projectRef}>
          <button
            onClick={() => setProjectOpen(!projectOpen)}
            className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-purple-500/30 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-purple-500/10"
          >
            <span className="text-xs text-gray-400">Project</span>

            <span>{projectName}</span>

            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                projectOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {projectOpen && (
            <div className="absolute right-0 z-50 mt-3 w-72 rounded-2xl border border-white/10 bg-[#111827]/95 p-2 shadow-2xl backdrop-blur-xl">
              <button className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-white/5">
                <FolderKanban className="h-4 w-4 text-purple-400" />
                <div className="text-left">
                  <p className="text-sm font-medium text-white">GrowRise</p>
                  <p className="text-xs text-gray-400">
                    Active Project
                  </p>
                </div>

                <Check className="ml-auto h-4 w-4 text-green-400" />
              </button>

              <button className="mt-1 flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-white/5">
                <FolderKanban className="h-4 w-4 text-blue-400" />
                <div className="text-left">
                  <p className="text-sm text-white">
                    AI Marketing
                  </p>
                  <p className="text-xs text-gray-400">
                    Recent Project
                  </p>
                </div>
              </button>

              <button className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-purple-600 py-3 text-sm font-medium text-white transition hover:bg-purple-500">
                <Plus className="h-4 w-4" />
                Create New Project
              </button>
            </div>
          )}
        </div>

        {/* New Project */}
        <button className="hidden cursor-pointer items-center gap-2 rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-purple-500 hover:shadow-xl hover:shadow-purple-500/30 sm:flex">
          <Plus className="h-4 w-4" />
          New Project
        </button>

        <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-purple-600 text-white transition hover:bg-purple-500 sm:hidden">
          <Plus className="h-4 w-4" />
        </button>

        {/* Notifications */}
        <button className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-purple-500/30 hover:bg-white/5">
          <Bell className="h-5 w-5 text-gray-300" />

          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
            12
          </span>
        </button>

        {/* Theme */}
        <button className="hidden h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-purple-500/30 hover:bg-white/5 sm:flex">
          <Moon className="h-5 w-5 text-gray-300" />
        </button>

        {/* Profile */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-1 transition-all duration-300 hover:bg-white/5"
          >
            <img
              src="https://i.pravatar.cc/100?img=13"
              alt="Akash"
              className="h-10 w-10 rounded-full border border-white/10 object-cover"
            />

            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-white">
                Akash
              </p>
              <p className="text-xs text-purple-400">
                Pro Plan
              </p>
            </div>

            <ChevronDown
              className={`hidden h-4 w-4 text-gray-400 transition-transform duration-300 sm:block ${
                profileOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {profileOpen && (
            <div className="absolute right-0 z-50 mt-3 w-64 rounded-2xl border border-white/10 bg-[#111827]/95 p-2 shadow-2xl backdrop-blur-xl">
              <button className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-white/5">
                <User className="h-4 w-4 text-purple-400" />
                <span className="text-sm text-white">
                  My Profile
                </span>
              </button>

              <button className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-white/5">
                <Sparkles className="h-4 w-4 text-yellow-400" />
                <span className="text-sm text-white">
                  Upgrade Plan
                </span>
              </button>

              <button className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-white/5">
                <Settings className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-white">
                  Settings
                </span>
              </button>

              <div className="my-2 border-t border-white/10" />

              <button className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-3 text-red-400 transition hover:bg-red-500/10">
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}