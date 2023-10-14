import React from "react";

function SingleTodo(props) {
    return (
        <div className="singleTodo">
            <h3>{props.note}</h3>
        </div>
    );
}

export default SingleTodo;
