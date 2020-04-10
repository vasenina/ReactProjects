import React, {Component} from 'react';

import Dailylist from '../components/Daily/DailyList';
import Date from '../components/Daily/Date/Date';
import Aux from '../hoc/Aux';
import classes from './TaskOverview.module.css'

class TasksOverview extends Component{

    state={
        tasks:[
            {id: 't1', todo: 'run 15  km', type: 'sport' },
            {id: 't2', todo: '2 min plank', type: 'sport'},
            {id: 't3', todo: 'Meeting with chef', type: 'work'},
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
                <Date />
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