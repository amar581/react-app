import React, { useState } from 'react'
import ShowTodo from './ShowTodo';

function Todo() {

    const [task, setTask] = useState("Add Some Task");
    const [data, setData] = useState([]);

    //On Value Change Handler
    const onChangeHandler = (e) => {
       setTask(e.target.value)
    }


    //On Submit Handler
    const submitHandler =(e) => {
       e.preventDefault();
       const newData = task;
       setData([...data, newData])

       setTask('')
    }
    

  return (
    <div>
        <h2>Todo App</h2>

<form action="" onSubmit={submitHandler}> 
<input type="text" id='todo-input' value={task} onChange={onChangeHandler} />
<button type='submit'> Add Todo</button>
</form>


{
  data.map((value,index)=> {
<ShowTodo
    key={index}
    id={index}
    task={value}
    />
  })
}

</div>


  )
}

export default Todo