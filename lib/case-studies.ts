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
    imagePlaceholder: string;
  };
  detailedDesign: {
    architecture: string;
    calculations: string;
    imagePlaceholder: string;
  };
  prototyping: {
    manufacturing: string;
    failures: string;
    testing: string;
    imagePlaceholder: string;
  };
  outcomes: {
    specs: string;
    nextSteps: string;
    imagePlaceholder: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "buccal-mass-biomechanics-platform",
    title: "Buccal Mass Biomechanics Platform",
    role: "Researcher at B.O.R.G.",
    duration: "[Insert duration here]",
    tldr: "Developing a precision linear actuation system integrated with a load cell to study viscoelastic forces in the Aplysia californica feeding organ.",
    heroImage: "https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg",
    tags: ["Arduino", "Data Acquisition", "Mechatronics", "Linear Actuation", "Biomechanics"],
    constraints: {
      budget: "[Insert budget constraints]",
      weightSize: "[Insert physical footprint]",
      performance: "Must execute incremental movements with time-based pauses while capturing high-frequency force data.",
      manufacturing: "System must function within a custom aquatic testing enclosure."
    },
    conceptGeneration: {
      ideation: "[Insert a photo of whiteboard sketches or design matrices regarding actuation methods]",
      pivot: "[Insert explanation of why alternative actuation or tensioning concepts were discarded]",
      imagePlaceholder: "Placeholder: Whiteboard Sketches / Concept Matrix"
    },
    detailedDesign: {
      architecture: "Modeled the system using a stepper motor, lead screw, steel linear rails, an anti-rotation carriage, and pulley-tensioning mechanics.",
      calculations: "[Insert specific calculations for lead screw torque, motor sizing, or rail deflection]",
      imagePlaceholder: "Placeholder: CAD Rendering / FEA Heatmap"
    },
    prototyping: {
      manufacturing: "Fabrication of steel linear rails and custom housing elements.",
      failures: "[Insert a challenge faced during fabrication or programming, and how you solved it]",
      testing: "Programmed parametric motion algorithms on Arduino; integrated a load cell and instrumentation amplifier with a microcontroller to capture data.",
      imagePlaceholder: "Placeholder: Physical Prototype / Testing Rig"
    },
    outcomes: {
      specs: "[Insert final tolerance, force resolution, or project status]",
      nextSteps: "Prototype is currently in fabrication; next steps include finalizing the aquatic enclosure and initiating live tissue testing.",
      imagePlaceholder: "Placeholder: Final Assembly Photo"
    }
  },
  {
    slug: "roborink",
    title: "Roborink (Robotic Air Hockey)",
    role: "Co-Creator / Build18 Hackathon Team",
    duration: "1 week (initial hackathon), ongoing",
    tldr: "Designed and built a robotic air hockey system featuring a joystick-controlled linear actuator paddle, which is now being upgraded for fully autonomous gameplay.",
    heroImage: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
    tags: ["Robotics", "Linear Actuators", "Computer Vision", "Hackathon"],
    constraints: {
      budget: "Funded by CMU’s Robotics Club",
      weightSize: "[Insert table dimensions]",
      performance: "Must actuate fast enough to block and return a moving air hockey puck.",
      manufacturing: "Initial build completed within a one-week hackathon timeline."
    },
    conceptGeneration: {
      ideation: "[Insert sketches of paddle mechanism or actuator layout]",
      pivot: "[Explain why this specific stepper motor/linear actuator setup was chosen over alternatives like belt drives]",
      imagePlaceholder: "Placeholder: Paddle Sketches"
    },
    detailedDesign: {
      architecture: "Designed a stepper motor–driven linear actuator paired with a custom paddle mechanism.",
      calculations: "[Insert kinematic calculations for paddle speed or motor torque requirements]",
      imagePlaceholder: "Placeholder: CAD of Linear Actuator Setup"
    },
    prototyping: {
      manufacturing: "Rapidly prototyped during the Build18 hardware hackathon.",
      failures: "[Insert a point of failure during the hackathon and how the team adapted]",
      testing: "[Insert data on paddle response time or system latency]",
      imagePlaceholder: "Placeholder: Hackathon Build Photos"
    },
    outcomes: {
      specs: "Successfully implemented a functional joystick interface for human-to-robot play.",
      nextSteps: "Currently integrating a computer vision pipeline to enable fully autonomous gameplay.",
      imagePlaceholder: "Placeholder: Completed Table Image"
    }
  },
  {
    slug: "ratchet-assisted-vise",
    title: "Ratchet-Assisted Vise",
    role: "Mechanical Designer",
    duration: "[Insert duration]",
    tldr: "Designed and fabricated an ergonomic vise that reduces continuous torque input for users with wrist impairments by integrating a ratcheting system and flywheel.",
    heroImage: "https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg",
    tags: ["Mechanical Design", "FEA", "Prototyping", "Ergonomics"],
    constraints: {
      budget: "[Insert budget]",
      weightSize: "[Insert dimensions]",
      performance: "Must structurally withstand 150 N·m torque loads.",
      manufacturing: "Iterative acrylic prototyping scaling up to final aluminum and steel fabrication."
    },
    conceptGeneration: {
      ideation: "[Insert morphological chart or sketches of mechanical advantage systems]",
      pivot: "[Explain the decision to use a ratchet and flywheel over other mechanical assist methods]",
      imagePlaceholder: "Placeholder: Mechanical Advantage Sketches"
    },
    detailedDesign: {
      architecture: "[Insert exploded view of the ratchet and flywheel integration]",
      calculations: "Validated structural performance via FEA, proving the system could sustain 150 N·m of torque.",
      imagePlaceholder: "Placeholder: FEA Analysis / Exploded CAD"
    },
    prototyping: {
      manufacturing: "Iterative prototyping in acrylic; final fabrication in aluminum and steel.",
      failures: "[Insert insights gained from the acrylic prototypes that influenced the metal design]",
      testing: "[Insert torque testing results or user ergonomic feedback]",
      imagePlaceholder: "Placeholder: Acrylic Prototypes vs Metal Final"
    },
    outcomes: {
      specs: "Successfully stored energy via flywheel and reduced continuous manual input.",
      nextSteps: "[Insert what you would improve for a V2 design]",
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
    tldr: "Created a Python-based computer vision pipeline utilizing thresholding and segmentation to analyze images and estimate camera-to-subject distance.",
    heroImage: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg",
    tags: ["Python", "Computer Vision", "Image Segmentation", "Algorithms"],
    constraints: {
      budget: "N/A (Software)",
      weightSize: "N/A",
      performance: "Must accurately execute convolution and feature extraction to estimate depth.",
      manufacturing: "N/A"
    },
    conceptGeneration: {
      ideation: "[Insert flowchart of the algorithmic pipeline]",
      pivot: "[Insert any changes made to the computer vision techniques used]",
      imagePlaceholder: "Placeholder: Algorithm Flowchart"
    },
    detailedDesign: {
      architecture: "(Software Architecture) Built utilizing convolution, thresholding, and segmentation techniques.",
      calculations: "(Algorithm Logic) [Insert math used to translate pixel data to physical distance]",
      imagePlaceholder: "Placeholder: Code Architecture / Math Logic"
    },
    prototyping: {
      manufacturing: "Coded entirely in Python.",
      failures: "[Insert challenges handling lighting variations or false positives]",
      testing: "[Insert accuracy metrics comparing the estimated distance vs. true distance]",
      imagePlaceholder: "Placeholder: Computer Vision Output Logs"
    },
    outcomes: {
      specs: "Established a robust foundation for real-time perception and quantitative image analysis.",
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

