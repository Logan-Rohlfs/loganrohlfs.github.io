# Original content reference

Existing prose retained before the rebuild. Not used to render the website.

## index.html

I am Logan Rohlfs, a Computer Engineering student at Texas Tech University with a passion for building systems that bridge software, hardware, and real world performance. I enjoy figuring out how things work and then improving them, especially when it comes to embedded systems, real time control, and communication systems.

My interests started with software in high school, and over time I began to appreciate the physical side of engineering. That shift led me to hands-on projects like custom flight computer boards, live telemetry systems, and embedded firmware for real time control. In June 2026 that work flew: West Texas Sunset carried the APEX flight computer I designed to an apogee of 10,004 feet against a 10,000 foot target, taking first place in the 10k SRAD category at IREC 2026 and tenth overall. Leading avionics for the Raider Aerospace Society has pushed me to grow not only technically but also as a collaborator and leader.

That summer I also worked as a Launch Vehicle Flight Software Intern at Firefly Aerospace, supporting hardware-in-the-loop testing for a major flight software revision and building CI/CD pipelines for unit testing, cross-compilation, and package deployment. Seeing how verification is done at production scale changed how I structure testing on my own designs. I like problems that require both planning and experimentation, and I get a lot of satisfaction out of seeing my work operate in the real world, including the parts that do not go to plan, which is usually where the useful lessons are.

Outside of structured projects, I am constantly learning new tools and approaches, whether that is improving my Linux workflows, exploring networking concepts, or helping teammates pick up skills like Git and PCB fundamentals. I enjoy engineering that works across software and hardware domains, and I am always excited to take on new challenges.

## projects.html

**Competition Vehicle | Avionics Lead**

West Texas Sunset was the Texas Tech Space Raiders entry in the 10,000 ft
SRAD (Student Researched and Designed) category at IREC 2026. It was the
first Space Raiders vehicle to fly a fully custom avionics stack: a
student-designed flight computer, a student-built groundstation, and an
active aerodynamic braking system. Commercial flight electronics were
limited to recovery.

I led avionics for the campaign. That covered the APEX flight computer,
the HORIZON groundstation, integration with recovery and airbrakes, and
avionics operations on the pad.

The vehicle reached an apogee of 10,004 feet against a declared 10,000
foot target, took first place in the 10k SRAD category, and finished
10th overall.

**Avionics contributions across the campaign:**

- Owned the flight computer, groundstation, and airbrakes control chain end to end
- Ran integration and functional verification across mechanical, electrical, and software subteams
- Prepared avionics documentation for competition: block diagrams, wiring schematics, and design justifications
- Ran avionics operations and troubleshooting on the pad through launch
- Led post-flight data review and the resulting design corrections

**Flown Hardware | Embedded Systems, Controls, and PCB Design**

APEX is the custom flight computer I designed for Space Raiders, and the
first student-designed flight computer the team has ever flown. It runs the active
airbrakes control loop, performs onboard state estimation, and downlinks live
telemetry to the HORIZON groundstation. It flew on West Texas Sunset at
IREC 2026.

#### Development timeline

#### Flight software

The control architecture is a PID loop driven by fused sensor data, with
parameters derived from RocketPy simulation and exercised in
software-in-the-loop before flight.

- Closed-loop airbrakes control using PID logic driven by fused sensor inputs
- Extended Kalman Filter for state estimation across redundant sensors
- Interrupt-driven task structure for high-rate sensor conditioning and control
- Telemetry generation and downlink of flight state and sensor data
- Onboard logging to microSD for post-flight analysis

The software maintains its own internal flight states for control purposes
(idle, boost, coast, deployment window, and apogee) while remaining
independent of recovery system decision-making in accordance with IREC rules.

#### PCB design and hardware architecture

APEX is a custom four-layer PCB designed for reliability in a high-vibration,
electrically noisy flight environment. A signal-ground-ground-signal stackup
improves return paths, reduces crosstalk, and lowers EMI sensitivity. No
controlled-impedance routing was required, but the layout follows the
practices that would support it if a future revision needs higher-speed
interfaces.

- Redundant physical sensor suites supporting fault detection and graceful degradation
- Onboard GNSS and a dedicated telemetry radio on separate SMA-fed antennas
- Magnetic arming switches for safe pad handling with the vehicle closed out
- Onboard regulation accepting 1S to 3S Li-ion for flexible bench testing and integration
- External UBEC support via vibration-resistant WAGO connectors for high-current servo loads
- Design-for-assembly targeting JLCPCB PCBA, with selective hand assembly for unsupported or bulky parts

**Flown in Reduced Configuration | Ground Systems, Communications, and Visualization**

HORIZON is a ground tracking and visualization system that receives,
displays, and operates on live telemetry and video throughout a rocket
flight. It was designed around a hard assumption: automated tracking might
not be available on launch day, and telemetry and video still have to be
captured if it isn't. At IREC 2026 that assumption paid off.

At its core, the groundstation is a Raspberry Pi 5 running a locally hosted,
web-based dashboard. The dashboard aggregates live telemetry, video, and
positional data into a single interface viewable on the station itself or
remotely from laptops and tablets. Visualization includes live plotting,
downlink spectrum and waterfall views, 3D trajectory mapping, and real-time
orientation rendering using Three.js.

The communication architecture separates concerns across multiple RF links:

- Omnidirectional 70 cm link for bootstrapping and tracking telemetry
- Directional 70 cm link for higher-bandwidth telemetry
- 2.4 GHz analog video downlink using a parabolic dish

For tracking and pointing, the system fuses GPS and inertial data from both
the rocket and the groundstation to estimate relative position and
orientation. Telemetry packets carry timestamps to support dead-reckoning
between updates, letting the groundstation predict rocket position through
brief link dropouts and smooth antenna motion.

The mechanical tracking platform is designed around a surveying tripod base
with a pan-tilt mechanism using 3D printed cycloidal drives and stepper
motors. A modular mounting approach allows rapid transition between handheld
and tripod-mounted operation so that reception stays viable if automated
tracking cannot be used.

#### IREC 2026 performance

HORIZON flew in a reduced configuration and the results split cleanly along
subsystem lines.

**What worked:** the 70 cm telemetry link performed as designed. The
groundstation held the downlink through the flight and delivered continuous
flight state, sensor health, and trajectory data. The recording on the West
Texas Sunset page is the live feed as it came in.

**What did not:** the 2.4 GHz video antenna was damaged during integration,
so there was no video downlink. The dashboard was reconfigured in the field
to a data-only view, dropping the video panes and expanding the telemetry
and spectrum displays.

**Tracking was manual.** The pan-tilt mechanism was not flight-active, so the
antennas were hand-tracked using the modular handheld mounting, the
deliberate fallback path, exercised for real.

#### Current work

- Repairing and re-qualifying the 2.4 GHz video downlink
- Bringing the pan-tilt mechanism to flight-active status
- Evaluating tracking software using ArduPilot-supported workflows, with the option to move to custom control logic
- Ongoing integration between RF, software, and mechanical subsystems

**Foundational Project | Embedded Controls and Avionics**

The Airbrakes Flight Controller was my first major avionics project within Space Raiders and marked my initial work on embedded control systems for active flight regulation. The system was developed to autonomously actuate airbrakes in flight to control apogee and was built using perf-board hardware and off-the-shelf sensor modules.

I served as the early lead and sole system owner, responsible for the end-to-end design, implementation, and integration of the controller. The project flew during the Lone Star Cup on Matador II and later on RaiderX during both pre-competition testing and IREC 2025.

Key contributions included:

- Designed and integrated hardware and firmware for autonomous airbrakes control using discrete sensor modules
- Iterated timing, diagnostics, and data integrity through test flights and failure-driven rebuilds
- Coordinated with avionics, recovery, and airbrakes teams to align control behavior with mission constraints
- Applied early filtering and state estimation techniques to stabilize sensor data feeding PID control logic

This controller is the direct ancestor of APEX. Everything it proved out
(the control approach, the state machine, the failure modes found the hard
way) carried forward into the custom flight computer that flew at IREC 2026.

**Software Project | Mobile Development and Team Coordination**

ConnectEDU was a cross-platform student engagement application developed with Android and backend teams to support event participation and progress tracking within a school environment. The project advanced through internal testing before being discontinued due to the adoption of a third-party solution by the school.

Key contributions included:

- Designed and implemented the iOS app architecture and UI using SwiftUI with a focus on modularity
- Integrated frontend components with backend APIs for authentication and data retrieval
- Coordinated development milestones with Android and backend contributors to support cross-platform alignment

## experience.html

**Industry Experience | Flight Software, Test Infrastructure, and Tooling**

I spent the summer of 2026 on the launch vehicle flight software team at
Firefly Aerospace in Cedar Park, Texas. The work sat at the seam between
flight software and the hardware it runs on: test infrastructure,
configuration tooling, and the build systems that move code from a commit to
something that can be trusted on a vehicle.

**Contributions included:**

- Supported advanced hardware-in-the-loop testing for a major revision of flight software systems
- Worked across Avionics, Firmware, and Electrical Engineering to facilitate creation of a universal vehicle configuration tool
- Integrated CI/CD pipelines supporting unit testing, cross-compilation, and package deployment

The through-line with my Space Raiders work was verification. Both come down
to the same question: how do you know the software is right before it flies?
Seeing how that question is answered at production scale directly shaped how
I structure testing and integration on APEX.

### Avionics Development and Acting Lead

#### August 2024 - June 2025 | IREC 2025

I joined the Space Raiders avionics subteam in August 2024 and began contributing to SRAD avionics development under the existing team leadership. My initial focus was on avionics for the airbrakes control system, which evolved into the primary SRAD avionics effort as project scope expanded. As team availability shifted during the Spring semester, I assumed increasing responsibility for avionics integration, testing, and launch operations.

During this period, I supported multiple flight campaigns and was responsible for both custom avionics systems and integration with commercial recovery electronics. Following a test flight anomaly, I contributed to a rapid rebuild and iteration cycle that culminated in the first successful launch of RaiderX at the May Shootout. Leading into IREC 2025, I was elected Avionics Team Lead for the upcoming season and assumed acting lead responsibilities at competition due to unforeseen circumstances.

Throughout the IREC 2025 campaign, I balanced development progress with flight safety considerations, including making risk-based decisions regarding system readiness and flight inclusion.

**Key contributions during the IREC 2025 cycle included:**

- Developed and integrated SRAD avionics hardware and firmware for aibrakes testing
- Supported launch operations and avionics troubleshooting in field environments
- Coordinated avionics integration with recovery and vehicle subsystems
- Led post-flight analysis and rebuild efforts following flight anomalies
- Represented the avionics team during competition judging, safety reviews, and pad operations
- Made safety-driven decisions regarding flight readiness and system maturity

### Avionics Team Lead

#### June 2025 - Present | IREC 2026

Following IREC 2025, I formally assumed the role of Avionics Team Lead for the IREC 2026 season. In this role, I am responsible for technical direction, team coordination, and long-term planning for avionics development across multiple subsystems. My focus has been on establishing a strong technical foundation, onboarding new members, and driving the program toward review and flight readiness milestones.

Over the summer, I led general planning efforts to define system architecture, development priorities, and team structure in preparation for the Fall 2025 semester. During the first half of the semester, I focused on onboarding and technical ramp-up for new members, emphasizing fundamentals, workflows, and subsystem context. This work culminated in the Preliminary Design Review held prior to Thanksgiving, where the avionics team presented designs to alumni, faculty advisors, and external reviewers.

**Current responsibilities and milestones include:**

- Leading a 15-person interdisciplinary avionics team across hardware, firmware, and integration efforts
- Organizing and delivering technical workshops on Git, electronics fundamentals, soldering, and PCB design
- Defining avionics system architecture and development roadmaps for IREC 2026
- Guiding subsystem design through structured reviews and documentation
- Preparing avionics designs and justifications for formal design reviews and future flight campaigns

### IREC 2026 Competition Results

#### June 2026

West Texas Sunset flew at IREC 2026 with the first fully custom avionics
stack Space Raiders has ever fielded: the APEX flight computer, the HORIZON
groundstation, and an active airbrakes system, with commercial electronics
limited to recovery. The vehicle reached an apogee of 10,004 feet against a
10,000 foot target, took **first place in the 10,000 ft SRAD category**, and
finished **10th overall**.

I ran avionics through the campaign: integration, functional verification
across subteams, competition documentation, and avionics operations on the
pad through launch.

**What the campaign delivered:**

- Deployed Space Raiders' first custom flight computer with working live telemetry and dynamic controls
- Led integrated hardware and firmware development through competition launch, ensuring cross-domain functional verification
- Led cross-team integration for parachute deployment and aerodynamic braking, aligning both with the mission profile
- Consolidated avionics documentation for competition: block diagrams, wiring schematics, and design justifications
- Directly managed interdisciplinary efforts of 15+ students across mechanical, electrical, and software

**What did not go to plan.** The velocity estimator feeding the airbrakes
control loop was improperly tuned and oscillated in flight, so the braking
system actuated but did not behave as designed, and its contribution to the
apogee result is not quantifiable. The 2.4 GHz video downlink was lost to an
antenna damaged during integration, and HORIZON's pan-tilt mechanism was not
flight-active, so antennas were hand-tracked. Post-flight analysis of these
three items is driving the current design cycle. Reporting them accurately
matters more to me than the placement does.

**Texas Tech University | STEM Outreach and Volunteering**

Volunteered as a table referee for the GEAR Robotics RoboRanch competition, a LEGO Technic based robotics event for upper elementary and middle school students hosted by Texas Tech University. The role required independent judgment, clear communication, and consistency in a fast paced competition environment focused on both fairness and education.

**Responsibilities and contributions included:**

- Served as the primary authority for scoring, penalties, and rule interpretation across practice, qualifying, and championship rounds
- Applied rules consistently while rotating between tables to ensure fairness across teams
- Communicated penalties and corrections clearly and constructively to support learning and improvement
- Guided students through competition procedures while maintaining a positive and encouraging atmosphere
- Worked under faculty supervision to support a university led STEM outreach program for local schools

**Allen, TX | Customer Operations and Service**

Worked in a high-volume restaurant environment supporting take-out and large catering orders, requiring accuracy, time management, and clear communication with both customers and kitchen staff. Regularly handled high-value orders for events where reliability and coordination were critical.

**Responsibilities and contributions included:**

- Managed take-out and catering orders ranging from small customer pickups to large event orders exceeding $1,500
- Coordinated closely with kitchen staff to ensure order accuracy, timing, and presentation under peak demand
- Communicated order details, changes, and expectations clearly to customers in time-sensitive situations
- Supported event catering logistics for weddings, graduation parties, and local functions
- Maintained composure and service quality during high-pressure periods and staffing constraints
