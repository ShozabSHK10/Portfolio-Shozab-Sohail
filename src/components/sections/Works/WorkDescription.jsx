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
      <div className="card-title">
        {title}
      </div>
      <div className="card-description">
        <div className="overview-text">{overview}</div>
        <div className="work-info">
          <div className="info-groups">
            <span>Client</span>
            <p>{client}</p>
          </div>
          <div className="info-groups">
            <span>Year</span>
            <p>{year}</p>
          </div>
          <div className="info-groups">
            <span>Deliverables</span>
            {deliverables.map((d, i) => (
              <p key={i}>{d}</p>
            ))}
          </div>
          <div className="info-groups">
            <span>Role</span>
            {role.map((d, i) => (
              <p key={i}>{d}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkDescription;
