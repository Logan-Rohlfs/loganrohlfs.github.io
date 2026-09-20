import type { Entry } from './types';
export const projects: Entry[] = [
  {
    id: 'west-texas-sunset',
    preview: {
      src: 'west-texas-sunset/irec-2026/team-stage.jpg',
      alt: 'Space Raiders with West Texas Sunset at IREC 2026',
      caption: 'The team and completed vehicle at IREC 2026.',
    },
    title: 'West Texas Sunset',
    shortTitle: 'West Texas Sunset',
    organization: 'Texas Tech Space Raiders',
    logo: 'spaceRaiders',
    period: 'IREC 2026',
    role: 'Avionics Lead',
    category: 'Flight systems & integration',
    status: 'Flown · June 2026',
    summary:
      'A custom avionics stack, from flight computer to groundstation. I led integration, verification, and pad operations for Space Raiders’ IREC 2026 vehicle.',
    cover: {
      src: 'west-texas-sunset/cover.jpg',
      alt: 'Finished West Texas Sunset beside the Masked Rider statue',
      caption: 'West Texas Sunset, completed at Texas Tech before IREC 2026.',
      fit: 'contain',
    },
    stats: [
      { value: '10,004 ft', label: 'Measured apogee' },
      { value: '10,000 ft', label: 'Declared target' },
      { value: '1st', label: '10k SRAD category' },
      { value: '10th', label: 'Overall at IREC 2026' },
    ],
    sections: [
      {
        title: 'The mission',
        text: 'Fly Space Raiders’ first fully custom avionics stack in the 10,000 ft Student Researched and Designed (SRAD) category. APEX handled control and telemetry, HORIZON received the downlink, and commercial electronics handled recovery.',
      },
      {
        title: 'My contribution',
        points: [
          'Owned the flight computer, groundstation, and airbrakes control chain.',
          'Coordinated functional verification across hardware, software, recovery, and airbrakes teams.',
          'Prepared block diagrams, wiring schematics, and design justifications for competition.',
          'Ran avionics checks and troubleshooting on the pad through launch.',
        ],
      },
    ],
    note: {
      title: 'Result, with context',
      text: 'The vehicle finished 4 ft above its target. The velocity estimator oscillated in flight, so airbrakes actuation did not behave as designed. Its contribution to the apogee result cannot be quantified. Post-flight analysis is informing the next design cycle.',
    },
    gallery: [
      {
        src: 'west-texas-sunset/irec-2026/ignition-livestream.jpg',
        alt: 'Livestream view of the West Texas Sunset motor igniting at liftoff',
        caption: 'Motor ignition captured by the IREC livestream.',
      },
      {
        src: 'west-texas-sunset/irec-2026/signed-rocket-carry.jpg',
        alt: 'Signed West Texas Sunset fin can being carried through the IREC staging area',
        caption: 'Carrying the signed vehicle through staging.',
      },
      {
        src: 'west-texas-sunset/irec-2026/pad-d1.jpg',
        alt: 'West Texas Sunset vertical on launch pad D1',
        caption: 'West Texas Sunset on pad D1.',
        fit: 'contain',
      },
      {
        src: 'west-texas-sunset/irec-2026/competition-poster.jpg',
        alt: 'West Texas Sunset competition poster covering the vehicle, recovery, avionics, propulsion, payload, airbrakes, and aerostructures',
        caption: 'Team 307 competition poster presented at IREC 2026.',
        fit: 'contain',
      },
      {
        src: 'west-texas-sunset/irec-2026/team-stage.jpg',
        alt: 'Space Raiders team holding West Texas Sunset at IREC 2026',
        caption: 'Space Raiders with West Texas Sunset at IREC 2026.',
        fit: 'contain',
        layout: 'wide',
      },
    ],
    video: {
      src: '/media/telemetry.mp4',
      poster: 'west-texas-sunset/telemetry-poster.jpg',
      caption:
        'Recorded HORIZON telemetry feed from the IREC 2026 flight. Antennas were tracked manually.',
    },
    links: [
      {
        label: 'Texas Tech competition recap',
        href: 'https://www.depts.ttu.edu/coe/wcoenews/posts/2026/07/space-raiders-win-first-at-IREC-2026.php',
      },
      { label: 'Explore the flight computer', href: '/projects.html#apex' },
      {
        label: 'Explore the groundstation',
        href: '/projects.html#horizon-tracking',
      },
    ],
  },
  {
    id: 'apex',
    pending: {
      title: 'Next revision · validation update pending',
      prompt:
        'Updated design changes and validation results will be added after the next test cycle is documented.',
    },
    title: 'APEX Flight Computer',
    shortTitle: 'APEX',
    organization: 'Texas Tech Space Raiders',
    logo: 'spaceRaiders',
    period: 'Aug 2025 – Present',
    role: 'Hardware & Flight Software',
    category: 'Embedded systems & PCB design',
    status: 'REV1 flown · Next revision in work',
    summary:
      'The first student-designed flight computer flown by Space Raiders. I designed the four-layer board and flight software for state estimation, airbrakes control, telemetry, and onboard logging.',
    preview: {
      src: 'apex/photos/flight-board.jpg',
      alt: 'Populated APEX REV1 flight computer with Teensy 4.1',
      caption: 'APEX REV1 flight hardware.',
      fit: 'contain',
      presentation: 'horizontal',
    },
    cover: {
      src: 'apex/photos/flight-board.jpg',
      alt: 'Populated APEX REV1 flight computer with Teensy 4.1',
      caption: 'APEX REV1 — the actual hardware flown at IREC 2026.',
      fit: 'contain',
    },
    stats: [
      { value: '4 layers', label: 'Custom PCB' },
      { value: 'Cortex-M7', label: 'Teensy 4.1' },
      { value: 'June 2026', label: 'First flight' },
    ],
    sections: [
      {
        title: 'Flight software',
        points: [
          'Extended Kalman Filter fuses redundant sensor data for state estimation.',
          'Interrupt-driven tasks handle sensor conditioning, PID control, and telemetry.',
          'Flight-state logic and microSD logging support control and post-flight analysis.',
          'Control parameters were derived from RocketPy simulations and exercised in software-in-the-loop.',
        ],
      },
      {
        title: 'Hardware architecture',
        points: [
          'Signal–ground–ground–signal PCB stackup with redundant sensor suites.',
          'Dedicated GNSS and telemetry radio with separate SMA antenna connections.',
          'Magnetic arming and a 1S–3S Li-ion input for bench and vehicle integration.',
          'External servo-power support and selective hand assembly alongside JLCPCB PCBA.',
        ],
      },
    ],
    note: {
      title: 'What the flight taught me',
      text: 'The board, logging, and telemetry operated through the flight. An improperly tuned velocity estimator oscillated and drove inconsistent braking. Correcting the estimator is the priority for the next revision. Recovery decisions remained independent of APEX.',
    },
    timeline: [
      {
        date: 'Aug – Dec 2025',
        title: 'Revision A · design only',
        text: 'An ESP32-S3 layout reached routing completion but was never fabricated.',
      },
      {
        date: 'Jan – Mar 2026',
        title: 'Redesigned around Teensy 4.1',
        text: 'Moved to Cortex-M7 floating-point hardware and a single-core, interrupt-driven architecture for the estimator and control workload.',
      },
      {
        date: 'April 2026',
        title: 'REV1 manufactured',
        text: 'Fabricated, assembled, bench tested, and integrated into West Texas Sunset.',
      },
      {
        date: 'June 2026',
        title: 'First flight',
        text: 'Ran control, microSD logging, and telemetry at IREC 2026.',
      },
    ],
    galleryColumns: 3,
    gallery: [
      {
        src: 'apex/photos/integrated-stack.jpg',
        alt: 'APEX REV1 integrated with its battery pack and antenna connections',
        caption: 'APEX REV1 with power storage and antenna connections.',
      },
      {
        src: 'apex/rev1/front-routing.png',
        alt: 'Front copper routing and silkscreen layout for APEX REV1',
        caption: 'APEX REV1 front-layer routing and silkscreen.',
      },
      {
        src: 'apex/rev1/back-routing.png',
        alt: 'Back copper routing layout for APEX REV1',
        caption: 'APEX REV1 back-layer routing.',
      },
      {
        src: 'apex/rev1/sensor-schematic.png',
        alt: 'APEX REV1 redundant inertial, barometric, and magnetic sensor schematic',
        caption: 'Redundant inertial, barometric, and magnetic sensing.',
        fit: 'contain',
        layout: 'wide',
      },
      {
        src: 'apex/rev1/radio-schematic.png',
        alt: 'APEX REV1 GNSS and telemetry radio schematic',
        caption: 'GNSS and telemetry radio connections.',
        fit: 'contain',
        layout: 'wide',
      },
    ],
  },
  {
    id: 'horizon-tracking',
    title: 'HORIZON Groundstation',
    shortTitle: 'HORIZON',
    organization: 'Texas Tech Space Raiders',
    logo: 'spaceRaiders',
    period: 'Aug 2025 – Present',
    role: 'Ground Systems Development',
    category: 'Telemetry & visualization',
    status: 'Flown in reduced configuration',
    summary:
      'A Raspberry Pi groundstation that brings live telemetry, trajectory, and sensor health into one dashboard, with a manual fallback when automated antenna tracking is unavailable.',
    cover: {
      src: 'west-texas-sunset/telemetry-poster.jpg',
      alt: 'HORIZON telemetry and RF spectrum display during flight',
      caption:
        'HORIZON: recorded telemetry and RF spectrum during the IREC 2026 flight.',
      fit: 'contain',
    },
    sections: [
      {
        title: 'System design',
        text: 'A locally hosted dashboard on Raspberry Pi 5 is accessible from the station, laptops, and tablets. It combines live plots, RF spectrum and waterfall views, trajectory mapping, and Three.js orientation rendering.',
      },
      {
        title: 'Communications & tracking',
        points: [
          'Separate omnidirectional and directional 70 cm telemetry links, plus a planned 2.4 GHz video downlink.',
          'Timestamped GPS and inertial data support relative-position estimation and dead-reckoning between updates.',
          'A tripod-based pan-tilt design uses cycloidal drives and stepper motors.',
          'Modular antenna mounts support a quick change to handheld operation.',
        ],
      },
      {
        title: 'Flight performance',
        text: 'The 70 cm downlink delivered continuous flight state, sensor health, and trajectory data. A damaged video antenna required a data-only dashboard, and the pan-tilt mechanism was not flight-active. Antennas were hand-tracked throughout the flight.',
      },
      {
        title: 'Next iteration',
        text: 'Repair and re-qualify the video downlink, bring the pan-tilt mechanism into operation, and evaluate tracking control through ArduPilot-supported workflows or custom logic.',
      },
    ],
    gallery: [
      {
        src: 'horizon-tracking/cover.png',
        alt: 'Earlier HORIZON dashboard interface with simulation controls',
        caption: 'Earlier dashboard interface and simulation view.',
        fit: 'contain',
      },
      {
        src: 'horizon-tracking/cad.png',
        alt: 'CAD model of the HORIZON tracking groundstation',
        caption:
          'Tracking-platform CAD. Automated pointing was not used at IREC 2026.',
        fit: 'contain',
      },
    ],
    links: [
      {
        label: 'Watch the recorded telemetry',
        href: '/projects.html#west-texas-sunset-telemetry',
      },
    ],
  },
  {
    id: 'airbrakes',
    preview: {
      src: 'airbrakes/photos/raiderx-flight.jpg',
      alt: 'RaiderX in flight at IREC 2025',
      caption: 'RaiderX in flight at IREC 2025.',
    },
    title: 'Airbrakes Flight Controller',
    shortTitle: 'Airbrakes Controller',
    organization: 'Texas Tech Space Raiders',
    logo: 'spaceRaiders',
    period: 'Aug 2024 – Jul 2025',
    role: 'Early Lead & System Owner',
    category: 'Embedded controls',
    status: 'Flown · 2025 campaign',
    summary:
      'My first avionics system: a perf-board controller built to actuate airbrakes using off-the-shelf sensors. Its control approach and flight lessons became the foundation for APEX.',
    cover: {
      src: 'airbrakes/cover.jpg',
      alt: 'First airbrakes flight controller assembled on perf-board',
      caption: 'The original perf-board airbrakes flight controller.',
      fit: 'contain',
    },
    sections: [
      {
        title: 'Built end to end',
        points: [
          'Designed and integrated the controller hardware and firmware.',
          'Applied filtering and state estimation to sensor inputs feeding PID control.',
          'Coordinated with recovery and airbrakes teams on integration and control behavior.',
        ],
      },
      {
        title: 'Flight-driven iteration',
        text: 'The controller flew on Matador II at the Lone Star Cup, then on RaiderX during testing and IREC 2025. Test anomalies and rebuilds drove improvements to timing, diagnostics, and data integrity.',
      },
    ],
    gallery: [
      {
        src: 'airbrakes/photos/raiderx-flight.jpg',
        alt: 'RaiderX in flight at IREC 2025',
        caption: 'RaiderX in flight, IREC 2025.',
      },
      {
        src: 'airbrakes/photos/afc-crash.jpg',
        alt: 'Airbrakes controller hardware following a test-flight anomaly',
        caption: 'Recovered hardware after a test-flight anomaly.',
      },
    ],
    links: [
      { label: 'See how the design evolved', href: '/projects.html#apex' },
    ],
  },
  {
    id: 'connectedu',
    previewLogo: true,
    title: 'ConnectEDU',
    shortTitle: 'ConnectEDU',
    organization: 'Student software project',
    logo: 'connectEDU',
    period: 'Aug 2023 – May 2024',
    role: 'iOS Developer',
    category: 'Mobile software',
    status: 'Internal testing completed',
    summary:
      'An iOS app for student event participation and progress tracking, developed alongside Android and backend contributors.',
    cover: {
      src: 'connectedu/cover.png',
      alt: 'ConnectEDU app login interface',
      caption: 'ConnectEDU iOS interface.',
      fit: 'contain',
    },
    sections: [
      {
        title: 'My contribution',
        points: [
          'Designed a modular SwiftUI architecture and interface.',
          'Integrated authentication and data APIs.',
          'Coordinated development milestones with Android and backend teams.',
        ],
      },
      {
        title: 'Outcome',
        text: 'The application reached internal testing. Development ended when the school adopted a third-party solution.',
      },
    ],
  },
];
