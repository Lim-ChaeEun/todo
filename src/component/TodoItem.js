import { useContext } from 'react';
import './TodoItem.css'
import { TodoDispatchContext } from '../App';

const TodoItem = ({id, isDone, content, createDate}) => {
    const {onUpdate, onDelete} = useContext(TodoDispatchContext);

    const finishTodo = () => {
        onUpdate(id);
    }

    const deleteTodo = () => {
        onDelete(id);
    }

    return (
        <div className='TodoItem'>
            <div className='checkbox_col'>
                <input checked={isDone} type='checkbox' onChange={finishTodo}/>
            </div>
            <div className='title_col'>{content}</div>
            <div className='date_col'>{new Date(createDate).toLocaleDateString()}</div>
            <div className='btn_col'>
                <button onClick={deleteTodo}>삭제</button>
            </div>
        </div>
    )
}

export default TodoItem;