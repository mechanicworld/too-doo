import React, { useEffect, useState } from "react";
import Todos from "../../components/Todos/Todos";
import Category from "../../components/Category/Category";
import { Container, Row, Col, Image} from "react-bootstrap";
import styles from "./Dashboard.module.css";
import avatar from "../../assets/avatar.png";
import Header from '../../components/Header/Header'

function Dashboard({ userInformation, setUserInformation }) {
  const [todosList, setTodosList] = useState([]);

  const [filterStatus, setFilterStatus] = useState("all");

  const [categoryList, setCategoryList] = useState([]);

  const [checkedList, setCheckedList] = useState([]);

  

  useEffect(() => {
    const fetchCategory = () => {
      let categoryList = todosList.map((item) => item.todoCategory);
      let uniqueCategoryList = [...new Set(categoryList)];
  
      return uniqueCategoryList;
    };
    
    setCategoryList(fetchCategory());
  }, [todosList]);

  return (
    <>
      <Header/>
      <Container className="mt-4" fluid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={3} xl={2} className={styles.menu}>
            <Row className=" ">
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                className="d-flex justify-content-center"
              >
                <Image className={styles.avatar} src={avatar} roundedCircle />
              </Col>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                className="d-flex justify-content-center align-items-center"
              >
                <h5 className="text-center  ">
                  {JSON.parse(
                    localStorage.getItem("user")
                  ).firstName.toUpperCase()}{" "}
                  {JSON.parse(
                    localStorage.getItem("user")
                  ).lastName.toUpperCase()}
                </h5>
              </Col>
            </Row>
            <Row className="text-center ">
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <h5 className="border-bottom mb-4 p-3 text-black-50">
                  CATEGORIES
                </h5>
              </Col>

              <Category
                filterStatu={filterStatus}
                setFilterStatus={setFilterStatus}
                todosList={todosList}
                setTodosList={setTodosList}
                categoryList={categoryList}
                checkedList={checkedList}
                setCheckedList={setCheckedList}
              />
            </Row>
          </Col>
          <Col xs={12} sm={12} md={12} lg={9} xl={10}>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <h5 className="text-center  border-bottom mb-4 p-3 text-black-50">
                TODOS
              </h5>
            </Col>
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
  );
}

export default Dashboard;
