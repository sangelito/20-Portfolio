//will try to import logo here [still need to create logo]
import "./App.css";
//import main page from ./pages [still need to create pages]
import Nav from "./components/Navigation";
import AboutMe from "../src/pages/AboutMe";
import Contact from "../src/pages/Contact";
import React, { useState } from "react";
import PortfolioContainer from "./components/PortfolioContainer";


function App() {
    const [pages] = useState([
      {
        name: "about me",
      },
      { name: "portfolio" },
      { name: "contact" },
      {
        name: "resume",
      },
    ]);
    const [currentPage, setCurrentPage] = useState(pages[0]);
  
    
    return (
      <div className="App">
        <Nav
          className="App-nav"
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          pages={pages}
        />
        <Header className="App-header" />
        <PortfolioContainer currentPage={currentPage} />
        <Footer className="App-footer" />
      </div>
    );
  }