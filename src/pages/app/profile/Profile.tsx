import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Briefcase, Code, Globe, Mail, Terminal } from "lucide-react";

export default function ProfilePage() {
  const skills = [
    "JavaScript (Node.js)",
    "React",
    "Next.js",
    "Express",
    "Python",
    "Tailwind CSS",
    "MongoDB",
    "MySQL",
    "GitHub Actions",
    "Docker",
    "Linux",
    "Kubernetes",
    "CI/CD",
    "Nginx",
    "Terraform",
  ];

  const experience = [
    {
      title: "Senior Software Developer & CTO",
      company: "Wayne Enterprise Solution",
      duration: "Jan 2025 – Present",
      description:
        "Leading enterprise-grade systems with CI/CD, DevOps automation, and secure self-hosted infrastructure. Architected scalable backend services and maintained system uptime with custom toolsets and deployment pipelines.",
    },
    {
      title: "Lead Software Developer & Incorporator",
      company: "Quantum Cloud Corporation",
      duration: "Jul 2024 – Jan 2025",
      description:
        "Built and deployed full-scale applications including BCCS, CAMS, and PMS. Optimized backend infrastructure, led developer teams, and implemented DevOps-first pipelines using AWS and GitHub Actions.",
    },
    {
      title: "Software Developer",
      company: "Philippine Innovation Hub Academy Corp.",
      duration: "Apr 2024 – Jul 2024",
      description:
        "Developed an HRIS system, deployed services across VPS infrastructure, and handled secure rollouts with a focus on internal tooling.",
    },
    {
      title: "Open Source Developer",
      company: "Independent",
      duration: "Aug 2019 – Present",
      description:
        "Built and contributed to CLI tools, SSH tunnels, monitoring utilities, and custom CI/CD pipelines. Focused on developer productivity and network/system reliability tools.",
    },
  ];

  return (
    <Card className="bg-transparent border-none shadow-none-none w-full h-full p-0">
      <CardHeader className="px-4 pt-6">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-primary">Profile</CardTitle>
          <a
            href="https://docs.google.com/document/d/1js0Mw-8ECQFytEcD9r4DfSa7MgnKJcg7/edit?usp=sharing"
            target="_blank"
            className="text-xs px-3 py-1 border rounded-md text-primary hover:bg-primary hover:text-white transition"
          >
            Download CV
          </a>
        </div>
      </CardHeader>

      <CardContent className="px-4 pb-6">
        <ScrollArea className="h-[80vh] pr-1">
          <div className="space-y-6">
            {/* About */}
            <section className="bg-muted dark:bg-[#1e1e1e] border border-border rounded-xl p-4 shadow-none">
              <h2 className="text-base font-semibold flex items-center gap-2 mb-2 text-primary">
                <Terminal size={16} />
                About Me
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I'm <strong>Mark Wayne Menorca</strong>, a passionate full-stack developer and systems architect with a strong background in DevOps,
                backend infrastructure, and application scalability. I enjoy building developer tools, leading technical teams, and solving real-world
                engineering challenges with clean code and automation.
              </p>
            </section>

            {/* Skills */}
            <section className="bg-muted dark:bg-[#1e1e1e] border border-border rounded-xl p-4 shadow-none">
              <h2 className="text-base font-semibold flex items-center gap-2 mb-2 text-primary">
                <Code size={16} />
                Technical Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-white dark:bg-[#2a2a2a] text-muted-foreground px-3 py-1 rounded-full text-xs font-medium shadow-none-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section className="bg-muted dark:bg-[#1e1e1e] border border-border rounded-xl p-4 shadow-none">
              <h2 className="text-base font-semibold flex items-center gap-2 mb-3 text-primary">
                <Briefcase size={16} />
                Experience
              </h2>
              <div className="space-y-5">
                {experience.map((exp, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-semibold">{exp.title}</p>
                      <span className="text-xs text-muted-foreground">{exp.duration}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-primary">{exp.company}</span> – {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact */}
            <section className="bg-muted dark:bg-[#1e1e1e] border border-border rounded-xl p-4 shadow-none">
              <h2 className="text-base font-semibold flex items-center gap-2 mb-3 text-primary">
                <Globe size={16} />
                Contact & Links
              </h2>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <a href="mailto:markwayne.menorca@outlook.com" className="hover:underline">
                    markwayne.menorca@outlook.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Globe size={16} />
                  <a href="https://github.com/marcuwynu23" target="_blank" className="hover:underline">
                    github.com/marcuwynu23
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Globe size={16} />
                  <a href="https://linkedin.com/in/marcuwynu23" target="_blank" className="hover:underline">
                    linkedin.com/in/marcuwynu23
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Globe size={16} />
                  <a href="https://marcuwynu23.github.io" target="_blank" className="hover:underline">
                    marcuwynu23.github.io
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
