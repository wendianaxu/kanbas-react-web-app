import React, { useState, useEffect } from "react";
import * as client from "./client";
import { FaTrash } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { FaPencil } from "react-icons/fa6";

export default function WorkingWithArraysAsynchronously() {
    const [todos, setTodos] = useState<any[]>([]);
    const [errorMessage, setErrorMessage] = useState(null);

    const editTodo = (todo: any) => {
        const updatedTodos = todos.map(
            (t) => t.id === todo.id ? { ...todo, editing: true } : t); // set editing to true for the selected todo
        setTodos(updatedTodos);
    };

    const updateTodo = async (todo: any) => { // update todo in the client only
        // await client.updateTodo(todo);
        setTodos(todos.map((t) => (t.id === todo.id ? todo : t))); // update todo in the list in the client
    };


    const saveTodo = async (todo: any) => { // save todo to the server
        try { // try to save todo to the server
            await client.updateTodo(todo);
            setTodos(todos.map((t) => (t.id === todo.id ? todo : t))); // update todo in the list in the client
        } catch (error: any) { // catch and display error message
            setErrorMessage(error.response.data.message);
        }

    };

    const createTodo = async () => {
        const todos = await client.createTodo();
        setTodos(todos);
    };

    const postTodo = async () => {
        const newTodo = await client.postTodo({ title: "New Posted Todo", completed: false, });
        setTodos([...todos, newTodo]);
    };

    const fetchTodos = async () => {
        const todos = await client.fetchTodos();
        setTodos(todos);
    };

    const removeTodo = async (todo: any) => {
        const updatedTodos = await client.removeTodo(todo);
        setTodos(updatedTodos);
    };

    const deleteTodo = async (todo: any) => {
        try {
            await client.deleteTodo(todo); // delete todo from the server
            const newTodos = todos.filter((t) => t.id !== todo.id); // remove todo from the list
            setTodos(newTodos);
        } catch (error: any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };

    useEffect(() => { // fetch todos when the component is loaded
        fetchTodos();
    }, []);
    return (
        <div id="wd-asynchronous-arrays">
            <h3>Working with Arrays Asynchronously</h3>
            {errorMessage && (<div id="wd-todo-error-message" className="alert alert-danger mb-2 mt-2">{errorMessage}</div>)} {/*display error message*/}
            <h4>Todos</h4>
            <FaPlusCircle onClick={createTodo} className="text-success float-end fs-3"
                id="wd-create-todo" /> {/* create todo when plus icon is clicked */}
            <FaPlusCircle onClick={postTodo} className="text-primary float-end fs-3 me-3" id="wd-post-todo" />
            <ul className="list-group">
                {todos.map((todo) => ( // iterate and display todos
                    <li key={todo.id} className="list-group-item">
                        <FaTrash onClick={() => removeTodo(todo)} // remove todo when trash icon is clicked
                            className="text-danger float-end mt-1" id="wd-remove-todo" />
                        <TiDelete onClick={() => deleteTodo(todo)} className="text-danger float-end me-2 fs-3" id="wd-delete-todo" />
                        <FaPencil onClick={() => editTodo(todo)} className="text-primary float-end me-2 mt-1" />
                        <input type="checkbox" className="form-check-input me-2"
                            defaultChecked={todo.completed}
                            onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })} /> {/* update todo to completed when checkbox is clicked */}

                        {!todo.editing ? (<span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                            {todo.title} </span>) // strike-through if completed
                            : ( // if editing is true, display input field to edit todo title; else display todo
                                <input className="form-control w-50 float-start" defaultValue={todo.title}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            saveTodo({ ...todo, editing: false }); // set editing to false and save todo to server when enter key is pressed
                                        }
                                    }}
                                    onChange={(e) =>
                                        updateTodo({ ...todo, title: e.target.value }) // update todo title on change (in client only)
                                    }
                                />
                            )}
                    </li>
                ))}
            </ul> <hr />
        </div>
    );
}
