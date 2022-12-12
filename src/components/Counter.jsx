import styles from './Counter.css';

export function Counter(){
    return(
           <div className='box_tasks_counter'>
                <p className='box_tasks_counter_p'>Tarefas Criadas<button className='box_tasks_counter_button' >0</button></p>  
                <p className='box_tasks_counter_pp'>Concluídas<button className='box_tasks_counter_button'>0</button></p> 
            </div> 
        
    )
}

