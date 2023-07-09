import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'


const Defaultlayout = () => {
  const{user,token} = useStateContext();

  if(!token){
    return <Navigate to="/login"/>
  }

  const onLogout=(e)=>{
      e.preventDefault();  
  }

  return (
    <div id='defaultLayout'>
      <aside>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/user">Users</Link>
      </aside>

      <div className='content'>
        <header>
          <div>
            header
          </div>
          <div>
            {user.name}
            <a href='#' onClick={onLogout} className='btn-logout'>Logout</a>
          </div>
        </header>
        <main>
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default Defaultlayout
