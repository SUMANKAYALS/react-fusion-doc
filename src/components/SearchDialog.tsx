"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { DialogProps } from "@radix-ui/react-dialog";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export function SearchDialog({ ...props }: DialogProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button 
        variant="outline" 
        className="relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64 hover:bg-muted" 
        onClick={() => setOpen(true)}
      >
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Documentation">
              <CommandItem onSelect={() => runCommand(() => router.push("/docs/getting-started"))}>
                <Search className="mr-2 h-4 w-4" />
                <span>Getting Started</span>
              </CommandItem>
              <CommandItem onSelect={() => runCommand(() => router.push("/docs/server-functions"))}>
                <Search className="mr-2 h-4 w-4" />
                <span>Server Functions</span>
              </CommandItem>
              <CommandItem onSelect={() => runCommand(() => router.push("/docs/authentication"))}>
                <Search className="mr-2 h-4 w-4" />
                <span>Authentication</span>
              </CommandItem>
              <CommandItem onSelect={() => runCommand(() => router.push("/docs/rbac"))}>
                <Search className="mr-2 h-4 w-4" />
                <span>RBAC</span>
              </CommandItem>
              <CommandItem onSelect={() => runCommand(() => router.push("/docs/api-reference"))}>
                <Search className="mr-2 h-4 w-4" />
                <span>API Reference</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
