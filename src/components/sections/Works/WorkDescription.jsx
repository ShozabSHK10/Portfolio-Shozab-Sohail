import "./WorkDescription.css";

function WorkDescription({
  title,
  overview,
  client,
  year,
  deliverables,
  visitLink,
}) {
  return (
    <div className="card-container">
      <div className="card-title">{title}</div>

      <div className="card-description">
        <div className="info-groups info-year">
          <span className="work-year">YEAR</span>
          <p className="year-value">{year}</p>
        </div>

        <div className="info-groups info-deliverables">
          <span className="deliverables-label">DELIVERABLES</span>
          {deliverables.map((d, i) => (
            <p key={i} className="deliverable-item">
              {d}
            </p>
          ))}
        </div>

        <div className="overview-text">
          <span className="overview-label">SUMMARY</span>
          <p>{overview}</p>
          {visitLink && (
            <a
              href={visitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="visit-link"
            >
              Visit Site →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkDescription;
