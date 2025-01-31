import React from 'react';

const resumeData = {
  experience: [
    {
      title: 'Senior Software Engineer',
      company: 'Red Hat',
      duration: '2022-11-01 - Present',
      description: 'Senior Software Engineer in the OpenShift Virtualization (CNV) Infrastructure team. Working on the KubeVirt Instancetypes and Preferences, Ansible integration, virtctl, containerdisks, ssp-operator, Tekton tasks and VM templates.',
      location: 'Remote',
    },
    {
      title: 'Software Engineer',
      company: 'Red Hat',
      duration: '2022-01-01 - 2022-10-31',
      description: 'Software Engineer in the OpenShift Virtualization (CNV) Infrastructure team.',
      location: 'Remote',
    },
    {
      title: 'Software Engineer',
      company: 'Stadler Rail AG',
      duration: '2020-07-01 - 2021-12-31',
      description: 'Passenger information systems engineering.',
      location: 'Onsite',
    },
    {
      title: 'Software Engineer and IT Administrator',
      company: 'VIPCO GmbH',
      duration: '2018-03-01 - 2020-06-30',
      description: 'Safety PLC firmware programming and passenger information systems engineering.',
      location: 'Onsite',
    },
    {
      title: 'IT Administrator',
      company: 'VIPCO GmbH',
      duration: '2016-10-01 - 2018-02-28',
      description: 'Student employee.',
      location: 'Onsite',
    },
  ],
  education: [
    {
      degree: 'Master of Science in Information Technology',
      school: 'Hochschule Mannheim',
      duration: '2016-09-01 - 2018-02-28',
    },
    {
      degree: 'Bachelor of Engineering in Information Technology',
      school: 'DHBW Mannheim',
      duration: '2013-10-01 - 2016-09-30',
    },
  ],
  skills: [
    'Golang', 'Python', 'C', 'C++', 'TypeScript', 'GitLab', 'GitHub Actions', 'Tekton', 'Jenkins', 
    'KubeVirt', 'Operators', 'OpenShift', 'Linux', 'Containers', 'Docker', 'Podman', 'Git', 'Ansible',
  ],
  languages: [
    'German - Native speaker',
    'English - Proficient',
  ],
  interests: [
    'Sports - Running, Roadbikes, Rock climbing / bouldering',
    'Nature - Hiking',
  ]
};


const Resume = () => {
  return (
    <div className="resume-container" id='resume'>
      
      <section className="resume-section" id='experience'>
      
        <h3>Experience</h3>
        <hr className='solid'/>
        <div className="resume-list">
          {resumeData.experience.map((item, index) => (
            <div key={index} className="resume-item">
              <h4 className="resume-title">{item.title}</h4>
              <p className="resume-company">{item.company} - <span className="resume-location">{item.location}</span></p>
              <p className="resume-duration">{item.duration}</p>
              <p className="resume-description">{item.description}</p>
              
            </div>
            
          ))}
          
        </div>
      </section>
<hr className='dotted'/>
      <section className="resume-section" id='education'>
    
        <h3>Education</h3>
        <hr className='solid'/>
        <div className="resume-list">
          {resumeData.education.map((item, index) => (
            <div key={index} className="resume-item">
              <h4 className="resume-title">{item.degree}</h4>
              <p className="resume-company">{item.school}</p>
              <p className="resume-duration">{item.duration}</p>
            </div>
          ))}
        
        </div>
      </section>
      <hr className='dotted'/>
      <section className="resume-section" id='skills'>
      
        <h3>Skills</h3>
         <hr className='solid'/>
         <ul className="resume-skills">
    <li className="resume-skill">
      <strong>Programming Languages:</strong>
      <span>Golang, Python, C, C++, TypeScript</span>
    </li>
    <li className="resume-skill">
      <strong>CI/CD Tools:</strong>
      <span>GitLab, GitHub Actions, Tekton, Jenkins</span>
    </li>
    <li className="resume-skill">
      <strong>Kubernetes:</strong>
      <span>KubeVirt, Operators, OpenShift</span>
    </li>
    <li className="resume-skill">
      <strong>Technologies:</strong>
      <span>Linux, Containers, Docker, Podman, Git, Ansible</span>
    </li>
  </ul>
      </section>
      <hr className='dotted'/>
      <section className="resume-section">
      
        <h3>Languages</h3>
         <hr className='solid'/>
        <ul className="resume-languages">
          {resumeData.languages.map((language, index) => (
            <li key={index} className="resume-language">{language}</li>
          ))}
        
        </ul>
      </section>
     
      <hr className='dotted'/>
      <section className="resume-section">
      
        <h3>Interests</h3>
         <hr className='solid'/>
        <ul className="resume-interests">
          {resumeData.interests.map((interest, index) => (
            <li key={index} className="resume-interest">{interest}</li>
          ))}
          
        </ul>
        
      </section>
      <hr className='dotted'/>
      
    </div>
  );
};

export default Resume;
