import { release } from "process";

export const siteConfig = {
	name: 'Engineering Portfolio',
	description:
		'A professional portfolio website template for engineering students.',
	mainNav: [
		{
			title: 'Home',
			href: '/',
		},
		{
			title: 'About',
			href: '/about',
		},
		{
			title: 'Education',
			href: '/education',
		},
		{
			title: 'Skills',
			href: '/skills',
		},
		{
			title: 'Experience',
			href: '/experience',
		},
		{
			title: 'Projects',
			href: '/projects',
		},
		{
			title: 'Gallery',
			href: '/gallery',
		},
		{
			title: 'Contact',
			href: '/contact',
		},
	],
	links: {
		github: 'https://github.com/yourusername',
		linkedin: 'https://www.linkedin.com/in/lucamelfi18/',
		twitter: 'https://twitter.com/yourusername',
		facebook: 'https://facebook.com/yourusername',
		instagram: 'https://instagram.com/yourusername',
		whatsapp: 'https://wa.me/yourphonenumber',
		email: 'mailto:lmelfi@andrew.cmu.edu',
		phone: 'tel:+5084397281',
	},
};

export type Experience = {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	technologies: string[];
};

export const experiences: Experience[] = [
	{
		title: 'Advanced Mechanical Engineering Intern',
		company: 'Lila Sciences',
		location: 'Cambridge, Massachusetts',
		startDate: 'May 2026',
		endDate: 'August 2026',
		description: [
			'Architected mechanical design (SolidWorks) of a 21-instrument lab automation work cell (705-line BOM, 50+ CAD models), driving it from concept layout through Final Design Review to build release',
			'Engineered a pneumatic distribution system, sizing regulators and filtration to deliver instrument-specific air quality',
			'Designed 20+ custom precision fixtures in SolidWorks, applying GD&T and tolerance stack-up analyses to accomplish first-pass acceptance across all outside vendors',
		],
		technologies: ['SolidWorks', 'PDM', '3D Printing (FDM & SLA)', 'Laser Cutting', 'GD&T'],
	},
	{
		title: 'Graduate Researcher',
		company: 'The Biohybrid and Organic Robotics Group, Carnegie Mellon University',
		location: 'Pittsburgh, Pennsylvania',
		startDate: 'February 2025',
		endDate: 'Present',
		description: [
			'Designed and implemented an electromechanical linear-actuation and load-measurement system achieving 0.04 mm positional accuracy and millinewton force resolution to quantify the biomechanics of soft-bodied organisms',
			'Programmed an open-loop C++ stepper-motor controller with 3,200-step/rev micro-stepping for precise tissue probing, verifying positional accuracy against stylus-micrometer measurements in Python',
			'Simulated biomechanical properties of soft-tissue organisms by applying a neo-Hookean hyperelastic model to size silicone test-phantoms, tuning the geometry for a 3.92 N physical force calibration',
			'Developed a custom real-time visualization GUI in Python (Matplotlib) to parse and plot live serial port data, enabling instant monitoring of electromechanical testing metrics'
		],
		technologies: ['MATLAB', 'SolidWorks', 'Python', 'Arduino', '3D Printing', 'Soldering', 'Circuit Design'],
	},
	{
		title: 'Product Supply Engineering Intern',
		company: 'Procter & Gamble',
		location: 'Cincinnati, Ohio',
		startDate: 'May 2025',
		endDate: 'August 2025',
		description: [
			'Deployed an AI-driven machine-vision and inline-metrology system, enabling 100% automated inspection and eliminating 520 hours of manual labor annually',
			'Validated PLC logic and optimized throughput for automated depalletization machinery prior to installation by building interactive discrete-event simulations in SimTalk and Siemens Plant Simulation',
			'Identified automation opportunities for digital commerce products, proposed a cost-saving solution with anaffordable capital of $700K, 23% ROR, and over $100K in projected NPV'
		],
		technologies: ['Siemens Plant Simulation', 'SimTalk', 'Excel'],
	},
];

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link?: string;
	repo?: string;
};

export const projects: Project[] = [
	{
		title: 'Smart Home Automation System',
		description:
			'Designed and implemented a smart home automation system using IoT technologies to control lighting, temperature, and security features.',
		image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
		tags: ['IoT', 'Arduino', 'C++', 'Mobile App'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Structural Analysis Software',
		description:
			'Developed software for structural analysis of beams and trusses using numerical methods and visualization techniques.',
		image: 'https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg',
		tags: ['MATLAB', 'Python', 'FEA', 'Structural Engineering'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Renewable Energy Monitoring',
		description:
			'Created a system to monitor and analyze performance of solar panels and wind turbines for optimal energy production.',
		image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
		tags: ['Data Analysis', 'IoT', 'Renewable Energy', 'Visualization'],
		link: '#',
		repo: '#',
	},
];

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	achievements: string[];
};

export const education: Education[] = [
	{
		degree: 'Master of Science',
		field: 'Mechanical Engineering, Robotics and Control Systems',
		institution: 'Carnegie Mellon University',
		location: 'Pittsburgh, PA',
		startDate: 'January 2026',
		endDate: 'December 2027',
		gpa: '4.00/4.00',
		achievements: [],
	},
	{
		degree: 'Bachelor of Science',
		field: 'Mechanical Engineering',
		institution: 'Carnegie Mellon University',
		location: 'Pittsburgh, PA',
		startDate: 'August 2023',
		endDate: 'May 2027',
		gpa: '3.93/4.00',
		achievements: [
			'Dean\'s List (All Semesters)',
			'AC Mellon President, Captain',
			"BUILD18 Hackathon 'Lab Rat' Award",
		],
	},
	{
		degree: 'Bedford High School Diploma',
		field: 'N/A',
		institution: 'Bedford High School',
		location: 'Bedford, MA',
		startDate: 'September 2019',
		endDate: 'Jun 2023',
		gpa: '4.0/4.0',
		achievements: [
			'Valedictorian',
			'MA Superintendent\'s Certificate for Academic Excellence',
			'Harvard Book Award',
			'2-time Varsity Soccer Captain',
			'Varsity Soccer and Outdoor Track & Field League All-Star',
		],
	},
];


export type Skill = {
	name: string;
	level: number; // 1-10
	category: 'technical' | 'software' | 'manufacturing' | 'language';
};

export const skills: Skill[] = [
	// Technical Skills
	{ name: 'Mechanical Design/DFM', level: 9, category: 'technical' },
	{ name: 'Structural Analysis', level: 8, category: 'technical' },
	{ name: 'Control Systems', level: 7, category: 'technical' },
	{ name: 'Circuit Design', level: 6, category: 'technical' },
	{ name: 'GD&T/Technical Drawings', level: 8, category: 'technical' },

	// Software Skills
	{ name: 'MATLAB', level: 7, category: 'software' },
	{ name: 'Simulink', level: 6, category: 'software' },
	{ name: 'SolidWorks', level: 9, category: 'software' },
	{ name: 'Python', level: 8, category: 'software' },
	{ name: 'C/C++', level: 7, category: 'software' },
	{ name: 'ANSYS FEA', level: 8, category: 'software' },

	// Manufacturing Skills
	{ name: 'FDM 3D Printing', level: 10, category: 'manufacturing' },
	{ name: 'SLA 3D Printing', level: 7, category: 'manufacturing' },
	{ name: 'Laser Cutting', level: 9, category: 'manufacturing' },
	{ name: 'Waterjet', level: 7, category: 'manufacturing' },
	{ name: 'Manual Mill', level: 6, category: 'manufacturing' },
	{ name: 'Lathe', level: 6, category: 'manufacturing' },
	{ name: 'Soldering', level: 7, category: 'manufacturing' },
	{ name: 'MIG Welding', level: 6, category: 'manufacturing' },

	// Languages
	{ name: 'English', level: 10, category: 'language' },
	{ name: 'Spanish', level: 7, category: 'language' },
];