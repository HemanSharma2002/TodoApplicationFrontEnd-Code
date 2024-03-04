import { createContext, useContext, useState } from "react";
import {  validUserApi } from "../Api/Api";
import { urlConstruction, urlDestruction } from "../Api/ApiClientCreation";
import { useNavigate } from "react-router-dom";

const AuthContext=createContext();
export const useAuth=()=>useContext(AuthContext)

export default function AuthProvider({children}){
    const [user,setUser]=useState('')
    const [isAuthenticated,setAuthenticated]=useState(false)
    let token
    async function login(value){
        try{
            token ="Basic "+window.btoa(value.username+":"+value.password)
            urlConstruction(token)
        const response=await validUserApi()
        console.log(response)
        if(response.status==200){
            await urlDestruction()
            token=response.data.token
            urlConstruction("Bearer "+token)
            setAuthenticated(true)
            setUser(value.username)
            return true
        }
        console.log(token)
        urlDestruction(token)
        return false}
        catch{
            console.log("this")
            urlDestruction(token)
            return false
        }
    }
    function logout(){
        urlDestruction(token)
        setAuthenticated(false)
        setUser('')
    }
    return (
        <AuthContext.Provider value={{user,isAuthenticated,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}