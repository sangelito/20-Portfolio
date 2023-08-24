import React from "react";

function Nav({ setCurrentPage, currentPage, pages }) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          </div>
            </nav>
        </header>
    );
}

export default Nav;