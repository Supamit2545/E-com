import React, { useState } from 'react'
import Topnav from '../../Components/topnav/Topnav'
import './Login.css'
const LoginPage = () => {
  const [toggleInput , setToggleInput] = useState(false)

  const handleToggleInput = () =>{
    setToggleInput(!toggleInput)
    
    console.log(toggleInput)
  }
  
  function toggleCover(){
    const cover = document.getElementById('cover');
    const login = document.getElementById('login-form')
    const covertop = document.getElementById('cover-top')
    const covertext = document.getElementById('cover-text')

    setToggleInput(!toggleInput);
    
    if(toggleInput === true){
      cover.classList.add('active')
      covertop.classList.add('active')
      login.classList.add('hidden')
      covertext.textContent = "Login"
      covertext.classList.remove('left-5')
      covertext.classList.add('right-10')
    }else{
      cover.classList.remove('active')
      covertop.classList.remove('active')
      login.classList.remove('hidden')
      covertext.textContent = "Register"
      covertext.classList.remove('right-5')
      covertext.classList.add('left-5')
    }
  }

  return (
    <div>
        <body>
          <div className='login-container'>
            <div className="login-box">
              <div className='flex justify-around'>
                <form id='login-form' className='Login-Form' action="">
                  <p className='text-4xl font-bold text-center py-2 mb-5'>Login Form</p>
                  <p className='font-bold'>Username</p>
                  <input className='login-input' type="text" name="" id="" placeholder='Enter Username'/>
                  <p className='font-bold mt-5'>Password</p>
                  <input className='login-input' type="password" name="" id="" placeholder='Enter Password'/>
                  <div className='w-2/2 my-6 text-center'>
                    <div className='text-blue-500 hover:cursor-pointer hover:underline hover:text-blue-800'>Forget an Password?</div>
                    <button className='border-2 border-black bg-orange-500 px-20 py-1 rounded-full hover:bg-orange-700'>Sign In</button>
                  </div>
                </form>
                <form className='Register-Form' action="">
                    <input className='username-input' type="text" name="" id="" placeholder='Enter Username'/>
                </form>
              </div>
              <div id='cover' className='cover'>
                <div id='cover-top' className='cover-top' onClick={() => {toggleCover()}}><span id='cover-text' className='cover-text absolute top-7 text-4xl text-white left-5'>Register</span></div>
              </div>
            </div>
          </div>
        </body>
    </div>
  )
}

export default LoginPage