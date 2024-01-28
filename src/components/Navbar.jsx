const Navbar = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center welcome_line">
        Welcome to our Store!
      </div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="./logo.png" alt="" className="img-fluid" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 navbar_items">
                <li className="nav-item">
                  <a className="nav-link mx-3 " aria-current="page" href="#">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-3" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-3" href="#">
                    Join Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-3" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
              <a href="/" className="find_Dealer">
                Find a Dealer
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
