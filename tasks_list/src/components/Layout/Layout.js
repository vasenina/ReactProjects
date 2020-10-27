import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import TasksOverview from '../../containers/TasksOverview';

const layout = (props) =>(
  <Aux>

    <div className = {classes.Header}>
    </div> 
        <div > 
            <div className = {classes.ControlPanel}>
                    <button className = {classes.Stats} >Statistic</button>
            </div>
            <div className = {classes.Tasks}>
            <TasksOverview />
            </div>
         </div>
    
    </Aux>
);

export default layout;