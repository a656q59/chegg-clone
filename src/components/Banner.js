const Banner = () => {
  return (
    <div
      className="text-center "
      style={{ marginTop: "80px", marginLeft: "120px", marginRight: "120px" }}
    >
      <h1
        className="mb-5"
        style={{
          fontWeight: "bold",
          lineHeight: "1.2em",
          fontSize: "60px",
          marginBottom: "40px",
        }}
      >
        Real-world skills to land your dream job or internship
      </h1>
      <div className="fs-5" style={{ marginBottom: "40px" }}>
        Build the real-world skills you need to stand out to employers hiring
        for entry-level roles with Chegg Skills
      </div>
      <button
        type="button"
        class="btn btn-lg"
        style={{
          backgroundColor: "#eb7100",
          color: "white",
          marginBottom: "40px",
        }}
      >
        Get started
      </button>
    </div>
  );
};

export default Banner;
