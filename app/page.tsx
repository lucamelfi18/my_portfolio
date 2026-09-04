import { getAllCaseStudies } from '@/lib/case-studies';
import HomeClient from './home-client';

export default function Home() {
  const projects = getAllCaseStudies();
  return <HomeClient projects={projects} />;
}

