import React from 'react';
import classes from './Task.module.css';

 
const task = (props)=>{
   
   
    let classNames = classes.Task ;
    let style = {};
    let back =  props.color;
    (props.done) ? 
      (classNames += ' ' + classes.Task_done ):
      (style = {background: back});
    
        return(
               
            <div  className ={classNames} style = {style} onClick = {props.editing}>
                    <input type = "checkbox" className = {classes.check} checked = {props.done} onClick = {props.check}/>
        
                    <label > {props.todo} </label>
            </div>
     
        )
    
};

export default task;

