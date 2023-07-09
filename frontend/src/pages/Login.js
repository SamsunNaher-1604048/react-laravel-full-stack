import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

  const onSubmit=(e)=>{
    e.preventDefault();  
  }

  return (
    <div className='login-signup-form aminated fadeInDown '>
      <div className='from'>
        <form onSubmit={onSubmit}>
          <input type='email' placeholder='Email'/>
          <input type='password' placeholder='Password'/>
          <button className='btn btn-block'>Login</button>
          <p className='message'>
             Not Registered?<Link to="/signup">Create an Account</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
