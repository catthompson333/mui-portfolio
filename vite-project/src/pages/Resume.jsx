// src/pages/Resume.jsx
import React from 'react';

function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p>
        Download my resume: <a href="path-to-your-resume.pdf" download>Click here to download</a>
      </p>
      <h2>Proficiencies</h2>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML/CSS</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        {/* Add more skills as needed */}
      </ul>
    </div>
  );
}

export default Resume;
