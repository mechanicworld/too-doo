import React, {  useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App()  {

  const [userStatus, setUserStatus] = useState(true)
  const [userInformation, setUserInformation] = useState(
    {
      firstName: "",
      lastName: ""
    })


    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" >          
              <Home 
                userInformation={userInformation}
                setUserInformation={setUserInformation}
              />
            </Route>
            <Route exact path="/dashboard/:username">
              <Dashboard 
                userInformation={userInformation}
                setUserInformation={setUserInformation}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  
}

export default App
