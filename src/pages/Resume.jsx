export default function Resume() {
  const urlResume = "https://docs.google.com/document/d/1Eyu1A20_3BPIj51mwFGoNbK1EBCttq3n/preview";

  return (
    <div>
      <h1>Resume</h1>
      <p>Download my <a
        href={urlResume}
        target="_blank"
        rel="noopener noreferrer"
        className="img-fluid"
      >resume</a></p>

      <h3>Front-end Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS Layouts (Flexbox)</li>
        <li>JavasScript</li>
        <li>TypeScript</li>
        <li>Resonsive Design</li>
        <li>React</li>
        <li>Cross-Browser testing</li>
      </ul>

      <h3>Back-end Proficiencies</h3>
      <ul>
        <li>REST APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>PostgreSQL</li>
      </ul>
    </div>
  );
}
