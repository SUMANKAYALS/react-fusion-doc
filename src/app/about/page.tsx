import { Globe, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About the Creator",
  description: "Learn more about Suman Kayal, the creator of React Fusion.",
};

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/SUMANKAYALS",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>,
    handle: "@SUMANKAYALS"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/suman-kayal10/",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>,
    handle: "Suman Kayal"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/sumankayal_/",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
    handle: "@sumankayal_"
  },
  {
    name: "Portfolio",
    url: "https://sumankayaldev.vercel.app/",
    icon: <Globe className="h-5 w-5" />,
    handle: "sumankayaldev.vercel.app"
  }
];

export default function AboutPage() {
  return (
    <div className="container py-12 lg:py-24 max-w-4xl mx-auto px-4 lg:px-8">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div className="flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://github.com/SUMANKAYALS.png" 
              alt="Suman Kayal" 
              className="w-32 h-32 rounded-full border-4 border-border shadow-lg object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              About the Creator
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Hi, I'm Suman Kayal. React Fusion was built to simplify the developer experience by abstracting away the boilerplate of connecting frontends to backends, providing a robust, full-stack architecture out of the box. 
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-8">
          {SOCIAL_LINKS.map((link) => (
            <Link 
              key={link.name} 
              href={link.url} 
              target="_blank" 
              rel="noreferrer"
              className="group flex flex-col justify-between p-6 rounded-lg border border-border bg-background transition-colors hover:bg-muted/50"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-muted rounded-md group-hover:bg-background border border-transparent group-hover:border-border transition-colors">
                  {link.icon}
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <h3 className="font-semibold">{link.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{link.handle}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 p-8 border border-border rounded-lg bg-muted/20 text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Let's build something together.</h2>
          <p className="text-muted-foreground mb-6">
            Open to open-source collaborations, fullstack roles, and exciting freelance opportunities.
          </p>
          <Link href="https://www.linkedin.com/in/suman-kayal10/" target="_blank" rel="noreferrer">
            <Button className="rounded-full px-8">Get in touch</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
