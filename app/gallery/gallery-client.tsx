'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { staggerContainer, fadeInScale } from '@/lib/motion';

// Replace these placeholders with your actual image paths
// Make sure all images are placed in your public/ folder
const galleryImages = [
	'/buccal_mass_iso.png',
	'/buccal_mass_cad_iso.png',
	'/circuit.jpeg',
	'/dial_indic.png',
	'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
	'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
	'https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg',
	'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg',
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

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{galleryImages.map((src, index) => (
					<motion.div
						key={index}
						variants={fadeInScale(index * 0.1)}
						className="relative aspect-square w-full overflow-hidden rounded-xl bg-muted/20 border border-border group"
					>
						<Image
							src={src}
							alt={`Gallery Image ${index + 1}`}
							fill
							className="object-cover transition-transform duration-500 group-hover:scale-105"
							sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
						/>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
}

