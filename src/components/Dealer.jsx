const Dealer = () => {
  return (
    <>
      <div className="dealer py-5">
        <div className="container">
          <div className="row">
            <h2 className="col-12 text-center d-flex align-items-center justify-content-center">
              <img src="./location_icon.png" alt="" className="img-fluid" />
              <p>Find a Dealer Near You</p>
            </h2>
            <p className="text-center mt-4">
              Our extensive network of trusted partners is ready to assist you
              in finding the
              <br />
              ideal tires and providing top-notch services that ensure your
              vehicle’s optimal performance and safety.
            </p>
            <div className="col-12 d-flex align-items-center justify-content-center mt-3">
              <div className="input-container">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Enter City, State or Zipcode"
                />
                <img
                  src="./search_icon.png"
                  alt="Search"
                  className="search-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dealer;
