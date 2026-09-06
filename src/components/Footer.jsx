import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-gray-400">
      <div className='flex sm:flex-row flex-col gap-4 p-10 text-white justify-between items-center'>
        <div className='max-w-2xl p-4 flex flex-col gap-4 justify-center text-center'>
          <h1 className='font-bold uppercase text-xl text-green-400'>Ajay Shrestha</h1>
          <p className='leading-8 text-justify'>I design highly scalable and responsive web applications using MongoDB , Express , React and Nodejs.I have 2 years of experience of working as a Full Stack Developer and instructor in Clouds Web Nepal Pvt. Ltd.</p>
        </div>
        <div className='flex flex-col gap-4 text-center'>
          <h1 className='font-semibold text-xl text-green-400'>Social Contacts</h1>
          <div className='flex gap-8 text-xl'>
            <a href="https://www.facebook.com/" target="_blank"><FaFacebook /></a>
            <a href="https://www.instagram.com/" target='_blank'><FaInstagram /></a>
            <a href="https://www.github.com/" target='_blank'><FaGithub /></a>
            <a href="https://www.linkedin.com/" target='_blank'><FaLinkedin /></a>
          </div>
        </div>
        <div>
          <h1>@ All Rights Reserved.</h1>
        </div>
      </div>
    </footer>

  )
}

export default Footer