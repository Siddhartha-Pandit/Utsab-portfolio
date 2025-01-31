import React from "react";
import Home from "./Home";
import { About } from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
const Page = () => {
  return (
    <div className="page-wrapper">
      <About />
      <div className="page-container">
        <Home/>
        <Resume />
        <Projects/>
        <Blog/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
};

export { Page };
