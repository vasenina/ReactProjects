import React from 'react';
import classes from './Task.module.css';



const task = (props) =>(
   
        <div className = {classes.Task} style = {{background:'{props.color}'}} >
            <p>{props.todo}</p>
        </div> 
  
);

export default task;