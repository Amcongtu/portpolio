import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import About from '@/components/About'
import Skill from '@/components/Skill'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>ACT | Full-stack Developer</title>
        <meta name="description" content="ACT | Full-stack Developer" />
      </Head>
      <Navbar/>
      <Main/>
      <About/>
      <Skill/>
      <Projects/>
      <Contact/>
    </div>
   
  )
}
