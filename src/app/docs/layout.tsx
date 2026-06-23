import { Sidebar } from "@/components/Sidebar";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 mx-auto px-4 lg:px-8">
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
        <Sidebar />
      </aside>
      <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
        <div className="mx-auto w-full min-w-0">
          {children}
        </div>
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 pt-4">
            {/* Table of Contents will go here */}
            <h4 className="mb-4 text-sm font-semibold">On This Page</h4>
            <div className="text-muted-foreground">TOC rendering not implemented in this demo</div>
          </div>
        </div>
      </main>
    </div>
  );
}
