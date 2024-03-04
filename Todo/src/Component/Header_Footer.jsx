import{Link} from 'react-router-dom'
import { useAuth } from './AuthProvider/AuthProvider'
export function Header(){
    const Auth=useAuth()
    const user=Auth.user
    return(
        <div className=''>
            <div className=' flex flex-row justify-between px-5 py-4'>
                <div className=' text-3xl font-bold'>Todo</div>
                <div className=' text-xl font-semibold hidden md:block'>
                    <ul className=' flex '>
                        <li className=' mx-4'>{Auth.isAuthenticated && <Link className='' to={`/home/${user}`}>Home</Link>}</li>
                        <li className=' mx-4'>{Auth.isAuthenticated && <Link className='' to={`/todo/${user}`}>Todo</Link>}</li>
                    </ul>
                </div>
                <div className=' md:done hidden md:block'>
                    <ul className=' flex '>
                        <li className='mx-2 px-1 py-1'>{Auth.isAuthenticated && <Link className='' to={`/home/${user}`}>{user}</Link>}</li>
                        <li className='mx-2 px-1 py-1'>{!Auth.isAuthenticated && <Link className='' to={`/new-user`}>Create Account</Link>}</li>
                        <li className='mx-2 px-1 py-1'>{!Auth.isAuthenticated && <Link className='' to={`/`}>Login</Link>}</li>
                        <li className='mx-2 px-1 py-1'>{Auth.isAuthenticated && <Link className='' to={`/logout`} onClick={()=>Auth.logout()}>Logout</Link>}</li>
                    </ul>
                </div>
                <div className=' text-xl font-bold md:hidden'>
                    <a href="#">#</a>
                </div>
            </div>
            <hr />
        </div>
    )
}

export function Footer(){
    return(
        <div className=" bottom-0">
            <hr />
            <footer className=' flex flex-wrap flex-col items-center justify-between md:flex-row px-48'>
                <div className=' text-3xl text-black font-bold'>Todo</div>
                <div className=' font-semibold text-sm '>
                    <p>Manage your Todos</p>

                </div>
            </footer>
        </div>
    )
}