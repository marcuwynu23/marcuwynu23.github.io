import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Folder, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function DashboardPage() {
  // Mock counts — replace with dynamic values if needed
  const counts = {
    projects: 8,
    snippets: 21,
    visits: 1,
  };

  const sections = [
    {
      title: "Profile",
      icon: <User size={24} />,
      description: "View your bio, contact info, and online presence.",
      to: "/profile",
    },
    {
      title: "Projects",
      icon: <Folder size={24} />,
      description: "Explore featured works and development projects.",
      to: "/projects",
    },
    {
      title: "Snippets",
      icon: <Code2 size={24} />,
      description: "Reusable code blocks and developer tools.",
      to: "/snippets",
    },
  ];

  return (
    <>
      <Card className="bg-transparent border-none shadow-none mb-6">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <Card className="bg-muted dark:bg-[#202020] border-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
                  <User size={16} /> Site Counts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{counts.visits} Visits</p>
              </CardContent>
            </Card>
            <Card className="bg-muted dark:bg-[#202020] border-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
                  <Folder size={16} /> Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{counts.projects} Projects</p>
              </CardContent>
            </Card>
            <Card className="bg-muted dark:bg-[#202020] border-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
                  <Code2 size={16} /> Snippets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{counts.snippets} Snippets</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <Link to={section.to} key={index}>
                <Card className="border-none transition rounded-xl bg-gray-100 dark:bg-[#242424] hover:ring-1 hover:ring-primary">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-medium flex items-center gap-2">
                      {section.icon}
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{section.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
