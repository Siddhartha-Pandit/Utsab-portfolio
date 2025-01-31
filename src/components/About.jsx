import React from "react";
import Social from "./Social";

const About = () => {
  return (
    <div className="about-container" id="home">
      <img
        src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?t=st=1738257154~exp=1738260754~hmac=02f138da05d1e5119c7364a7f7ab5fd0744f10d38f98328bcb475cc374ba8fd0&w=996"
        alt="Utsab Sapkota"
        className="profile-image"
      />
      <h2 className="about-name">Utsab Sapkota</h2>
    
      <div className="contact-info">
        
        <ul>
          <li>Email: utsabsapkota@example.com</li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Address: 123 Tech Avenue, Silicon Valley, CA 94043, USA</li>
        </ul>
      </div>
      <Social />

    </div>
  );
};

export { About };
