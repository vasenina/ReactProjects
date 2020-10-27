import React from 'react';
import classes from './Date.module.css';

var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var today = new Date(),
currentdate = today.getDate() + '-' + month[today.getMonth()] + '-' + today.getFullYear();

const date = (props) =>(
   
        <div className = {classes.body} >
            <div className= {classes.otherDay}></div>
            <div className= {classes.otherDay}></div>
            <div className = {classes.currentDay}>{currentdate} </div>
            <div className= {classes.otherDay}></div>
            <div className= {classes.otherDay}></div>
        </div> 
  
);

export default date;