/*
 * Images in src/assets must be imported to be bundled and optimized by Vite / Webpack
 *   (unlike images referenced in public/assets)
 */

import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  return (
    <footer className="py-3">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <a
            href="https://github.com/clintsrc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="icon bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/clinton-jones/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="icon bi bi-linkedin"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/clinton-jones/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="icon bi bi-stack-overflow"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
