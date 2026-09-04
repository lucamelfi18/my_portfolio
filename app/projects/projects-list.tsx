'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FileText } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { staggerContainer, fadeInScale } from '@/lib/motion';
import { CaseStudy } from '@/lib/case-studies';

export function ProjectsList({ projects }: { projects: CaseStudy[] }) {
	return (
		<motion.div
			variants={staggerContainer()}
			initial="hidden"
			animate="show"
		>
			<motion.div
				variants={fadeInScale(0.2)}
				className="text-center mb-12"
			>
				<h1 className="text-4xl font-bold mb-4">Projects</h1>
				<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
					A showcase of my engineering projects, demonstrating practical application
					of skills and innovative problem-solving.
				</p>
			</motion.div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project, index) => (
					<motion.div
						key={index}
						variants={fadeInScale(index * 0.1)}
						className="flex"
					>
						<Card className="flex flex-col h-full card-gradient">
							<div className="relative h-48 w-full">
								<Image
									src={project.heroImage || 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg'}
									alt={project.title}
									fill
									className="object-cover rounded-t-lg"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</div>
							<CardContent className="flex-grow p-6">
								<h3 className="font-bold text-xl mb-2">{project.title}</h3>
								<p className="text-muted-foreground mb-4">{project.tldr || 'Project case study.'}</p>
								<div className="flex flex-wrap gap-2">
									{project.tags?.map((tag, tagIndex) => (
										<Badge key={tagIndex} variant="secondary">
											{tag}
										</Badge>
									))}
								</div>
							</CardContent>
							<CardFooter className="p-6 pt-0 gap-2">
								<Button size="sm" variant="outline" onClick={() => window.location.href = `/projects/${project.slug}`}>
									<FileText className="h-4 w-4 mr-2" />
									Read Case Study
								</Button>
							</CardFooter>
						</Card>
					</motion.div>
				))}

				{projects.length === 0 && (
					<div className="col-span-full text-center p-12 text-muted-foreground">
						No projects found.
					</div>
				)}
			</div>
		</motion.div>
	);
}
