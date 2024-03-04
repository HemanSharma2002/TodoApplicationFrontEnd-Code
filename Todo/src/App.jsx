import './App.css'
import AuthProvider, { useAuth } from './Component/AuthProvider/AuthProvider'
import { ErrorPage } from './Component/Error'
import { Footer, Header } from './Component/Header_Footer'
import { Home } from './Component/Home'
import { Login, Logout, NewUser } from './Component/Login_Logout_NewUser'
import { Todo } from './Component/Todo'
import{BrowserRouter,Route,Routes} from'react-router-dom'
import TodoBox from './Component/TodoBox'
import TWC from './Component/Twc'
function App() {
  const Auth=useAuth()
  function AuthRoute({children}){
    const Auth=useAuth()
    if(Auth.isAuthenticated)
    {return children}
    else{return <ErrorPage/>}
  }
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/home/:username' element={<AuthRoute><Home/></AuthRoute>}></Route>
        <Route path='/todo/:username' element={<AuthRoute><Todo/></AuthRoute>}></Route>
        <Route path='/todo/:username/:id' element={<AuthRoute><TodoBox/></AuthRoute>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
        <Route path='/new-user' element={<NewUser/>}></Route>
        <Route path='/*' element={<ErrorPage/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
