// src/pages/Portfolio.jsx
import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  // Example projects data
  const projects = [
    {
      title: 'Project One',
      image: 'path-to-image-1.jpg', // Replace with actual image paths
      deployedLink: 'https://deployed-link-1.com',
      repoLink: 'https://github.com/username/repo1'
    },
    {
      title: 'Project Two',
      image: 'path-to-image-2.jpg', // Replace with actual image paths
      deployedLink: 'https://deployed-link-2.com',
      repoLink: 'https://github.com/username/repo2'
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <h1>My Portfolio</h1>
      <div>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
