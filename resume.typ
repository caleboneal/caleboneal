#set document(author: "Caleb O'Neal", title: "Caleb O'Neal")

#set text(
  font: "Calibri",
  size: 11pt,
  lang: "en",
  ligatures: false,
)

#set page(
  margin: 0.5in,
  paper: "us-letter",
)

#set par(justify: true)

#show heading.where(level: 1): it => {
  set align(left)
  set text(weight: 700, size: 20pt)
  pad(it.body)
}

#show heading.where(level: 2): it => [
  #pad(top: 0pt, bottom: -10pt, [#smallcaps(it.body)])
  #line(length: 100%, stroke: 1pt)
]

= Caleb O'Neal

#pad(top: 0.25em)[
  (571) 249-9134
  | #link("mailto:caleboneal07@gmail.com")[caleboneal07\@gmail.com]
  | #link("https://github.com/caleboneal")[github.com/caleboneal]
  | #link("https://caleboneal.dev")[caleboneal.dev]
]

== Education

*Bachelor of Science in Computer Engineering* #h(1fr) Expected May 2028 \
University of Virginia, School of Engineering and Applied Science #h(1fr) _Cumulative GPA: 3.94/4.00_

*Associate of Science in Computer Science* #h(1fr) June 2025 \
Northern Virginia Community College #h(1fr) _Cumulative GPA: 3.84/4.00_

== Work Experience

*Intern* #h(1fr) August 2024 #sym.dash May 2025 \
Virginia Tech Qualcomm Thinkabit Lab #h(1fr) _Falls Church, VA_
- Built a web-based simulation of a BLDC motor to demonstrate motor-control fundamentals using React and Rust
- Developed curriculum materials and led STEM workshops for visiting K–12 student groups

*Teaching Assistant* #h(1fr) January 2025 #sym.dash May 2025 \
Arlington Career Center #h(1fr) _Arlington, VA_
- Instructed 15 students in a college-level statistics course covering statistical analysis and real-world data interpretation
- Evaluated assignments and research posters, critiquing students' analysis of relationships in real-world datasets and work on topics including ANOVA tests, regression analysis, and data visualization

*Intern* #h(1fr) June 2024 #sym.dash August 2024 \
United States Government #h(1fr) _Virginia_
- Redesigned a department website to guide agency management to enterprise architecture data visualization tools
- Migrated the 20+ Git repositories between Git hosts, enabling new CI/CD features including automated testing and deployment and the ability to work remotely on non-classified code
- Collaborated with the team's Scrum Master to follow Agile principles including regular code reviews and sprint planning

== Projects

*Occupancy Tracker*, _Team of 5_ #h(1fr) September 2025 #sym.dash December 2025
- Programmed and built an Arduino-based system to track real-time occupancy in a room by detecting entry/exit through a doorway using a pair of ultrasonic sensors connected to an LCD display listing current occupancy
- Implemented direction detection logic to count entries/exits using moving average filtering and debouncing techniques
- Maintained accurate counts across more than 30 test crossings

*FIRST Robotics Competition Team*, _Team Captain, Programming Lead_#h(1fr) August 2022 #sym.dash May 2025 \
- Captained a 50-member robotics team with a \$50,000 annual budget to deliver consistently high performing robots
- Redesigned and formalized the team management structure following significant membership growth
// #v(-5pt) _Programmer_
- Wrote Java code to control autonomous and teleoperated robot behavior including autonomous navigation and \
  balancing on field elements that led to a peak autonomous ranking of 27th of approximately 3,300 teams
- Wrote robot controls logic using PID controllers that incorporated data from computer vision systems, IMUs, and rotary encoders using a Kalman filter

*NASA App Development Challenge*, _Team of 6_ #h(1fr) October 2023 #sym.dash May 2024
- Developed a 3D interactive simulation of lunar surface exploration for a potential landing site for NASA Artemis III mission in Python, simulating landing, navigating on the lunar surface, and communication with the Lunar Communications Relay
- Selected to present our simulation to software professionals at the PyCon US 2024 poster presentation session

// *Martian Crater Data Analysis* #h(1fr) August 2023 #sym.dash May 2024
// - Analyzed a dataset of 350,000 Martian craters and found a statistical relationship between crater eccentricity and its latitude on Mars using a pearson correlation test
// - Used SAS to perform statistical analysis and visualize geographic trends in the dataset
// - Presented findings for peer review and to an audience at Northern Virginia Community College

== Skills
- *Programming*: Python, C, C++, Java, JavaScript, Rust, Zig. React
- *Tools*: Git, CI/CD, Linux, KiCad, QEMU
