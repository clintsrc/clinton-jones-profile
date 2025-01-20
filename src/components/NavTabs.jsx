/*
 * NavTabs.jsx
 *
 * React component for the main content to display the nav section.
 *
 * Displays a navigation secton for all supported component pages and manages the
 * styling to indicate which main component page is currently being actively viewed
 * and which are selectable
 *
 */

import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const currentPage = useLocation().pathname;
  console.log(`DEBUG: ${currentPage}`);

  /*
   * JSX
   *
   * returns a bootstrap layout of the job candidate's name, and a tab for each 
   * each supported component route page. It handles each tab's style and link 
   * according to whether it is actively selected or else inactive
   *
   */
  return (
    <nav className="navbar py-4">
      <h1 className="mb-0 navbar-name">
        Clinton Jones &#160;&#187;&#187;&#187;
      </h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/About"
            /* Check to see if the currentPage is / or `About`. If so use the
             * active link class from bootstrap. Otherwise, set it to a normal
             * nav-link */
            className={
              currentPage === "/About" || currentPage === "/"
                ? "nav-link active"
                : "nav-link"
            }
          >
            <h2>About me</h2>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Portfolio"
            /* Check to see if the currentPage is `Portfolio`. If so use the
             * active link class from bootstrap. Otherwise, we set it to a normal
             * nav-link */
            className={
              currentPage === "/Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            <h2>Portfolio</h2>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            /* Check to see if the currentPage is `Contact`. If so use the
             * active link class from bootstrap. Otherwise, we set it to a normal
             * nav-link */
            className={
              currentPage === "/Contact" ? "nav-link active" : "nav-link"
            }
          >
            <h2>Contact</h2>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Resume"
            /* Check to see if the currentPage is `Contact`. If so use the active 
            link class from bootstrap. Otherwise, we set it to a normal nav-link */
            className={
              currentPage === "/Resume" ? "nav-link active" : "nav-link"
            }
          >
            <h2>Resume</h2>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
