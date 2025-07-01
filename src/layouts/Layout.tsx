import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {Outlet} from "react-router-dom";
import AppHeader from "./AppHeader";
import {AppSidebar} from "./AppSidebar";
import {Menu} from "lucide-react";
import NewPanel from "@/pages/news/NewsPage";

export default function Layout() {
  return (
    <SidebarProvider>
      <div className="w-full min-h-screen dark:bg-[#222222]">
        <div className="max-w-screen-3xl mx-auto">
          <AppHeader />
          <AppSidebar />
          {/* Mobile Menu Trigger */}
          <div className="p-2 md:hidden">
            <SidebarTrigger icon={<Menu size={30} />} />
          </div>
          <div className="flex w-full">
            <main className="w-full lg:w-3/4 overflow-y-auto dark:bg-[#222222]">
              <Outlet />
            </main>
            <aside className="hidden lg:block w-full lg:w-1/4 p-2  dark:bg-[#222222]">
              <NewPanel />
            </aside>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
