import React, {Component} from 'react';
import axios from 'axios';


class EditTodo extends Component {

    constructor(props){
        super(props);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_creation_date: '',
            todo_complete: false
        }

        this.onChangeTodoDescription= this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onChangeCompleted = this.onChangeCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    componentDidMount(){
        axios.get("http://localhost:4000/todos/"+this.props.match.params.id)
        .then(res => {
            this.setState({
                todo_description: res.data.todo_description,
                todo_responsible: res.data.todo_responsible,
                todo_priority: res.data.todo_priority,
                todo_creation_date: res.data.todo_creation_date,
                todo_complete: res.data.todo_complete})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    // componentDidMount() {
    //     axios.get('http://localhost:4000/todos/'+this.props.match.params.id)
    //         .then(response => {
    //             this.setState({
    //                 todo_description: response.data.todo_description,
    //                 todo_responsible: response.data.todo_responsible,
    //                 todo_priority: response.data.todo_priority,
    //                 todo_creation_date: response.body.todo_creation_date,
    //                 todo_completed: response.data.todo_completed
    //             })
    //         })
    //         .catch(function(error) {
    //             console.log(error)
    //         })
    // }




    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        })
    }

    onChangeTodoResponsible(e){
        this.setState({
            todo_responsible: e.target.value
        })
    }

    onChangeTodoPriority(e){
        this.setState({
            todo_priority: e.target.value
        })
    }

    onChangeCompleted(e){
        this.setState({
            todo_complete: !this.state.todo_complete
        })
    }

    onSubmit(e){
        e.preventDefault()
        const obj = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_complete: this.state.todo_complete
        };
        console.log(obj);
        axios.post("http://localhost:4000/todos/update/"+ this.props.match.params.id, obj)
            .then(res => console.log(res.data))
            .catch(err => {
                console.log(err)
            });
        
        // once updated it will be go back to the todo list page
        this.props.history.push('/')
    }


    render(){
        return(
            <div>
                <h3> Update Todo</h3>
                <form onSubmit= {this.onSubmit}>
                    <div className="form-group">
                        <label> Description: </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value = {this.state.todo_description}
                            onChange = {this.onChangeTodoDescription}/>
                    </div>
                    <div className="form-group">
                        <label> Responbility </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value = {this.state.todo_responsible}
                            onChange = {this.onChangeTodoResponsible}/>
                    </div>
                    {/* // Priority Form  High*/}
                    <div className="custom-control custom-radio">
                    <input 
                        type="radio" 
                        id="customRadio1"
                        name="customRadio" 
                        className="custom-control-input"
                        value = "High"
                        checked = {this.state.todo_priority === 'High'} // To check if the priority is set to high
                        onChange = {this.onChangeTodoPriority}/>
                    <label className="custom-control-label" htmlFor="customRadio1">High</label>
                    </div>
                    {/* // Priority Form  Medium*/}
                    <div className="custom-control custom-radio">
                        <input 
                            type="radio" 
                            id="customRadio2"
                            name="customRadio" 
                            className="custom-control-input"
                            value = "Medium"
                            checked = {this.state.todo_priority === 'Medium'} // To check if the priority is set to medium
                            onChange = {this.onChangeTodoPriority}/>
                        <label className="custom-control-label" htmlFor="customRadio2">Medium</label>
                    </div>
                    {/* // Priority Form  Low*/}
                    <div className="custom-control custom-radio">
                        <input 
                            type="radio" 
                            id="customRadio3"
                            name="customRadio" 
                            className="custom-control-input"
                            value = "Low"
                            checked = {this.state.todo_priority === 'Low'} // To check if the priority is set to low
                            onChange = {this.onChangeTodoPriority}/>
                        <label className="custom-control-label" htmlFor="customRadio3">Low</label>
                    </div>
                    <div className="custom-control custom-checkbox" style = {{marginTop: "20px"}}>
                        <input 
                            type="checkbox" 
                            className="custom-control-input" 
                            id="customCheck1"
                            onChange = {this.onChangeCompleted}
                            checked = {this.state.todo_complete}
                            value = {this.state.todo_complete}/>
                        <label className="custom-control-label" htmlFor="customCheck1">Completed</label>
                    </div>
                    <div className = 'form-group' style = {{marginTop: "20px"}}>
                        <input 
                            type = "submit" 
                            value = "Update Todo"
                            className = "btn btn-dark"
                            />
                    </div>
                </form>
            </div>
        )
    }
}


export default EditTodo;