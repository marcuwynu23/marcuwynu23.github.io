import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import {Code2, Folder, LayoutDashboard, Moon, Sun, User} from "lucide-react";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

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
      <header className="w-full px-6 py-4 dark:bg-[#191919] border-b border-border flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 shadow-sm">
        {/* Title & Navigation */}
        <div>
          <div className="mb-3">
            <h1 className="text-2xl font-bold tracking-tight text-primary">
              @marcuwynu23.github.io
            </h1>
            <p className="text-sm text-muted-foreground italic">
              "Building with purpose, deploying with precision."
            </p>
          </div>

          <NavigationMenu>
            <NavigationMenuList className="flex flex-wrap gap-6 text-sm font-medium text-muted-foreground">
              <NavigationMenuItem>
                <Link
                  to="/"
                  className="flex items-center gap-2 hover:text-primary transition"
                >
                  <LayoutDashboard size={18} />
                  Dashboard
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 hover:text-primary transition"
                >
                  <User size={18} />
                  Profile
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/projects"
                  className="flex items-center gap-2 hover:text-primary transition"
                >
                  <Folder size={18} />
                  Projects
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/snippets"
                  className="flex items-center gap-2 hover:text-primary transition"
                >
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
