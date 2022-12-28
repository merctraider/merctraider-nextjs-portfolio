import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Projects from '../../components/Projects'
export default function ProjectsPage() {
  return (
    <div>
      <Head>
        <title>merctraider | Jonathan Teo's Projects</title>
        <meta name='description' content='I am Jonathan Teo, and these are my projects. Most of them are web related'/>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="/assets/thumb.png"/>
        <meta property="og:type" content="website" />

      </Head>

      <Navbar/>
      
      <Projects/>


      
      
    </div>
  )
}