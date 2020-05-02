import React from 'react';
import classes from './TaskEditForm.module.css';

 
const taskeditform = ({task})=>{

   return(
    <div>
        <textarea className = {classes.TaskText} value ={task.todo} />    
    </div>

   )
    
};

export default taskeditform;