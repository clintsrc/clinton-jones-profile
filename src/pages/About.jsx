/*
 * About.jsx
 *
 * React component for the main content to display the About bio info page.
 *
 * Displays a job candidate profile image and brief text introduction
 *
 */

export default function About() {
  const urlProfileImage =
    "https://1.gravatar.com/avatar/5ae0c7279fdada45374c86a5b357a165f56a2703872fe6f386b202e8e6f2531a?size=256";

  /*
   * JSX
   *
   * returns a bootstrap layout of a gravitar logo and brief text introduction
   *
   */
  return (
    <>
      <h2 className="page-title mt-3">About me</h2>

      <div className="row mx-auto mt-4">
        <div className="col-md-3">
          <img
            className="img-fluid rounded-circle"
            src={urlProfileImage}
            alt="Profile Image"
          />
        </div>

        <div className="col-md-9">
          <p className="mt-3">Thanks for visiting my site!</p>
          <p>
            I&apos;m a motivated web developer with a strong foundation in
            full-stack development, Python programming, and automation. Skilled
            in building dynamic web applications using JavaScript (React.js),
            Node.js, Express, and REST APIs, and other modern web technologies.
            Experienced in leveraging cloud platforms and CI/CD pipelines to
            enhance web development workflows. Adept at debugging,
            problem-solving, and collaborating with cross-functional teams to
            create user-focused experiences.
          </p>
        </div>
      </div>
    </>
  );
}
