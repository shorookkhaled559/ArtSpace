import React from 'react'
import './Auth.css'
import logo from '../../assets/palette-icon-free-vector-removebg-preview.png'

export default function Auth() {
  return (
    <div className="flex justify-center items-center min-h-screen  px-4">
      <div className="w-full max-w-md bg-white h-auto rounded-2xl shadow p-6 sm:p-8">
        <div className="flex items-center justify-center gap-3 flex-wrap mb-6">
          <img src={logo} alt="logo" className="h-[50px] sm:h-[60px] object-contain" />
          <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--color-primary)]">Art Space</h2>
        </div>


        <div className="p-2 sm:p-4 login">
          <h2 className="text-2xl  mb-4 ">Login</h2>
          <form className="space-y-4">
            <div className="text-left">
              <label htmlFor="email" className="block">Email:</label>
              <input 
                name="email" 
                id="email" 
                placeholder="Email" 
                type="email" 
                className="w-full px-3 py-2 focus:outline-none "
              />    
            </div>

            <div className="text-left">
              <label htmlFor="password" className="block">Password:</label>
              <input 
                name="password" 
                id="password" 
                placeholder="Password" 
                type="password" 
                className="w-full px-3 py-2 focus:outline-none "
              /> 
            </div>

            <button 
              type="submit" 
              className="w-full py-2"
            >
              Login
            </button>    
          </form>
        </div>

        <p className="px-4 text-center mt-4">
          Don't have an account? <a href="#" >Sign Up</a>
        </p>

        <h3 className="text-center my-3">Join us as</h3>

        <div className="buttons px-4 flex flex-col sm:flex-row gap-3">
          <button className="w-full sm:w-1/2 py-2">
            Artist
          </button>
          <button className="w-full sm:w-1/2 py-2">
            Art Lover
          </button>
        </div>

      </div>
    </div>
  )
}
