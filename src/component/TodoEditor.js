import { useContext, useRef, useState } from 'react';
import './TodoEditor.css';
import { TodoDispatchContext } from '../App';

const TodoEditor = () => {
    const {onCreate} = useContext(TodoDispatchContext);
    const [content, setContent] = useState("");
    const inputRef = useRef();

    function onChangeContent(e){
        setContent(e.target.value);
    }

    function onClickAddBtn(){
        if(!content){
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent('');
    }

    function onkeyDown(e){
        if(e.keyCode === 13){
            onClickAddBtn();
        }
    }

    return (
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기 ✍️</h4>
            <div className="editor_wrapper">
                <input ref={inputRef} value={content} onChange={onChangeContent} onKeyDown={onkeyDown} placeholder="새로운 Todo..." />
                <button onClick={onClickAddBtn}>추가</button>
            </div>
        </div>
    )  
} 

export default TodoEditor;