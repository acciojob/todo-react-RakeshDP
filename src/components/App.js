import React,{useState}from "react";
import './../styles/App.css';

const App = () => {
  const [todos,setTodos]=useState([]);
  const [newTodo, setNewTodo]= useState("");

  // Function to add a new todo item
  const addTodo=()=>{
    if(newTodo.trim() !== ""){
      setTodos([...todos, newTodo]);
      setNewTodo("")
    }
  }

  // Function to remove the todo items
  const removeTodo =(index)=>{
    const updatedTodos =todos.filter((_,i)=> i !== index);
    setTodos(updatedTodos);
  }


  return (
    <div >
        <h1>To-Do-List</h1>
      <div className="main">
          <input type="text"  value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
          <button onClick={addTodo}>Add Todo</button>
      </div>
             <div>
             <ul>
                {
                  todos.map((todo,index)=>(
                    <li key={index}>
                      {todo}
                      <button onClick={()=> removeTodo(index)}>Delete</button>
                    </li>
                  ))}
              </ul>
              </div> 
    </div>
  )
}

export default App
