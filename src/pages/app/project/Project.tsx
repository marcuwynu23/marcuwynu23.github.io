import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { useState } from "react";

const dummyProjects = [
  {
    title: "React useEffect Cleanup",
    description: "How to clean up side effects in React.",
    content: "useEffect(() => {...}, []);",
    category: "React",
  },
  {
    title: "Express Middleware",
    description: "Custom logging middleware example.",
    content: "app.use((req, res, next) => {...});",
    category: "Backend",
  },
  {
    title: "Tailwind Centering",
    description: "Center with Flex and Grid.",
    content: 'className="flex justify-center items-center"',
    category: "CSS",
  },
  {
    title: "Zustand State Store",
    description: "Simple state management.",
    content: "const useStore = create((set) => ({ count: 0 }))",
    category: "React",
  },
  {
    title: "MongoDB Connection",
    description: "Mongoose connect example.",
    content: "mongoose.connect(uri, options);",
    category: "Backend",
  },
];

export default function ProjectPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredProjects = dummyProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(query.toLowerCase()) || project.description.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "all" || project.category === category;
    return matchesSearch && matchesCategory;
  });

  const openDialog = (project: any) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <>
      <div className=" mx-auto px-4 py-6">
        <h1 className="text-2xl font-semibold text-foreground mb-4 tracking-tight">Projects</h1>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
          <Input
            type="search"
            placeholder="Search projects..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 rounded-md text-sm bg-gray-100 dark:bg-[#1e1e1e] border border-border focus:ring-2 focus:ring-primary text-foreground"
          />
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-40  bg-gray-100 dark:bg-[#1e1e1e] border-border text-foreground">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="bg-background text-foreground border border-border">
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="React">React</SelectItem>
              <SelectItem value="Backend">Backend</SelectItem>
              <SelectItem value="CSS">CSS</SelectItem>
            </SelectContent>
          </Select>
          <Button type="button" className="gap-2 bg-green-800 text-white">
            <Search size={18} />
            Search
          </Button>
        </div>

        {/* Project List */}
        <ScrollArea className="h-[60vh] w-full pr-2">
          <div className="space-y-4">
            {filteredProjects.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center">No projects found.</p>
            ) : (
              filteredProjects.map((project, index) => (
                <Card
                  key={index}
                  onClick={() => openDialog(project)}
                  className="bg-gray-100 dark:bg-[#1e1e1e] border border-border p-4 rounded-xl shadow-none cursor-pointer transition duration-150"
                >
                  <CardHeader className="p-0 mb-2">
                    <CardTitle className="text-lg font-semibold text-foreground">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </ScrollArea>
      </div>

      {/* Dialog Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent
          className="bg-background dark:bg-[#181818] max-w-lg w-full rounded-xl border border-border shadow-lg 
            sm:top-1/2 sm:translate-y-[-50%] sm:left-1/2 sm:translate-x-[-50%] sm:fixed 
            sm:max-h-[90vh] overflow-y-auto"
        >
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-foreground">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="text-muted-foreground">{selectedProject?.description}</DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <pre className=" bg-gray-100 dark:bg-[#1e1e1e] text-foreground p-4 rounded-md text-sm overflow-x-auto whitespace-pre-wrap">
              {selectedProject?.content}
            </pre>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
