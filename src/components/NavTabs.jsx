import { Link, useLocation } from "react-router-dom";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;
  console.log(`DEBUG: ${currentPage}`);

  return (
    <>
      <h4 className="mb-0 me-3">Clinton Jones</h4>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/About"
            // Check to see if the currentPage is / or `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              ((currentPage === "/About") || (currentPage === "/"))
                ? "nav-link active"
                : "nav-link"
            }
          >
            About me
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Portfolio"
            // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "/Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "/Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Resume"
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "/Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavTabs;
