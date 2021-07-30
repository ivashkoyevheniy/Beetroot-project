import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login, Register, Workflow, Home } from './pages/';

function App() {

 return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home"> 
             <Home /> 
          </Route>
          {/* <Route path="/workflow">
            <Workflow/>
          </Route> */}
        </Switch>
      </BrowserRouter>

      {/* <Login/> */}

        {/* <Calendar/> */}
      {/* <Register /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
