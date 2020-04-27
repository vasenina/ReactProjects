import React, {Component} from 'react';

import Dailylist from '../components/Daily/DailyList';
import Date from '../components/Daily/Date/Date';
import Aux from '../hoc/Aux';
import Modal from '../components/UI/Modal/Modal';
import classes from './TaskOverview.module.css'


class TasksOverview extends Component{

    state={
        tasks:[
            {id: 't1', todo: 'run 15  km', type: 'sport' , done: true},
            {id: 't2', todo: '2 min plank', type: 'sport', done: false},
            {id: 't3', todo: 'Meeting with chef jdghasjfghdbshjgfhbdhv hfgdskhb vhfdgdhdsvbsd hfdsgvhbsdfkhj', type: 'work', done: false},
          ],

          types: {
              sport: { color: '#625cc9'},
              work: {color: '#50a7ec'},
          },
        taskediting: true,
    }
    
    editTaskHandler = () => {
        this.setState({taskediting : true});
    }

    editTaskCancelHandler = () =>{
        this.setState({taskediting : false});
    }

    taskStatusChanged = (id) => {
        this.setState(({tasks}) => {
          return {
              tasks: tasks.map((el) => {
              if (el.id === id) {
                return Object.assign({}, el, { done: !el.done})
              } else {
                 return el;
              }
          })
        }
        });
      };
    

    render(){
        return(
        <Aux>   
             <Modal 
                    show = {this.state.taskediting}
                    modalClosed = {this. editTaskCancelHandler}>
                   <p>modal window test</p>
            </Modal>
            <div className = {classes.Daily}>
                <p>Daily tasks</p>
                <Date />
                <Dailylist 
                    tasks = {this.state.tasks} 
                    types= {this.state.types} 
                    checked = {this.taskStatusChanged} />
            </div>
            <div className = {classes.Weekly}>
                <p>Weekly tasks</p>
            </div>
        </Aux>
        );
    }

}



export default TasksOverview;