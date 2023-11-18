const Frow = ({ url, title, text, border }) => {
  return (
    <div
      style={{ backgroundColor: "#f2f4f7" }}
      className={
        border
          ? "p-3 text-center border border-top-0 border-bottom-0 "
          : "p-3 text-center border-0"
      }
    >
      <img src={url} alt="img" className="pt-1 pb-3" />
      <div
        className="title mb-3"
        style={{ color: "#b65e1e", fontSize: " 1.375rem", fontWeight: " 500" }}
      >
        {title}
      </div>
      <div className="text">{text}</div>
    </div>
  );
};

export default Frow;
