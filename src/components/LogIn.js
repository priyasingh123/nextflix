import React, {useState} from 'react'
import Header from './Header'

const LogIn = () => {
  const [isSignInForm, setSignInForm] = useState(true)

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm)
  }


  return (
    <div>
        <Header/>
        <div className="absolute " >
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      alt="bg-image"/>
      </div>
      <form className='absolute w-3/12 bg-black my-36 mx-auto right-0 left-0 p-12 bg-opacity-75 text-white'>
        <h1 className='font-bold text-white text-3xl py-4 px-2'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignInForm && <input type="text" placeholder="Full Name" className='p-2 mx-2 my-4 w-full bg-gray-700 rounded-lg'/>}
        <input type="text" placeholder="Email Address" className='p-2 mx-2 my-4 w-full bg-gray-700 rounded-lg'/>
        <input type="password" placeholder="Password" className='p-2 mx-2 my-4 w-full bg-slate-700 rounded-lg'/>
        <button className='p-2 mx-2 my-4 bg-red-500 text-white border-white w-full rounded-lg'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
        {isSignInForm && <p className='px-2 py-6 cursor-pointer' onClick={toggleSignInForm}>New to Netflix? Sign Up Now</p>}
      </form>
    </div>
  )
}

export default LogIn
