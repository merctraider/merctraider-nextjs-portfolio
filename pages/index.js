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
        <meta name='description' content='I am Jonathan Teo, A Web and Game Developer.  Right now, I love doing web design and development. While my background is programming in Game Design and Development, I have recently branched out into full-stack web development.'/>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="/assets/thumb.png"></meta>
        <meta property="og:type" content="website" />

      </Head>

      <div className='bg-prism-pattern absolute w-full h-full opacity-20 z-[-10] backdrop-blur-sm'></div>
      <Navbar/>
      
      <Main/>
      <Projects/>
      <Footer/>

      
      
    </div>
  )
}