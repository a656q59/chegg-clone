const Card = ({ src, title, salary, skills }) => {
  return (
    <div
      className="card mb-3"
      style={{
        borderRadius: "1rem",
        overflow: "hidden",
        boxShadow: "11px 11px 22px #d9d9d9, -11px -11px 22px #fff",
        width: "90%",
        height: "90%",
      }}
    >
      {src && <img src={src} class="card-img-top" alt="..." />}
      <div className="card-body px-3 pt-2 pb-4 container-fluid">
        <h5 class="card-title fw-bold">{title}</h5>
        <h5
          class="card-subtitle mt-3 fw-bold"
          style={{ fontSize: "1.5rem", color: "#b65e1e" }}
        >
          <span>{salary}</span>
          <span className="fw-normal text-muted" style={{ fontSize: ".8rem" }}>
            /Median starting salary
          </span>
        </h5>
        <p class="card-text mt-3 ">Top skills to learn:</p>
        <div className="d-flex justify-content-between row mb-3 ">
          {skills &&
            skills.map((skill, index) => (
              <div
                key={index}
                className="col col-sm-4 col-md-4 col-lg-4 badge rounded-pill fw-lighter px-3 mx-2 mb-2 py-2"
                style={{
                  fontSize: "10px",
                  color: "#333333",
                  backgroundColor: "#F2F4F7",
                }}
              >
                {skill}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
