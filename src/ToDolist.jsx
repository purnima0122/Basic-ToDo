import React, { useState } from 'react';

function ToDolist() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function inputChange(event) {
        setNewTask(event.target.value);
    }
    function addTask()
    {
       if(newTask.trim()!=="") 
       {
        setTasks(t=>[...tasks, newTask]);
        setNewTask("");
        }
    }
    function deleteTask(index)
    {
        const updatedTasks =tasks.filter((element,i) => i!== index);//there is a convention where we will set it to  underscore if the parameteer is to be ignored like here element can be changed to _
        setTasks(updatedTasks);

    }
    return (
        <div className="todo">
            <h1>ToDo List</h1>
            <h2>Tasks</h2>

            <div>
            <input 
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={inputChange}
            />
            <button
            className="addButton"
            onClick={addTask}
            >Add</button>

            </div>

            <ol>
                {tasks.map((task,index)=>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                            className="deleteButton"
                            onClick={()=>deleteTask(index)}>
                                Delete
                        </button>
                       
                    </li>
                )}   
            </ol>
        </div>
        
    );
}

export default ToDolist;
