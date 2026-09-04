import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export interface ProjectData {
  slug: string;
  title: string;
  role: string;
  duration: string;
  tldr: string;
  image: string;
  tags: string[];
  content: string;
}

export function getProjectSlugs() {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }
  return fs.readdirSync(projectsDirectory);
}

export function getProjectBySlug(slug: string): ProjectData {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(projectsDirectory, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Project file for slug ${realSlug} not found.`);
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const { data, content } = matter(fileContents);
  
  return {
    slug: realSlug,
    title: data.title || '',
    role: data.role || '',
    duration: data.duration || '',
    tldr: data.tldr || '',
    image: data.image || '',
    tags: data.tags || [],
    content,
  };
}

export function getAllProjects(): ProjectData[] {
  const slugs = getProjectSlugs();
  const projects = slugs
    .filter(slug => slug.endsWith('.md'))
    .map((slug) => getProjectBySlug(slug));
    
  return projects;
}

