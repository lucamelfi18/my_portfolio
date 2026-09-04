'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function AboutPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
				>
					<motion.div variants={fadeIn('right', 0.3)} className="space-y-6">
						<h1 className="text-4xl font-bold">About Me</h1>
						<p className="text-lg text-muted-foreground">
							I am a mechanical engineering student specializing in robotics, dynamic control systems, 
							and precision hardware design. Combining rigorous mechanical analysis with embedded programming, 
							I focus on transforming complex physical requirements into reliable, high-performance 
							electromechanical systems. My core technical toolkit spans 3D CAD modeling, 
							finite element and thermal analysis (FEA), rapid prototyping, and
							firmware development in C++ and Python.
						</p>
						<div className="space-y-4">
							<h2 className="text-2xl font-semibold">My Journey</h2>
							<p className="text-muted-foreground">
								My work centers on the intersection of physical design and automated control. 
								Through hands-on development across autonomous robotics, biomechanical test systems, 
								and lab automation hardware, I have engineered custom mechanical assemblies 
								from initial kinematics and structural simulation to physical fabrication and sensor integration. 
								Whether optimizing active thermal management enclosures, modeling hyperelastic material responses, 
								or tuning motion control loops, I approach engineering challenges with a data-driven, 
								first-principles methodology to build robust, deployable hardware.
							</p>
						</div>
						<Button className="mt-6" asChild>
							<a href="/resume.pdf" download="Luca_Melfi_Resume.pdf">
								Download Resume <ArrowDownCircle className="ml-2 h-4 w-4" />
							</a>
						</Button>
					</motion.div>

					<motion.div variants={fadeIn('left', 0.3)} className="relative h-[500px]">
						<Image
							src="/usar.jpeg"
							alt="Professional photo"
							fill
							className="object-cover rounded-lg"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</motion.div>
				</motion.div>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					<motion.div variants={fadeIn('up', 0.1)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Education</h3>
								<p className="text-muted-foreground">
									Graduating with my B.S. in Mechanical Engineering in Spring 2027
									and my M.S. in Mechanical Engineering with a concentration in Robotics
									and Control Systems in December 2027 from Carnegie Mellon University.

								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.2)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Experience</h3>
								<p className="text-muted-foreground">
									Gained valuable experience through internships, university research, and projects, working
									with cutting-edge technologies and methodologies.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.3)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Skills</h3>
								<p className="text-muted-foreground">
									Proficient in various engineering tools and technologies, with a strong
									foundation in problem-solving and analytical thinking.
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}