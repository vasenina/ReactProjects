import React from 'react';
import classes from './Task.module.css';



const task = (props) =>(
   
        <div className = {classes.Task} style = {{background: props.color}} >
            <input type = "checkbox"/>
            <label > {props.todo} </label>
        </div> 
  
);

export default task;