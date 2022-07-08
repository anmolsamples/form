import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";


const StepThree = ({ nextStep, handleFormData, prevStep, values }) => {
  
  const [error, setError] = useState(false);
  const [textError,setTextError]=useState(false)
  const [anotherError,setAnotherError]=useState(false)
     
  const submitFormData = (e) => {
    e.preventDefault();

     
    if (validator.isEmpty(values.adress) || validator.isEmpty(values.State) || validator.isEmpty(values.city)) {
      setError(true);
      
    }
    else if(!validator.isUppercase(values.State)||!validator.isUppercase(values.city)){
      setTextError(true)
      setError(false)
    }
    else if(!validator.isAlpha(values.State)||!validator.isAlpha(values.city)){
      setTextError(false)
      setError(false)
      setAnotherError(true)
     }

     else {
      nextStep();
    }
  };
  return (
    <>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                placeholder="Address"
                onChange={handleFormData("adress")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>State</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                placeholder="State"
                onChange={handleFormData("State")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
              {textError ? (
                <Form.Text style={{ color: "red" }}>
                  This field should be in capital letter
                </Form.Text>
              ) : (
                ""
              )}
               {anotherError ? (
                <Form.Text style={{ color: "red" }}>
                   cannot contain numbers
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                placeholder="city"
                onChange={handleFormData("city")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
              {textError ? (
                <Form.Text style={{ color: "red" }}>
                  This field should be in capital letters
                </Form.Text>
              ) : (
                ""
              )}
               {anotherError ? (
                <Form.Text style={{ color: "red" }}>
                   cannot contain numbers
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button variant="primary" onClick={prevStep}>
                Previous
              </Button>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepThree;