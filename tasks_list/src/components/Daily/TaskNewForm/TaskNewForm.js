import React, { Component } from 'react';
import classes from './TaskNewForm.module.css';

 
export default class tasknewform extends Component {


constructor(props) {
    super(props);
    this.state = 
    {todotext:''};  
}


onLabelChange = (e) => {
    this.setState({
        todotext: e.target.value
      })
  }; 

  onSubmit = (e) => {
    e.preventDefault();
  };

  onAddTask = () => {
    const tasktext =  this.state.todotext;
    if (tasktext!== '') {
    this.setState({ todotext: '' });
    this.props.addNewTask(tasktext);
    }
   
  }

render(){

   return(
      
    <form  onSubmit = {this.onSubmit}>
        <textarea 
            placeholder = "Write new habit here .."
            className = {classes.TaskText} 
            onChange={this.onLabelChange}
            value =  {this.state.todotext}
            />    
        <div>
            <p>every day /</p> 
            <p>So Mo Tu We Th Fr Sa </p>
            
        </div>
        <div>
            <p>from today  (Monday/New Month/New Year)</p>
            <p>ends never/ after 7 times/ at 20 DEc..... </p>
        </div>
        <button onClick = {this.props.closed}>Cancel</button>
        <button onClick = {this.onAddTask}>Add</button>
    </form>

   )
} 
};

