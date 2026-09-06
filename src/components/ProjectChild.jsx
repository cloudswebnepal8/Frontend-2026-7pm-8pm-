import React from 'react'

function ProjectChild(props) {
    return (
        <div className='flex items-center min-h-screen justify-center '>
            <div className='border border-gray-300 mx-4 p-4 flex flex-col h-140 rounded-sm justify-center items-center'>
                <img src={props.images} alt={props.name} className='sm:h-60' />
                <h1 className='text-xl uppercase text-green-400 p-4 font-semibold'>{props.name}</h1>
                <p className='leading-8 text-justify px-4'>{props.description}</p>
                <a href={props.links} target='_blank'>

                    <button className='bg-blue-400 text-white px-8 py-3 m-4 font-semibold'>{props.buttons}</button>
                </a>
            </div>
        </div>
    )
}

export default ProjectChild