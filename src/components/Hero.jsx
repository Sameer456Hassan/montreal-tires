const Hero = () => {
  return (
    <>
      <div className="hero d-flex  align-items-center justify-content-center">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 offset-md-6 text-white d-flex align-items-center justify-content-center flex-column">
              {/* <img src="./Title.png" alt="" className="img-fluid" /> */}
              <div class="transparent-text">WE KEEP YOU</div>
              <h2 className="h2_hero">RUNNING</h2>
              <p className="hero_text text-center">TOP GRADE TIRES FOR TRUCKS, BUSES AND CARS</p>
              <button className="btn discover_btn">Discover More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
