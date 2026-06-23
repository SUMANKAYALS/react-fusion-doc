import { Copy } from "lucide-react";

export const mdxComponents = {
  h1: ({ children }: any) => <h1 className="mt-8 mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl heading-gradient">{children}</h1>,
  h2: ({ children }: any) => <h2 className="mt-10 mb-4 text-3xl font-semibold tracking-tight border-b pb-2">{children}</h2>,
  h3: ({ children }: any) => <h3 className="mt-8 mb-4 text-2xl font-semibold tracking-tight">{children}</h3>,
  p: ({ children }: any) => <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">{children}</p>,
  ul: ({ children }: any) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-muted-foreground">{children}</ul>,
  ol: ({ children }: any) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2 text-muted-foreground">{children}</ol>,
  li: ({ children }: any) => <li>{children}</li>,
  code: ({ children, className }: any) => {
    // Simple inline code vs block code logic
    if (className) {
      // It's a code block
      return <code className={className}>{children}</code>;
    }
    // Inline code
    return <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-primary">{children}</code>;
  },
  pre: ({ children }: any) => {
    // We will extract text to pass to copy button
    return (
      <div className="relative group my-6 overflow-hidden rounded-lg border bg-zinc-950 dark:bg-zinc-900/50">
        <div className="flex items-center justify-between bg-zinc-900 px-4 py-2 text-xs text-zinc-400 border-b border-zinc-800">
          <span>Code</span>
          {/* Note: In a real app we'd add client-side copy state, keeping it simple for MDX RSC */}
          <button className="hover:text-zinc-100 transition-colors">
            <Copy className="h-4 w-4" />
          </button>
        </div>
        <div className="overflow-x-auto p-4">
          <pre className="font-mono text-sm text-zinc-50">{children}</pre>
        </div>
      </div>
    );
  },
  blockquote: ({ children }: any) => <blockquote className="mt-6 border-l-2 border-primary pl-6 italic text-muted-foreground">{children}</blockquote>,
};
