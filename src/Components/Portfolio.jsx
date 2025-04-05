
import React from "react";

import image from "../images/workingboy.png";

const imageAltText = "boy is working";

const projectList = [
  {
    title: "Expense Tracker Web Application",
    description:
      "Developed an expense tracker application in React utilizing hooks such as useState, useContext, and useReducer, along with the Context API. Implemented functionality to track income and expenses, allowing users to add, remove, and persist transactions using local storage.",
    url: "https://expense-tracker-62bjvpju6-shyamlal-k-ps-projects.vercel.app/",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my project and design abilities.",
    url: "https://shyamlalkp.github.io/shyam-resume/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
