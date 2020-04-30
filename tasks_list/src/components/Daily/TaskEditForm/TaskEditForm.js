import React from 'react';
import classes from './TaskEditForm.module.css';

 
const taskeditform = ({task})=>{


   return(
    <div>
        <input type="text" value ={task.todo} readOnly={true} />
    </div>

   )
    
};

export default taskeditform;