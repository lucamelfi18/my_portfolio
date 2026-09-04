import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Target, Ruler, Hammer, Settings } from 'lucide-react';

import { getCaseStudyBySlug, getAllCaseStudies } from '@/lib/case-studies';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getAllCaseStudies();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = getCaseStudyBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  function isImagePath(value: string) {
    return value.startsWith('/') || value.startsWith('http');
  }

  function SectionImage({ value, alt }: { value: string | string[]; alt: string }) {
    const images = Array.isArray(value) ? value : [value];

    return (
      <div className={`grid gap-4 mt-6 ${images.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
        {images.map((src, i) => {
          const isVideo = src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.mov');
          
          // Make the 3rd image in a 3-image array span the full width to avoid an awkward empty slot
          const spanClass = images.length === 3 && i === 2 ? 'md:col-span-2' : '';
          
          return src.startsWith('/') || src.startsWith('http') ? (
            <div key={i} className={`relative w-full aspect-video md:h-96 rounded-xl overflow-hidden border border-border bg-muted/20 ${spanClass}`}>
              {isVideo ? (
                <video 
                  src={src} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  controls
                  className="w-full h-full object-contain"
                />
              ) : (
                <Image src={src} alt={`${alt} ${i + 1}`} fill className="object-contain p-2" />
              )}
            </div>
          ) : (
            <div key={i} className={`w-full aspect-video md:h-96 bg-muted/50 rounded-xl flex items-center justify-center border border-dashed border-border ${spanClass}`}>
              <span className="text-muted-foreground">{src}</span>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="bg-background pb-24">
      {/* Hero Banner */}
      <div className="relative w-full h-[40vh] md:h-[60vh] bg-muted overflow-hidden">
        <Image 
          src={project.heroImage} 
          alt={project.title} 
          fill 
          className="object-cover opacity-60" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full">
          <div className="container max-w-6xl pb-10">
            <Button variant="outline" size="sm" asChild className="mb-6 bg-background/50 backdrop-blur-sm">
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary mb-4">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
              {project.tldr}
            </p>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl mt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Sticky Sidebar (Executive Summary & Constraints) */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-8">
              
              <section>
                <h3 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-4">Executive Summary</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Role</p>
                      <p className="text-muted-foreground">{project.role}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Duration</p>
                      <p className="text-muted-foreground">{project.duration}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </section>

              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Settings className="w-5 h-5 text-primary" />
                    The Box (Constraints)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="font-semibold block mb-1">Budget</span>
                    <span className="text-sm text-muted-foreground">{project.constraints.budget}</span>
                  </div>
                  <div>
                    <span className="font-semibold block mb-1">Weight/Size</span>
                    <span className="text-sm text-muted-foreground">{project.constraints.weightSize}</span>
                  </div>
                  <div>
                    <span className="font-semibold block mb-1">Performance</span>
                    <span className="text-sm text-muted-foreground">{project.constraints.performance}</span>
                  </div>
                  <div>
                    <span className="font-semibold block mb-1">Manufacturing</span>
                    <span className="text-sm text-muted-foreground">{project.constraints.manufacturing}</span>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* Right Column: Scrolling Narrative */}
          <div className="lg:w-2/3 space-y-16">
            
            {/* Concept Generation */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold border-b border-border pb-4">Concept Generation & Selection</h2>
              <div className="prose prose-invert prose-lg max-w-none">
                <p><strong>Ideation:</strong> {project.conceptGeneration.ideation}</p>
                <p><strong>The Pivot:</strong> {project.conceptGeneration.pivot}</p>
              </div>
              <SectionImage value={project.conceptGeneration.imagePlaceholder} alt="Concept Generation" />
            </section>

            {/* Detailed Design */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold border-b border-border pb-4">Detailed Design & Analysis</h2>
              <div className="prose prose-invert prose-lg max-w-none">
                <p><strong>CAD Architecture:</strong> {project.detailedDesign.architecture}</p>
                <p><strong>Calculations & FEA:</strong> {project.detailedDesign.calculations}</p>
              </div>
              <SectionImage value={project.detailedDesign.imagePlaceholder} alt="Detailed Design" />
            </section>

            {/* Prototyping & Testing */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold border-b border-border pb-4">Prototyping & Testing (The Reality Check)</h2>
              <div className="prose prose-invert prose-lg max-w-none">
                <p><strong>Manufacturing:</strong> {project.prototyping.manufacturing}</p>
                <p><strong>The Failures:</strong> {project.prototyping.failures}</p>
                <p><strong>Testing Data:</strong> {project.prototyping.testing}</p>
              </div>
              <SectionImage value={project.prototyping.imagePlaceholder} alt="Prototyping and Testing" />
            </section>

            {/* Final Outcomes */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold border-b border-border pb-4">Final Outcomes & Lessons Learned</h2>
              <div className="prose prose-invert prose-lg max-w-none">
                <p><strong>Final Specs:</strong> {project.outcomes.specs}</p>
              </div>
              <SectionImage value={project.outcomes.imagePlaceholder} alt="Final Outcomes" />
            </section>

            {/* Next Steps */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold border-b border-border pb-4">Next Steps</h2>
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-8">
                <p className="text-lg text-muted-foreground leading-relaxed">{project.outcomes.nextSteps}</p>
              </div>
            </section>

          </div>

        </div>
      </div>
    </div>
  );
}

