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
  const urlResume = `../assets/docs/${docResume}`;

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
      <h2 className="mt-3">Resume</h2>
      <h3 className="resume-caption mt-3">Front-end Proficiencies</h3>
      <ul className="list-group list-group-striped">
        <li className="list-group-item">HTML</li>
        <li className="list-group-item">CSS Layouts (Flexbox)</li>
        <li className="list-group-item">JavasScript</li>
        <li className="list-group-item">TypeScript</li>
        <li className="list-group-item">Resonsive Design</li>
        <li className="list-group-item">React</li>
        <li className="list-group-item">Cross-Browser testing</li>
      </ul>

      <h3 className="resume-caption mt-3">Back-end Proficiencies</h3>
      <ul className="list-group list-group-striped">
        <li className="list-group-item">REST APIs</li>
        <li className="list-group-item">Node</li>
        <li className="list-group-item">Express</li>
        <li className="list-group-item">PostgreSQL</li>
      </ul>

      <div className="d-grid gap-2 col-3 mx-auto pt-5">
        <a
          href={urlResume}
          download={docResume}
          className="btn btn-primary"
          onClick={handleDownload}
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
