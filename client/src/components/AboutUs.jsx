import React from "react";
import image from "../images/picture2.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">Features</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px',paddingBottom:'20px' }}>
      <li style={{paddingBottom:'5px' }}>Effortless Booking: Reserve your slots in seconds.</li>
      <li style={{paddingBottom:'5px' }}>Real-Time Updates: Check availability instantly.</li>
      <li style={{paddingBottom:'5px' }}>Fair Play Policy: Ensuring equal access for all.</li>
      <li style={{paddingBottom:'5px' }}>Notifications: Never miss your booking reminders.</li>
      <li >Multi-Sport Support: Book slots for badminton, table tennis, basketball, and more.</li>
    </ul>

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
