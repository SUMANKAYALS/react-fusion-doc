import fs from 'fs';
import path from 'path';

const docsDirectory = path.join(process.cwd(), 'content/docs');

export function getDocSlugs() {
  return fs.readdirSync(docsDirectory)
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace(/\.mdx$/, ''));
}

export function getDocBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(docsDirectory, `${realSlug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return { slug: realSlug, content: fileContents };
}
