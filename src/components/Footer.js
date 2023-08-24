import React from "react";

export default function Footer() {
  return (
    //icons containing links to social media etc
    <>
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#f1f1f1;" }}
      >
        {/* <!-- Grid container --> */}
        <div className="container pt-4">
          {/* <!-- Section: Social media --> */}
          <section className="mb-4">

            {/* <!-- Linkedin --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.linkedin.com/in/stephanie-angelito-33816322b/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i classNames="fab fa-linkedin"></i>
            </a>
            {/* <!-- Github --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://github.com/sangelito/20-Portfolio" 
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center text-dark p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </>
  );
}
