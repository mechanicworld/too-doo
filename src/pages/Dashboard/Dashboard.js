
import React, { useEffect, useState } from 'react'
import Todos from '../../components/Todos/Todos'
import Category from '../../components/Category/Category'
import { Container, Row, Col, Image } from 'react-bootstrap'
import styles from './Dashboard.module.css'
import avatar from '../../assets/avatar.png'

function Dashboard({ userInformation, setUserInformation }) {

  const [todosList, setTodosList] = useState([])

  const [filterStatus, setFilterStatus] = useState("all")

  const [categoryList , setCategoryList] = useState([])

  const [checkedList, setCheckedList] = useState([])

  const fetchCategory = () => {
    let categoryList = todosList.map(item => item.todoCategory)
    let uniqueCategoryList = [...new Set(categoryList)]
      
    return uniqueCategoryList
  }
  
  useEffect(() => {   
    setCategoryList(fetchCategory())
    
  }, [todosList])

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
              <Category 
                filterStatu={filterStatus} 
                setFilterStatus={setFilterStatus} 
                todosList={todosList} 
                setTodosList={setTodosList} 
                categoryList={categoryList}
                checkedList={checkedList}
                setCheckedList={setCheckedList}
              />
              </Col>
            </Row>
          </Col>
          <Col lg={9}>            
            <Todos 
              filterStatu={filterStatus}   
              todosList={todosList} 
              setTodosList={setTodosList}
              checkedList={checkedList}              
              />
          </Col>
        </Row>
        
      </Container>
    </>
  )
}

export default Dashboard
