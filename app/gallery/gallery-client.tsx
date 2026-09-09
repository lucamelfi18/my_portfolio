'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { staggerContainer, fadeInScale } from '@/lib/motion';

// Replace these placeholders with your actual image paths
// Make sure all images are placed in your public/ folder
const galleryImages = [
	// High Impact - Final Assemblies, Hero Shots & Impressive CAD
	'/buccal_mass_iso.png',
	'/usar.jpeg',
	'/full_model.JPG',
	'/roborink.jpg',
	'/spider.jpeg',
	'/full vise.JPG',
	'/wheel.JPG',
	
	// Medium Impact - Engineering Rigor, FEA & Technical Analysis
	'/pin_fea.jpg',
	'/stent_fea.jpg',
	'/stress_conc.jpg',
	'/stressu.jpg',
	'/config_space.jpeg',
	'/derivation.png',
	'/matlab_plot.png',

	// Medium Impact - Prototyping, Hands-on & Manufacturing
	'/gearbox.jpeg',
	'/stairs.jpeg',
	'/circuit.jpeg',
	'/dial_indic.png',
	'/side_by_side.jpg',
	'/sketch.jpeg',
	'/top.jpg',
];

export function GalleryClient() {
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
				<h1 className="text-4xl font-bold mb-4">Gallery</h1>
				<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
					A visual showcase of prototypes, CAD models, FEA simulations, and hardware builds.
				</p>
			</motion.div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start">
				{galleryImages.map((src, index) => (
					<motion.div
						key={index}
						variants={fadeInScale(index * 0.1)}
						className="relative overflow-hidden rounded-xl bg-muted/10 border border-border/50 group p-3 flex justify-center"
					>
						<img
							src={src.startsWith('/') || src.startsWith('http') ? src : `/${src}`}
							alt={`Gallery Image ${index + 1}`}
							className="w-full h-auto rounded-lg object-contain transition-transform duration-500 group-hover:scale-[1.02]"
						/>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
}

