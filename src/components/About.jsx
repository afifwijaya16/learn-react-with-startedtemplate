import React from "react";

export default ({ aboutLink }) => {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          <h3 className="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <ul className="timeline">
          {aboutLink &&
            aboutLink.map(({ year, heading, caption, img }, index) => (
              <li
                className={`${index % 2 === 0 ? " " : " timeline-inverted"}`}
                key={`${index}`}
              >
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src={img} alt="" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>{year}</h4>
                    <h4 className="subheading">{heading}</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">{caption}</p>
                  </div>
                </div>
              </li>
            ))}

          <li className="timeline-inverted">
            <div className="timeline-image">
              <h4>
                Be Part
                <br />
                Of Our
                <br />
                Story!
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
