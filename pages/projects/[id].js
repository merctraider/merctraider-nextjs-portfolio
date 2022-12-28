import { useRouter } from 'next/router'
import Head from 'next/head'
import React from 'react'
import ErrorPage from 'next/error'
import Navbar from '../../components/Navbar'
import ProjectCard from '../../components/ProjectCard'

import projects from '../../data/projects.json'
import { motion } from 'framer-motion'
export default function ProjectPage({ }) {
  const router = useRouter()
  const id = router.query

  
  const project = projects.find(project => project.slug === id.id)
  const {information} = project

  const metaDesc = Array.isArray(information) ? information[0] : information;
  return (
     

    <div>

      {project
        ? (
          <>
            <Head>
              <title>{project.title} -  merctraider</title>
              <link rel="icon" href="/favicon.ico" />
              <meta name='description' content={metaDesc}/>
            </Head>

            <motion.div
            initial={{x:-75, opacity:0}}
            animate={{x:0, opacity:1}}
            exit={{x:75, opacity:0}}
            transition={
                {
                    duration:0.75
                }
              }
            >
            <ProjectCard
              project={project}

            />
            </motion.div>
          </>
        )
        : (
          <><Navbar /><ErrorPage statusCode={404} /></>

        )
      }
      <footer>© {new Date().getFullYear()} merctraider</footer>

    </div>
  )
}
