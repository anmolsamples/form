
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import StepOne from './Components/StepOne'
import StepTwo from './Components/StepTwo'
import StepThree from "./Components/StepThree";
import Final from './Components/Final'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { nextForm } from "./actions";
import { prevForm } from "./actions";
function App() {
  const myState=useSelector((state)=>state.changeState)
  const dispatch=useDispatch();
  
  

  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    adress:"",
    State:"",
    city:""

  })

  
  const nextStep = () => {
    dispatch(nextForm())
  };

  
  const prevStep = () => {
    dispatch(prevForm())
  };


  const handleInputData = input => e => {
    
    const {value } = e.target;

    
    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }



  switch (myState) {
   
    case 1:
      return (
        <div className="App">
          <Container>
            <Row>
              
              <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepOne nextStep={nextStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
   
    case 2:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
      
      case 3:
        return (
          <div className="App">
            <Container>
              <Row>
                <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                  <StepThree nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                </Col>
              </Row>
            </Container>
          </div>
        );
    case 4:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                <Final values={formData}  />
              </Col>
            </Row>
          </Container>
        </div>
      );
    
    default:
      return (
        <div className="App">
         
        </div>
      );
  }
}

export default App;