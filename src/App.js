import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component{
  render(){  
    return(
      <Router>
      <div>
        TODO MERN APP
      </div>
      {/* <Route path="/" exact Component = {TodoList}/>
      <Route path= "/edit/:id" component = {EditTodo}/>
      <Route path = "/create" component = {CreateTodo}/> */}
      </Router>
    )
  }
}


export default App;
