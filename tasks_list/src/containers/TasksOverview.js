import React, {Component} from 'react';

import Dailylist from '../components/Daily/DailyList';
import Date from '../components/Daily/Date/Date';
import Aux from '../hoc/Aux';
import Modal from '../components/UI/Modal/Modal';
import ProgressBar from '../components/UI/ProgressBar/ProgressBar';
import classes from './TaskOverview.module.css';
import TaskEditForm from '../components/Daily/TaskEditForm/TaskEditForm';
import TaskNewForm from '../components/Daily/TaskNewForm/TaskNewForm';



class TasksOverview extends Component{

    state={
        tasks:[
            {id: 't1', todo: 'run 15  km', type: 'sport' , done: true},
            {id: 't2', todo: '2 min plank', type: 'sport', done: false},
            {id: 't3', todo: 'Meeting with chef jdghasjfghdbshjgfhbdhv hfgdskhb vhfdgdhdsvbsd hfdsgvhbsdfkhj', type: 'work', done: false},
          ],

          types: {
              sport: { color: '#49A8A8'},
              work: {color: '#FFB06F'},
          },
        taskediting: false,
        taskadding: false,
        taskEditId: 't1',
        idCount: 3
    }
    
    editTaskHandler = (id) => {
        this.setState({taskediting : true , taskEditId: id});
    }

    addTaskHandler = () => {
        this.setState({taskadding: true});
    }

    addTaskCancelHandler = () =>{
        this.setState({taskadding : false});
    }

    editTaskCancelHandler = () =>{
        this.setState({taskediting : false});
    }

    editTaskText = (id, text)=>{
        this.setState(({tasks}) => {
        const idx = this.state.tasks.findIndex((task) => task.id === id);
        const task = this.state.tasks[idx];
        const newTask = {...task, todo: text};

        tasks = [
            ...this.state.tasks.slice(0, idx),
            newTask,
            ...this.state.tasks.slice(idx+1)
        ];

        return {tasks};
    });
    }

    addNewTask = (text)=>{
        
        this.setState ((tasks, tasksCount)=>{
            const counter = this.state.idCount+1
            const newTask = {
                id: 't'+ String(counter), 
                todo: text, 
                type: 'work',
                done: false};
            tasks = [
                ...this.state.tasks,
                newTask,
            ];

           // tasksCount: this.state.tasksCount+1;
            return{tasks, taskadding:false, idCount: counter};
        }
        )
    }

    getTaskbyId = (id) => {
       // console.log(id, this.state.taskEditId);
        return this.state.tasks.find((task) => task.id === id);
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
       let tasksfortoday = this.state.tasks.length;
       const tasksDone = (this.state.tasks.filter(task => task['done'] === true)).length;
       console.log('tasks '+ tasksDone+'/'+ tasksfortoday);


        return(
        <Aux>   
             <Modal 
                    show = {this.state.taskediting}
                    modalClosed = {this.editTaskCancelHandler}
                    //task = {this.getTaskbyId(this.state.taskEditId)}
                    >
                    <TaskEditForm 
                        key = {this.state.taskEditId}
                        task = {this.getTaskbyId(this.state.taskEditId)}
                        editTaskText = {this.editTaskText}
                         />
            </Modal>
            <Modal 
                    show = {this.state.taskadding}
                    modalClosed = {this.addTaskCancelHandler}
                    //task = {this.getTaskbyId(this.state.taskEditId)}
                    >
                    <TaskNewForm 
                        key = {this.state.taskEditId}
                       // task = {this.getTaskbyId(this.state.taskEditId)}
                        closed = {this.addTaskCancelHandler }
                        addNewTask = {this.addNewTask}
                         />
            </Modal>
            <div className = {classes.Daily}>
                <p className = {classes.DailyTitle}>Daily tasks</p>
                <Date />
                <ProgressBar  completed = {tasksDone} all = {tasksfortoday}/>
                <Dailylist 
                    tasks = {this.state.tasks} 
                    types= {this.state.types} 
                    checked = {this.taskStatusChanged} 
                    editing = {this.editTaskHandler}/>
                <div className = {classes.AddNewTask}>
                <button className = {classes.NewTask} onClick = {this.addTaskHandler}>+ New Habit +</button>
                </div>
            </div>
            <div className = {classes.Weekly}>
                <p>Weekly tasks</p>
            </div>
        </Aux>
        );
    }

}



export default TasksOverview;