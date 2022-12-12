import './TasksToDo.css'
import { Check, CoinVertical, Trash } from "phosphor-react";
import { useState } from 'react';

export function TasksToDo(props){
    const [checkIcon, setCheckIcon] = useState(false)

    function handleCheck(){
       setCheckIcon(!checkIcon)
    }

    const taskId =  'task' + (Math.random() * 100)
      

    return(
    <form  className='tasksToDo'>
        <div className='inputP'>
            <input className='checkbox' name="radio" id={taskId} type="checkbox" onClick={handleCheck} checked={checkIcon}/>
            <Check className={`checkIcon ${!checkIcon ? 'hidden' : ''}`} size={12} color={'#F2F2F2'} weight="bold"  onClick={handleCheck}/>
            <label className='task' for={taskId}>{props.task}</label>
        </div>
        
        <button title='ícone de lixeira' className='trash'>
            <Trash className='trashIcon' title="lixeira" size={24}/>
        </button>
    </form>
    )
   
} 