import React from 'react';
import classes from './Task.module.css';






   
const task = (props)=>{
   
   
    let classNames = classes.Task ;
    let style = {};
    (props.done) ? 
      (classNames += ' ' + classes.Task_done ):
      (style = {background: props.color});
    
    
        return(
               
            <div  className ={classNames} style = {style} >
                    <input type = "checkbox" checked = {props.done} onClick = {props.check}/>
                    <label > {props.todo} </label>
            </div>
     
        )
    
};

export default task;

