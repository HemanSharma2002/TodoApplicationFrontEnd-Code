import { useEffect, useState } from "react"
import { deleteATodo, getTodo } from "./Api/Api"
import { useAuth } from "./AuthProvider/AuthProvider"
import { useNavigate } from "react-router-dom"

// export function updateTodo(){getTodo(Auth.user).then(response=>setTodos(response.data)).catch(error=>console.log(error))}
export function Todo(){
    const Auth=useAuth()
    const [todos,setTodos]=useState([])
    useEffect(()=>updateTodo,[])
    const navigate=useNavigate()
    function updateTodo(){
        getTodo(Auth.user).then(response=>setTodos(response.data)).catch(error=>console.log(error))
    }
    function update(todo){
        navigate(`/todo/${Auth.user}/${todo.id}`)
        updateTodo()
    }
    async function deleteTodo(todo){
        console.log(todo)
        await deleteATodo(Auth.user,todo.id).then(response=>{
            console.log(response)
        }).catch(error=>console.log(error))
        updateTodo()
    }
    function add(){
        navigate(`/todo/${Auth.user}/-1`)
    }
    return(
        <div className=" ">
            <div className=" pt-20 flex flex-col min-h-screen items-center w-full text-center">
                <table className=" w-full p-5 overflow-scroll">
                    <thead className=" bg-gray-50 border-b-2 border-gray-200">
                        <tr>
                            <td className=" p-3 text-sm font-semibold tracking-wide text-left w-98">Description</td>
                            <td className=" p-3 text-sm font-semibold tracking-wide text-left w-20">Done</td>
                            <td className=" p-3 text-sm font-semibold tracking-wide text-left w-28">Due Date</td>
                            <td className=" p-3 text-sm font-semibold tracking-wide text-left w-28">Delete</td>
                            <td className=" p-3 text-sm font-semibold tracking-wide text-left w-28">Update</td>
                        </tr>
                    </thead>
                    <tbody>
                            {todos.map(todo=>(
                                <tr key={todo.id} className=" ">
                                    <td className="  ">{todo.description}</td>
                                    <td className=" w-18 text-left">{todo.done.toString()}</td>
                                    <td className=" w-28 text-left">{todo.dueDate}</td>
                                    <td  className=" w-28 text-left" ><button className=" text-red-600 font-bold shadow-lg rounded-md p-1 bg-opacity-80 hover:text-white hover:bg-red-600" onClick={()=>deleteTodo(todo)}>Delete</button></td>
                                    <td className=" w-28 text-left" ><button className="text-yellow-600 font-bold shadow-lg rounded-md p-1 bg-opacity-80 hover:text-white hover:bg-yellow-600" onClick={()=>update(todo)}>Update</button></td>
                                </tr>
                            ))}
                        </tbody>
                </table>

                <div className=" mt-16"><button className=" bg-green-900 text-white shadow-lg rounded-xl p-2 hover:p-3 hover:text-xl font-bold" onClick={add}>Add Todo</button></div>
            </div>
        </div>
    )
}