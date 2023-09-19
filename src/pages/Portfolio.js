import React from "react";
import { MDBBadge } from "mdb-react-ui-kit";
import "./pages.css";

import weatherdashboard from "../assets/Weather Dashboard.png";
import codequiz from "../assets/Code Quiz.png"
import notetaker from "../assets/Note Taker.png"
import employeetracker from "../assets/Employee Tracker.png"
import svglogo from "../assets/SVG Logo Maker.png"
import workday from "../assets/Workday Scheduler.png"
import socialmedia from "../assets/social media.png"
import petpost from "../assets/Pet Posts.png"

export default function Portfolio() {
    return (
        <div class="row row-cols-1 row-cols-sm-3 g-4">
            <div className="col" >
            <img
            className="imgScreenshot"
            src={weatherdashboard}
            class="card-img-top"
            alt="Weather Dashboard"
          />
          <div className="d-flex justify-content-evenly">
          <a
                href="https://github.com/sangelito/06-WeatherDashboard.git"
                className="btn btn-primary"
              >
                Repo
              </a>
              <a
                href="https://sangelito.github.io/06-WeatherDashboard/"
                className="btn btn-primary"
              >
                Website
              </a>
          </div>
            </div>
            <div className="col" >
            <img
            className="imgScreenshot"
            src={codequiz}
            class="card-img-top"
            alt="Coding Quiz"
          />
          <div className="d-flex justify-content-evenly">
          <a
                href="https://github.com/sangelito/04-Code-Quiz.git"
                className="btn btn-primary"
              >
                Repo
              </a>
              <a
                href="https://sangelito.github.io/04-Code-Quiz/"
                className="btn btn-primary"
              >
                Website
              </a>
          </div>
            </div>
            <div className="col" >
            <img
            className="imgScreenshot"
            src={notetaker}
            class="card-img-top"
            alt="Note Taker"
          />
          <div className="d-flex justify-content-evenly">
          <a
                href="https://github.com/sangelito/11-Note-Taker.git"
                className="btn btn-primary"
              >
                Repo
              </a>
              <a
                href="https://serene-wave-59301-034ef90e875c.herokuapp.com/notes"
                className="btn btn-primary"
              >
                Website
              </a>
          </div>
            </div>
            <div className="col" >
            <img
            className="imgScreenshot"
            src={employeetracker}
            class="card-img-top"
            alt="Employee Tracker"
          />
          <div className="d-flex justify-content-evenly">
          <a
                href="https://github.com/sangelito/12-Employee-Tracker.git"
                className="btn btn-primary"
              >
                Repo
              </a>
              <a
                href="https://drive.google.com/file/d/1oMcIpZJV1huluADxfNNvGkOcuoWrZNGL/view"
                className="btn btn-primary"
              >
                Walkthrough
              </a>
          </div>
            </div>
            <div className="col" >
            <img
            className="imgScreenshot"
            src={svglogo}
            class="card-img-top"
            alt="SVG Logo Maker"
          />
          <div className="d-flex justify-content-evenly">
          <a
                href="https://github.com/sangelito/12-Employee-Tracker.git"
                className="btn btn-primary"
              >
                Repo
              </a>
              <a
                href="https://drive.google.com/file/d/1mveT_YQPtDw13R1bb62pGD_v-GMhThAH/view"
                className="btn btn-primary"
              >
                Walkthrough
              </a>
          </div>
            </div>
            <div className="col" >
            <img
            className="imgScreenshot"
            src={workday}
            class="card-img-top"
            alt="SVG Logo Maker"
          />
          <div className="d-flex justify-content-evenly">
          <a
                href="https://github.com/sangelito/05-workday-scheduler.git"
                className="btn btn-primary"
              >
                Repo
              </a>
              <a
                href="https://sangelito.github.io/05-workday-scheduler/"
                className="btn btn-primary"
              >
                Website
              </a>
          </div>
            </div>
            <div className="col" >
            <img
            className="imgScreenshot"
            src={petpost}
            class="card-img-top"
            alt="Social Network API"
          />
          <div className="d-flex justify-content-evenly">
          <a
                href="https://github.com/sangelito/Pet-Posts"
                className="btn btn-primary"
              >
                Repo
              </a>
              <a
                href="https://drive.google.com/file/d/1zFmTrQ7IT5zuL3ML6K9XyB2jT1DeU5WH/view"
                className="btn btn-primary"
              >
                Website 
              </a>
          </div>
            </div>
        </div>
    );
}