import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
} from "@/components/ui/sidebar";
import {Code2, Folder, LayoutDashboard, Moon, Sun, User} from "lucide-react";
import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

export function AppSidebar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const location = useLocation();

  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    document.documentElement.classList.toggle("dark", !darkMode);
    localStorage.setItem("theme", newTheme);
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const navItems = [
    {to: "/", label: "Dashboard", icon: <LayoutDashboard size={20} />},
    {to: "/profile", label: "Profile", icon: <User size={20} />},
    {to: "/projects", label: "Projects", icon: <Folder size={20} />},
    {to: "/snippets", label: "Snippets", icon: <Code2 size={20} />},
  ];

  return (
    <Sidebar className="md:hidden z-50 w-full max-w-[320px] shadow-xl rounded-r-xl border-r border-muted bg-white dark:bg-[#1a1a1a]">
      <SidebarContent className="py-6 px-3 space-y-6">
        {/* Title */}
        <div className="px-2">
          <h1 className="text-lg font-bold text-primary dark:text-white">
            @marcuwynu23.github.io
          </h1>
          <p className="text-xs text-muted-foreground italic">
            "Build with purpose."
          </p>
        </div>

        {/* Navigation Group */}
        <SidebarGroup className="space-y-1">
          {navItems.map(({to, label, icon}) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-3 py-3 px-4 rounded-lg font-medium transition-all ${
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-muted text-muted-foreground"
                }`}
              >
                {icon}
                <span className="text-sm">{label}</span>
              </Link>
            );
          })}
        </SidebarGroup>
      </SidebarContent>

      {/* Footer Theme Toggle */}
      <SidebarFooter className="px-4 pb-6">
        <button
          onClick={toggleTheme}
          className="flex w-full items-center justify-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium transition hover:opacity-90"
        >
          {darkMode ? <Moon size={18} /> : <Sun size={18} />}
          {darkMode ? "Dark" : "Light"} Mode
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
