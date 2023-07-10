import React, { Fragment, useState, useRef } from "react";
import ReactDOM from "react-dom";

import { TodoItem } from "./TodoItem";

import {v4 as uuid} from "uuid";

export function TodoList(){
    //inicializar las variables que estará viendo riact
    //por si sufre cambios
    //todos = nombre de las constanstes
    //setTodos = metodo que se va a utilizar para capturar modificaciones
    //useState = utilizará un state para capturar los estados
    // vigilaremos el estado del arreglo

const [todos, setTodos] = useState([
    {id:1, tarea: 'Tarea 1'}, {id: 2, tarea: 'Tarea 2'},
    {id:3, tarea: 'Tarea 3'}, {id: 4, tarea: 'Tarea 4'}
]);

    const tareaRef = useRef();

    const agregarTarea = () =>{
        //alert("Agregando tarea...");
        const tarea = tareaRef.current.value;
        //alert(tarea);
        const id = uuid();
        //alert(id);

        setTodos((prevTodos) =>{
            const nuevaTarea ={
                id:uuid(),
                tarea:tarea
            }
            //con los "..." tomo el arreglo y lo desconpongo
            //con el return tomo el arreglo antiguo y le sumo el arreglo nuebo
            //resultsando el arreglo actualizado
            tareaRef.current.value ="";
            return [...prevTodos, nuevaTarea]
        })
    }


    return (
        <Fragment>
         
            <h1>Lista de Tareas</h1>
            <div className="input-group mt-4 mb-4">
                <input ref={tareaRef} placeholder= "ingrese una tarea" className="form-control" type="text"></input>
                <button onClick={agregarTarea} className="btn btn-success ms-2">+</button>
            </div>
            <ul className = "list-group">
                {todos.map ((todo) => (
                    <TodoItem todo={todo} key= {todo.id}></TodoItem>
                ))}
            </ul>
        </Fragment>

    );
}