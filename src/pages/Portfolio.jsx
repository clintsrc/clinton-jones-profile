import item1 from "../assets/images/portfolio-item1.png";
import "../assets/css/Portfolio.css";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>

      <div className="flex-container">
        <div className="item1 flex-item">
          <a
            href="https://github.com/clintsrc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={item1} alt="GitHub Logo" width="50" height="50" />
          </a>
        </div>

        <div className="item1 flex-item">
          <a
            href="https://github.com/clintsrc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={item1} alt="GitHub Logo" width="50" height="50" />
          </a>
        </div>

        <div className="item1 flex-item">
          <a
            href="https://github.com/clintsrc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={item1} alt="GitHub Logo" width="50" height="50" />
          </a>
        </div>

        <div className="item1 flex-item">
          <a
            href="https://github.com/clintsrc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={item1} alt="GitHub Logo" width="50" height="50" />
          </a>
        </div>

        <div className="item1 flex-item">
          <a
            href="https://github.com/clintsrc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={item1} alt="GitHub Logo" width="50" height="50" />
          </a>
        </div>

        <div className="item1 flex-item">
          <a
            href="https://github.com/clintsrc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={item1} alt="GitHub Logo" width="50" height="50" />
          </a>
        </div>
      </div>
    </div>
  );
}
