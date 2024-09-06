import { useState } from "react";

function ToDoList(){
    const [toDo, setToDo] = useState('')
  const [toDos, setToDos] = useState([])
  const onChange = (e) => {
    setToDo(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if(!e.target.value) return
    setToDos((curArr) => [toDo, ...curArr])
    setToDo('')
  }
  
  return (
    <div>
      <h1>My ToDos({toDos.length}개)</h1>
      <form
        onSubmit={onSubmit}
      >
        <input
        value={toDo}
        onChange={onChange}
        type="text"
        placeholder="Write your Todo...">
        
        </input>
      </form>
      <button onClick={onSubmit}>Add To Do</button>
      <ul>
        {toDos.map((item, index) => {
          return (
            <li key={index}> 
              {item}
            </li>
          )
        })}
        
      </ul>
    </div>
  );
}

export default ToDoList