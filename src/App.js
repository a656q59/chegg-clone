import Banner from "./components/Banner";
import FrowScreen from "./components/FrowScreen";
import Card from "./components/Card";

import anim from "./images/3d_animator_profile_image.jpg";
import bsa from "./images/business_systems_analyst_profile_image.jpg";
import se from "./images/systems_analyst_profile_image.jpg";
import marketing from "./images/project_manager_profile_image.jpg";
import finance from "./images/financial_analyst_resume_cover_letter.jpg";
import it from "./images/SoftawareEngineer_Profile_image.jpg";

import Navbar from "./components/Navbar";
import google from "./images/google.png";
import meta from "./images/meta.png";
import spotify from "./images/spotify.png";
import cisco from "./images/cisco.png";
import pwc from "./images/pwc.png";
import salesforce from "./images/salesforce.png";

import SkillProgramCard from "./components/SkillProgramCard";
import TestimonialCard from "./components/TestimonialCard";
import "./App.css";

function App() {
  const skill = ["Excel", "Python", "Sequel", "Tableau"];
  return (
    <>
      <Navbar />
      <div className="main container " style={{ overflow: "hidden" }}>
        <Banner />
        <FrowScreen />
        <div className="career_path_section mt-5">
          <h2 className="w-75 mb-3 fw-bold">
            Select a career path below to access exclusive internships and gain
            real-world skills
          </h2>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            <div className="col ">
              <Card
                src={bsa}
                title="Data & Analytics"
                salary="$64,781"
                skills={skill}
              />
            </div>
            <div className="col">
              <Card src={anim} title="Design" salary="$64,781" skills={skill} />
            </div>
            <div className="col ">
              <Card
                src={se}
                title="Software Engineering"
                salary="$64,781"
                skills={skill}
              />
            </div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            <div className="col">
              <Card
                src={marketing}
                title="Marketing"
                salary="$64,781"
                skills={skill}
              />
            </div>
            <div className="col">
              <Card
                src={finance}
                title="Finance & Accouting"
                salary="$64,781"
                skills={skill}
              />
            </div>
            <div className="col">
              <Card
                src={it}
                title="IT & Cybersecurity"
                salary="$64,781"
                skills={skill}
              />
            </div>
          </div>
        </div>
        <div
          className="employer_section text-center border border-light "
          style={{
            backgroundColor: "#f2f4f7",
            paddingRight: "70px",
            paddingLeft: "70px",
          }}
        >
          <h2 className="mt-5 mb-4 fw-bold" style={{ fontSize: "2rem" }}>
            Students with these skills are getting hired by top employers like
          </h2>
          <div className="row align-items-center justify-content-center mb-5">
            <div className="col-sm-6 col-md-3 col-lg-2">
              <img src={meta} />
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2">
              <img src={pwc} />
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2">
              <img src={salesforce} />
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2">
              <img src={spotify} />
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2">
              <img src={google} />
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2">
              <img src={cisco} />
            </div>
          </div>
        </div>
        <div className="featured_skill_programs_section mt-5 ">
          <h4 className="mb-4 fw-bold">Featured skill programs</h4>
          <div className="row">
            <div className="col-md-4">
              <SkillProgramCard
                title="Excel for Data & Analytics"
                text="Learn how data is analyzed and visualized with Microsoft Excel, and master key Excel skills like look-up functions, pivot tables, and macro formulas. "
              />
            </div>
            <div className="col-md-4">
              <SkillProgramCard
                title="Python for Software Engineering"
                text="Master the ins and outs of Python, from data analysis and visualization, to programming your own application.  "
              />
            </div>
            <div className="col-md-4">
              <SkillProgramCard
                title="Social Media Marketing"
                text="From Twitter to TikTok to LinkedIn, establishing a presence on social media is key to a winning marketing strategy. Sharpen your skills across social media platforms with this introductory skill program."
              />
            </div>
          </div>
        </div>
        <div className="testimonial_section mt-5">
          <h5 className="fw-bold">Testimonials</h5>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <TestimonialCard />
            </div>
            <div class="col">
              <TestimonialCard />
            </div>
            <div class="col">
              <TestimonialCard />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5 mb-4">
          <hr className="w-75" />
        </div>
        <div className="footer_section d-flex justify-content-center px-2 pt-5">
          <div
            className="row row-cols-1 row-cols-md-4"
            style={{ fontSize: "12px" }}
          >
            <div className="col  border-none  " style={{ height: "15rem" }}>
              <div className="fw-bold mb-2" style={{ color: "#555" }}>
                Your New Internship
              </div>
              <div className="text-muted">Create Your Profile</div>
              <div className="text-muted">Browse Internships</div>
              <div className="text-muted">Discover Your Options</div>
              <div className="text-muted">Get the Job</div>
            </div>
            <div className="col  border-end border-start ">
              <div className="fw-bold mb-2" style={{ color: "#555" }}>
                Resume{" "}
              </div>
              <div className="text-muted">Resume 101</div>
              <div className="text-muted mb-4">Resume Samples</div>

              <div className="fw-bold mb-2" style={{ color: "#555" }}>
                Cover Letter{" "}
              </div>
              <div className="text-muted">Cover Letter 101</div>
              <div className="text-muted mb-4">Cover Letter Samples</div>

              <div className="fw-bold mb-2" style={{ color: "#555" }}>
                Effective Interviewing{" "}
              </div>
              <div className="text-muted">Interview Tips</div>
              <div className="text-muted ">Internship Interview Questions</div>
              <div className="text-muted ">Interview Follow-Up</div>
            </div>

            <div className="col  border-end">
              <div className="fw-bold mb-2" style={{ color: "#555" }}>
                Employers
              </div>
              <div className="text-muted">
                Post an Internship or Job (for Free)
              </div>
              <div className="text-muted ">Employer Resources</div>
              <div className="text-muted ">
                Setting Up an Internship Program
              </div>
              <div className="text-muted ">Help Center</div>
            </div>

            <div className="col ">
              {" "}
              <div className="fw-bold mb-2" style={{ color: "#555" }}>
                Legal{" "}
              </div>
              <div className="text-muted">Terms (Updated)</div>
              <div className="text-muted">Privacy Policy</div>
              <div className="text-muted">Intellectual Property Rights</div>
              <div className="text-muted ">DO NOT SELL MY INFO</div>
              <div className="text-muted ">Cookie Notice</div>
              <div className="fw-bold mb-2" style={{ color: "#555" }}>
                Customer Service{" "}
              </div>
              <div className="text-muted">Contact Us</div>
              <div className="text-muted ">Trust and Safety Center</div>
              <div className="text-muted mb-4">About</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
