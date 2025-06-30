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
    <div className="hidden lg:block">
      <header className="p-4 dark:bg-[#191919] border-b flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        {/* Title & Nav */}
        <div>
          <div className="mb-4">
            <h1 className="text-xl font-semibold mb-1">@marcuwynu23.github.io</h1>
            <p className="text-sm text-muted-foreground italic">"Building with purpose, deploying with precision."</p>
          </div>

          <NavigationMenu>
            <NavigationMenuList className="flex flex-wrap gap-6">
              <NavigationMenuItem className="flex items-center gap-2 ">
                <Link to="/" className="flex items-center gap-2 ">
                  <LayoutDashboard size={18} />
                  Dashboard
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="flex items-center gap-2 ">
                <Link to="/profile" className="flex items-center gap-2 ">
                  <User size={18} />
                  Profile
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="flex items-center gap-2 ">
                <Link to="/projects" className="flex items-center gap-2 ">
                  <Folder size={18} />
                  Projects
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="flex items-center gap-2 ">
                <Link to="/snippets" className="flex items-center gap-2 ">
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
          className="flex items-center gap-2  px-3 py-1 border rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {darkMode ? <Moon size={18} /> : <Sun size={18} />}
          {darkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    </div>
  );
}
