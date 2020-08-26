import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/todo-list";
import EditTodo from "./components/edit-todo";
import CreateTodo from "./components/create-todo";
import logo from "./logo.png";


class App extends Component{
  render(){  

    const barstyle = {width:"100%"}
    return(
      <Router>
      <div className = "container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style = {barstyle}>
          <a className = "navbar-brand">
            <img src = {logo} width = "50" height = "50" alt= "Todo App" />          
          </a>
          <Link to = "/" className = "navbar-brand" style = {{fontSize: "medium"}}> MERN-STACK TODO APP</Link>
          {/* <div className="collapse navbar-collapse" id="navbarTogglerDemo02"> */}
            <ul className="navbar-nav mr-auto mt-2 mt-md-0">
            <li className="nav-item">
              <Link to = "/" className = "nav-link" > Todos </Link>
            </li>
            <li className="nav-item">
              <Link to = "/create" className = "nav-link"> Create Todo</Link>
            </li>
            </ul>
           {/* </div> */}
        </nav>
        <Route exact path="/"  component = {TodoList}/>
        <Route path= "/edit/:id" component = {EditTodo}/>
        <Route path = "/create" component = {CreateTodo}/>
      </div>
      </Router>
    )
  } 
}


export default App;
