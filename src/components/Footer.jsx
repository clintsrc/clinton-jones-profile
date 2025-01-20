/*
 * Footer.jsx
 *
 * React component for the main content to display the Footer sectioon.
 *
 * Displays a footer for all supported component pages with links to relevant
 * job candidate profile pages
 *
 */

import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  /*
   * JSX
   *
   * returns a bootstrap layout of a gravitar logo and brief text introduction
   *
   */
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
