"use client"

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'

function RegisterPage() {
  return (
    <div>
        <Navbar />
        <div className='container mx-auto py-5'>
            <h3>Register Page</h3>
            <hr className='my-3' />
            <form action="">
                <input className='block bg-gray-300 p-2 my-2 rounded-md' type="text" placeholder='Enter your name' />
                <input className='block bg-gray-300 p-2 my-2 rounded-md' type="email" placeholder='Enter your email' />
                <input className='block bg-gray-300 p-2 my-2 rounded-md' type="password" placeholder='Enter your password' />
                <input className='block bg-gray-300 p-2 my-2 rounded-md' type="password" placeholder='Confirm your password' />
                <button type='submit' className='bg-green-500 p-2 rounded-md text-white'>Sing Up</button>
            </form>
            <hr className='my-3'  />
            <p>Do not have an account? go to <Link className='text-blue-500 hover:underline' href="/login">Login</Link> Page</p>
        </div>
    </div>
  )
}

export default RegisterPage