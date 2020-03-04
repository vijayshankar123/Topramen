import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Resto Hub</h1>
          <p className="lead">
            Sign up to find the best restaurants near your place
          </p>
          <div className="buttons">
            <Link to="/resto" className="btn btn-primary">
              View Restauants
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
