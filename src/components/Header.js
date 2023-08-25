import React from "react";


export default function Header() {
  return (
    <header>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1484788984921-03950022c9ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2132&q=80")`,
          height: "410px",
        }}
      >
        <div
          className="mask"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6);" }}
        >
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Stephanie Angelito</h1>
              <h4 className="mb-3">Learning to code one project at a time </h4>
              <a
                className="btn btn-outline-light btn-lg"
                to="../pages/Contact.js"
                role="button"
              >
                Let's Talk! 
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}