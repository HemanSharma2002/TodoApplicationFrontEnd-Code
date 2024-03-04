import{Navigate, useNavigate} from'react-router-dom'
import{Formik,Form,Field} from'formik'
import { useState } from 'react'
import { useAuth } from './AuthProvider/AuthProvider'
import { newUserApi, validUserApi } from './Api/Api'
import { urlConstruction, urlDestruction } from './Api/ApiClientCreation'
export function Login(){
    const [message,setMessage]=useState("")
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    

    const Auth=useAuth()
    const navigate=useNavigate()
    async function login(value){
        if(await Auth.login(value)==true){
            console.log("yess")
            navigate(`/todo/${value.username}`)
        }
        else{
            console.log("no")
            // navigate(0)
        }
    }
    return(
        <div className=" pt-20 min-h-screen flex flex-col items-center bg-gradient-to-tl from-slate-900 to-purple-900">
            <div >
            <div className=' text-2xl  p-5 text-white font-bold w-80 rounded-lg m-4 '>Login</div>
                <div className=' text-xl text-red-600 m-4'>{message}</div>
                <Formik initialValues={{username,password}} enableReinitialize={true} onSubmit={login} >
                    {(props)=>(
                        <Form className=' flex flex-col '>
                        
                            <label  className=' text-xl font-semibold m-6 text-white '>Username</label>
                            <Field name="username" type="text" className=" bg-white rounded-sm py-1"></Field>
                        
                        
                            <label  className='text-xl font-semibold m-6 text-white '>Password</label>
                            <Field name="password" type="password" className=" bg-white rounded-sm py-1"></Field>
                        
                        <div className=' mt-16 '>
                            <button className=' bg-blue-800 text-white px-3 font-bold py-2 rounded-md hover:bg-blue-900' type='submit'>Login</button>
                        </div>
                    </Form>
                    )
                    }
                </Formik>
            </div>
        </div>
    )
}
/////////////////////////////////////
export function Logout(){
    return(
        <div className=" pt-20 min-h-screen bg-gradient-to-tl from-slate-900 to-purple-900">
            <div>
                <h1 className=' text-3xl font-bold text-white '>Thanks for visting</h1>
            </div>
        </div>
    )
}

//////////////////////////////////////
export function NewUser(){
    const[message,setMessage]=useState('')
    const navigate=useNavigate()
    
    // const [firstName,setFirstName]=useState('')
    // const [lastName,setLastName]=useState('')
    // const [username,setUsername]=useState('')
    // const [password,setPassword]=useState('')
    // const [confirmPassword,setConfirmPassword]=useState('')
    
     function newUser(value){
        console.log(value)
        newUserApi(value).then(responce=>{
            console.log(responce)
            setMessage(responce.data)
            if(responce.data==="Created"){navigate(`/`)}
        }).catch(error=>console.log(error))
    }
    return(
        <div className=" pt-10 min-h-screen flex flex-col items-center bg-gradient-to-tl from-slate-900 to-purple-900 text-white font-bold w-full">
            <div className=' text-2xl  rounded-lg   '>Create your profile</div>
            <div className=' text-xl text-red-600 m-4'>{message}</div>
            <div>
                <Formik initialValues={{}} enableReinitialize={true} onSubmit={newUser}>
                {(props)=>
                    (
                        <Form className=' flex flex-col  mt-0'>
                            
                                <label htmlFor="" className=' text-xl m-6 '>First Name</label>
                                <Field name="firstName" type="text" className=" p-2 bg-white text-black  rounded-md w-80"></Field>
                            
                            
                                <label htmlFor="" className=' text-xl m-6 '>Last Name</label>
                                <Field name="lastName" type="text" className=" p-2 bg-white text-black  rounded-md w-80"></Field>
                            
                            
                                <label htmlFor="" className=' text-xl m-6 '>Username</label>
                                <Field name="username" type="text" className=" p-2 bg-white text-black  rounded-md w-80"></Field>
                            
                            
                                <label htmlFor="" className=' text-xl m-6 '>Password</label>
                                <Field name="password" type="password" className=" p-2 bg-white text-black rounded-md w-80"></Field>
                            
                            
                                <label htmlFor="" className=' text-xl m-6 '>Confirm  Password</label>
                                <Field name="confirmPassword" type="password" className=" p-2 bg-white text-black  rounded-md w-80"></Field>
                            
                            <div className=' mt-8'>
                                <button className=' bg-blue-600 hover:bg-blue-700 text-white  py-1 px-2 rounded-lg   font-bold mb-10' type='submit'>Create Account</button>
                            </div>
                        </Form>
                    )}
                    </Formik>               
            </div>
        </div>
    )
}