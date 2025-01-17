/*
 * Portfolio.jsx
 *
 * Bootstrap Grid Cards layout: https://getbootstrap.com/docs/5.3/components/card/
 *
 */

import imgNerdTrivia from "../assets/images/app-NerdTrivia.jpg";
import imgCJPortfolio from "../assets/images/app-cj-portfolio.jpg";
import imgWeatherOrNot from "../assets/images/app-WeatherOrNot.jpg";
import imgHR1985 from "../assets/images/app-HR1985.jpg";
import imgOttosAutos from "../assets/images/app-OttosAutos.jpg";
import imgReadmeGen from "../assets/images/app-ReadmeGen.jpg";
import imgGitHub from "../../src/assets/images/logo-github.svg";
import "../assets/css/Portfolio.css";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <a
              href="https://clintsrc.github.io/nerd-trivia/"
              alt="Nerd Trivia App"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ratio ratio-4x3">
                <img
                  className="card-img-top"
                  src={imgNerdTrivia}
                  alt="Nerd Trivia Tile"
                />
              </div>
            </a>
            <a
              href="https://github.com/clintsrc/nerd-trivia"
              target="_blank"
              rel="noopener noreferrer"
              alt="Nerd Trivia Github"
            >
              <img
                className="img-fluid github"
                src={imgGitHub}
                alt="GitHub Logo"
              />
              Nerd Trivia
            </a>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <a alt="Portfolio App" href="https://clintonjones.netlify.app/">
              <div className="ratio ratio-4x3">
                <img
                  className="card-img-top"
                  src={imgCJPortfolio}
                  alt="Portfolio Tile"
                />
              </div>
            </a>
            <a
              href="https://github.com/clintsrc/clinton-jones-profile"
              alt="Portfolio GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
                            <img
                className="img-fluid github"
                src={imgGitHub}
                alt="GitHub Logo"
              />
              Clinton Jones Portfolio
            </a>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <a
              href="https://weatherornot-j0iy.onrender.com/"
              alt="Weather Or Not App"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ratio ratio-4x3">
                <img
                  className="card-img-top"
                  src={imgWeatherOrNot}
                  alt="Weather Or Not Tile"
                />{" "}
              </div>
            </a>
            <a
              className={""}
              href="https://github.com/clintsrc/WeatherOrNot"
              alt="Weather Or Not GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
                            <img
                className="img-fluid github"
                src={imgGitHub}
                alt="GitHub Logo"
              />
              Weather Or Not
            </a>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <a
              href="https://drive.google.com/file/d/1cJHOSW0YCQAJmIs3dNgBczkvHlMfWcpE/view"
              alt="HR 1985 App"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ratio ratio-4x3">
                <img
                  className="card-img-top"
                  src={imgHR1985}
                  alt="HR 1985 Tile"
                />
              </div>
            </a>
            <a
              href="https://github.com/clintsrc/HR1985"
              alt="HR 1985 GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >              <img
            className="img-fluid github"
            src={imgGitHub}
            alt="GitHub Logo"
          />
              HR 1985
            </a>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <a
              href="https://drive.google.com/file/d/1YQLbpaQs6NQZWmPPlcUJSWEc0elTSUT1/view"
              alt="Otto's Autos App"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ratio ratio-4x3">
                <img
                  className="card-img-top"
                  src={imgOttosAutos}
                  alt="Otto's Autos Tile"
                />
              </div>
            </a>
            <a
              href="https://github.com/clintsrc/OttosAutos"
              alt="Otto's Autos GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >              <img
            className="img-fluid github"
            src={imgGitHub}
            alt="GitHub Logo"
          />
              Otto&rsquo;s Autos
            </a>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <a
              href="https://drive.google.com/file/d/1LaERyMDhP6-J8q0OTHyf95QkQvJzfBkp/view"
              alt="ReadmeGen App"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ratio ratio-4x3">
                <img
                  className="card-img-top"
                  src={imgReadmeGen}
                  alt="ReadmeGen Tile"
                />
              </div>
            </a>
            <a
              href="https://github.com/clintsrc/ReadmeGen"
              alt="ReadmeGen GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >              <img
            className="img-fluid github"
            src={imgGitHub}
            alt="GitHub Logo"
          />
              ReadmeGen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
