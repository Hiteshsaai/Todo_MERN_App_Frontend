import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

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
    render(){
        return(
            <div>
                Todo List Component
            </div>
        )
        
    }
}



export default TodoList;
