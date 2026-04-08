"use client";

import Branding from "@/components/Branding";
import Sidenav from "@/components/Sidenav";
import TopNav from "@/components/Topnav";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex overflow-hidden">
      {/* side bar */}
      <div className="h-full  w-16 md:w-56 lg:w-64 transition-all duration-300">
        {/* For Logo */}

        <div className="p-2">
          <Branding />
        </div>

        <div className="overflow-y-auto h-[calc(100%-60px)] sidebar-scroll">
          <Sidenav />
        </div>
      </div>

      {/* main content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* top bar */}
        <div className="shrink-0">
          <TopNav />
        </div>

        {/* page content   */}
        <div className="flex-1 overflow-y-auto p-2 bg-dashboardBg">
          {children}
        </div>
      </main>
    </div>
  );
};

export default layout;
