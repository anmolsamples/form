import React from "react";
import { Card } from "react-bootstrap";

const Final = ({ values }) => {

    //destructuring the object from values
  const { firstName, lastName, age, email,adress,State,city } = values;
  return (
    <>
      <Card style={{ marginTop: 100, textAlign: "left" }}>
        <Card.Body>
          <p>
            <strong>First Name :</strong> {firstName}{" "}
          </p>
          <p>
            <strong>Last Name :</strong> {lastName}{" "}
          </p>
          <p>
            <strong>Age :</strong> {age}{" "}
          </p>
          <p>
            <strong>Email :</strong> {email}{" "}
          </p>
          <p>
            <strong>Address :</strong> {adress}{" "}
          </p>
          <p>
            <strong>State :</strong> {State}{" "}
          </p>
          <p>
            <strong>City :</strong> {city}{" "}
          </p>
        </Card.Body>
      </Card>
    </>
  );
};

export default Final;