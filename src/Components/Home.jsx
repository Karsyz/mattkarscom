import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {

  const [videoOpen, setVideoOpen] = useState(false);
  const [audioOpen, setAudioOpen] = useState(false);

  return (
    <section className="flex flex-row px-10 py-3 w-full">
        <article className="relative flex flex-col text-xl font-base w-full lg:w-1/2">
        <NavLink to="about" className="relative flex flex-row">
            <img 
              src="/img/1647651066738.jpg" 
              alt="picture of matt" 
              className='rounded-full w-[50px] h-[50px] mr-4 z-20'/>
            <div className='absolute rounded-full w-[50px] h-[50px] bg-[coral] translate-x-1 translate-y-1'></div>
            <div>
              <h1 className="font-bold text-3xl">Hi, I'm Matt Kars</h1>
              <h2 className="text-xs mb-3">A Software Developer, amongst other things</h2>
            </div>
          </NavLink>
          <p className="text-xl font-base text-justify mb-3">And just like that... BAM! A wall of text you probably didn't want to read. And if you really didn't and there is just too many words, I have good news for you friend; more options:  
            <button 
              className='text-blue-600 font-semibold ml-1'
              onClick={()=> setVideoOpen(prev => !prev)}
            >Watch</button>
            , and also  
            <button 
              className='text-red-600 font-semibold ml-1'
              onClick={()=> setAudioOpen(prev => !prev)}
            >Listen.</button>
          </p>
          
          <div className='overflow-hidden'>
            {videoOpen && 
              <div className='flex flex-row justify-center items-center h-[100px] transition bg-blue-500 rounded-md mb-3 ease-in-out duration-1000'>Video Player</div>
            }
            {audioOpen && 
              <div className='flex flex-row justify-center items-center h-[100px] transition bg-red-500 rounded-md mb-3 ease-in-out duration-1000'>Audio Player</div>
            }

          </div>
          <p className="text-xl font-base mb-3 text-justify">This site was intended to be a dev portfolio and you see, I'm into quite a few things, and I want to share those things somehow, and I figured I could kinda jam it all together in this one space that I'm calling digital home.</p>
          <p className="text-xl font-base mb-3 text-justify">I orignally started off with a template and it just kinda looked like every other site out there; and also, what was I thinking?!?! Using a template for a dev portfolio?!  It just sounds lazy doesn't it?  That's not me at all.  Time to put my best foot forward (it's the right one btw).</p>
          <p className="text-xl font-base mb-3 text-justify">What was I saying agian?... Oh, yes.  So, lacking the imagination or inspiration to make something of myself in the medium I've actually choosen make money with, I decided to do away with all the flashy bits that was the previous site and just get to the point in a nice, clean, albeit lackluster, approach. (That was a lot of commas, what the...). It's not actually necessary to have a portfolio that looks like a gaming rig... right?</p>
          <p className="text-xl font-base mb-3 text-justify">Yep, this will do (for now at least).  Does it really need to be any more than this? I don't think so -and if you've read till now we're probably like minded anyways.</p>
          <p className="text-xl font-base mb-3 text-justify">I wrote this site using a vite/react frontend and a java backend for the little bits of api needed here and there.. Like everything in life for a designer/engineer/dev/etc, nothing is ever quite finished, but it will get the job done.</p>
          <p className="text-xl font-base mb-3 text-justify">Some dev work I have done recently is under the heading up top of the same name. Checkout some of the other areas too if you want, I'll be adding content as time goes on.</p>
          <p className="text-xl font-base mb-3 text-justify">Oh, and thanks for giving me a chance, checking out what I can do and reading (or skimming) up to this point, you're a trooper.</p>
          <p className="text-xl font-base mb-3 text-justify">Feel free to reach out if you want to chat or have questions about something.</p>
        </article>
        <aside className="w-1/2 hidden lg:flex flex-row justify-end">
          <p className="w-5/12 p-4 text-xs font-base border-2 border-slate-100 rounded-md self-center">zomg... there's so much space over here</p>
        </aside>
      </section>
  )
}

export default Home