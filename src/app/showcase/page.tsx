import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Showcase",
  description: "Community projects and examples built with React Fusion.",
};

const PROJECTS = [
  {
    title: "Fusion Commerce",
    description: "A full-featured e-commerce platform demonstrating React Fusion's caching and mutation capabilities for shopping carts.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    github: "https://github.com/SUMANKAYALS/react-fusion",
    tags: ["E-commerce", "Stripe", "PostgreSQL"],
  },
  {
    title: "TaskFlow HR",
    description: "Enterprise HR dashboard utilizing RBAC and the Devtools panel for monitoring deep server-side logic.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    github: "https://github.com/SUMANKAYALS/react-fusion",
    tags: ["Dashboard", "RBAC", "Enterprise"],
  },
  {
    title: "React Fusion Auth Template",
    description: "A plug-and-play authentication template with JWT cookies, login, signup, and protected routes.",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80",
    github: "https://github.com/SUMANKAYALS/react-fusion/tree/main/examples/auth-app",
    tags: ["Template", "Auth", "Security"],
  }
];

export default function ShowcasePage() {
  return (
    <div className="container py-12 lg:py-24 max-w-6xl mx-auto px-4 lg:px-8">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] heading-gradient">
          Showcase
        </h1>
        <p className="max-w-[85%] text-muted-foreground sm:text-lg">
          Discover beautiful applications built with React Fusion. 
          Want to feature your project? Submit a pull request!
        </p>
      </div>
      
      <div className="mx-auto grid justify-center gap-8 pt-12 sm:grid-cols-2 md:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <Card key={i} className="flex flex-col overflow-hidden transition-all hover:shadow-lg dark:hover:shadow-primary/5">
            <div className="aspect-video w-full overflow-hidden bg-muted">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="h-full w-full object-cover transition-transform hover:scale-105" 
              />
            </div>
            <CardHeader>
              <div className="flex gap-2 mb-2 flex-wrap">
                {project.tags.map(tag => (
                  <span key={tag} className="inline-flex items-center rounded-md bg-secondary/10 px-2 py-1 text-xs font-medium text-secondary ring-1 ring-inset ring-secondary/20">
                    {tag}
                  </span>
                ))}
              </div>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto pt-6 flex justify-between">
              <Link href={project.github} target="_blank" rel="noreferrer">
                <Button variant="outline" size="sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> Code
                </Button>
              </Link>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <ExternalLink className="mr-2 h-4 w-4" /> Demo
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
