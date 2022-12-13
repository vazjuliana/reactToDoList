import { PlusCircle } from "phosphor-react"

import "./Tasks.css"

export function Tasks(props){
  
  function handleToDoList(event){
    event.preventDefault()

    const newTaskToDo = event.target.newTask.value

    props.set([...props.tasks, newTaskToDo])

    event.target.newTask.value = ''
  }


  return(
      <form className='box_input_tasks' onSubmit={handleToDoList}>
        <label for="text">
          <input className='input_tasks' name="newTask" type='text' id='text' placeholder="Adicione uma nova tarefa"/>
        </label>
        <button type='submit' className='button_input_tasks'>Criar<PlusCircle className='plus' weight='bold' color='#F2F2F2' size={20}/></button>
      </form>
  )
}