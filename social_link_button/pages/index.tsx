import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

//Components
import SocialButton from '../components/SocialButton'
//Framer motion
import { AnimateSharedLayout,motion } from 'framer-motion'
//React Icons
import { SiLeetcode,SiGithub,SiLinkedin,SiTwitter,SiInstagram} from "react-icons/si";

const Home: NextPage = () => {

  const SOCIAL_DATA = [
    {
      link:'https://leetcode.com/Pavitra554/',
      name:"Leetcode",
      icon:<SiLeetcode size={30} />
    },
    {
      link:'https://github.com/Pavitra554',
      name:"Github",
      icon:<SiGithub size={30} />
    },
    {
      link:'https://www.linkedin.com/in/pavitra-behara/',
      name:"LinkedIn",
      icon:<SiLinkedin size={30} />
    },
    {
      link:'https://twitter.com/behara_pavitra',
      name:"Twitter",
      icon:<SiTwitter size={30} />
    },
    {
      link:'https://www.instagram.com/pavitra.ts/',
      name:"Instagram",
      icon:<SiInstagram size={30} />
    },
  ]

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-neutral-900">
      <Head>
        <title>Social Icons</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>

      <AnimateSharedLayout>
        <motion.div layout className='flex flex-row'>
          {SOCIAL_DATA.map((e,i)=>{
            return(
              <SocialButton
                key = {i}
                icon = {e.icon}
                link = {e.link}
                name = {e.name}
              />
            )
          })}
        </motion.div>
      </AnimateSharedLayout>

      </div>
    
    </div>
  )
}

export default Home;
