/*
 * Images in src/assets must be imported to be bundled and optimized by Vite / Webpack
 *   (unlike images referenced in public/assets)
 */

import imgGitHub from "../../src/assets/images/logo-github.svg";
import imgLinkedIn from "../../src/assets/images/logo-linkedin.png";
import imgStackOverflow from "../../src/assets/images/logo-stackoverflow.svg";

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
            <img src={imgGitHub} alt="GitHub Logo" width="50" height="50" />
          </a>
          <a
            href="https://www.linkedin.com/in/clinton-jones/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3"
          >
            <img src={imgLinkedIn} alt="LinkedIn Logo" width="50" height="50" />
          </a>
          {/* Logo 3 */}
          <a
            href="https://stackoverflow.com"
            className="mx-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={imgStackOverflow}
              alt="Stack Overflow Logo"
              width="50"
              height="50"
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
