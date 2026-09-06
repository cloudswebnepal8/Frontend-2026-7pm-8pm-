import React from 'react'

function Contact() {
  return (
    <div className='flex min-h-screen justify-center items-center flex-col'>
      <form className='flex flex-col gap-4 border border-gray-300 px-20 py-10 rounded-sm'>
        <h1 className='text-xl text-center text-green-500 font-bold'>Contact US</h1>
        <input type="text" placeholder='Enter your name' className='border border-gray-200 rounded-sm px-4 py-1' required />
        <input type="email" placeholder='Enter your email' className='border border-gray-200 rounded-sm px-4 py-1' required />
        <input type="text" placeholder='subject' className='border border-gray-200 rounded-sm px-4 py-1' required />
        <textarea placeholder='Enter your message' className='border border-gray-200 rounded-sm px-4 py-1' required></textarea>
        <button type='submit' className='border border-gray-200 rounded-sm px-4 py-1 bg-green-400 text-white font-bold hover:scale-105 transition duration-700'>Send Message</button>
      </form>

      <a href='/'>
        <p>Go to Home page</p>

      </a>
    </div>
  )
}

export default Contact