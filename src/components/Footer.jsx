const Footer = () => {
  return (
    <>
      <div className="footer py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src="./logo_white.png" alt="" className="img-fluid" />
              <p className="logo_text mt-5">
                Lorem ipsum dolor sit amet consectetur. Ornare bibendum congue
                ac gravida turpis sed eget ullamcorper vitae. Tortor risus
                blandit dis dignissim.
              </p>
            </div>
            <div className="col-md-2 lists my-3">
              <p className="list_heading">
                <strong>Shop Tires</strong>
              </p>
              <p className="list_items_footer mb-2">
                <a href="">Trucks</a>
              </p>
              <p className="list_items_footer mb-2">
                <a href="">Buses</a>
              </p>
              <p className="list_items_footer mb-2">
                <a href="">Cars</a>
              </p>
              <p className="list_items_footer mb-2">
                <a href="">Vans</a>
              </p>
            </div>
            <div className="col-md-2 lists my-3">
              <p className="list_heading">
                <strong>Company</strong>
              </p>
              <p className="list_items_footer mb-2">
                <a href="">About Us</a>
              </p>
              <p className="list_items_footer mb-2">
                <a href="">Contact Us</a>
              </p>
              <p className="list_items_footer mb-2">
                <a href="">Find a Dealer</a>
              </p>
            </div>
            <div className="col-md-2 lists my-3">
              <p className="list_heading">
                <strong>Quick Links</strong>
              </p>
              <p className="list_items_footer mb-2">
                <a href="">Rebates</a>
              </p>
              <p className="list_items_footer mb-2">
                <a href="">Warranty</a>
              </p>
              <p className="list_items_footer mb-2">
                <a href="">Privacy Policy</a>
              </p>
              <p className="list_items_footer mb-2">
                <a href="">Terms & Conditions</a>
              </p>
            </div>
            <div className="col-md-2 lists my-3">
              <p className="list_heading">
                <strong>We shall respond quickly</strong>
              </p>
              <p className="list_items_footer mb-2">
                <a href="">
                  <img
                    src="./phone_icon.png"
                    alt=""
                    className="img-fluid me-2"
                  />
                  +91 1234567890
                </a>
              </p>
              <p className="list_items_footer mb-2">
                <a href="mailto:support@montrealtires.com">
                  <img src="./mail.png" alt="" className="img-fluid me-2" />
                  support@montrealtires.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
