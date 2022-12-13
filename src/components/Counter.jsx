import './Counter.css';

export function Counter(props){

    return(
           <div className='box_tasks_counter'>
                <p className='box_tasks_counter_p'>Tarefas Criadas<button className='box_tasks_counter_button'>{props.tasks.length}</button></p>  
                <p className='box_tasks_counter_pp'>Concluídas<button className='box_tasks_counter_button'>{props.completedTasks}</button></p> 
            </div> 
        
    )
}

