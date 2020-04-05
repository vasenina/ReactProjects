import React from 'react';
import Task from './Task/Task';



const dailyList = (props) =>props.tasks.map((task, index) =>{
    return <Task
    click = {() => props.clicked(index)}
    todo = {task.todo}
    color = {task.color}
    key = {task.id}/>
  });

export default dailyList;