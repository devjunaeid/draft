import React from 'react'
import { FaSquareGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
function Login() {
  return (
    <div className='min-h-screen fcm'>
        <div className='relative border py-8 px-2 rounded-md bg-white/10 bg-opacity-0 backdrop-blur-sm blur-sh w-1/3'>
            <div className='frm gap-5 text-xl font-semibold mb-8'>
                <button className='bg-white/20 py-2 mr-2 rounded-md w-1/2 flex-nowrap'>Login</button>
                <button className='bg-white/20 py-2 ml-2 rounded-md w-1/2'>Register/Sign Up</button>
            </div>
            <div className='fcm min-w-76 gap-2'>
                <h3 className='text-xl mb-4'>Login with</h3>
                <div className='frm gap-4 w-2/3 bg-purple-600 py-4 rounded-lg text-xl'><FaGoogle />Google</div>
                <div className='frm gap-4 w-2/3 bg-lime-400 py-4 rounded-lg text-xl'><FaSquareFacebook />Facebook</div>
                <div className='frm gap-4 w-2/3 bg-green-300 py-4 rounded-lg text-xl'><FaSquareGithub />Github</div>
            </div>
            <div className='hidden text-center left-0 right-0'>
                <p>Testing</p>
            </div>
        </div>
    </div>
  )
}

export default Login