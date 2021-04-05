
import React, { useEffect, useState } from 'react'
import Todos from './Todos/Todos'
import { Container, Row, Col, Image } from 'react-bootstrap'
import styles from './Dashboard.module.css'
import avatar from '../../assets/avatar.png'

function Dashboard({ userInformation, setUserInformation }) {



  const avatarHandler = () => {

    console.log(JSON.parse(localStorage.getItem("user")).firstName)
  }
  useEffect(() => {
    avatarHandler()
  }, [])

  return (
    <>
      <Container className="mt-4" fluid>
        <Row>
          <Col lg={3} className={styles.menu}>
            <Row>
              <Col lg={5} >
                <Image className={styles.avatar} src={avatar} roundedCircle />
              </Col>
              <Col lg={7} className="d-flex justify-content-center align-items-center">
                <h4 className="text-center ">
                  {JSON.parse(localStorage.getItem("user")).firstName.toUpperCase()}
                  {" "}
                  {JSON.parse(localStorage.getItem("user")).lastName.toUpperCase()}
                </h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <ul className={styles.list}>
                  <li>asdf</li>
                  <li>asdf</li>
                  <li>asdf</li>
                  <li>asdf</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col lg={9}>            
            <Todos />              
          </Col>
        </Row>
        
      </Container>
    </>
  )
}

export default Dashboard
