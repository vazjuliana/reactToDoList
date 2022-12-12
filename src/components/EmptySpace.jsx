import './EmptySpace.css'
import clipboard from '../assets/Clipboard.png'

export function EmptySpace(){
    return(
        <>
            <img src= { clipboard } className='box_tasks_empty_img'/>
            <p className='box_tasks_empty_p'>Você ainda não tem tarefas cadastradas</p>
            <p className='box_tasks_empty_pp'>Crie tarefas e organize seus itens a fazer</p>
        </>    
    )
}