import type { Project } from "./types";

export const featuredProjects: Project[] = [
  {
    name: "merMDitor",
    description:
      "A modern, keyboard friendly, dark themed Markdown editor focused on a smooth writing + instant preview workflow with first class diagram and rich text support.An online Markdown editor with real-time preview and advanced features. Actively used by developers and writers for content creation.",
    url: "https://www.mermditor.dev/",
    type: "Web Application",
    status: "Live",
    technologies: ["Markdown", "Editor", "Web"],
    icon: "markdown-logo",
    iconWeight: "duotone",
    metrics: "Active users based on editor page visits",
  },
  {
    name: "Anino.Tool",
    description:
      "Anino is a lightweight, fast mock API server that allows you to quickly spin up REST API endpoints from a simple JSON definition file. Perfect for frontend development, testing, and prototyping when you need a backend API that doesn't exist yet.",
    url: "https://www.nuget.org/packages/Anino.Tool",
    type: "NuGet Package",
    status: "Published",
    technologies: [".NET", "NuGet", "Developer Tools"],
    icon: "package",
    iconWeight: "duotone",
    metrics: "Available on NuGet Gallery",
  },
];
