import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import deved from '../public/dev-ed-wave.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import InterCard from '../public/InterCard.png'
import indieB from '../public/indieB.png'
import EssentricEvnt from '../public/EssentricEvnt.png'
import JobListing from '../public/JobListing.png'
import sunnyside from '../public/sunnyside.png'
import Attendrmobile1 from '../public/Attendrmobile1.png'
import Attendrmobile2 from '../public/Attendrmobile2.png'
import Attendrmobile3 from '../public/Attendrmobile3.png'
import Attendrmobile4 from '../public/Attendrmobile4.png'
import AttendrAdm1 from '../public/AttendrAdm1.png'
import AttendrAdm2 from '../public/AttendrAdm2.png'
import snap from '../public/snap.png'

import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className='darkMode ? "dark" : ""'>
      <Head>
        <title>Layenull portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className=' py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>Welcome</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-xl' />
              </li>
              <li><a className=' bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="../Layeni-Oreoluwa-Oluwapamilerin-Resume.pdf"
                download='Layeni Oreoluwa Resume.pdf'
              >Download Resume</a></li>
            </ul>

          </nav>

          <div className='text-center p-2'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Layeni Oreoluwa</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Web Developer and Designer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto'>A passionate computer science graduate specializing in frontend development with Next.js, React.js, and Tailwind CSS.
              I have hands-on experience with backend development using Java and Spring Boot. ready to collaborate and bring your ideas to life!</p>
          </div>

          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle />
            <a href='https://www.linkedin.com/in/oreoluwa-layeni-7b49201a6/' target='_blank' rel='noopener noreferrer'>
              <AiFillLinkedin />
            </a>

            <a href='https://github.com/Layenull' target='_blank' rel='noopener noreferrer'>
              <AiFillGithub />
            </a>


          </div>

          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={deved} alt="deved" layout='fill' objectFit='cover' />

          </div>



        </section>


        <section>
          <div>
            <h3 className=' text-3xl py-1'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>Throughout my development career, I have collaborated on diverse projects, gone through internships, and honed my skills through personal and academic endeavors.
              I love using technology to tackle real-world challenges and craft digital solutions that make a difference.
            </p>
            <p className=' text-md py-2 leading-8 text-gray-800'>
              Let’s work together to bring your digital ideas to life!
            </p>

          </div>

          <div className='lg:flex gap-10'>
            <div className=' text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={design} width={100} height={100} alt='deisgn-img' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Design</h3>
              <p className=' py-2'>Creating designs suited for your needs following core design theory</p>
              <h4 className='py-4 text-teal-600'>Design tools i use</h4>
              <p className=' text-gray-800 py-1'>Photoshop</p>
              <p className=' text-gray-800 py-1'>Figma</p>
            </div>

            <div className=' text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={code} width={100} height={100} alt='deisgn-img' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Front-End</h3>
              <p className=' py-2'>Developing sleek, modern interfaces with a focus on usability and style.</p>
              <h4 className='py-4 text-teal-600'>Design tools i use</h4>
              <p className=' text-gray-800 py-1'>Javascript</p>
              <p className=' text-gray-800 py-1'>React.JS</p>
              <p className=' text-gray-800 py-1'>Next.JS</p>
              <p className=' text-gray-800 py-1'>Tailwind CSS</p>
            </div>


            <div className=' text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={consulting} width={100} height={100} alt='deisgn-img' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Back-End</h3>
              <p className=' py-2'>Crafting efficient and secure backend solutions for optimal functionality.</p>
              <h4 className='py-4 text-teal-600'>Design tools i use</h4>
              <p className=' text-gray-800 py-1'>Node.JS</p>
              <p className=' text-gray-800 py-1'>Java</p>
              <p className=' text-gray-800 py-1'>Springboot</p>
              <p className=' text-gray-800 py-1'>Firebase</p>
              <p className=' text-gray-800 py-1'>Mongodb</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className=' text-3xl py-1'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>Welcome to my portfolio! Here you will find a some of the previous projects designed and worked on by me, showcasing my skills and passion for web development. These projects reflect my journey and growth as a developer.
            </p>
          </div>
          <div className='flex flex-col gap-10 lg:flex-row lg:flex-wrap'>
            <div className="basis-1/3 flex-1">
              <Image src={InterCard} className="rounded-lg object-cover " width={'100%'} height={'100%'} layout='responsive' alt='web1' />

            </div>

            <div className="basis-1/3 flex-1">
              <Image src={JobListing} className="rounded-lg object-cover " width={'100%'} height={'100%'} layout='responsive' alt='web3' />

            </div>

            <div className="basis-1/3 flex-1">
              <Image src={sunnyside} className="rounded-lg object-cover " width={'100%'} height={'100%'} layout='responsive' alt='web3' />

            </div>

            <div className="basis-1/3 flex-1">
              <Image src={snap} className="rounded-lg object-cover " width={'100%'} height={'100%'} layout='responsive' alt='web4' />

            </div>


            {/* New 2x2 Grid of Images */}
            <div className="grid grid-cols-2 gap-4 w-full bg-teal-600 bg-opacity-50 p-4 rounded-lg">
              <div className="col-span-1">
                <Image src={Attendrmobile1} className="rounded-lg object-cover " width={'100%'} height={'100%'} layout='responsive' alt='Attendrmobile1' />
              </div>
              <div className="col-span-1">
                <Image src={Attendrmobile2} className="rounded-lg object-cover " width={'100%'} height={'100%'} layout='responsive' alt='Attendrmobile2' />
              </div>
              <div className="col-span-1 flex flex-col gap-4">
                <Image src={Attendrmobile4} className="rounded-lg object-cover h-full " width={'100%'} height={'100%'} layout='responsive' alt='Attendrmobile3' />
              </div>
              <div className="col-span-1 flex flex-col gap-4">
                <Image src={AttendrAdm1} className="rounded-lg object-cover " width={'100%'} height={'100%'} layout='responsive' alt='AttendrAdm1' />

                <Image src={AttendrAdm2} className="rounded-lg object-cover " width={'100%'} height={'100%'} layout='responsive' alt='AttendrAdm2' />
              </div>
            </div>
            {/* New 2x2 Grid of Images */}


            <div classname="basis-1/3 flex-1">
              <Image src={EssentricEvnt} className="rounded-lg object-cover " width={'100%'} height={'100%'} layout='responsive' alt='web5' />

            </div>

            <div className="basis-1/3 flex-1">
              <Image src={indieB} className="rounded-lg object-cover " width={'100%'} height={'100%'} layout='responsive' alt='indieB' />

            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
