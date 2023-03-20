import React from 'react';

const ClearButton = ({clearCompletedTasks}) => {

    const handleClick = (event) => {
        clearCompletedTasks()
    }
    
    
    return (
        <button onClick={ handleClick }>Clear Completed Tasks?</button>
    )
}

export default ClearButton