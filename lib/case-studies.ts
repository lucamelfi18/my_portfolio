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
    labels?: { ideation?: string; pivot?: string };
  };
  detailedDesign: {
    architecture: string;
    calculations: string;
    imagePlaceholder: string | string[];
    labels?: { architecture?: string; calculations?: string };
  };
  prototyping: {
    manufacturing: string;
    failures: string;
    testing: string;
    imagePlaceholder: string | string[];
    labels?: { manufacturing?: string; failures?: string; testing?: string };
  };
  outcomes: {
    specs: string;
    nextSteps: string;
    imagePlaceholder: string | string[];
  };
  postHackathon?: {
    description: string;
    imagePlaceholder?: string | string[];
    labels?: { description?: string };
  };
  miniProjects?: {
    title: string;
    description: string;
    tags: string[];
    images: string[];
  }[];
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
      imagePlaceholder: ["/full_model.JPG", "/derivation.png", "/matlab_plot.png"]
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
    slug: "autonomous-robotics",
    title: "Robotics Projects",
    role: "Robotics Engineer",
    duration: "February 2025 – May 2025",
    tldr: "A collection of robotic platforms engineered to execute complex control algorithms, from self-balancing robots to computer vision-guided rescue bots and kinematic manipulators.",
    heroImage: "/usar.jpeg",
    tags: ["Python", "Raspberry Pi", "PID Control", "OpenCV", "IMUs", "Inverse Kinematics", "Odometry", "3D Printing", "SolidWorks"],
    constraints: {
      budget: "Course-provided electronics, microcontrollers, and raw rapid-prototyping materials.",
      weightSize: "Varied per project; all strictly constrained to function within predefined tabletop environments or obstacle courses.",
      performance: "Required real-time sensor fusion, sub-inch odometry accuracy, and robust teleoperation/perception in zero-light conditions.",
      manufacturing: "Rapidly built and iterated using Legos, FDM 3D printing, laser cutting, and modular off-the-shelf actuators/electronics."
    },
    conceptGeneration: {
      ideation: "Analyzed kinematic and dynamic requirements for four distinct robotic challenges, ideating locomotion and manipulation strategies ranging from wheeled drivetrains to spider-inspired linkages.",
      pivot: "Adapted control strategies based on hardware limitations, pivoting from raw encoder data to implementing complementary filters for sensor fusion to eliminate drift in self-balancing tasks.",
      imagePlaceholder: "Placeholder: Whiteboard Kinematics / Linkage Sketches"
    },
    detailedDesign: {
      architecture: "Architected full-stack mechatronic systems: derived inverse kinematics (IK) for 2D manipulation, formulated sensor fusion algorithms, and designed high-torque modular drivetrains in SolidWorks.",
      calculations: "Calculated 9:1 gear reductions for stair-climbing torque and computed configuration space mapping for collision-free robotic arm trajectories.",
      imagePlaceholder: "Placeholder: CAD Assembly / Configuration Space Map"
    },
    prototyping: {
      manufacturing: "Fabricated custom high-traction wheels, robotic linkages, and servo mounts using 3D printing and laser cutting.",
      failures: "Initial teleoperation and CV algorithms failed under poor lighting; resolved by engineering a custom onboard illumination system for reliable zero-light navigation.",
      testing: "Iteratively tuned PID control loops in real-time to eliminate overshoot and ensure rapid disturbance recovery for self-balancing and positioning tasks.",
      imagePlaceholder: "Placeholder: Testing Videos / Robot Closeups"
    },
    outcomes: {
      specs: "Successfully implemented robust control algorithms achieving high-accuracy positioning, balance under disturbance, and autonomous computer-vision based navigation.",
      nextSteps: "These projects solidified foundational mechatronics skills, serving as a stepping stone for the more complex perception and control systems currently being developed in the Roborink project.",
      imagePlaceholder: "Placeholder: Final Assembly Photo"
    },
    miniProjects: [
      {
        title: "U.S.A.R. Robot (Urban Search & Rescue)",
        description: "Engineered a teleoperated Search & Rescue robot capable of navigating rough terrain and completing autonomous computer vision tasks in complete darkness. \n\n**Hardware & Design:** Designed a high-torque 9:1 drivetrain capable of climbing stairs and steep ramps. Modeled and 3D-printed custom wheels optimized for varied terrain, featuring rubber treads in the front and slotted rubber-band grips in the rear. Engineered and integrated a custom onboard illumination system to enable reliable visual perception in zero-light environments.\n\n**Software & Perception:** Integrated a Raspberry Pi camera to teleoperate a servo-actuated manipulator arm and camera mount. Developed an OpenCV pipeline that leveraged the custom lighting system to autonomously identify arrow orientations and navigate toward a target, proving the robust integration of the hardware and vision stack.",
        tags: ["Raspberry Pi", "OpenCV", "3D Printing", "SolidWorks", "Teleoperation"],
        images: ["/gearbox.jpeg", "/stairs.jpeg"]
      },
      {
        title: "Two-Link Kinematic Manipulator",
        description: "Developed a 6.5-inch, two-link robotic arm capable of positioning its end effector across a full coordinate grid with <0.25-inch accuracy using odometry feedback.\n\n**Kinematics & Control:** Implemented inverse kinematics (IK) algorithms in Python to solve for joint angles, enabling the system to map its configuration space and compute safe, collision-free paths. Given target coordinates, the software generated and executed smooth, precise trajectories.\n\n**Mechatronics:** Assembled the manipulator with a custom 3:1 gear reduction, carefully mitigating backlash to ensure highly repeatable and predictable motion.",
        tags: ["Inverse Kinematics", "Python", "Odometry"],
        images: ["/config_space.jpeg", "/robot_arm.mp4"]
      },
      {
        title: "Inverted Pendulum / Self-Balancing Robot",
        description: "Architected a two-wheeled self-balancing robot utilizing an IMU for tilt measurement and wheel encoders for position and velocity tracking.\n\n**Sensor Fusion & PID:** Engineered a complementary filter to fuse inertial and encoder data, effectively minimizing sensor drift and overshoot. Tuned a highly responsive, real-time PID control loop to adjust motor speeds, allowing the robot to maintain vertical stability, maneuver precisely, and actively recover from external physical disturbances.",
        tags: ["PID Control", "IMU", "Sensor Fusion"],
        images: ["/self_balancing.mp4"]
      },
      {
        title: "Spider-Linkage Locomotion Robot",
        description: "Challenged standard wheeled paradigms by designing a legged robot that utilized complex mechanical linkages to mimic a spider's walking gait.\n\n**Hardware & Odometry:** Translated continuous rotational motor output into a precise stepping motion. Developed a custom odometry tracking system that successfully measured the robot's movement to within 2 inches of accuracy entirely without the use of wheels, proving a strong understanding of linkage kinematics and alternative position tracking.",
        tags: ["Linkage Design", "Odometry"],
        images: ["/spider.jpeg"]
      }
    ]
  },
  {
    slug: "roborink",
    title: "Roborink (Robotic Air Hockey)",
    role: "Co-Creator / Build18 Hackathon Team, Mechanical Design Lead",
    duration: "1 week (initial hackathon), ongoing",
    tldr: "Designed and built a robotic air hockey system featuring a joystick-controlled linear actuator paddle, which is now being upgraded for fully autonomous gameplay.",
    heroImage: "/roborink.jpg",
    tags: ["Robotics", "Linear Actuators", "Computer Vision", "Hackathon", "ANSYS", "OpenCV", "Python"],
    constraints: {
      budget: "Funded by CMU’s Robotics Club and BUILD18 Hackathon.",
      weightSize: "56 in x 28 in.",
      performance: "Must actuate fast enough to block and return a moving air hockey puck.",
      manufacturing: "Initial build completed within a one-week hackathon timeline."
    },
    conceptGeneration: {
      ideation: "Designed a passive paddle mechanism driven by a NEMA17 stepper motor, controlled via a stepper driver and Arduino interface, capable of reaching 1500 mm/s to match puck speeds.",
      pivot: "The stepper motor setup was chosen for a balance between cost, ease of implementation, and speed, but required the design of an active thermal cooling enclosure to manage heat dissipation during high-speed play.",
      imagePlaceholder: "/group.jpeg"
    },
    detailedDesign: {
      architecture: "Designed a stepper motor–driven linear actuator paired with a custom paddle mechanism, integrated with an active cooling enclosure. Mounted using custom wooden supports with an elastic band to ensure consistent table contact.",
      calculations: "Executed thermal FEA in ANSYS to simulate heat generation and optimize the cooling enclosure design.",
      imagePlaceholder: "Rendering..."
    },
    prototyping: {
      manufacturing: "Rapidly prototyped during the Build18 hardware hackathon.",
      failures: "Stepper motors risked severe overheating, which was mitigated by the thermally optimized enclosure. Driving the stepper motor at high speeds resulted in missed steps and loss of position. Evaluated ultrasonic sensors and encoders for closed-loop control, but ultimately settled on limit switches for reliable travel bounds.",
      testing: "Validated that the linear actuator's 1500 mm/s maximum speed was capable of consistently blocking high-velocity pucks.",
      imagePlaceholder: "/award.jpeg"
    },
    outcomes: {
      specs: "Successfully implemented a functional joystick interface for human-to-robot play without thermal failure.",
      nextSteps: "Currently integrating a computer vision pipeline to enable fully autonomous gameplay. System can currently track the puck and adjust position accordingly.",
      imagePlaceholder: "/roborink_demo1.mp4"
    },
    postHackathon: {
      description: "Following the hackathon, we migrated the control architecture to a Raspberry Pi 5 to support onboard computer vision processing and developed an OpenCV tracking pipeline in Python that applies a Gaussian blur and adaptive thresholding to detect the puck under varying lighting conditions. The algorithm identifies contours, evaluates circularity using (4π × area) / perimeter², and highlights the puck's coordinates in real time. To support this, I am currently designing a PVC overhead frame for the camera.",
      imagePlaceholder: "/ubunto.jpg"
    }
  },
  {
    slug: "ratchet-assisted-vise",
    title: "Ratchet-Assisted Vise",
    role: "Mechanical Design & Manufacturing, 5-person team",
    duration: "2025 Fall Semester",
    tldr: "Designed and fabricated an ergonomic benchtop vise that eliminates wrist flexion and gripping force by integrating a reversible ratchet and flywheel system.",
    heroImage: "/full vise.JPG",
    tags: ["Mechanical Design", "FEA", "Prototyping", "Ergonomics", "Waterjet", "Laser Cutting", "3D Printing"],
    constraints: {
      budget: "Estimated retail price target of under $100.",
      weightSize: "Permitted to sacrifice portability to achieve accessibility goals.",
      performance: "Must reliably output 30 N·m of torque for clamping, while withstanding an extreme peak load of 150 N·m.",
      manufacturing: "Designed for rapid iteration and scalable fabrication using tools like waterjets, laser cutters, lathes, and 3D printers."
    },
    conceptGeneration: {
      ideation: "Evaluated a motorized assistance concept against a purely mechanical ratchet-and-flywheel design using a Pugh Matrix that compared affordability, ease of use, and manufacturing complexity.",
      pivot: "Discarded the motorized idea because a mechanical ratchet required no electronic components. Removed the gearbox as a massive flywheel provided adequate energy retention, and pivoted to a central hex shaft attachment.",
      imagePlaceholder: "/pugh_matrix.jpg"
    },
    detailedDesign: {
      architecture: "Relies on a central hex shaft driving a flywheel to store rotational energy, alongside a custom reversible ratchet utilizing dual pins and a 3D-printed switcher to control directional locking.",
      calculations: "Conducted FEA on the steel ratchet pin under a 150 N·m load. Hand calculations for axial stress yielded a factor of safety of 1.04, matching the FEA simulated factor of safety of 0.931, well exceeding the 30 N·m standard use case.",
      imagePlaceholder: "/full vise.JPG"
    },
    prototyping: {
      manufacturing: "Rapidly prototyped in laser-cut acrylic before fabricating final parts using water-jetted steel pins, a water-jetted aluminum gear and flywheel, a manually turned hex shaft, and a 3D-printed PLA switcher.",
      failures: "Early designs lacked a reliable return mechanism for the ratchet. Solved by designing a weighted pendulum handle that automatically returns the mechanism to an upright starting position.",
      testing: "Validated that the mechanical advantage system allowed forearm operation over wrist flexion, outputting nearly 5 times the required 30 N·m clamping force without risking component failure.",
      imagePlaceholder: ["/side_by_side.jpg", "/pin_fea.jpg"]
    },
    outcomes: {
      specs: "Delivered a fully functional accessible vise prototype with a single-unit component cost of $108.45, retaining standard hand operation capabilities.",
      nextSteps: "Future iterations would include a universal adjustable coupler to attach the ratchet subassembly to various vise shafts, and a flywheel braking system.",
      imagePlaceholder: "/vice_vid.mp4"
    }
  },
  {
    slug: "computer-vision-pipeline",
    title: "Computer Vision Pipeline",
    role: "Software/Perception Developer",
    duration: "January 2025",
    tldr: "Developed a Python and NumPy-based computer vision pipeline from scratch (without OpenCV) to estimate camera-to-subject distance and focal length, achieving >90% accuracy across 1-10 foot distances.",
    heroImage: "code.jpg",
    tags: ["Python", "NumPy", "Computer Vision", "Image Segmentation", "Algorithms"],
    constraints: {
      budget: "N/A (Software)",
      weightSize: "N/A",
      performance: "Must estimate distance and focal length robustly under highly noisy and variable image conditions.",
      manufacturing: "Required building the pipeline entirely from scratch using only NumPy, strictly avoiding external computer vision libraries like OpenCV."
    },
    conceptGeneration: {
      ideation: "Captured test images of tennis balls at varying distances (1 to 10 feet) using an iPhone 12 to build a testing dataset for thresholding and depth estimation.",
      pivot: "Implemented a queue-based breadth-first search (BFS) flood-fill algorithm for segmentation to efficiently label and differentiate objects without the memory overhead and crash risks of recursion.",
      imagePlaceholder: "/tennis_ball.jpeg",
      labels: { ideation: "Data Collection:", pivot: "Algorithm Selection:" }
    },
    detailedDesign: {
      architecture: "Integrated HSV color space conversion, Gaussian blurring, and carefully tuned thresholding to reduce noise and isolate targets before BFS segmentation.",
      calculations: "Calculated centroid and area by averaging pixel positions. Estimated distance using the geometric equation d = f * h / h', converting the iPhone 12's focal length and sensor width into pixel units.",
      imagePlaceholder: "/thresholded.jpg",
      labels: { architecture: "Pipeline Architecture:", calculations: "Distance Estimation:" }
    },
    prototyping: {
      manufacturing: "Coded entirely in Python utilizing NumPy.",
      failures: "Initial noise artifacts were misidentified as targets; resolved this by implementing an area computation filter to exclude small objects unlikely to be tennis balls.",
      testing: "Evaluated using thresholded and segmented test images, successfully isolating the targets and plotting the centroid (blue circle) on each respective tennis ball.",
      imagePlaceholder: "/centroid.jpg",
      labels: { manufacturing: "Implementation:", failures: "Debugging:", testing: "Validation:" }
    },
    outcomes: {
      specs: "Achieved an average distance estimation accuracy within 10% across 1 to 10-foot testing ranges with an average processing time of ~10 seconds per image over 40 images with varying levels of noise, rotation, and other variations.",
      nextSteps: "Project completed.",
      imagePlaceholder: "/res.jpg"
    }
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(study => study.slug === slug);
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

