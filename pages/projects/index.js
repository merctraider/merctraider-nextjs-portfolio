import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Projects from '../../components/Projects'
export default function ProjectsPage() {
  return (
    <div>
      <Head>
        <title>merctraider | Jonathan Teo's Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      
      <Projects/>


      
      
    </div>
  )
}