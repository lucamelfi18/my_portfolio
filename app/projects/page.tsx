import { getAllCaseStudies } from '@/lib/case-studies';
import { ProjectsList } from './projects-list';

export default function ProjectsPage() {
	const projects = getAllCaseStudies();

	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<ProjectsList projects={projects} />
			</div>
		</div>
	);
}