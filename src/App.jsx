import './styles/styles.css';
import './styles/global.css';

import logo from './assets/Logo.png';

import { useState } from 'react';

import { Tasks } from './components/Tasks';
import { Counter } from './components/Counter';
import { EmptySpace } from './components/EmptySpace';
import { TasksToDo } from './components/TasksToDo';

export function App() {

  const [tasks, setTasks] = useState([
   
  ])
  
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
          <Counter />
          <div className='box_tasks_empty'>
            {tasks.length < 1 ? 
            <EmptySpace /> : 
             tasks.map(task =>{
              return <TasksToDo task={task}/>
            })
          }
            
           
            
          </div>
        </div>        
      </div>     
    </>
    
  )
}


