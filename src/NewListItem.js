import React, { useState } from 'react';


const NewListItem = ({addListItem}) => {
    const [ listItem, setListItem ] = useState(""); 

    const handleClick = () => {
        if(listItem === "") {
            return
        }
        addListItem(listItem);
        setListItem("");
    }

    const handleChange = (event) => {
        setListItem(event.target.value); 

    }
    function checkForSubmit(event)  {
        if(event.keyCode === 13) {
            handleClick();
        }
    }

    return (
        <>
            <input type="text" onKeyDown={ checkForSubmit } onChange={ handleChange } value={ listItem }></input>
            <button onClick={ handleClick }>Submit</button>
        </>
    )

}

export default NewListItem