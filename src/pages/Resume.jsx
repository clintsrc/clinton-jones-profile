/*
 * Resume.jsx
 *
 * React component for the main content to display the Resume list and download page.
 *
 * Displays a list of front-end and back-end proficiencies along with a link
 * to download a copy of the job candidate's resume
 *
 */

export default function Resume() {
  const docResume = "Clint_Jones_Resume.docx";
  const urlResume = `https://docs.google.com/document/d/1YAlt9q9cU6XaDw-FfjtV91Te59zj0KS2/export?format=docx`;

  // use a download prompt for best practices
  const handleDownload = (event) => {
    const allowDownload = window.confirm(`Download ${docResume}?`);
    if (!allowDownload) {
      event.preventDefault();
    }
  };

  /*
   * JSX
   *
   * returns a bootstrap layout of 2 lists, one for front-end skills, another
   * for back-end skills, and a link to download the full resume document
   *
   */
  return (
    <div>
      <h2 className="page-title mt-3">Resume</h2>
      <h3 className="resume-caption mt-4">Front-end Proficiencies</h3>
      <ul className="list-group list-group-striped">
        <li className="list-group-item">HTML</li>
        <li className="list-group-item">CSS Layouts (Flexbox)</li>
        <li className="list-group-item">Resonsive Design</li>
        <li className="list-group-item">React</li>
        <li className="list-group-item">Cross-Browser testing</li>
        <li className="list-group-item">Cypress Test</li>
      </ul>

      <h3 className="resume-caption mt-3">Back-end Proficiencies</h3>
      <ul className="list-group list-group-striped">
        <li className="list-group-item">REST APIs</li>
        <li className="list-group-item">Node</li>
        <li className="list-group-item">Express</li>
        <li className="list-group-item">PostgreSQL</li>
        <li className="list-group-item">Microsoft SQL</li>
        <li className="list-group-item">MongoDB</li>
        <li className="list-group-item">Apollo</li>
        <li className="list-group-item">GraphQL</li>
      </ul>

      <h3 className="resume-caption mt-3">Programming Languages</h3>
      <ul className="list-group list-group-striped">
        <li className="list-group-item">JavasScript</li>
        <li className="list-group-item">TypeScript</li>
        <li className="list-group-item">Python</li>
        <li className="list-group-item">C#</li>
      </ul>

      <h3 className="resume-caption mt-3">DevOps & CI/CD</h3>
      <ul className="list-group list-group-striped">
        <li className="list-group-item">GitHub Actions</li>
        <li className="list-group-item">TeamCity</li>
        <li className="list-group-item">Jenkins</li>
      </ul>

      <h3 className="resume-caption mt-3">Platforms & Cloud</h3>
      <ul className="list-group list-group-striped">
        <li className="list-group-item">Docker</li>
        <li className="list-group-item">Terraform</li>
        <li className="list-group-item">AWS</li>
        <li className="list-group-item">Azure</li>
      </ul>

      <h3 className="resume-caption mt-3">Other Skills</h3>
      <ul className="list-group list-group-striped">
        <li className="list-group-item">Agile/Kanban</li>
        <li className="list-group-item">Networking Fundamentals</li>
        <li className="list-group-item">Test-Driven Development (TDD)</li>
        <li className="list-group-item">Mentorship</li>
        <li className="list-group-item">Leadership</li>
        <li className="list-group-item">Debugging</li>
      </ul>

      <div className="d-grid gap-2 col-3 mx-auto pt-5">
        <a
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
          href={urlResume}
          download={docResume}
          onClick={handleDownload}
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}