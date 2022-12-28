import { useRouter } from 'next/router'
import Head from 'next/head'
import React from 'react'
import ErrorPage from 'next/error'
import Navbar from '../../components/Navbar'

export default function ProjectPage({}) {
    const router = useRouter()
    const id = router.query


    console.log(id)
  return (
    
    <div>
        <Navbar/>
        <ErrorPage statusCode={404}/>
    </div>
  )
}
