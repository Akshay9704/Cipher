import React, { useState } from 'react'
import Logo from "../Images/Logo.png";
import axios from "axios";

const Signup = () => {

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: ""
  })

  const handleChange = e => {
    const { name, value } = e.target 
    setUser({
      ...user,
      [name]:value
    })
  }

  const signup = () =>{
    const { fname, lname, email, password } = user
    if (fname && lname && email && password){
      axios.post("http://localhost:5000/signup", user)
      .then(res => console.log(res))
    } else {
      alert("Invalid Input")
    }
  }

  return (
    <>
      <div className="login w-2/4 m-auto rounded-3xl mt-7">
        <div className="flex justify-between">
        <h1 className="font-bold text-3xl ml-8 mt-7">
          Signup
        </h1>
        {/* ICON CROSS */}
        </div>
        <div className="flex gap-2 mt-7 justify-center items-center">
        <img className="w-10" srcSet={Logo} alt="Logo"></img>
        <h1 className="text-3xl font-bold">CipherSchools</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
        <h1 className="font-medium text-2xl mt-4">
        Create New Account
        </h1>
        <h3 className="text-lg">Please provide your valid informations to signup</h3>
        </div>

        <form className="flex flex-col justify-center items-center">
        <input className="p-3 w-3/4 rounded-xl bg-gray mt-9" type="fname" name="fname" value={user.fname} placeholder="First Name" onChange={ handleChange }></input>
        <input className="p-3 w-3/4 rounded-xl bg-gray mt-4" type="lname" name="lname" value={user.lname} placeholder="Last Name" onChange={ handleChange }></input>
        <input className="p-3 w-3/4 rounded-xl bg-gray mt-4" type="email" name="email" value={user.email} placeholder="Email ID" onChange={ handleChange }></input>
        <input className="p-3 w-3/4 rounded-xl bg-gray mt-4" type="password" name="password" value={user.password} placeholder="Password" onChange={ handleChange }></input>
        </form>
        <div className="flex justify-center ">
        <button className="bg-orange text-white font-medium rounded-xl p-3 w-3/4 mt-4" onClick={signup}>Create Account</button>
        </div>
        <div className="flex justify-center items-center gap-2 mt-4">
          <h3 className="text-lg">Already have an account ?</h3>
          <a className="text-orange text-lg " href="/Signin">Signin Now</a>
        </div>
      </div>
    </>
  )
}

export default Signup
