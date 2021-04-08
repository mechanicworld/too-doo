import React, { useState } from 'react'

import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap'

import {
  BrowserRouter as Router,
  Redirect, useHistory
} from "react-router-dom";

import homePageImg from '../../assets/home-page.jpg'

function Home({ userInformation, setUserInformation }) {
  let history = useHistory()

  const enterHandler = (e) => {
    e.preventDefault()
    localStorage.setItem("user", JSON.stringify(userInformation))

    if (userInformation.firstName !== "" && userInformation.lastName !== "") {
      history.push(`dashboard/${userInformation.firstName + userInformation.lastName}`)
    } else {
      alert("Please fill the fisrtname and surname")

    }

  }

  return (
    <>
      <Container fluid className={``} >
        <Row className={`d-flex justify-content-center`} >
          <Col xs={12} sm={12} lg={5} xl={5} className={`p-0`}>
            <Image src={homePageImg} fluid />
          </Col>
          <Col xs={12} sm={12} lg={7} xl={7} className={`p-5`} >
            <Col className={`p-5`}>
              <Form>
                <Form.Group >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => setUserInformation({ ...userInformation, firstName: e.target.value })}
                  />
                </Form.Group>
                <Form.Group >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => setUserInformation({ ...userInformation, lastName: e.target.value })}
                  />
                </Form.Group>
                <Button onClick={enterHandler} className={`my-5`} variant="primary" type="submit" block >
                  Start
              </Button>
              </Form></Col>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default Home
