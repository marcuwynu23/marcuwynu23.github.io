import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import NewPanel from "@/pages/news/NewsPage";
import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import { AppSidebar } from "./AppSidebar";

export default function Layout() {
  return (
    <SidebarProvider>
      <div className="dark:bg-[#222222] min-h-screen">
        {/* Header */}
        <AppHeader />
        <AppSidebar />
        <SidebarTrigger title="Menu" className="md:hidden " />

        {/* Main Content + Aside */}
        <div className="flex flex-col lg:flex-row">
          <main className="w-full lg:w-3/4 lg:p-2 dark:bg-[#222222]">
            <Outlet />
          </main>
          <aside className="hidden lg:block w-full lg:w-1/4 p-2 dark:bg-[#222222] border-t lg:border-t-0 lg:border-l">
            <NewPanel />
          </aside>
        </div>
      </div>
    </SidebarProvider>
  );
}
