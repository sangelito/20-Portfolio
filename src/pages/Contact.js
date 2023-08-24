import React, { useState } from "react";
import {
  validateEmail,
  validateUserName,
  validateMessage,
} from "../utils/helpers";
// Importing a helper function

import {
  MDBInput,
  MDBRow,
  MDBCol,
  MDBTextArea,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./pages.css";

export default function Contact() {
  const[errorMessage, setErrorMessage] = useState("");
  const handleBlur = (e) => {
    if (e.target.name === "name") {
      if (!validateUserName(e.target.value)) {
        setErrorMessage("Username required");
      } else {
        setErrorMessage("");
      }
    }
    if (e.target.name === "message") {
      if (!validateMessage(e.target.value)) {
        setErrorMessage("Message required");
      } else {
        setErrorMessage("");
      }
    }
    if (e.target.name === "email") {
      if (!validateEmail(e.target.value)) {
        setErrorMessage("A valid email is required");
      } else {
        setErrorMessage("");
      }
    }
  };
  return (
    <MDBCard alignment="center">
      <MDBCardHeader></MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Contact Me</MDBCardTitle>
          <MDBCardText>angelitostephanie@gmail.com</MDBCardText>
        <span>
          <a href="https://www.linkedin.com/in/stephanie-angelito-33816322b/">LinkedIn {"   "}</a>
        </span>
        <div className="contactMargin">
          <MDBRow className="g-3 align-items-center">
            <MDBInput
              wrapperClass="col-auto"
              label="First and Last Name"
              type="text"
              id="formTextExample2"
              aria-describedby="textExample2"
              name="name"
              onBlur={handleBlur}
            />
            <MDBCol size="auto">
              <span id="textExample2" className="form-text">
              </span>
            </MDBCol>
          </MDBRow>
          <MDBRow className="g-3 align-items-center">
            <MDBInput
              wrapperClass="col-auto"
              label="Email"
              type="text"
              id="formTextExample2"
              aria-describedby="textExample2"
              name="email"
              onBlur={handleBlur}
            />
            <MDBCol size="auto">
              <span id="textExample2" className="form-text">
              </span>
            </MDBCol>
          </MDBRow>
          <div>
            <MDBTextArea
              label="Message"
              id="textAreaExample"
              rows={5}
              name="message"
              onBlur={handleBlur}
            />
          </div>
          <p>{errorMessage}</p>
        </div>
        <MDBBtn href="#">Submit</MDBBtn>
        </MDBCardBody>
        <MDBCardFooter>Look forward to hearing from you! </MDBCardFooter>
    </MDBCard>
  );
}