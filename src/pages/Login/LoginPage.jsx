import React,{useState, useContext} from 'react'
import { useEffect } from 'react';
import {AppContext} from "./../../store/Context.js"

function LoginPage() {

  const [appData , dispatch] = useContext(AppContext);
  const [loginFailed, setloginFailed] = useState(false);
  const [credentials, setcredentials] = useState({
    email : "",
    password : ""
  })

  const handleLogin = () => {
    dispatch({ type: "login"});
  }

  useEffect(() => {
    
   console.log(credentials);
  
  }, [credentials])

  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto h-[100vh] flex flex-wrap items-center justify-center">
      <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 ">
        <h2 className="text-appblue text-[32px] font-extrabold title-font mb-5 text-center">Admin</h2>
        <div className="relative mb-4">
          <label htmlFor="email" className="text-left leading-7 text-sm text-gray-600">Email</label>
          <input value={credentials.email} onChange={(e)=>{setcredentials({...credentials , email : e.target.value})}} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-appblue focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative mb-4">
          <label htmlFor="password" className="text-left leading-7 text-sm text-gray-600">Password</label>
          <input value={credentials.password} onChange={(e)=>{setcredentials({...credentials , password : e.target.value})}} type="text" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-appblue focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button onClick={()=>{handleLogin()}} className="text-white bg-appblue border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
        {/* <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p> */}
      </div>
    </div>
  </section>
  )
}

export default LoginPage