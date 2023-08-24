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
          <div className="collapse navbar-collapse" id="navbarExample01">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item active">
                <a
                  aria-current="page"
                  href="#aboutme"
                  onClick={() => setCurrentPage(pages[0])}
                  className={
                    currentPage === "AboutMe" ? "nav-item active" : "nav-link"
                  }
                >
                  About Me
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="#portfolio"
                  //Ternary operator, check to see if current page is portfolio.

                  onClick={() => setCurrentPage(pages[1])}
                  //if it is, set current page to 'nav-item-active', otherwise set it to 'nav-link'
                  className={
                    currentPage === "Portfolio" ? "nav-item active" : "nav-link"
                  }
                >
                  Portfolio
                </a>
              </li>
              
                </ul>
          </div>
          </div>
            </nav>
        </header>
    );
}

export default Nav;