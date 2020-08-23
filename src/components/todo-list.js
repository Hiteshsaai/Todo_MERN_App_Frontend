import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../index.css';

const Todo = (props) => (
    <tr>
        <th scope = 'row'> {props.idx+1} </th>
        <td  className = {props.todo.todo_complete ? "completed" : ""}>{props.todo.todo_description}</td>
        <td className = {props.todo.todo_complete ? "completed" : ""}>{props.todo.todo_responsible}</td>
        <td className = {props.todo.todo_complete ? "completed" : ""}>{props.todo.todo_priority}</td>
        <td className = {props.todo.todo_complete ? "completed" : ""}>{props.todo.todo_creation_date}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}> Edit </Link>
        </td>
    </tr>
)



class TodoList extends Component {

    constructor(props){
        super()
        this.state = {todos: []}

    }

    componentDidMount(){
        axios.get("http://localhost:4000/todos")
        .then(res => {
            this.setState({todos: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }


    // componentDidUpdate() {
    //     axios.get('http://localhost:4000/todos/')
    //     .then(response => {
    //         this.setState({todos: response.data});
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })   
    // }


    todoList(){
        return this.state.todos.map((todo, i)=> {
            return <Todo todo= {todo} idx = {i} key= {i}/>
        })
    }


    render(){
        return(
            <div>
                <h3 style= {{marginTop: "20px"}}> Todo List </h3>
                <table className="table" style = {{marginTop: "20px"}}>
                <thead className="thead-dark">
                    <tr>
                    <th>#</th>
                    <th>Description</th>
                    <th>Responsibility</th>
                    <th>Priority</th>
                    {/* <th>Completed</th> */}
                    <th>Creation Date</th> 
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { this.todoList() }
                </tbody>
                </table>
            </div>
        )
        
    }
}



export default TodoList;
