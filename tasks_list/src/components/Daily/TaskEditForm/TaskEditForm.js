import React, { Component } from 'react';
import classes from './TaskEditForm.module.css';
import Calendar from './../Calendar/Calendar';
//import { render } from 'react-dom';

 
export default class taskeditform extends Component {


constructor(props) {
    super(props);
    this.state = 
    {todotext: this.props.task.todo};  
}


onLabelChange = (e) => {
    this.props.editTaskText(this.props.task.id, e.target.value);
  }; 

  onSubmit = (e) => {
    e.preventDefault();
  };


render(){
   
   return(
      
    <form  onSubmit = {this.onSubmit}>
        <textarea 
            className = {classes.TaskText} 
            onChange={this.onLabelChange}
            //value = {this.state.todotext}
            value =  {this.props.task.todo}
            />    
            Current strike : 7 days 
            <Calendar />
    </form>

   )
} 
};

