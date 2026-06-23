"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  {
    title: "Overview",
    links: [
      { href: "/docs/getting-started", title: "Getting Started" },
      { href: "/docs/core-concepts", title: "Core Concepts" },
    ]
  },
  {
    title: "Features",
    links: [
      { href: "/docs/server-functions", title: "Server Functions" },
      { href: "/docs/authentication", title: "Authentication" },
      { href: "/docs/rbac", title: "RBAC" },
      { href: "/docs/middleware", title: "Middleware" },
      { href: "/docs/cache", title: "Caching" },
    ]
  },
  {
    title: "Reference",
    links: [
      { href: "/docs/devtools", title: "Devtools" },
      { href: "/docs/api-reference", title: "API Reference" },
    ]
  }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <ScrollArea className="h-full py-6 pr-6 lg:py-8">
      <div className="w-full">
        {NAV_ITEMS.map((group, index) => (
          <div key={index} className="pb-8">
            <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
              {group.title}
            </h4>
            <div className="grid grid-flow-row auto-rows-max text-sm">
              {group.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
                    pathname === link.href
                      ? "font-medium text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
