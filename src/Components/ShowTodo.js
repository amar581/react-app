import React from 'react'

function ShowTodo(props) {
  return (
    <div className="container">
        
<h6>{props.task}</h6>
<button>x</button>

    </div>
  )
}

export default ShowTodo