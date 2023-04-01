import React from 'react'

const Update = () => {
  return (
    <>
      <div className= "my-44 ml-8">
       <h1 className='text-6xl font-bold'>Welcome to <span className='text-orange'>the Future</span> of Learning!</h1>
       <h1 className='text-3xl mt-2'>Start Learning by best creators for <span className='text-orange'>absolutely free</span></h1>
      </div>
      <div className='flex flex-row gap-3 -mt-36 ml-8'>
      <h1 className='text-xl'><span className='text-3xl'>50+</span> Mentors</h1>
      <hr></hr>
      <h1 className='text-xl'><span className='text-3xl'>4.8/5</span> ratings</h1>
      </div>
      <button className="bg-orange hover:bg-lgt-orange text-slate-50 p-2 mt-4 ml-7 rounded-md"><a className="text-lg" href="/Signin">Get Started</a></button>
    </>
  )
}

export default Update
