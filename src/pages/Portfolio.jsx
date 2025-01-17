import imgNerdTrivia from "../assets/images/app-NerdTrivia.jpg";
import imgCJPortfolio from "../assets/images/app-cj-portfolio.jpg";
import imgWeatherOrNot from "../assets/images/app-WeatherOrNot.jpg";
import imgHR1985 from "../assets/images/app-HR1985.jpg";
import imgOttosAutos from "../assets/images/app-OttosAutos.jpg";
import imgReadmeGen from "../assets/images/app-ReadmeGen.jpg";
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
            <img className="card-img-top"
              src={imgNerdTrivia}
              alt="Nerd Trivia Tile"
            />
          </a>
          <a
            href="https://github.com/clintsrc/nerd-trivia"
            target="_blank"
            rel="noopener noreferrer"
            alt="Nerd Trivia Github"
          >
            Nerd Trivia
          </a>
        </div>
        </div>


        <div className="item1 flex-item">
          <a alt="Portfolio App" href="https://clintonjones.netlify.app/">
            <img
              src={imgCJPortfolio}
              alt="Portfolio Tile"
              width="50"
              height="50"
            />
          </a>
          <a
            href="https://github.com/clintsrc/clinton-jones-profile"
            alt="Portfolio GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clinton Jones Portfolio
          </a>
        </div>

        <div className="item1 flex-item">
          <a
            href="https://weatherornot-j0iy.onrender.com/"
            alt="Weather Or Not App"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={imgWeatherOrNot}
              alt="Weather Or Not Tile"
              width="50"
              height="50"
            />{" "}
          </a>
          <a
          className={""}
            href="https://github.com/clintsrc/WeatherOrNot"
            alt="Weather Or Not GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            Weather Or Not
          </a>
        </div>

        <div className="item1 flex-item">
          <a
            href="https://drive.google.com/file/d/1cJHOSW0YCQAJmIs3dNgBczkvHlMfWcpE/view"
            alt="HR 1985 App"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={imgHR1985} alt="HR 1985 Tile" width="50" height="50" />
          </a>
          <a
            href="https://github.com/clintsrc/HR1985"
            alt="HR 1985 GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            HR 1985
          </a>
        </div>

        <div className="item1 flex-item">
          <a
            href="https://drive.google.com/file/d/1YQLbpaQs6NQZWmPPlcUJSWEc0elTSUT1/view"
            alt="Otto's Autos App"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={imgOttosAutos}
              alt="Otto's Autos Tile"
              width="50"
              height="50"
            />
          </a>
          <a
            href="https://github.com/clintsrc/OttosAutos"
            alt="Otto's Autos GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            Otto&rsquo;s Autos
          </a>
        </div>

        <div className="item1 flex-item">
          <a
            href="https://drive.google.com/file/d/1LaERyMDhP6-J8q0OTHyf95QkQvJzfBkp/view"
            alt="ReadmeGen App"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={imgReadmeGen}
              alt="ReadmeGen Tile"
              width="50"
              height="50"
            />
          </a>
          <a
            href="https://github.com/clintsrc/ReadmeGen"
            alt="ReadmeGen GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            ReadmeGen
          </a>
        </div>
      </div>
    </div>
  );
}
