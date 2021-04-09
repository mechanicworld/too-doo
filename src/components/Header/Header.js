import React from 'react'
import styles from './Header.module.css'
import tooDoo from '../../assets/tooDoo.png'
import { Navbar } from 'react-bootstrap'



function Header() {
  return (

    <Navbar sticky="top"  className={styles.headerBg} >
      <Navbar.Brand className="p-0">
        <img
          alt=""
          src={ tooDoo }
          width="50"
          height="50"
          className="d-inline-block align-top"
        />          
        </Navbar.Brand>
    </Navbar>

  )
}

export default Header
