import Head from 'next/head'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
export default function Home() {
  return (
    <div>
      <Head>
        <title>merctraider | Jonathan Teo's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='bg-prism-pattern absolute w-full h-full opacity-20 z-[-10] backdrop-blur-sm'></div>
      <Navbar/>
      
      <Main/>
      <Projects/>
      <Footer/>

      
      
    </div>
  )
}