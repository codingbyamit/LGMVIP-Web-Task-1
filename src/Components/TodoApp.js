import React, { useState } from "react";
import SingleTodo from "./SingleTodo";
import { IoCloseSharp } from "react-icons/io5";

function TodoApp() {
    const [todolist, setTodoList] = useState([]);
    const [curNoteValue, setCurNoteValue] = useState("");

    return (
        <div className="todoApp">
            <div className="header">
                <h1>My To Do List</h1>
                <div className="inputArea">
                    <input
                        type="text"
                        placeholder="Title..."
                        onChange={(e) => {
                            setCurNoteValue(e.target.value);
                        }}
                    />
                    <button
                        onClick={(e) => {
                            if (curNoteValue === "" || curNoteValue === " ") {
                                alert("Please some task add");
                            } else {
                                setTodoList([...todolist, curNoteValue]);
                            }
                        }}
                    >
                        Add
                    </button>
                </div>
            </div>
            <div className="todoList">
                <ul>
                    {todolist.map((note, index) => {
                        return (
                            <div className="lists" key={index}>
                                <li>
                                    <SingleTodo note={note} />
                                    <button
                                        onClick={() => {
                                            const newArrayList = [...todolist];
                                            if (index === 0) {
                                                newArrayList.splice(index, 0);
                                                setTodoList(newArrayList);
                                            }
                                            newArrayList.splice(index, 1);
                                            setTodoList(newArrayList);
                                        }}
                                    >
                                        <IoCloseSharp />
                                    </button>
                                </li>
                            </div>
                        );
                    })}
                </ul>
                <button
                    onClick={() => {
                        setTodoList([]);
                    }}
                    id="allDelete"
                >
                    Delete All
                </button>
            </div>
        </div>
    );
}

export default TodoApp;
