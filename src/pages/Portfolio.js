import React from "react";
import { MDBBadge } from "mdb-react-ui-kit";
import "./pages.css";

import weatherdashboard from "../assets/Weather Dashboard.png";
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
            </div>
        </div>
    );
}