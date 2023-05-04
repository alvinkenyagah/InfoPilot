import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="heading">
        <p>
          Welcome <br /> to InfoPilot
        </p>
      </div>

      <div className="summary">
        <p>Your source for interesting topics</p>
        <p>
          and latest information around the world.
          <br />
          <Link to="/search">
            <button id="home">Get started</button>
          </Link>
        </p>
      </div>
    </>
  );
}
