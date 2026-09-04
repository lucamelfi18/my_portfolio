import { GalleryClient } from './gallery-client';

export const metadata = {
	title: 'Gallery | Engineering Portfolio',
	description: 'A visual showcase of engineering projects, CAD renders, and prototypes.',
};

export default function GalleryPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container px-4">
				<GalleryClient />
			</div>
		</div>
	);
}

