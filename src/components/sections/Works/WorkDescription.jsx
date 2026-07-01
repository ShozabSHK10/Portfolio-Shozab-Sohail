import "./WorkDescription.css";

function WorkDescription({
  title,
  overview,
  client,
  year,
  deliverables,
  role,
}) {
  return (
    <div className="card-container">
      <div className="card-title">{title}</div>

      <div className="card-description">
        <div className="work-info">

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

        </div>

        <div className="overview-text">{overview}</div>
      </div>
    </div>
  );
}

export default WorkDescription;
