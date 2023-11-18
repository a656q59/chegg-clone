const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light px-3 "
      style={{ borderBottom: "5px solid rgb(235, 113, 0)", fontSize: "13px" }}
    >
      <a
        className="navbar-brand fw-bolder"
        href="/"
        style={{ color: "rgb(235, 113, 0)", fontSize: "16px" }}
      >
        Chegg <span className="fw-normal">Internships</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              FREE SKILLS PROGRAMS
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">
              BROWSE
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">
              CAREER ADVICE
            </a>
          </li>
        </ul>
      </div>

      <form class="form-inline">
        <div class="input-group border bg-white ">
          <input
            type="text"
            class="form-control border border-0 "
            placeholder="Find Interships"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <div class="input-group-append d-flex align-items-center mx-1">
            <span
              class="input-group-text rounded-pill d-flex align-items-center justify-content-center text-white "
              style={{
                width: "10px",
                height: "1.5rem",
                backgroundColor: "rgb(235, 113, 0)",
                border: "1px solid rgb(235, 113, 0)",
              }}
              id="basic-addon1"
            >
              @
            </span>
          </div>
        </div>
      </form>

      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="/">
            EMPLOYERS
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link pe-1" href="/">
            SIGN IN |
          </a>
        </li>
        <li class="nav-item ">
          <a class="nav-link ps-0 " href="/">
            CREATE ACCOUNT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
