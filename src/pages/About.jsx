export default function About() {
  const urlProfileImage =
    "https://1.gravatar.com/avatar/5ae0c7279fdada45374c86a5b357a165f56a2703872fe6f386b202e8e6f2531a?size=256";

  return (
    <div>
      <h2 className="mt-3">About me</h2>
      
      <div className="mt-3">
        <img
          className="img-fluid rounded-circle"
          src={urlProfileImage}
          alt="Profile Image"
        />
      </div>
      <p>Thanks for visiting my site!</p>
      <p>
        I&apos;m a motivated web developer with a strong foundation in
        full-stack development, Python programming, and automation. Skilled in
        building dynamic web applications using JavaScript (React.js), Node.js,
        Express, and REST APIs, and other modern web technologies. Experienced
        in leveraging cloud platforms and CI/CD pipelines to enhance web
        development workflows. Adept at debugging, problem-solving, and
        collaborating with cross-functional teams to create user-focused
        experiences.
      </p>
    </div>
  );
}
