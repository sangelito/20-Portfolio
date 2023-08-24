import React from "react";
import "../pages";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

import ProfilePic from "../assets/steph.jpg";

export default function AboutMe() {
    return (
        <div>
          <div>
            <div className="aboutMe aboutMeContainer">
              <img
                src={ProfilePic}
                className="profile-picture"
                alt="profile"
                style={{
                  paddingTop: "35px",
                }}
              />
              <p
                className="aboutMe text"
                style={{
                  paddingTop: "35px",
                  fontSize: "20px",
                }}
              >
               Hello! I'm Stephanie an aspiring software developer 
                <br />
                Email me at laurakam91@gmail.com
                <br />
                <span>
                  <a href="https://github.com/sangelito">GitHub {"   "} </a>
                </span>
                <span>
                  <a href="https://www.linkedin.com/in/stephanie-angelito-33816322b/">
                    LinkedIn {"   "}
                  </a>
                </span>
                <br />
              </p>
            </div>
          </div>
        </div>
      );
}
          