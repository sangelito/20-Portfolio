import React from "react";

export default function Header() {
    <header>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2062&q=80")`,
          height: "290px",
        }}
      >
        <div
          className="mask"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6);" }}
        >
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Stephanie Angelito</h1>

              <a
                className="btn btn-outline-light btn-lg"
                href="http://localhost:3000/#contact"
                role="button"
              >
                Let's Talk! 
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
}