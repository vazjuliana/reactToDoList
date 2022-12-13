import './TasksToDo.css'
import { Check,  Trash } from "phosphor-react";
import { useState } from 'react';

export function TasksToDo( {task , OnDeleteTask, completedTasks, setCompletedTasks}){
    const [checkIcon, setCheckIcon] = useState(false)

    function handleCheck(){
       setCheckIcon(!checkIcon)
       
       if(!checkIcon){
        setCompletedTasks(completedTasks + 1)
       }else{
        setCompletedTasks(completedTasks - 1)
       }
      
    }

    const taskId =  'task' + (Math.random() * 100)
      
    function handleDeleteTaskToDo(){
        OnDeleteTask(task)
        setCompletedTasks(completedTasks - 1)
    }


    return(
    <form  className='tasksToDo'>
        <div className='inputP'>
            <input className='checkbox' name="radio" id={taskId} type="checkbox" onClick={handleCheck} checked={checkIcon}/>
            <Check className={`checkIcon ${!checkIcon ? 'hidden' : ''}`} size={12} color={'#F2F2F2'} weight="bold"  onClick={handleCheck}/>
            <label className={`task ${checkIcon ? 'line-through' : ''}`} id='label' for={taskId}>{task}</label>
        </div>
        
        <button title='ícone de lixeira' onClick={handleDeleteTaskToDo} className='trash'>
            <Trash className='trashIcon' title="lixeira" size={24}/>
        </button>
    </form>
    )
   
} 