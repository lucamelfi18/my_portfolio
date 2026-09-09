import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Target, Settings } from 'lucide-react';

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

  function SectionMedia({ value, alt }: { value: string | string[]; alt: string }) {
    const items = Array.isArray(value) ? value : [value];
    const filtered = items.filter((s) => s.length > 0);
    if (filtered.length === 0) return null;

    return (
      <div className="grid grid-cols-1 gap-5 mt-8">
        {filtered.map((src, i) => {
          const isVideo = src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.mov');
          const isMedia = src.startsWith('/') || src.startsWith('http');

          if (!isMedia) {
            return (
              <div key={i} className="w-full aspect-[16/9] bg-muted/30 rounded-2xl flex items-center justify-center border border-dashed border-muted-foreground/25">
                <span className="text-sm text-muted-foreground/60 italic">{src}</span>
              </div>
            );
          }

          if (isVideo) {
            return (
              <div key={i} className="w-full rounded-2xl overflow-hidden border border-border/50">
                <video
                  src={src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-auto"
                />
              </div>
            );
          }

          return (
            <div key={i} className="relative w-full rounded-2xl overflow-hidden border border-border/50 bg-muted/10 p-3">
              <img src={src} alt={`${alt} ${i + 1}`} className="w-full h-auto rounded-xl object-contain" />
            </div>
          );
        })}
      </div>
    );
  }

  // Parse **bold** patterns in text strings
  function renderBold(text: string) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  }

  function Label({ children }: { children: string }) {
    return (
      <span className="inline-block text-primary font-semibold tracking-wide text-sm uppercase mr-2">
        {children}
      </span>
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
          className={`opacity-60 ${project.slug === 'ratchet-assisted-vise' ? 'object-contain' : 'object-cover'}`}
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

          {/* Left Column: Sticky Sidebar */}
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

          {/* Right Column */}
          <div className="lg:w-2/3 space-y-16">

            {project.miniProjects && project.miniProjects.length > 0 ? (
              /* ── Mini-Projects Layout ── */
              <>
                {project.miniProjects.map((mini, idx) => (
                  <section key={idx} className="space-y-6">
                    <div className="flex items-center gap-4 border-b border-border pb-4">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg shrink-0">
                        {idx + 1}
                      </span>
                      <h2 className="text-3xl font-bold">{mini.title}</h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {mini.tags.map((tag, t) => (
                        <Badge key={t} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                    <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                      {mini.description.split('\n\n').map((paragraph, p) => (
                        <p key={p}>{renderBold(paragraph)}</p>
                      ))}
                    </div>
                    <SectionMedia value={mini.images} alt={mini.title} />
                  </section>
                ))}
              </>
            ) : (
              /* ── Standard Case Study Layout ── */
              <>
                {project.conceptGeneration.ideation && (
                  <section className="space-y-5">
                    <h2 className="text-3xl font-bold border-b border-border pb-4">Concept Generation &amp; Selection</h2>
                    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                      <p><Label>{project.conceptGeneration.labels?.ideation || 'Ideation:'}</Label>{project.conceptGeneration.ideation}</p>
                      <p><Label>{project.conceptGeneration.labels?.pivot || 'The Pivot:'}</Label>{project.conceptGeneration.pivot}</p>
                    </div>
                    <SectionMedia value={project.conceptGeneration.imagePlaceholder} alt="Concept Generation" />
                  </section>
                )}

                {project.detailedDesign.architecture && (
                  <section className="space-y-5">
                    <h2 className="text-3xl font-bold border-b border-border pb-4">Detailed Design &amp; Analysis</h2>
                    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                      <p><Label>{project.detailedDesign.labels?.architecture || 'CAD Architecture:'}</Label>{project.detailedDesign.architecture}</p>
                      <p><Label>{project.detailedDesign.labels?.calculations || 'Calculations & FEA:'}</Label>{project.detailedDesign.calculations}</p>
                    </div>
                    <SectionMedia value={project.detailedDesign.imagePlaceholder} alt="Detailed Design" />
                  </section>
                )}

                {project.prototyping.manufacturing && (
                  <section className="space-y-5">
                    <h2 className="text-3xl font-bold border-b border-border pb-4">Prototyping &amp; Testing</h2>
                    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                      <p><Label>{project.prototyping.labels?.manufacturing || 'Manufacturing:'}</Label>{project.prototyping.manufacturing}</p>
                      <p><Label>{project.prototyping.labels?.failures || 'The Failures:'}</Label>{project.prototyping.failures}</p>
                      <p><Label>{project.prototyping.labels?.testing || 'Testing Data:'}</Label>{project.prototyping.testing}</p>
                    </div>
                    <SectionMedia value={project.prototyping.imagePlaceholder} alt="Prototyping and Testing" />
                  </section>
                )}

                {project.outcomes.specs && (
                  <section className="space-y-5">
                    <h2 className="text-3xl font-bold border-b border-border pb-4">Final Outcomes &amp; Lessons Learned</h2>
                    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                      <p><Label>Final Specs:</Label>{project.outcomes.specs}</p>
                    </div>
                    <SectionMedia value={project.outcomes.imagePlaceholder} alt="Final Outcomes" />
                  </section>
                )}

                {project.postHackathon && (
                  <section className="space-y-5">
                    <h2 className="text-3xl font-bold border-b border-border pb-4">Post-Hackathon Development</h2>
                    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                      <p><Label>{project.postHackathon.labels?.description || 'Updates:'}</Label>{renderBold(project.postHackathon.description)}</p>
                    </div>
                    {project.postHackathon.imagePlaceholder && (
                      <SectionMedia value={project.postHackathon.imagePlaceholder} alt="Post Hackathon" />
                    )}
                  </section>
                )}


                {project.outcomes.nextSteps && (
                  <section className="space-y-5">
                    <h2 className="text-3xl font-bold border-b border-border pb-4">Next Steps</h2>
                    <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
                      <p className="text-lg text-muted-foreground leading-relaxed">{project.outcomes.nextSteps}</p>
                    </div>
                  </section>
                )}
              </>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
