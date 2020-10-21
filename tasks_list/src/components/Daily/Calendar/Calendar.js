import React from 'react';

import classes from './Calendar.module.css';

let d = new Date(); 
let year = d.getFullYear();
let month = d.getMonth();
let current = new Date(year, month);
let next = new Date(year, month+1);
let diff = (next-current)/(1000*3600*24);
let index = (current.getDay()+6) % 7;
//let index = current.getDay() +1;
//console.log( "current" + current.getDay());
//console.log("index"+ index);


const Tday = ({clstyle, k})=>{

   // console.log ("k " +k);
    //console.log ('style ' +clstyle);
    return (
        <td className = {clstyle}> {(k > 0 && k <= diff) ? k : ''}</td>
        //<div className = {clstyle} >{(k > 0 && k <= diff) ? k : ''}</div>
        //<p>k</p>
    )
};


export default class Calendar extends React.Component { 

weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];


 render(){
    let weekdays = this.weekdaysShort.map((day) => {
        return (
            <td key={day} className = {classes.Weekday}> {day} </td>
        )
    });

    const ROWS = 6; 
    const COLS = 7;
    let table = [];
    let tr = [];
    let k = 1 - index;

    for (let i= 0 ; i<ROWS;  i++){
        tr = [];
        for (let j= 0; j <COLS; j++){
            //tr.push(<td  className = {classes.Day + ' ' + classes.Day_done} >{(k > 0 && k <= diff) ? k : ''} </td>);
            if (k ===index) 
            {
                tr.push (<Tday clstyle = {classes.Day + ' ' + classes.Day_done + classes.Day_today} k = {k}/>);
                //console.log(current.getDay);
        }
            else 
                tr.push (<Tday clstyle = {classes.Day + ' ' + classes.Day_done} k = {k}/>);
        //console.log ('tr '+k + tr);
            k++
        }
        table.push(<tr>{tr}</tr>);
    }

    return(


        <table className = {classes.Calendar}>
            <tr>
                {weekdays}
            </tr>
            {table}
       </table>
    )


}
}


