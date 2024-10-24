/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Shyamlal K P",
  title: "Front-End Developer",
  email: "shyamlal.prasanth@gmail.com",
  gitHub: "https://github.com/shyamlalkp",
  instagram: "https://www.instagram.com/shyam___187/",
  linkedIn: "https://www.linkedin.com/in/shyamlal-k-p-a91975263/",
  devDotTo: "https://dev.to/shyamprasanth",
  medium: "",
  twitter: "https://x.com/ShyamlalKP4494",
  youTube: "https://www.youtube.com/@shyamkalayil",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
