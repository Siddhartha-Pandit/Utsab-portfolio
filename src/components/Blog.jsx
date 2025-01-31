import React from 'react';

// Sample blog data with title, URL, and description
const blogData = [
  { 
    title: 'Understanding React Hooks',
    url: 'https://example.com/blog1',
    description: 'In this blog post, we dive deep into React hooks, explaining useState, useEffect, and other hooks in a way that makes them easy to understand and use in your React applications.'
  },
  { 
    title: 'Introduction to Kubernetes',
    url: 'https://example.com/blog2',
    description: 'Kubernetes is an open-source container orchestration platform. Learn the basics of Kubernetes, its architecture, and how to deploy containerized applications using Kubernetes clusters.'
  },
  { 
    title: 'JavaScript ES6 Features',
    url: 'https://example.com/blog3',
    description: 'ES6 introduces new syntax and features that make JavaScript development more efficient and clean. Explore features like arrow functions, template literals, and destructuring.'
  },
  { 
    title: 'Mastering TypeScript',
    url: 'https://example.com/blog4',
    description: 'TypeScript offers static typing and modern JavaScript features that improve code quality. This blog will guide you through the core concepts of TypeScript and how to use it in your projects.'
  },
  { 
    title: 'Cloud Computing with AWS',
    url: 'https://example.com/blog5',
    description: 'Cloud computing enables scalable, on-demand services. This blog explains how AWS helps businesses deploy applications and manage resources in the cloud for enhanced efficiency.'
  },
  { 
    title: 'Building RESTful APIs with Node.js',
    url: 'https://example.com/blog6',
    description: 'Learn how to build RESTful APIs using Node.js and Express, focusing on the principles of REST, route handling, and API authentication with JWT.'
  },
  // Add more blog entries as needed
];

const Blog = () => {
  return (
    <>
    <div className="blog-container" id='blogs'>
      <h2 className="blog-heading">Blog</h2>
      <hr className='solid'/>

      <div className="blog-list">
        {blogData.map((blog, index) => (
          <div key={index} className="blog-item">
            <a href={blog.url} target="_blank" rel="noopener noreferrer" className="blog-link">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
            </a>
          </div>
        ))}
      </div>
      <hr className='dotted'/>

    </div>

    </>
  );
};

export default Blog;
