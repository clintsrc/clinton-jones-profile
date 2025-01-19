/*
 * Portfolio.jsx
 *
 * React component for the main content to display the project Portfolio page.
 * Displays a bootstrap layout of multiple project tiles with descriptiv content
 *
 * ref: https://getbootstrap.com/docs/5.3/components/card/,
 *
 */

import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/Portfolio.css";

import imgNerdTrivia from "../assets/images/app-NerdTrivia.jpg";
// import imgCJPortfolio from "../assets/images/app-cj-portfolio.jpg";
// import imgWeatherOrNot from "../assets/images/app-WeatherOrNot.jpg";
// import imgHR1985 from "../assets/images/app-HR1985.jpg";
// import imgOttosAutos from "../assets/images/app-OttosAutos.jpg";
// import imgReadmeGen from "../assets/images/app-ReadmeGen.jpg";

function Portfolio() {
  
  const projects = [
    {
      imagetile: imgNerdTrivia,
    },
    {
      imagetile: imgNerdTrivia,
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row g-4">


        {projects.map((project, index) => (
          <div className="col-12 col-sm-6 col-md-4" key={index}>
            <div className="tile">
              <img src={project.imagetile} alt="Nerd Trivia" className="img-fluid" />
              <div className="overlay">
                <div className="content">
                  <h3>
                    <a
                      href="https://clintsrc.github.io/nerd-trivia/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-link"
                    >
                      Nerd Trivia
                    </a>
                    <a
                      href="https://github.com/clintsrc/nerd-trivia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-link"
                    >
                      <i className="bi bi-github"></i>
                    </a>
                  </h3>
                  <div>HTML</div>
                </div>
              </div>
            </div>
          </div>
        ))}

        
      </div>
    </div>
  );  // end jsx return
}

export default Portfolio;
