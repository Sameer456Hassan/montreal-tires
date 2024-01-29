import SimpleSlider from './Carousel';

const Type = () => {
  return (
    <>
      <div className="type py-md-5 py-2">
        <div className="container-fluid my-5">
          <div className="row">
            <h2 className="col-12 text-center">CHOOSE YOUR TYPE</h2>
            <a href="" className="col-12 text-center">
              View All
            </a>
          </div>
        </div>
        <div className="container my-5">
          <SimpleSlider />
        </div>
      </div>
    </>
  );
};

export default Type;
