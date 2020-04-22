import React from 'react';
import Task from './Task/Task';



const dailyList = (props) =>props.tasks.map((task, index) =>{
    return <Task
    check = {() => props.checked(task.id)}
    todo = {task.todo}
    done = {task.done}
    color = {props.types[task.type].color}
    key = {task.id}/>
  });

export default dailyList;