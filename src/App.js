import React, {  useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import style from './App.module.css'
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App()  {
  
  const [userInformation, setUserInformation] = useState(
    {
      firstName: "",
      lastName: ""
    })


    return (
      <Router>
        <div className={style.background}>
          
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
