import img1 from "../images/page1-min.png";
import img2 from "../images/page2-min.png";
import Frow from "./Frow";

const FrowScreen = () => {
  return (
    <div className="row">
      <div
        className="col-sm-12 col-lg-6 "
        style={{
          paddingTop: "50px",
          paddingBottom: "60px",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "#eb7100",
            height: "20rem",
            width: "22rem",
            borderRadius: "3rem",
            marginLeft: "-4rem",
            position: "absolute",
            top: "0px",
          }}
        ></div>
        <img
          src={img1}
          style={{
            marginLeft: "-8rem",
            transform: "rotate(6deg)",
            boxShadow: "5px 5px 20px #ccc",
            borderRadius: "20px",

            height: "25rem",
          }}
          alt="page1"
        />
      </div>

      <div
        className="col-sm-12 col-lg-6 rounded"
        style={{
          paddingTop: "50px",
          paddingBottom: "60px",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "#eaecf0",
            height: "20rem",
            width: "26rem",
            borderRadius: "3rem",
            marginLeft: "-4rem",
            position: "absolute",
            top: "0px",
            right: "-4rem",
          }}
        ></div>

        <img
          src={img2}
          alt="page2"
          style={{
            marginLeft: "10rem",
            transform: "rotate(-6deg)",
            boxShadow: "5px 5px 20px #ccc",
            borderRadius: "20px",

            height: "25rem",
            // paddingTop: "50px",
            // paddingBottom: "60px",
          }}
        />
      </div>

      <div
        className="row gx-0 mt-3 align-items-center"
        style={{ backgroundColor: "#f2f4f7", width: "100%", height: "300px" }} //#f2f4f7
      >
        <div className="col">
          <Frow
            url="https://www.internships.com/wp-content/themes/IDC-theme/assets/skills/data.svg"
            title="Real-world examples"
            text="Learn practice skills with interactive modules and examples from real college grads"
          />
        </div>
        <div className="col">
          <Frow
            url="https://www.internships.com/wp-content/themes/IDC-theme/assets/skills/clock.svg"
            title="Only 1 hour/week"
            text="Between classes or study breaks, add new skills at your own pace and on your own time"
            border="1"
          />
        </div>
        <div className="col">
          <Frow
            url="https://www.internships.com/wp-content/themes/IDC-theme/assets/skills/certificate.svg"
            title="Get certified"
            text="Stand out with a top certified skill employers seek"
          />
        </div>
      </div>
    </div>
  );
};

export default FrowScreen;
