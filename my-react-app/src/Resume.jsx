export function Header() {
  return (
    <header className="resume-header">
      <h1>Logan Ghast</h1>
      <p>Information Systems Student</p>
      <p>Fort Wayne, IN | (260) 431-8295 | loganghast06@gmail.com</p>
    </header>
  );
}

export function Summary() {
  return (
    <section className="resume-summary">
      <h2>Professional Summary</h2>
      <p>
        Detail-oriented Information Systems student with nearly two years
        of experience supporting daily operations in a fast-paced healthcare
        environment. Strong computer proficiency, organizational skills, and
        problem-solving abilities. Eager to apply technical knowledge while
        continuing to grow in the technology field.
      </p>
    </section>
  );
}

export function Experience() {
  return (
    <section className="resume-experience">
      <h2>Experience</h2>

      <h3>Parkview Health</h3>
      <p>Kitchen Porter | September 2024 - Present</p>
      <ul>
        <li>
          Support daily operations in a high-volume healthcare environment.
        </li>
        <li>
          Collaborate with multiple departments to ensure efficient and
          timely patient meal service.
        </li>
        <li>
          Follow standard operating procedures to maintain consistency,
          accuracy, and quality control.
        </li>
        <li>
          Utilize computer systems and department processes to support
          daily workflow.
        </li>
      </ul>

      <h3>Mike's Carwash</h3>
      <p>Wash Associate | October 2022 - May 2024</p>
      <ul>
        <li>
          Performed vehicle cleaning and maintenance services while
          providing friendly customer service.
        </li>
        <li>
          Collaborated with team members to maintain efficient service
          and high customer satisfaction.
        </li>
      </ul>
    </section>
  );
}

export function Education() {
  return (
    <section className="resume-education">
      <h2>Education</h2>

      <h3>Indiana Institute of Technology</h3>
      <p>Bachelor of Science, Information Systems</p>
      <p>Fort Wayne, IN | Expected Graduation: 2029</p>

      <h3>Anthis Career Center</h3>
      <p>Software Development</p>
    </section>
  );
}

export function Skills() {
  return (
    <section className="resume-skills">
      <h2>Skills</h2>
      <ul>
        <li>Microsoft Word, Excel, and PowerPoint</li>
        <li>Database Concepts</li>
        <li>General Computer Applications</li>
        <li>Typing and Data Entry</li>
        <li>Communication and Team Collaboration</li>
        <li>Organization and Time Management</li>
        <li>Critical Thinking and Problem Solving</li>
        <li>Adaptability and Attention to Detail</li>
      </ul>
    </section>
  );
}