import React from 'react'
import { ProjectDatas } from './../constants/ProjectDatas';
import ProjectChild from './ProjectChild';

function ProjectParent() {
    return (

        <>
        <h1 className='pt-30 text-center text-xl uppercase text-green-400 font-bold border-b-3 max-w-34 mx-auto'>My Projects</h1>
        <div className='grid sm:grid-cols-2 max-w-7xl mx-auto'>
            {
                ProjectDatas.map((proj) => (
                    <ProjectChild

                        key={proj.id}
                        images={proj.img}
                        name={proj.title}
                        description={proj.desc}
                        links={proj.url}
                        buttons={proj.button}



                    />

                ))
            }

        </div>
        </>

    )
}

export default ProjectParent