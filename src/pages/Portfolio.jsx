/*
 * Portfolio.jsx
 *
 * React component for the main content to display the project Portfolio page.
 *
 * Displays a bootstrap layout of multiple project tiles with content that links
 * to the project's site (or video demo), the github repository and a the focused
 * skills
 *
 * Helpful refs:
 *  https://getbootstrap.com/docs/5.3/components/card/,
 *  https://react-bootstrap.netlify.app/docs/components/overlays/
 *  https://icons.getbootstrap.com/?q=github
 *
 */

import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/Portfolio.css";

import imgCashIsKingCRM from "../assets/images/app-CashIsKingCRM.jpg";
import imgNerdTrivia from "../assets/images/app-NerdTrivia.jpg";
import imgBookShelter from "../assets/images/app-BookShelter.jpg";
import imgReshelve from "../assets/images/app-Reshelve.jpg";
import imgShark from "../assets/images/app-Shark.jpg";
import imgWeatherOrNot from "../assets/images/app-WeatherOrNot.jpg";
import imgInYourLane from "../assets/images/app-InYourLane.jpg";
import imgSNAPI from "../assets/images/app-SNAPI.jpg";
import imgSolidGuess from "../assets/images/app-SolidGuess.jpg";
import imgOnAndOn from "../assets/images/app-OnAndOn.jpg";
import imgHR1985 from "../assets/images/app-HR1985.jpg";
import imgOttosAutos from "../assets/images/app-OttosAutos.jpg";
import imgReadmeGen from "../assets/images/app-ReadmeGen.jpg";
import imgRoutineSaga from "../assets/images/app-RoutineSaga.jpg";

function Portfolio() {
  const projects = [
    {
      projectname: "Cash Is King CRM",
      imagetile: imgCashIsKingCRM,
      srcrepo: "https://github.com/clintsrc/cash-is-king-crm",
      sitelocation: "https://cash-is-king-crm.onrender.com/",
      skills: "MERN, GraphQL, TypeScript, Cypress Test, GitHub Actions",
    },
    {
      projectname: "Nerd Trivia",
      imagetile: imgNerdTrivia,
      srcrepo: "https://github.com/clintsrc/nerd-trivia",
      sitelocation: "https://clintsrc.github.io/nerd-trivia/",
      skills: "HTML, CSS, JavaScript",
    },
    {
      projectname: "Book Shelter",
      imagetile: imgBookShelter,
      srcrepo: "https://github.com/Gavin-Scot-Stockwell/BookShelter",
      sitelocation: "https://bookshelter.onrender.com/",
      skills: "Node.js, Express.js, RESTful API, React, PostgreSQL, Sequelize ORM, JWT Authentication, OpenLibrary API",
    },
    {
      projectname: "Reshelve",
      imagetile: imgReshelve,
      srcrepo: "https://github.com/clintsrc/reshelve",
      sitelocation: "https://reshelve.onrender.com/",
      skills: "MERN, Apollo server, GraphQL, JWT Authentication",
    },
    {
      projectname: "Shark",
      imagetile: imgShark,
      srcrepo: "https://github.com/clintsrc/shark",
      sitelocation: "https://shark-b07k.onrender.com/",
      skills: "React, TypeScript",
    },
    {
      projectname: "Weather Or Not",
      imagetile: imgWeatherOrNot,
      srcrepo: "https://github.com/clintsrc/WeatherOrNot",
      sitelocation: "https://weatherornot-j0iy.onrender.com/",
      skills: "Express.js, REST APIs",
    },
    {
      projectname: "In Your Lane",
      imagetile: imgInYourLane,
      srcrepo: "https://github.com/clintsrc/WeatherOrNot",
      sitelocation: "https://weatherornot-j0iy.onrender.com/",
      skills: "Express.js, REST APIs",
    },
    {
      projectname: "SNAPI",
      imagetile: imgSNAPI,
      srcrepo: "https://github.com/clintsrc/snapi",
      sitelocation: "https://drive.google.com/file/d/1j8teRQAiBI-6NsjRoT7JDH3OOAciz6au/view",
      skills: "Express.js, MongoDB, Mongoose ODM.",
    },
    {
      projectname: "Solid Guess",
      imagetile: imgSolidGuess,
      srcrepo: "https://github.com/clintsrc/solid-guess",
      sitelocation: "https://drive.google.com/file/d/1xETFAwS45cJ-MPmlHr3GEqDM5AXR7gRr/view",
      skills: "MERN, Cypress Test.",
    },
    {
      projectname: "On And On",
      imagetile: imgOnAndOn,
      srcrepo: "https://github.com/clintsrc/onandon",
      sitelocation:
        "https://onandon.onrender.com/",
      skills: "CI/CD, GitHub Actions, Cypress Test",
    },
    {
      projectname: "HR 1985",
      imagetile: imgHR1985,
      srcrepo: "https://github.com/clintsrc/HR1985",
      sitelocation:
        "https://drive.google.com/file/d/1cJHOSW0YCQAJmIs3dNgBczkvHlMfWcpE/view",
      skills: "PostgreSQL",
    },
    {
      projectname: "Otto's Autos",
      imagetile: imgOttosAutos,
      srcrepo: "https://github.com/clintsrc/OttosAutos",
      sitelocation:
        "https://drive.google.com/file/d/1YQLbpaQs6NQZWmPPlcUJSWEc0elTSUT1/view",
      skills: "TypeScript, OOP",
    },
    {
      projectname: "Readme Generator",
      imagetile: imgReadmeGen,
      srcrepo: "https://github.com/clintsrc/ReadmeGen",
      sitelocation:
        "https://drive.google.com/file/d/1LaERyMDhP6-J8q0OTHyf95QkQvJzfBkp/view",
      skills: "Node.js",
    },
    {
      projectname: "Routine Saga",
      imagetile: imgRoutineSaga,
      srcrepo: "https://github.com/clintsrc/routine-saga",
      sitelocation:
        "https://routine-saga.onrender.com",
      skills: "Django, Python",
    },
  ];

  /*
   * JSX
   *
   * returns a bootstrap layout of multiple projects as rows and columngs in a grid.
   * Each project content is set inside a tile. When the user hovers over a project
   * image, reveal the following content using an overlay:
   * - A text link to the site hosting the project (or video demo for non-web apps)
   * - A bootstrap logo that links to theproject repository
   * - Static text for the skills used to create the project
   *
   */
  return (
    <>
      <h2 className="page-title mt-3">Portfolio</h2>
      <div className="container mt-3">
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-12 col-sm-6 col-md-4" key={index}>
              <div className="tile">
                <img
                  src={project.imagetile}
                  alt={project.projectname}
                  className="img-fluid"
                />
                <div className="overlay">
                  <div className="content">
                    <h3>
                      <a
                        href={project.sitelocation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-link"
                      >
                        {project.projectname}
                      </a>
                      <a
                        href={project.srcrepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-link"
                      >
                        <i className="bi bi-github"></i>
                      </a>
                    </h3>
                    <div className="portfolio-skills">{project.skills}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* end map function */}
        </div>
      </div>
    </>
  ); // end jsx return
}

export default Portfolio;
