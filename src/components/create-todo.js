import React, {Component} from 'react';
import moment from "moment";
import axios from "axios";

class CreateTodo extends Component {

    constructor(props){
        super(props);
        this.state = {
            todo_description :'',
            // todo_creation_date = '',
            // todo_expected_date = '',
            todo_responsible : '',
            todo_priority : '',
            todo_complete: false,
            todo_creation_date: '',
            todo_mod_date: "Not Modified"
        };
        this.onChangeTodoDescription= this.onChangeTodoDescription.bind(this);
        this.onChangeTodoPriority= this.onChangeTodoPriority.bind(this);
        this.onChangeTodoResposible= this.onChangeTodoResposible.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
        this.onChangeTodoCreationDate = this.onChangeTodoCreationDate.bind(this);
        
    }


    onChangeTodoDescription (e){
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResposible(e){
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onChangeTodoCreationDate() {
        // let new_date = ''
        // if (this.state.todo_description === ''){
        //     new_date = moment().format("DD-MM-YYYY hh:mm:ss")

        // }
        this.setState({
            todo_creation_date: moment().format("MM-DD-YYYY")
        });
 
    }



    onSubmit(e){
        e.preventDefault();

        console.log('Form Submitted');
        console.log(`${this.state.todo_description}`);
        console.log(`${this.state.todo_responsible}`);
        console.log(`${this.state.todo_priority}`);
        console.log(`${this.state.todo_complete}`);
        console.log(`${this.state.todo_creation_date}`)
        console.log(`${this.state.todo_mod_date}`)

        const newTodo = {
            todo_description : this.state.todo_description,
            // todo_creation_date = '',
            // todo_expected_date = '',
            todo_responsible : this.state.todo_responsible,
            todo_priority : this.state.todo_priority,
            todo_complete: this.state.todo_complete,
            todo_creation_date: this.state.todo_creation_date,
            todo_mod_date: this.state.todo_mod_date
        }

        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => {
                console.log(res.data);
                this.props.history.push('/')
            })
            .catch(err => {
                console.log(err)
            });

        this.state = {
            todo_description :'',
            todo_responsible : '',
            todo_priority : '',
            todo_complete: false,
            todo_creation_date: '',
            todo_mod_date: "Not Modified"
        }
    // this.props.history.push('/')

    }

    render(){
        return(
            // Header 
            <div style = {{marginTop : "20px"}}>
                <h3> Create New Todo</h3>
                <form onSubmit= {this.onSubmit}>
                {/* // Description Form */}
                <div class="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Description"
                        value = {this.state.todo_description}
                        onChange = {this.onChangeTodoDescription}/>
                </div>
                {/* // Responsibility Form */}
                <div class="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Responsibility"
                        value = {this.state.todo_responsible}
                        onChange = {this.onChangeTodoResposible}/>
                </div>
                {/* // Priority Form  High*/}
                <div class="custom-control custom-radio">
                    <input 
                        type="radio" 
                        id="customRadio1"
                        name="customRadio" 
                        class="custom-control-input"
                        value = "High"
                        checked = {this.state.todo_priority === 'High'} // To check if the priority is set to high
                        onChange = {this.onChangeTodoPriority}/>
                    <label class="custom-control-label" for="customRadio1">High</label>
                </div>
                {/* // Priority Form  Medium*/}
                <div class="custom-control custom-radio">
                    <input 
                        type="radio" 
                        id="customRadio2"
                        name="customRadio" 
                        class="custom-control-input"
                        value = "Medium"
                        checked = {this.state.todo_priority === 'Medium'} // To check if the priority is set to medium
                        onChange = {this.onChangeTodoPriority}/>
                    <label class="custom-control-label" for="customRadio2">Medium</label>
                </div>
                {/* // Priority Form  Low*/}
                <div class="custom-control custom-radio">
                    <input 
                        type="radio" 
                        id="customRadio3"
                        name="customRadio" 
                        class="custom-control-input"
                        value = "Low"
                        checked = {this.state.todo_priority === 'Low'} // To check if the priority is set to low
                        onChange = {this.onChangeTodoPriority}/>
                    <label class="custom-control-label" for="customRadio3">Low</label>
                </div>
                <div className = 'form-group' style = {{marginTop: "20px"}}>
                    <input 
                        type = "submit" 
                        value = "Create Todo"
                        className = "btn btn-dark"
                        onClick = {this.onChangeTodoCreationDate}/>
                </div>
                </form>
            </div>
        )
    }
}


export default CreateTodo;