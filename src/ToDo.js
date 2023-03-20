import React from 'react';
 
const ToDo = ({todo, handleToggle}) => {

    const handleClick = (event) => {
        handleToggle(event.currentTarget.id);
        console.log(event);
    }

   return (
    <div className='listItem'>
        <input type='checkbox' onClick={handleClick} id={todo.id} checked={todo.complete} readOnly>
        </input>
        <div className = {todo.complete ? "strike" : ""}>
           {todo.task}
        </div>
    </div>
   );
};
 
export default ToDo;