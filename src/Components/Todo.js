import React, { useState } from 'react'

function Todo() {

    const [task, setTask] = useState("Add Some Task")

    //On Value Change Handler
    const onChangeHandler = (e) => {
       setTask(e.target.value)
    }


    //On Submit Handler
    const submitHandler =(e) => {
       e.preventDefault();
       console.log("submit")
    }
    

  return (
    <div>
        <h2>Todo App</h2>

<form action="" onSubmit={submitHandler}> 
<input type="text" id='todo-input' value={task} onChange={onChangeHandler} />
<button type='submit'> Add Todo</button>
</form>

</div>


  )
}

export default Todo