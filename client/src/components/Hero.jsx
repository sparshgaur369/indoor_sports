import React from "react";
import image from "../images/picture1.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Game, <br />
          Our Priority
        </h1>
        <p>
        Experience indoor sports like never before, with convenient access to high-quality, well-maintained facilities. Whether you're playing for fitness or fun, we prioritize your well-being and provide an environment that encourages growth, competition, and personal achievement.
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
