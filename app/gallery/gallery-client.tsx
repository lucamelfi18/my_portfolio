'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { staggerContainer, fadeInScale } from '@/lib/motion';

// Replace these placeholders with your actual image paths
// Make sure all images are placed in your public/ folder
const galleryImages = [
	'stressu.jpg',
	'usar.jpeg',
	'spider.jpeg',
	'flower.jpeg',
	'group.jpeg',
	'stent_fea.jpg',
	'stress_conc.jpg',
	'vise_hero.jpg',
	'/buccal_mass_iso.png',
	'/buccal_mass_cad_iso.png',
	'/circuit.jpeg'
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

			<div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
				{galleryImages.map((src, index) => (
					<motion.div
						key={index}
						variants={fadeInScale(index * 0.1)}
						className="relative break-inside-avoid overflow-hidden rounded-xl bg-muted/10 border border-border/50 group p-3"
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

