import React from 'react';
import classes from './TaskEditForm.module.css';

 
const taskeditform = (props)=>{


   return(
    <div>
        <input type="text" value ={props.todo}/>
    </div>

   )
    
};

export default taskeditform;