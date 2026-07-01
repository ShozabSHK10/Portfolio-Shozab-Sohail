import "./WorkCard.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function WorkCard({ path, image, logo, name, type, year }) {
  return (
    <Link to={path} className="workCard">
      <div className="workImage">
        <img src={image} alt="" />
      </div>

      <div className="workInfo">
        <div className="clientInfo">
          <span className="clientLogo"><img src={logo} alt="" /></span>
          <span className="clientName">{name}</span>
        </div>

        <div className="workDetail">
          <span className="workType">{type}</span>
          <span className="workYear">{year}</span>
        </div>
      </div>
    </Link>
  );
}

WorkCard.propTypes = {
  path: PropTypes.string.isRequired,
  image: PropTypes.string,
  logo: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default WorkCard;