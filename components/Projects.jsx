import React from 'react'
import ProjectCard from './ProjectCard'
import Link from 'next/link';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function Projects() {
    // Define a state variable to store the currently hovered project
    const [hoveredProject, setHoveredProject] = useState(null);


    // Define a list of projects
    const projects = [
        {
            name: 'St. Patrick Lutheran Church of Chipley, Florida',
            category: 'Web Dev',
            image: '/assets/st-patrick-featured.jpg',
            link: '/projects/st-patrick-lutheran',
        },
        {
            name: 'St. Mary\'s Evangelical Lutheran Church',
            category: 'Web Dev',
            image: '/assets/st-marys-featured.png',
            link: '/project2',
        },
        {
            name: 'Ask The Pastor',
            category: 'Web Dev',
            image: '/assets/atp-featured.jpg',
            link: '/project2',
        },
        {
            name: 'Dust to Dust',
            category: 'Game Dev',
            image: '/assets/d2d-featured.png',
            link: '/project2',
        }, {
            name: 'Catechism Learner',
            category: 'Mobile Dev',
            image: '/assets/catechism-learner-featured.png',
            link: '/project1',
        },
        
    ];


    const [lastSelected, setLastSelected] = useState(projects[0]);

    return (
        <div id='projects' className='w-full h-screen bg-gradient-to-br from-[#05272E] via-slate-900 to-gray-800 md:background-animate'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center '>


                <div className="container mx-auto px-4 py-8">
                    <h2 className="font-bold mb-4">Projects</h2>
                    <div className="flex">
                        <div className='w-3/4 hidden md:flex'>
                            <div className='pr-4 justify-center'>
                                <img src={hoveredProject ? hoveredProject.image : lastSelected.image} alt={hoveredProject ? hoveredProject.name : 'Select a Project'} className={`rounded-xl object-contain transition-opacity ease-in duration-200 ${hoveredProject ? 'opacity-100' : 'opacity-0'}`} />
                            </div>

                        </div>
                        <div className="md:w-1/4 pl-4">
                            <ul className="list-none">
                                {projects.map((project) => (

                                    <Link href={project.link}>
                                        <li
                                            key={project.name}
                                            className="mb-4 cursor-pointer my-4"
                                            onMouseEnter={() => {
                                                
                                                setHoveredProject(project)
                                                setLastSelected(project)

                                            }}
                                            onMouseLeave={() => setHoveredProject(null)}
                                        >
                                            <div className="block py-2 px-4">
                                                <h2 className="text-2xl font-bold mb-2">{project.name} <span className={`transition-opacity ease-in duration-200 inline-block ${hoveredProject? ((hoveredProject.name == project.name)? 'opacity-100': 'opacity-0') : 'opacity-0'}`}><FaArrowRight/></span></h2>
                                                <p className="text-gray-400 text-md">{project.category}</p>
                                                
                                            </div>
                                        </li>
                                    </Link>

                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
