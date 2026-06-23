"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, Layers, Shield, Zap, RefreshCw, Server, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-background">
      {/* Vercel-like Animated Background Grid */}
      <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="space-y-6 pb-8 pt-24 md:pb-12 md:pt-32 lg:py-40 border-b border-border">
          <div className="container mx-auto flex max-w-5xl flex-col items-center gap-6 text-center px-4 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-sm font-medium shadow-sm transition-all hover:bg-muted cursor-pointer"
            >
              <span>React Fusion v3.0 is out</span>
              <span className="ml-2 border-l border-border pl-2 flex items-center text-muted-foreground">Read the docs <ChevronRight className="ml-1 h-3 w-3" /></span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-balance font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter"
            >
              Build Fullstack React Apps Faster
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="max-w-[42rem] text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8 font-light"
            >
              Authentication, RBAC, Validation, Middleware, Cache, Devtools, and typed RPC — all seamlessly integrated into one lightweight framework.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col gap-4 sm:flex-row justify-center w-full mt-4"
            >
              <Link href="/docs/getting-started">
                <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base shadow-sm hover:-translate-y-1 transition-transform rounded-md bg-foreground text-background hover:bg-foreground/90 hover:shadow-lg">
                  Start Building
                </Button>
              </Link>
              <div className="flex items-center bg-muted/50 px-6 py-3 rounded-md border border-border text-sm font-mono text-muted-foreground shadow-sm hover:border-foreground/30 transition-colors">
                <span className="mr-4 select-none text-muted-foreground/50">$</span>
                <span className="text-foreground">npm i @suamnkayal/react-fusion</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="container mx-auto py-12 md:py-24 px-4 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-16"
          >
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl tracking-tighter">Features that scale</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              React Fusion abstracts away the boilerplate of connecting your frontend to your backend, providing a robust architecture.
            </p>
          </motion.div>
          
          <div className="mx-auto grid gap-0 sm:grid-cols-2 md:grid-cols-3 border border-border rounded-lg overflow-hidden bg-background shadow-sm">
            {[
              {
                title: "End-to-End Type Safety",
                description: "Inferred TypeScript signatures from your server functions directly to your React components.",
                icon: <Terminal className="h-5 w-5" />,
              },
              {
                title: "Built-in Authentication",
                description: "JWT handling, HTTP-only cookies, and Context injection out of the box.",
                icon: <Shield className="h-5 w-5" />,
              },
              {
                title: "Middleware Onion Model",
                description: "Powerful request interception for logging, authorization, and error handling.",
                icon: <Layers className="h-5 w-5" />,
              },
              {
                title: "Caching & Invalidation",
                description: "TanStack-like in-memory query cache that automatically prevents redundant executions.",
                icon: <RefreshCw className="h-5 w-5" />,
              },
              {
                title: "Zero API Routes",
                description: "No more manually writing REST endpoints or parsing `req.body`.",
                icon: <Server className="h-5 w-5" />,
              },
              {
                title: "Devtools Inspector",
                description: "Floating React-Query style devtools panel to inspect server state and events.",
                icon: <Zap className="h-5 w-5" />,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex flex-col p-8 border-b border-r border-border hover:bg-muted/30 transition-all duration-300 last:border-b-0 sm:[&:nth-child(even)]:border-r-0 md:[&:nth-child(even)]:border-r md:[&:nth-child(3n)]:border-r-0 md:[&:nth-last-child(-n+3)]:border-b-0 cursor-default"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-foreground shadow-sm group-hover:scale-110 group-hover:border-foreground/30 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="mb-2 font-semibold tracking-tight">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
