export default function Resume() {
  const urlResume =
    "https://docs.google.com/document/d/1Eyu1A20_3BPIj51mwFGoNbK1EBCttq3n/preview";

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
          className="btn btn-primary"
          href={urlResume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download
        </a>
      </div>
      <p>
        {/* TODO: move to readme */}
        Resources: Francisco Rivera,{" "}
        <a
          className="text-muted small"
          href="https://www.svgrepo.com"
          target="_blank"
          rel="noreferrer"
        >
          SVG Repo
        </a>
        ,{" "}
        <a
          className="text-muted small"
          href="https://www.netlify.com/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        ,{" "}
        <a
          className="text-muted small"
          href="https://coolors.co/"
          target="_blank"
          rel="noreferrer"
        >
          Coolers
        </a>
      </p>
    </div>
  );
}
