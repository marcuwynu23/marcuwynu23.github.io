import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Folder, User } from "lucide-react";

export default function DashboardPage() {
  const counts = {
    projects: 8,
    snippets: 21,
    visits: 1,
  };

  return (
    <Card className="bg-transparent border-none shadow-none w-full h-full p-0">
      <CardHeader className="px-4 pt-6">
        <CardTitle className="text-xl font-bold text-primary">Dashboard</CardTitle>
      </CardHeader>

      <CardContent className="px-4 pb-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {/* Visits */}
          <Card className="bg-muted dark:bg-[#1e1e1e] rounded-xl shadow-none border border-border transition hover:shadow-sm active:scale-[0.98]">
            <CardHeader className="pb-1 px-4 pt-4">
              <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
                <User size={16} /> Site Visits
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <p className="text-3xl font-semibold text-primary">{counts.visits}</p>
              <p className="text-xs text-muted-foreground mt-1">Total visits recorded</p>
            </CardContent>
          </Card>

          {/* Projects */}
          <Card className="bg-muted dark:bg-[#1e1e1e] rounded-xl shadow-none border border-border transition hover:shadow-sm active:scale-[0.98]">
            <CardHeader className="pb-1 px-4 pt-4">
              <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
                <Folder size={16} /> Projects
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <p className="text-3xl font-semibold text-primary">{counts.projects}</p>
              <p className="text-xs text-muted-foreground mt-1">Published portfolio entries</p>
            </CardContent>
          </Card>

          {/* Snippets */}
          <Card className="bg-muted dark:bg-[#1e1e1e] rounded-xl shadow-none border border-border transition hover:shadow-sm active:scale-[0.98]">
            <CardHeader className="pb-1 px-4 pt-4">
              <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
                <Code2 size={16} /> Snippets
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <p className="text-3xl font-semibold text-primary">{counts.snippets}</p>
              <p className="text-xs text-muted-foreground mt-1">Code snippets created</p>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
