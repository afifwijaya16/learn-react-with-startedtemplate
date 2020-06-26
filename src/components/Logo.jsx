import React from "react";

export default () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 my-3">
            <a href="#!">
              <img
                className="img-fluid d-block mx-auto"
                src="images/logos/envato.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-6 my-3">
            <a href="#!">
              <img
                className="img-fluid d-block mx-auto"
                src="images/logos/designmodo.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-6 my-3">
            <a href="#!">
              <img
                className="img-fluid d-block mx-auto"
                src="images/logos/themeforest.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-6 my-3">
            <a href="#!">
              <img
                className="img-fluid d-block mx-auto"
                src="images/logos/creative-market.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
