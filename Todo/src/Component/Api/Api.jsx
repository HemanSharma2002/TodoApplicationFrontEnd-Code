import backend from "./ApiClientCreation"

export const getTodo=(username)=>backend.get(`/users/${username}/todos`)
export const validUserApi=()=>backend.post(`/authentication`
// ,{
//     headers:{
//         "token":"Basic "+window.btoa(value.username+":"+value.password)
//     }
// }
)
export const newUserApi=(body)=>backend.post(`/sign-up`,body)
export const getASpecificTodo=(username,id)=>backend.get(`/users/${username}/todos/${id}`)
export const putTodo=(username,id,body)=>backend.put(`/users/${username}/todos/${id}`,body)
export const addTodo=(username,body)=>backend.post(`/users/${username}/todos`,body)
export const deleteATodo=(username,id)=>backend.delete(`/users/${username}/todos/${id}`)