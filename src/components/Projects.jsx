import React from 'react';

const projectsData = [
  {
    title: 'Project 1',
    description: 'In today’s digital era, technology plays a pivotal role in shaping our daily lives. From smartphones to cloud computing, the integration of technology into everyday tasks has revolutionized the way we work, communicate, and even think. The rapid advancement of tools like artificial intelligence, machine learning, and automation continues to redefine industries, creating new opportunities while also posing challenges.',
    link: 'https://www.example.com', // replace with actual GitHub link
    details: 'Detailed description of project 1 goes here, including the technologies used, goals, and achievements.',
  },
  {
    title: 'Project 2',
    description: 'In today’s digital era, technology plays a pivotal role in shaping our daily lives. From smartphones to cloud computing, the integration of technology into everyday tasks has revolutionized the way we work, communicate, and even think. The rapid advancement of tools like artificial intelligence, machine learning, and automation continues to redefine industries, creating new opportunities while also posing challenges.',
    link: 'https://www.example.com', // replace with actual GitHub link
    details: 'Detailed description of project 2 goes here.',
  },
  {
    title: 'Project 3',
    description: 'In today’s digital era, technology plays a pivotal role in shaping our daily lives. From smartphones to cloud computing, the integration of technology into everyday tasks has revolutionized the way we work, communicate, and even think. The rapid advancement of tools like artificial intelligence, machine learning, and automation continues to redefine industries, creating new opportunities while also posing challenges.',
    link: 'https://www.example.com', // replace with actual GitHub link
    details: 'Detailed description of project 3 goes here.',
  },
];

const Projects = () => {
  return (
    <div className="blog-container" id='projects'>
      <section className="blog-section">
        <h2 className="blog-heading">Projects</h2>
        <hr className="solid" />
        <div className="blog-list">
          {projectsData.map((project, index) => (
            <div key={index} className="blog-item">
              <h3 className="blog-title">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className='proj-link'> 
                  {project.title}
                </a>
              </h3>
              <p className="blog-description">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
      <hr className='dotted'/>

    </div>
  );
};

export default Projects;
