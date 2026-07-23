import { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import TopBar from "../components/Dashboard/TopBar";
import BackgroundGlow from "../components/Createproject/Backgroundglow";
import Stepper from "../components/Createproject/Stepper";
import WorkspaceIntroCard from "../components/Createproject/Workspaceintrocard";
import ProjectInformationForm from "../components/Createproject/Projectinformationform";

export default function CreateProject() {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen overflow-hidden bg-[#050510] text-white">
      <BackgroundGlow />

      <Sidebar
        active={activeSection}
        onSelect={setActiveSection}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="relative z-10 min-w-0 flex-1">
        <TopBar onMenuClick={() => setSidebarOpen(true)} />

        <main className="px-4 pb-10 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
            <div>
              <h1 className="text-2xl font-bold text-white sm:text-3xl">
                Create New Project
              </h1>
              <p className="mt-1 text-sm text-gray-400">
                Connect your business and start generating leads with AI
              </p>
            </div>

            <Stepper currentStep={1} />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <WorkspaceIntroCard />
            <ProjectInformationForm />
          </div>
        </main>
      </div>
    </div>
  );
}