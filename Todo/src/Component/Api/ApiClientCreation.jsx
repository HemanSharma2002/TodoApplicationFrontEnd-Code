import axios from 'axios'

const backend=axios.create(
    {
        baseURL:"http://localhost:8080"
    }
)
export function urlConstruction(token){
    console.log(token)
    backend.interceptors.request.use((config)=>{
        config.headers.Authorization=token
        console.log(token)
        return config
    })
}
// export function JwtConstruction(token){
//     backend.interceptors.request.use(configs=>{
//         console.log(token)
//         configs.headers.Authorization="Bearer "+token
//         return configs
//     })
// }
export function urlDestruction(){
    const intercept=axios.interceptors.request.use((config)=>{

    })
    backend.interceptors.request.eject(intercept)

}
export default backend