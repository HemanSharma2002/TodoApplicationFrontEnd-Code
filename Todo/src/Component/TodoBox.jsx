import { useNavigate, useParams } from "react-router-dom";
import { Formik,Form,Field } from "formik";import { useEffect, useState } from "react";
import { addTodo, getASpecificTodo, putTodo } from "./Api/Api";
import { useAuth } from "./AuthProvider/AuthProvider";
// import { updateTodo } from "./Todo";

export default function TodoBox(){
    
    const{id}=useParams()
    const Auth=useAuth()
    const[description,setDescription]=useState('')
    const[dueDate,setDueDate]=useState(null)
    const navigate=useNavigate()
    
    useEffect(()=>{
        if(id!=-1){getASpecificTodo(Auth.user,id).then(response=>{
            setDescription(response.data.description)
            setDueDate(response.data.dueDate)
        }).catch(error=>console.log(error))}
    },[id])
    async function submit(value){
        if(id==-1){
          await  addTodo(Auth.user,value).then(response=>{
                console.log(response)
            }).catch(error=>console.log(error))
            
            navigate(`/todo/${Auth.user}`)    
        }
        else{const todo={
            id:id,description:value.description,dueDate:value.dueDate,done:false
        }
        await putTodo(Auth.user,id,todo).then(response=>{
            console.log(response)
        }).catch(error=>console.log(error))

        navigate(`/todo/${Auth.user}`)

    }
        // updateTodo()
    }
    return(
        <div className=" w-ful min-h-screen pt-10 flex flex-col items-center">
            <div className=" text-2xl font-bold bg-slate-900 text-white w-80 rounded-md">Update Todo Box</div>
            <Formik initialValues={{description,dueDate}} enableReinitialize={true} validateOnChange={false} validateOnBlur={false} onSubmit={submit}>
            {(props)=>(
                        <Form className="">
                        <fieldset className='m-10 flex flex-col '>
                            <label  className=' text-xl my-5 font-semibold'>Description</label>
                            <Field name="description" type="text" className=" p-3 bg-slate-300 rounded-md w-96"></Field>
                        </fieldset>
                        <fieldset className='m-10 flex flex-col '>
                            <label  className=' text-xl my-5 font-semibold'>Date</label>
                            <Field name="dueDate" type="date" className=" p-3 bg-slate-300 rounded-md w-96"></Field>
                        </fieldset>
                        <div className=''>
                            <button className="  bg-green-800 text-white shadow-lg rounded-xl mt-10 p-2 hover:p-3 hover:text-xl font-bold" type='submit'>Submitt</button>
                        </div>
                    </Form>
                    )
                    }
            </Formik>
        </div>
    )
} 