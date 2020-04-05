import React, {Component} from 'react';

import Dailylist from '../components/Daily/DailyList'
import Aux from '../hoc/Aux';
import classes from './TaskOverview.module.css'

class TasksOverview extends Component{

    state={
        tasks:[
            {id: 't1', todo: 'run 15  km', type: 'sport', color: 'white' },
            {id: 't2', todo: '2 min plank', type: 'sport', color: '#625cc9'},
            {id: 't3', todo: 'Meeting with chef', type: 'work', color: '50a7ec'},
          ],

          types: {
              sport: { color: '#625cc9'},
              work: {color: '#50a7ec'},
          }
    }

    render(){
        return(
        <Aux>
            <div className = {classes.Daily}>
                <p>Daily tasks</p>
                <Dailylist tasks = {this.state.tasks} types= {this.state.types} />
            </div>
            <div className = {classes.Weekly}>
                <p>Weekly tasks</p>
            </div>
        </Aux>
        );
    }

}



export default TasksOverview;