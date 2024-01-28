const About = () => {
  return (
    <>
      <div className="container-fluid about">
        <div className="row">
          <div className="col-md-6 col-12 first_about"></div>
          <div className="col-md-6 col-12 my-5 p-md-5 px-3">
            <h2 className="mb-5 ms-md-5">About Montreal</h2>
            <p className="ms-md-5">
              We’re more than just a tire company;
              <br />
              we’re your trusted partners on the road.
            </p>
            <p className="ms-md-5">
              With a passion for delivering top-notch tire solutions, we have
              been serving for over a decade.
            </p>
            <p className="ms-md-5">
              Discover the <strong>MONTREAL TIRES</strong> difference today,
              where Quality, Reliability and Customer Satisfaction drive
              everything we do.
            </p>
            <div className="buttons mt-5 d-flex ms-md-5">
              <button className="btn me-2">
                <img src="./join_btn.png" alt="" className="img-fluid" />
              </button>
              <button className="btn me-2">
                <img src="./read_more_btn.png" alt="" className="img-fluid" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
