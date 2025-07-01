import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@radix-ui/react-navigation-menu";
import { Code2, Folder, LayoutDashboard, Moon, Sun, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AppHeader() {
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
    <div className="hidden lg:block w-full">
      <header className="w-full px-6 py-4 dark:bg-[#191919] border-b border-green-400 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 shadow-none ">
        {/* Title & Navigation */}
        <div>
          <div className="mb-3">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">marcuwynu23</h1>
            <p className="text-sm text-muted-foreground italic">"Building with purpose, deploying with precision."</p>
          </div>

          <NavigationMenu>
            <NavigationMenuList className="flex flex-wrap gap-6 text-sm font-medium text-muted-foreground">
              <NavigationMenuItem className="p-2 rounded border border-transparent hover:bg-gray-100 dark:hover:bg-[#232323] hover:border-border transition">
                <Link to="/" className="flex items-center gap-2">
                  <LayoutDashboard size={18} />
                  Dashboard
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="p-2 rounded border border-transparent hover:bg-gray-100 dark:hover:bg-[#232323] hover:border-border transition">
                <Link to="/profile" className="flex items-center gap-2">
                  <User size={18} />
                  Profile
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="p-2 rounded border border-transparent hover:bg-gray-100 dark:hover:bg-[#232323] hover:border-border transition">
                <Link to="/projects" className="flex items-center gap-2">
                  <Folder size={18} />
                  Projects
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="p-2 rounded border border-transparent hover:bg-gray-100 dark:hover:bg-[#232323] hover:border-border transition">
                <Link to="/snippets" className="flex items-center gap-2">
                  <Code2 size={18} />
                  Snippets
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="ml-auto flex items-center gap-2 px-4 py-1.5 border rounded-lg text-sm font-medium transition-all bg-background hover:bg-muted dark:hover:bg-muted/50"
        >
          {darkMode ? <Moon size={18} /> : <Sun size={18} />}
          {darkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    </div>
  );
}
