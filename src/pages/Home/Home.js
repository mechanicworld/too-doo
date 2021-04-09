import React, { useState } from "react";

import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import style from "./Home.module.css";

import {
  BrowserRouter as Router,
  Redirect,
  useHistory,
} from "react-router-dom";

import homePageImg from "../../assets/home-page.jpg";
import tooDoo from "../../assets/tooDoo.png";

function Home({ userInformation, setUserInformation }) {
  let history = useHistory();

  const enterHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(userInformation));

    if (userInformation.firstName !== "" && userInformation.lastName !== "") {
      history.push(
        `dashboard/${userInformation.firstName + userInformation.lastName}`
      );
    } else {
      alert("Please fill the fisrtname and surname");
    }
  };

  return (
    <>
      <Container fluid className={`p-0   ${style.background} `} >
        <Row className={`d-flex justify-content-center align-items-center `}>
          <Col xs={10} sm={10} md={12} lg={7} xl={8} className={`p-0`}>
            <Image
              
              src={homePageImg}
              className={style.loginImg}
              fluid
            />
          </Col>

          <Col
            xs={10}
            sm={10}
            md={8}
            lg={5}
            xl={4}
            className={`p-4 d-flex justif-content-center ${style.background}`}
          >
            
            
            <Col>
              <Form>
                <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    onChange={(e) =>
                      setUserInformation({
                        ...userInformation,
                        firstName: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) =>
                      setUserInformation({
                        ...userInformation,
                        lastName: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Button
                  onClick={enterHandler}
                  className={`my-5`}
                  variant="primary"
                  type="submit"
                  block
                >
                  Start
                </Button>
              </Form>
            </Col>
           

            
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
