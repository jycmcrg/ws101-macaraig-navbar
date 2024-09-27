import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div class="about-content">
      <h1>About</h1>
        <p><b>Information Technology (IT)</b> is all about using computers and technology to help people and businesses work more efficiently. It includes 
              everything from setting up and managing computer systems and networks, to creating and maintaining software and applications, and ensuring that 
              data is secure and accessible.</p>
          <ul>
            <li><b>Software Development</b> - Involves creating and maintaining applications and systems software.</li>
            <li><b>Networking</b> - Focuses on connecting computers and devices to share resources and information.</li>
            <li><b>Database Management</b> - Deals with storing, organizing, and retrieving data efficiently.</li>
            <li><b>System Administration</b> - Involves managing and maintaining IT infrastructure.</li>
            <li><b>IT Support</b> - Provides technical assistance and troubleshooting for users.</li>
          </ul>
      </div>
    </div>
  );
};

export default About;

