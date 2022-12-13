import './styles/styles.css';
import './styles/global.css';

import logo from './assets/Logo.png';

import { useState } from 'react';

import { Tasks } from './components/Tasks';
import { Counter } from './components/Counter';
import { EmptySpace } from './components/EmptySpace';
import { TasksToDo } from './components/TasksToDo';

export function App(props) {

  const [tasks, setTasks] = useState([])
  
  function deleteTask(taskToDelete){
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task != taskToDelete
    })
   setTasks(tasksWithoutDeletedOne)
  }

  const [completedTasks, setCompletedTasks] = useState(0)

  return (
    <>
      <header>
        <img className='logo'src={ logo }/>
      </header>
      <div className='flexbox' >
        <Tasks 
          tasks = {tasks}
          set = {setTasks}
        />
        <div className='box_tasks'>
          <Counter tasks={tasks} completedTasks={completedTasks}/>
          <div className='box_tasks_empty'>
            {tasks.length < 1 ? 
            <EmptySpace /> : 
             tasks.map(task =>{
              return <TasksToDo key={task} task={task} OnDeleteTask={deleteTask} setCompletedTasks={setCompletedTasks} completedTasks={completedTasks}/>
            })
          }   
          </div>
        </div>        
      </div>     
    </>
    
  )
}


