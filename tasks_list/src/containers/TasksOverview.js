import React, {Component} from 'react';

import Dailylist from '../components/Daily/DailyList'
import Aux from '../hoc/Aux';
import classes from './TaskOverview.module.css'

class TasksOverview extends Component{

    state={
        tasks:[
            {id: 't1', todo: 'run 15  km', type: 'Sport', color: '#625cc9' },
            {id: 't2', todo: '2 min plank', type: 'Sport', color: '#625cc9'},
            {id: 't3', todo: 'Meeting with chef', type: 'Work', color: '50a7ec'},
          ],

          types:[
            {id: 'typ1', type: 'Sport', color: '#625cc9'},
            {id: 'typ2', type: 'Work', color: '50a7ec'},
          ]
       
    }

    render(){
        return(
        <Aux>
            <div className = {classes.Daily}>
                <p>Daily tasks</p>
                <Dailylist tasks = {this.state.tasks}/>
            </div>
            <div className = {classes.Weekly}>
                <p>Weekly tasks</p>
            </div>
        </Aux>
        );
    }

}



export default TasksOverview;