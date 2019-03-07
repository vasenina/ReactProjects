import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';

const layout = (props) =>(
  <Aux>
        <div > 
            <div className = {classes.ControlPanel}>
                <p>add new task</p>
                <p>calender</p> 
            </div>
            <div className = {classes.Tasks}>
                <p>Daily Tasks and weekly tasks</p>
            </div>
         </div>
    
    </Aux>
);

export default layout;