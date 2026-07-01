import "./ServiceCard.css";
import PropTypes from "prop-types";

function ServiceCard({ number, title, subtitle, image, description }) {
  return (
    <div className="service-card">
      <div className="service-number">{number}</div>

      <div className="service-headings">
        <div className="service-title">{title}</div>
        <div className="service-subtitle">{subtitle}</div>
      </div>

      <div className="service-image">
        <img src={image} alt="" />
      </div>

      <div className="service-description">{description}</div>
    </div>
  );
}

ServiceCard.propTypes = {
  number: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.node,
  image: PropTypes.string,
  description: PropTypes.string,
};

export default ServiceCard;