import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

function Hero() {
    return (
        <div className='flex min-h-screen sm:flex-row flex-col-reverse items-center justify-between max-w-7xl'>

            {/* left contents  */}
            <div className='p-8'>

                {/* Introduction  */}
                <div className='flex items-center justify-center flex-col gapj-4 max-w-4xl'>
                    <motion.h2

                        initial={{ filter: "blur(4px)", x: -100 }}
                        whileInView={{ x: 0 }}
                        animate={{ filter: "none" }}
                        transition={{ duration: 0.8 }}

                        className='text-2xl text-green-300 uppercase font-bold p-3'>Ajay Shrestha</motion.h2>
                    <motion.span

                        initial={{ x: 100 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 0.8 }}
                        className='p-2'


                    >Full stack Developer and Trainer</motion.span>


                    <motion.p

                        initial={{ x: -100 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 0.8 }}
                        


                        className='leading-8 text-justify'>I build intelligent, secure, and scalable web and mobile applications by combining modern software engineering, AI integration and efficient system design. I specialize in transforming complex ideas into user-friendly, high-performance digital solutions using modern web and app technologies. My focus is on developing innovative, reliable, and future-ready applications that deliver seamless user experiences and strong security.</motion.p>
                </div>

                {/* buttons  */}
                <div className='flex items-center justify-center gap-4 p-4'>
                    <a href="/cv.pdf" download>
                        <motion.button
                            whileTap={{ scale: 0.8 }}
                            transition={{ duration: 0.4 }}

                            className='bg-blue-400 text-white font-semibold p-4'>Download CV</motion.button>
                    </a>
                    <Link to="/contact">
                        <motion.button
                            whileTap={{ scale: 0.8 }}
                            transition={{ duration: 0.1 }}

                            className='border border-gray-300 p-4 text-blue-400 font-semibold'>Contact US</motion.button>
                    </Link>
                </div>

                {/* social links  */}
                <div className='flex items-center justify-center gap-4 p-4 text-xl text-blue-400'>
                    <a href="" target='_blank'><FaFacebook /></a>
                    <a href="" target='_blank'><FaInstagram /></a>
                    <a href="" target='_blank'><FaGithub /></a>
                    <a href="" target='_blank'><FaLinkedin /></a>
                </div>


            </div>

            {/* right contents  */}
            <div>
                <img src="bpic.jpg" alt="profile" className='sm:h-95 rounded-full sm:w-100 h-60 w-60 mt-16 sm:mt-0 p-4' />

            </div>


        </div>
    )
}

export default Hero