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
  accent-color: "#26428b",
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
  gpa: "4.0",
)

#edu(
  institution: "Northern Virginia Community College",
  location: "Annandale, VA",
  dates: "June 2025",
  degree: "Associate of Science in Computer Science",
  gpa: "3.9",
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
- Programmed a 3-phase brushless DC motor simulation with a web interface to educate robotics students
- Assisted in lab tasks like cleaning, organizing, leading school groups, and moving the lab between buildings

#work(
  title: "Teaching Assistant",
  location: "Arlington, VA",
  company: "Arlington Career Center",
  dates: dates-helper(start-date: "January 2025", end-date: "May 2025"),
)
- Taught a college level statistics class as the primary instructor, covering the principles of statistical analysis
- Graded and reviewed students' assignments, including a poster session of students' individual research of a statistical relationship in real world datasets

#work(
  title: "High School Intern",
  location: "Virginia",
  company: "Department of Defense",
  dates: dates-helper(start-date: "June 2024", end-date: "August 2024"),
)
- Redesigned a department website to guide agency management to enterprise architecture visualization tools
- Migrated the team's Git repositories between Git hosts, ensuring commit history was preserved
- Collaborated with the team's Scrum Master to follow Agile software development best practices

== Projects

#project(
  name: "NASA App Development Challenge",
  role: "PyCon US 2024 Poster Presentation",
  dates: "2024",
)
- Developed a 3D interactive simulation of lunar surface exploration for the planned 2027 NASA Artemis III mission to the lunar south pole
- Presented our simulation to software industry professionals at the PyCon 2024 poster presentation session
- Collaborated with a team to develop the app and manage team finances and logistics

#project(
  name: "Martian Crater Data Analysis",
)
- Analyzed a dataset of 350,000 Martian craters to find a statistical relationship between crater eccentricity and its latitude on Mars, likely as a result of volcanic activity on the Martian surface
- Programmed in SAS to perform statistical analysis and generate diagrams showing relevant data
- Presented results to peers for review and at a local community college for a larger audience

#project(
  name: "Robotics Team",
  role: "Captain, Programming Lead",
  dates: dates-helper(start-date: "August 2022", end-date: "May 2025"),
)
- Managed a team of 50 with an annual budget of \$50,000 to design, build, wire, program, and test a robot designed for the 2024 and 2025 FIRST Robotics Competitions
- Redesigned the team management structure following significant growth in members
- Led a team of 10 programmers using GitHub's pull request and issue systems for code review

== Skills
- *Programming*: Python, C, C++, Java, JavaScript, SAS, R, Rust, Julia, Zig
- *Tools*: Git, CI/CD, Linux, Docker
- *CAD*: Fusion 360, OnShape, Altium
