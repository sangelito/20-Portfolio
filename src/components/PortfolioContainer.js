import React, { useState } from "react";
import Nav from "./Navigation";
import Portfolio from "../pages/Portfolio";
import AboutMe from "../pages/AboutMe";
import Contact from "../pages/Contact";

function PortfolioContainer({ currentPage }) {
    // const renderPage = () => {
    function renderPage() {
      switch (currentPage.name) {
        case "about me":
          return <AboutMe />;
        case "portfolio":
          return <Portfolio />;
        case "contact":
          return <Contact />;
        default:
          return <AboutMe />;
      }
    }

    return (
        <div>
          <div>{renderPage()}</div>
        </div>
      );
}
export default PortfolioContainer;