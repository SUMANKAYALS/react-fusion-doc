import { getDocBySlug, getDocSlugs } from "@/lib/docs";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx/components";
import matter from "gray-matter";

export async function generateStaticParams() {
  const slugs = getDocSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const doc = getDocBySlug(resolvedParams.slug);
  if (!doc) return {};
  
  const { data } = matter(doc.content);
  return {
    title: `${data.title || 'Documentation'} | React Fusion`,
    description: data.description || "React Fusion Documentation",
  };
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const doc = getDocBySlug(resolvedParams.slug);
  
  if (!doc) {
    notFound();
  }

  const { content, data } = matter(doc.content);

  return (
    <article className="mx-auto max-w-3xl w-full">
      <MDXRemote source={content} components={mdxComponents} />
    </article>
  );
}
