#import "resume/main.typ": *


// Put your personal information here
#let name = "Caleb O'Neal"
#let pronouns = "he/him"
#let location = "Charlottesville, VA"
#let email = "caleboneal07@gmail.com"
#let github = "github.com/caleboneal"
#let phone = "571-249-9134"
#let personal-site = "caleboneal.dev"
#let linkedin = "linkedin.com/in/caleboneal2007"

#show: resume.with(
  author: name,
  pronouns: pronouns,
  // location: location,
  email: email,
  github: github,
  // phone: phone,
  personal-site: personal-site,
  // linkedin: linkedin,
  accent-color: "#000000",
  font: "Calibri",
  paper: "us-letter",
  author-position: left,
  personal-info-position: left,
  author-font-size: 20pt,
  font-size: 11pt,
)

== Education

#edu(
  institution: "University of Virginia",
  location: "Charlottesville, VA",
  dates: "Expected May 2028",
  degree: "Bachelor of Science in Computer Engineering",
  gpa: "3.94/4.00",
)

#edu(
  institution: "Northern Virginia Community College",
  location: "Annandale, VA",
  dates: "June 2025",
  degree: "Associate of Science in Computer Science",
  gpa: "3.84/4.00",
)

// #edu(
//   institution: "Arlington Career Center",
//   location: "Arlington, VA",
//   dates: "June 2025",
//   degree: "High School Diploma",
//   gpa: "4.4",
// )

== Work Experience

#work(
  title: "Intern",
  location: "Falls Church, VA",
  company: "Virginia Tech Qualcomm Thinkabit Lab",
  dates: dates-helper(start-date: "August 2024", end-date: "May 2025"),
)
- Built an interactive web-based simulation of a three-phase brushless DC motor to teach robotics students motor-control fundamentals using React and Rust
- Assisted in lab tasks like cleaning, organizing, developing teaching materials, leading school groups, and moving the lab between buildings

#work(
  title: "Teaching Assistant",
  location: "Arlington, VA",
  company: "Arlington Career Center",
  dates: dates-helper(start-date: "January 2025", end-date: "May 2025"),
)
- Taught a 15 student college statistics course, teaching statistical analysis and real-world data interpretation
- Evaluated assignements and research posters, critiquing students' analysis of relationship in real-world datasets

#work(
  title: "High School Intern",
  location: "Virginia",
  company: "Department of Defense",
  dates: dates-helper(start-date: "June 2024", end-date: "August 2024"),
)
- Redesigned a department website to guide agency management to enterprise architecture data visualization tools
- Migrated the team's Git repositories between Git hosts, enabling new CI/CD features and better DX for the team
- Collaborated with the team's Scrum Master to follow Agile principles including regular code reviews and sprint planning

== Projects

#project(
  name: "NASA App Development Challenge",
  role: "PyCon US 2024 Poster Presentation",
  dates: dates-helper(start-date: "October 2023", end-date: "May 2024"),
)
- Developed a 3D interactive simulation of lunar surface exploration for a potential landing site for NASA Artemis III mission
- Selected to present our simulation to software professionals at the PyCon US 2024 poster presentation session

#project(
  name: "Martian Crater Data Analysis",
)
- Analyzed a dataset of 350,000 Martian craters and found a statistical relationship between crater eccentricity and its latitude on Mars using a pearson correlation test
- Used SAS to perform statistical analysis and visualize geographic trends in the dataset
- Presented findings for peer review and to an audience at Northern Virginia Community College

#project(
  name: "Robotics Team",
  role: "Captain, Programming Lead",
  dates: dates-helper(start-date: "August 2022", end-date: "May 2025"),
)
- Managed a team of 50 with an annual budget of \$50,000 to design, build, wire, program, and test a robot designed for the 2024 and 2025 FIRST Robotics Competitions
- Redesigned the team management structure following significant growth in members
- Led a team of 10 programmers using GitHub's pull request and issue systems for code review

== Skills
- *Programming*: Python, C, C++, Java, JavaScript, SAS, Rust, Zig
- *Tools*: Git, CI/CD, Linux, KiCad, QEMU
// - *CAD*: Fusion 360, OnShape, Altium
