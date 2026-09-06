import React from 'react'
import { motion } from 'framer-motion';

function About() {
  return (
    <div className='pt-30'>
      <motion.h1
        initial={{ y: -60 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}


        className='font-bold text-5xl text-green-400 text-center'>About Me</motion.h1>

      <div className='max-w-3xl md:mx-auto p-6'>
        <motion.p
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}


          className='text-gray-500 p-4 text-justify'>Hello , I am Ajay Kumar Shrestha ,a passionate full stack developer from Nepal.I enjoy building responsive and user friendly web applications</motion.p>

        <motion.p
          initial={{ x: 80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}



          className='text-gray-500 p-4 text-justify'>I love learning new technoloiges,solving problems and creating modern websites that provide great user experiences.</motion.p>
      </div>

      <div className='max-w-3xl md:mx-auto border-2 border-gray-300 rounded-xl p-5 m-10 '>
        <h2 className='uppercase mb-4 font-bold text-green-400 text-center'>My Full Stack Knowledge and Skills</h2>
        <ul className='text-gray-700 grid md:grid-cols-2 gap-3'>
          <li className='bg-gray-200 p-2 rounded'>HTML,CSS AND JAVASCRIPT</li>
          <li className='bg-gray-200 p-2 rounded'>REACT JS AND TAILWIND CSS</li>
          <li className='bg-gray-200 p-2 rounded'>USER INTERFACE (UI)</li>
          <li className='bg-gray-200 p-2 rounded'>MONGODB , EXPRESS AND NODEJS</li>
          <li className='bg-gray-200 p-2 rounded'>DATABASE</li>
          <li className='bg-gray-200 p-2 rounded'>GIT AND GITHUB</li>
        </ul>
      </div>


    </div>
  )
}

export default About