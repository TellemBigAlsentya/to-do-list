import React, { Fragment } from 'react';

const Counter = ({completedTaskCount}) => {


    return (
        <>
            <p>You've completed <span style={{color: "red", textDecoration: "underline", fontWeight: "bold"}}>{completedTaskCount}</span> tasks!</p>
            <hr style={{borderTop: "1px dashed black"}}></hr>
        </>
    )
}

export default Counter