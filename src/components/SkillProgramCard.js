const SkillProgramCard = ({ title, text }) => {
  return (
    <div class="card" style={{ width: "25rem", height: "17rem" }}>
      <div class="ms-3 card-title mt-3 fw-bold">
        <h5>{title} </h5>
      </div>
      <div class="card-body">
        <p class="card-text">{text}</p>
      </div>
      <a
        href="/"
        class="btn text-white mx-3 mb-2 py-2"
        style={{ backgroundColor: "#eb7100" }}
      >
        Get started
      </a>
    </div>
  );
};

export default SkillProgramCard;
