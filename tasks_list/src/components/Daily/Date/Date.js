import React from 'react';
//import classes from './Date.module.css';

var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var today = new Date(),
currentdate = today.getDate() + '-' + month[today.getMonth()] + '-' + today.getFullYear();

const date = (props) =>(
   
        <div  >
            <p>{currentdate}</p>
        </div> 
  
);

export default date;