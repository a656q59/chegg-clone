const TestimonialCard = () => {
  return (
    <div class="card">
      <div className="star_section">stars come here</div>
      <div class="card-body">
        <p class="card-text" style={{ fontSize: "17px", lineHeight: "1.15" }}>
          “Learning how Excel is used for projects big and small at real
          companies helped me gain a better understanding of what’s going to be
          expected of me when I get my first job.”
        </p>
      </div>
      <div className="profile d-flex mt-5 mb-3">
        <img
          src="https://www.internships.com/wp-content/uploads/2023/05/6a5aed22afa28f9ec01edc053d1cbe34-min.jpg"
          height="50px"
          width="50px"
          className="rounded-pill ms-3"
        />
        <div className="d-flex flex-column ms-2 ">
          <div className="profile_name fw-bold">Blake</div>
          <div
            className="university_name text-muted"
            style={{ color: "#667085" }}
          >
            University of Michigan
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
