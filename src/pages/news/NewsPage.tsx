import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import axios from "axios";
import {useEffect, useState} from "react";

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

export default function NewsPanel() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          "https://api.rss2json.com/v1/api.json?rss_url=https://techcrunch.com/feed/"
        );
        const items = res.data.items;
        const shuffled = items.sort(() => 0.5 - Math.random());
        const randomFive = shuffled.slice(0, 5);
        setNews(randomFive);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <Card className="bg-background text-foreground border border-border rounded-xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Tech News</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {news.map((item, index) => (
          <div key={index} className="text-sm">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              {item.title}
            </a>
            <p className="text-xs text-muted-foreground mt-1">
              {new Date(item.pubDate).toLocaleDateString()}
            </p>
            <p
              className="text-sm mt-2 text-muted-foreground leading-snug"
              dangerouslySetInnerHTML={{
                __html: truncateHTML(item.description, 150),
              }}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// 🔧 Helper to truncate HTML safely
function truncateHTML(html: string, maxLength: number): string {
  const div = document.createElement("div");
  div.innerHTML = html;
  const text = div.textContent || div.innerText || "";
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}
