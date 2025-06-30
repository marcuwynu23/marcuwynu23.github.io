import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { useState } from "react";

const dummySnippets = [
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
  { title: "MongoDB Connection", description: "Mongoose connect example.", content: "mongoose.connect(uri, options);", category: "Backend" },
];

export default function SnippetPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [selectedSnippet, setSelectedSnippet] = useState<any | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredSnippets = dummySnippets.filter((snippet) => {
    const matchesSearch =
      snippet.title.toLowerCase().includes(query.toLowerCase()) || snippet.description.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "all" || snippet.category === category;
    return matchesSearch && matchesCategory;
  });

  const openDialog = (snippet: any) => {
    setSelectedSnippet(snippet);
    setIsDialogOpen(true);
  };

  return (
    <>
      <Card className="bg-transparent border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Snippets</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-end mb-6">
            <Input
              placeholder="Search snippets..."
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="focus:outline-none focus:ring-0 focus:ring-offset-0 focus:shadow-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-none"
            />
            <Button type="button">
              <Search size={18} />
              Search
            </Button>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="React">React</SelectItem>
                <SelectItem value="Backend">Backend</SelectItem>
                <SelectItem value="CSS">CSS</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Snippets */}
          <div className="grid gap-4">
            {filteredSnippets.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center">No snippets found.</p>
            ) : (
              filteredSnippets.map((snippet, index) => (
                <Card key={index} onClick={() => openDialog(snippet)} className="bg-muted dark:bg-[#202020] shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-md">{snippet.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{snippet.description}</p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* Dialog to show full snippet */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="dark:bg-[#232323]">
          <DialogHeader>
            <DialogTitle>{selectedSnippet?.title}</DialogTitle>
            <DialogDescription>{selectedSnippet?.description}</DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <pre className="bg-muted p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">{selectedSnippet?.content}</pre>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
