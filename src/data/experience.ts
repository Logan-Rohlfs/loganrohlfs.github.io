import type { Entry } from './types';
export const experience: Entry[] = [
  {
    id: 'firefly',
    title: 'Launch Vehicle Flight Software Intern',
    shortTitle: 'Firefly Aerospace',
    organization: 'Firefly Aerospace',
    logo: 'firefly',
    period: 'May – Aug 2026',
    role: 'Flight Software Intern',
    category: 'Industry experience',
    summary:
      'At Firefly Aerospace in Cedar Park, Texas, I worked on test infrastructure, configuration tooling, and build pipelines for launch vehicle flight software.',
    cover: {
      src: 'firefly/alpha.jpg',
      alt: 'Firefly Alpha launch vehicle on the pad',
      caption: 'Firefly Aerospace · Alpha launch vehicle.',
    },
    sections: [
      {
        title: 'Contributions',
        points: [
          'Supported hardware-in-the-loop testing for a major flight-software revision.',
          'Worked with Avionics, Firmware, and Electrical Engineering on a universal vehicle configuration tool.',
          'Integrated CI/CD pipelines for unit testing, cross-compilation, and package deployment.',
        ],
      },
      {
        title: 'What I took back to the lab',
        text: 'Working with production-scale verification shaped how I structure testing and integration on APEX: connect software changes to repeatable tests and the hardware they need to run on.',
      },
    ],
  },
  {
    id: 'avionics',
    title: 'Avionics Team Lead',
    shortTitle: 'Space Raiders',
    organization: 'Texas Tech Space Raiders',
    logo: 'spaceRaiders',
    period: 'Mar 2025 – Present',
    role: 'Interim, then current Team Lead',
    category: 'Technical leadership',
    summary:
      'I lead avionics across flight hardware, firmware, and ground systems for Space Raiders. My work combines system design with team development, integration, and launch operations.',
    cover: {
      src: 'west-texas-sunset/photos/pad-ops.jpg',
      alt: 'Avionics work on West Texas Sunset at the pad',
      caption: 'Final avionics checks at IREC 2026.',
    },
    stats: [
      { value: '15+', label: 'Students across disciplines' },
      { value: 'Mar 2025', label: 'Leadership began' },
      { value: 'IREC 2026', label: 'Custom avionics stack flown' },
    ],
    sections: [
      {
        title: 'Technical ownership',
        points: [
          'Set architecture, development milestones, and test schedules across avionics subsystems.',
          'Coordinate integration with recovery, airbrakes, and vehicle teams.',
          'Lead functional verification, design reviews, and competition documentation.',
          'Run avionics readiness checks and troubleshoot on the pad.',
        ],
      },
      {
        title: 'Developing the team',
        points: [
          'Coordinate 15+ students across mechanical, electrical, and software work.',
          'Teach Git, electronics fundamentals, soldering, and PCB design.',
          'Guide subsystem owners through reviews and documentation.',
          'Turn post-flight findings into priorities for the next design cycle.',
        ],
      },
    ],
    timeline: [
      {
        date: 'Aug 2024',
        title: 'Joined avionics',
        text: 'Started developing the perf-board airbrakes controller and supporting subsystem integration.',
      },
      {
        date: 'Mar 2025 onward',
        title: 'Interim leadership → Team Lead',
        text: 'Took on avionics integration, testing, and launch operations, then continued as the current lead.',
      },
      {
        date: '2025 – 2026',
        title: 'Built toward competition',
        text: 'Led architecture planning, onboarding, design reviews, integration, and verification for the custom avionics stack.',
      },
      {
        date: 'June 2026',
        title: 'IREC flight campaign',
        text: 'Led avionics operations for West Texas Sunset. The vehicle placed first in the 10k SRAD category and tenth overall.',
      },
    ],
    note: {
      title: 'Learning from the complete flight',
      text: 'The custom computer and telemetry operated through flight, but estimator oscillation, a damaged video antenna, and manual tracking exposed clear areas for improvement. Those findings guide the next iteration.',
    },
    gallery: [
      {
        src: 'west-texas-sunset/photos/rail.jpg',
        alt: 'Logan beside West Texas Sunset on the launch rail',
        caption: 'With West Texas Sunset on the rail.',
      },
      {
        src: 'avionics-team-lead/photos/avbay.jpg',
        alt: 'Avionics bay integration hardware',
        caption: 'Avionics bay integration.',
      },
      {
        src: 'west-texas-sunset/irec-2026/team-showcase.jpg',
        alt: 'Space Raiders team with West Texas Sunset and its competition display at IREC 2026',
        caption: 'The team and integrated systems at the IREC showcase.',
      },
      {
        src: 'airbrakes/photos/raiderx-flight.jpg',
        alt: 'RaiderX launch at IREC 2025',
        caption: 'The previous campaign: RaiderX at IREC 2025.',
      },
    ],
    links: [
      {
        label: 'Read the flight campaign',
        href: '/projects.html#west-texas-sunset',
      },
    ],
  },
  {
    id: 'roboranch',
    title: 'GEAR RoboRanch Table Referee',
    shortTitle: 'RoboRanch',
    organization: 'Texas Tech University',
    logo: 'texasTech',
    period: 'Spring 2025',
    role: 'Volunteer Referee',
    category: 'STEM outreach',
    summary:
      'Supported a LEGO Technic robotics competition for elementary and middle school students, balancing consistent scoring with clear, encouraging feedback.',
    cover: {
      src: 'roboranch/cover.jpg',
      alt: 'GEAR RoboRanch robotics competition',
      caption: 'GEAR RoboRanch at Texas Tech.',
    },
    sections: [
      {
        title: 'Contribution',
        points: [
          'Scored practice, qualifying, and championship rounds and interpreted competition rules.',
          'Explained penalties and corrections to help students improve.',
          'Guided teams through competition procedures under faculty supervision.',
        ],
      },
    ],
    gallery: [
      {
        src: 'roboranch/photos/trophies.jpg',
        alt: 'RoboRanch competition trophies',
        caption: 'RoboRanch competition awards.',
      },
    ],
  },
  {
    id: 'lupe-tortilla',
    title: 'Server, Lupe Tortilla',
    shortTitle: 'Lupe Tortilla',
    organization: 'Lupe Tortilla · Allen, Texas',
    period: 'Mar 2023 – Present',
    role: 'Customer Operations & Service',
    category: 'Additional experience',
    summary:
      'Coordinated take-out and large catering orders in a busy restaurant, where accuracy, timing, and communication mattered on every shift.',
    cover: {
      src: 'lupe-tortilla/cover.jpg',
      alt: 'Lupe Tortilla restaurant',
      caption: 'Lupe Tortilla · Allen, Texas.',
    },
    sections: [
      {
        title: 'Contribution',
        points: [
          'Managed customer pickups and event orders exceeding $1,500.',
          'Coordinated order accuracy, timing, and changes with kitchen staff and customers.',
          'Supported catering logistics for weddings, graduations, and local events.',
        ],
      },
    ],
    gallery: [
      {
        src: 'lupe-tortilla/photos/Catering.jpg',
        alt: 'Catering order preparation',
        caption: 'Preparing catering orders.',
      },
    ],
  },
];
