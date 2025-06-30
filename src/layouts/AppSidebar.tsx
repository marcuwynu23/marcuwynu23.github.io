import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup } from "@/components/ui/sidebar";
import { Code2, Folder, LayoutDashboard, Moon, Sun, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function AppSidebar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    document.documentElement.classList.toggle("dark", !darkMode);
    localStorage.setItem("theme", newTheme);
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <Sidebar className="md:hidden">
      <SidebarContent className="py-5">
        <SidebarGroup>
          <Link to="/" className="flex items-center gap-2 py-2 px-3 rounded hover:bg-muted">
            <LayoutDashboard size={18} />
            Dashboard
          </Link>
          <Link to="/profile" className="flex items-center gap-2 py-2 px-3 rounded hover:bg-muted">
            <User size={18} />
            Profile
          </Link>
          <Link to="/projects" className="flex items-center gap-2 py-2 px-3 rounded hover:bg-muted">
            <Folder size={18} />
            Projects
          </Link>
          <Link to="/snippets" className="flex items-center gap-2 py-2 px-3 rounded hover:bg-muted">
            <Code2 size={18} />
            Snippets
          </Link>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="px-4 pb-4">
        <button
          onClick={toggleTheme}
          className="flex w-full items-center justify-center gap-2 px-3 py-2 border rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {darkMode ? <Moon size={18} /> : <Sun size={18} />}
          {darkMode ? "Dark" : "Light"} Mode
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
