export interface ProjectConstraint {
  budget: string;
  weightSize: string;
  performance: string;
  manufacturing: string;
}

export interface ProjectPhase {
  title: string;
  content: string[];
  imagePlaceholder?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  role: string;
  duration: string;
  tldr: string;
  heroImage: string;
  tags: string[];
  constraints: ProjectConstraint;
  conceptGeneration: {
    ideation: string;
    pivot: string;
    imagePlaceholder: string | string[];
  };
  detailedDesign: {
    architecture: string;
    calculations: string;
    imagePlaceholder: string | string[];
  };
  prototyping: {
    manufacturing: string;
    failures: string;
    testing: string;
    imagePlaceholder: string | string[];
  };
  outcomes: {
    specs: string;
    nextSteps: string;
    imagePlaceholder: string | string[];
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "buccal-mass-biomechanics-platform",
    title: "Buccal Mass Biomechanics Platform",
    role: "Graduate Researcher at B.O.R.G.",
    duration: "Early 2026–Present",
    tldr: "Developing an open-source precision linear actuation system integrated with a load cell to study biomechanical forces and execute neo-Hookean hyperelastic material modeling in the Aplysia californica feeding organ, culminating in a HardwareX publication.",
    heroImage: "/buccal_mass_iso.png",
    tags: ["Arduino", "Python", "Circuit Design", "Solidworks", "3D Printing", "Soldering"],
    constraints: {
      budget: "Funded by lab resources and grants",
      weightSize: "Benchtop system for use within all lab spaces",
      performance: "Must execute precise, incremental movements with time-based pauses while capturing high-frequency millinewton resolution force data.",
      manufacturing: "System must function within a custom aquatic testing enclosure."
    },
    conceptGeneration: {
      ideation: "Drew inspiration from commercial Instron testing systems, adapting their core mechanical principles to meet strict spatial constraints, custom aquatic requirements, and high-resolution force sensitivities.",
      pivot: "A leadscrew driven by a stepper motor was chosen over servo-driven linear actuators due to the ease of implementation and precision.",
      imagePlaceholder: "/sketch.jpeg"
    },
    detailedDesign: {
      architecture: "Modeled the system using a stepper motor, lead screw, steel linear rails, an anti-rotation carriage, and pulley-tensioning mechanics.",
      calculations: "Incorporated load cell calibration curves and neo-Hookean hyperelastic modeling equations to accurately mimic soft-tissue stress-strain responses in silicone molds.",
      imagePlaceholder: ["/buccal_mass_cad_iso.png", "/derivation.png", "/matlab_plot.png"]
    },
    prototyping: {
      manufacturing: "All components were manufactured by 3D printing or laser cutting, with the load cell and instrumentation amplifier integrated into a microcontroller-based data acquisition system.",
      failures: "Cantilever bending of the guide rails caused added stress/torque requirements on the stepper motor, affecting the system resolution. This was mitigated by reinforcing the rails with a 3D-printed support structure and adjusting the stepper driver microstepping settings. Initial force readings exhibited significant signal noise due to electromagnetic interference (EMI). I resolved this by physically isolating and rerouting the high-current stepper motor wiring away from the sensitive load cell instrumentation amplifier.",
      testing: "Programmed parametric motion algorithms on Arduino; integrated a load cell and instrumentation amplifier with a microcontroller to capture data.",
      imagePlaceholder: ["/dial_indic.png", "/circuit.jpeg"]
    },
    outcomes: {
      specs: "0.005 mm displacement resolution, millinewton force resolution, and a 3D-printed aquatic enclosure for testing soft-tissue analogs.",
      nextSteps: "With the prototype complete, next steps include developing an interactive data dashboard and conducting displacement and force validation using silicone molds benchmarked against an Instron testing system. The project will culminate this semester in a HardwareX publication, providing open-source build instructions for nationwide laboratory replication.",
      imagePlaceholder: "/full_system_walkthrough.mp4"
    }
  },
  {
    slug: "roborink",
    title: "Roborink (Robotic Air Hockey)",
    role: "Co-Creator / Build18 Hackathon Team",
    duration: "1 week (initial hackathon), ongoing",
    tldr: "Designed and built a robotic air hockey system featuring a joystick-controlled linear actuator paddle, which is now being upgraded for fully autonomous gameplay.",
    heroImage: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
    tags: ["Robotics", "Linear Actuators", "Computer Vision", "Hackathon", "ANSYS"],
    constraints: {
      budget: "Funded by CMU’s Robotics Club",
      weightSize: "[Insert table dimensions]",
      performance: "Must actuate fast enough to block and return a moving air hockey puck.",
      manufacturing: "Initial build completed within a one-week hackathon timeline."
    },
    conceptGeneration: {
      ideation: "[Insert sketches of paddle mechanism or actuator layout]",
      pivot: "The stepper motor setup was chosen for precision, but required the design of an active thermal cooling enclosure to manage heat dissipation during high-speed play.",
      imagePlaceholder: "Placeholder: Paddle Sketches"
    },
    detailedDesign: {
      architecture: "Designed a stepper motor–driven linear actuator paired with a custom paddle mechanism, integrated with an active cooling enclosure.",
      calculations: "Executed thermal FEA in ANSYS to simulate heat generation and optimize the cooling enclosure design.",
      imagePlaceholder: "Placeholder: CAD of Linear Actuator Setup / ANSYS Thermal FEA"
    },
    prototyping: {
      manufacturing: "Rapidly prototyped during the Build18 hardware hackathon.",
      failures: "Stepper motors risked severe overheating during continuous operation, which was mitigated by fabricating the thermally optimized enclosure.",
      testing: "[Insert data on paddle response time or system latency]",
      imagePlaceholder: "Placeholder: Hackathon Build Photos"
    },
    outcomes: {
      specs: "Successfully implemented a functional joystick interface for human-to-robot play without thermal failure.",
      nextSteps: "Currently integrating a computer vision pipeline to enable fully autonomous gameplay.",
      imagePlaceholder: "Placeholder: Completed Table Image"
    }
  },
  {
    slug: "ratchet-assisted-vise",
    title: "Ratchet-Assisted Vise",
    role: "Mechanical Design & Manufacturing, 5-person team",
    duration: "2025 Fall Semester",
    tldr: "Designed and fabricated an ergonomic benchtop vise that eliminates wrist flexion and gripping force by integrating a reversible ratchet and flywheel system.",
    heroImage: "https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg",
    tags: ["Mechanical Design", "FEA", "Prototyping", "Ergonomics", "Waterjet"],
    constraints: {
      budget: "Estimated retail price target of under $100.",
      weightSize: "Permitted to sacrifice portability to achieve accessibility goals.",
      performance: "Must reliably output 30 N·m of torque for clamping, while withstanding an extreme peak load of 150 N·m.",
      manufacturing: "Designed for rapid iteration and scalable fabrication using tools like waterjets, laser cutters, lathes, and 3D printers."
    },
    conceptGeneration: {
      ideation: "Evaluated a motorized assistance concept against a purely mechanical ratchet-and-flywheel design using a Pugh Matrix that compared affordability, ease of use, and manufacturing complexity.",
      pivot: "Discarded the motorized idea because a mechanical ratchet required no electronic components. Removed the gearbox as a massive flywheel provided adequate energy retention, and pivoted to a central hex shaft attachment.",
      imagePlaceholder: "Placeholder: Pugh Matrix / Motor vs. Ratchet Sketches"
    },
    detailedDesign: {
      architecture: "Relies on a central hex shaft driving a flywheel to store rotational energy, alongside a custom reversible ratchet utilizing dual pins and a 3D-printed switcher to control directional locking.",
      calculations: "Conducted FEA on the steel ratchet pin under a 150 N·m load. Hand calculations for axial stress yielded a factor of safety of 1.04, matching the FEA simulated factor of safety of 0.931, well exceeding the 30 N·m standard use case.",
      imagePlaceholder: "Placeholder: FEA Analysis / Exploded CAD"
    },
    prototyping: {
      manufacturing: "Rapidly prototyped in laser-cut acrylic before fabricating final parts using water-jetted steel pins, a water-jetted aluminum gear and flywheel, a manually turned hex shaft, and a 3D-printed PLA switcher.",
      failures: "Early designs lacked a reliable return mechanism for the ratchet. Solved by designing a weighted pendulum handle that automatically returns the mechanism to an upright starting position.",
      testing: "Validated that the mechanical advantage system allowed forearm operation over wrist flexion, outputting nearly 5 times the required 30 N·m clamping force without risking component failure.",
      imagePlaceholder: "Placeholder: Acrylic Prototypes vs Metal Final"
    },
    outcomes: {
      specs: "Delivered a fully functional accessible vise prototype with a single-unit component cost of $108.45, retaining standard hand operation capabilities.",
      nextSteps: "Future iterations would include a universal adjustable coupler to attach the ratchet subassembly to various vise shafts, and a flywheel braking system.",
      imagePlaceholder: "Placeholder: Final Assembly Usage"
    }
  },
  {
    slug: "autonomous-robotics",
    title: "Autonomous & Self-Balancing Robotics",
    role: "Robotics Engineer",
    duration: "[Insert duration]",
    tldr: "Developed various robotic platforms, including self-balancing systems and manipulators, leveraging Raspberry Pi, IMUs, and Python to execute complex control algorithms and inverse kinematics.",
    heroImage: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    tags: ["Python", "Raspberry Pi", "PID Control", "OpenCV", "IMUs"],
    constraints: {
      budget: "[Insert constraints]",
      weightSize: "[Insert constraints]",
      performance: "Real-time processing for PID control and probabilistic localization.",
      manufacturing: "[Insert fabrication constraints]"
    },
    conceptGeneration: {
      ideation: "[Insert control architecture diagrams]",
      pivot: "[Insert any changes made to the sensor stack or control logic]",
      imagePlaceholder: "Placeholder: Control Architecture Diagram"
    },
    detailedDesign: {
      architecture: "[Insert CAD or wiring schematics of the sensor integration]",
      calculations: "Derived inverse kinematics and formulated odometry logic.",
      imagePlaceholder: "Placeholder: Wiring Schematics / Inverse Kinematics Math"
    },
    prototyping: {
      manufacturing: "Integrated Raspberry Pi, cameras (OpenCV), IMUs, and encoder feedback.",
      failures: "[Insert challenges with sensor noise or tuning PID loops]",
      testing: "[Insert data on balancing stability or path-following accuracy]",
      imagePlaceholder: "Placeholder: Hardware Integration Photos"
    },
    outcomes: {
      specs: "Successfully implemented PID control, probabilistic localization, and path planning methods in Python.",
      nextSteps: "[Insert future software or hardware upgrades]",
      imagePlaceholder: "Placeholder: Robot Navigating Environment"
    }
  },
  {
    slug: "computer-vision-pipeline",
    title: "Computer Vision Pipeline",
    role: "Software/Perception Developer",
    duration: "[Insert duration]",
    tldr: "Developed a Python and NumPy-based computer vision pipeline from scratch (without OpenCV) to estimate camera-to-subject distance and focal length, achieving 90% accuracy across 1-10 foot distances.",
    heroImage: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg",
    tags: ["Python", "NumPy", "Computer Vision", "Image Segmentation", "Algorithms"],
    constraints: {
      budget: "N/A (Software)",
      weightSize: "N/A",
      performance: "Must estimate distance and focal length robustly under highly noisy image conditions.",
      manufacturing: "Required building the pipeline entirely from scratch using only NumPy, strictly avoiding external computer vision libraries like OpenCV."
    },
    conceptGeneration: {
      ideation: "Captured test images of tennis balls at varying distances (1 to 10 feet) using an iPhone 12 to build a testing dataset for thresholding and depth estimation.",
      pivot: "Implemented a queue-based breadth-first search (BFS) flood-fill algorithm for segmentation to efficiently label and differentiate objects without the memory overhead and crash risks of recursion.",
      imagePlaceholder: "Placeholder: Algorithm Flowchart"
    },
    detailedDesign: {
      architecture: "Integrated HSV color space conversion, Gaussian blurring, and carefully tuned thresholding to reduce noise and isolate targets before BFS segmentation.",
      calculations: "Calculated centroid and area by averaging pixel positions. Estimated distance using the geometric equation d = f * h / h', converting the iPhone 12's focal length and sensor width into pixel units.",
      imagePlaceholder: "Placeholder: Code Architecture / Math Logic"
    },
    prototyping: {
      manufacturing: "Coded entirely in Python utilizing NumPy.",
      failures: "Initial noise artifacts were misidentified as targets; resolved this by implementing an area computation filter to exclude small objects unlikely to be tennis balls.",
      testing: "Evaluated using thresholded and segmented test images, successfully isolating the targets and plotting the centroid (blue circle) on each respective tennis ball.",
      imagePlaceholder: "Placeholder: Thresholded / Segmented Tennis Ball Images"
    },
    outcomes: {
      specs: "Achieved an average distance estimation accuracy within 10% across 1 to 10-foot testing ranges with an average processing time of ~10 seconds per image.",
      nextSteps: "[Insert how this pipeline will be integrated into future robotics projects, such as Roborink]",
      imagePlaceholder: "Placeholder: Final Distance Estimation Overlay"
    }
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(study => study.slug === slug);
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

