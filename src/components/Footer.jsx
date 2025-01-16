/*
 * Images in src/assets must be imported to be bundled and optimized by Vite / Webpack
 *   (unlike images referenced in public/assets)
 */

// TODO: move styling to css, reconsider the 3rdparty icon - is it worth it?

import imgGitHub from "../../src/assets/images/logo-github.svg";
import imgLinkedIn from "../../src/assets/images/logo-linkedin.png";
import imgDevTo from "../../src/assets/images/logo-dev.svg";

function Footer() {
  return (
    <footer className="py-4">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <a
            href="https://github.com/clintsrc"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3"
          >
            <img
              className="img-fluid"
              src={imgGitHub}
              alt="GitHub Logo"
              style={{ width: "40px" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/clinton-jones/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3"
          >
            <img
              className="img-fluid"
              src={imgLinkedIn}
              alt="LinkedIn Logo"
              style={{ width: "40px" }}
            />
          </a>
          <a
            href="https://dev.to/cajones"
            className="mx-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img-fluid"
              src={imgDevTo}
              alt="Dev Logo"
              style={{ width: "40px" }}
            />
          </a>
        </div>
      </div>
      <div className="text-center pt-5">
        <a
          className="small text-muted mb-0"
          href="https://www.flaticon.com/free-icons/consultation"
          target="_blank"
          rel="noopener noreferrer"
          title="consultation icons"
        >
          Consultation icons created by muh zakaria - Flaticon
        </a>
      </div>
    </footer>
  );
}

export default Footer;
