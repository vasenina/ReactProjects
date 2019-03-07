import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import TasksOverview from '../../containers/TasksOverview';

const layout = (props) =>(
  <Aux>
        <div > 
            <div className = {classes.ControlPanel}>
                <p>add new task</p>
                <p>calender</p> 
            </div>
            <div className = {classes.Tasks}>
            <TasksOverview />
            <p>Daily Tasks and weekly tasks</p>
            </div>
         </div>
    
    </Aux>
);

export default layout;