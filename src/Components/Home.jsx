import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {

  const [moreWords, setMoreWords] = useState(false);
  const [audioOpen, setAudioOpen] = useState(false);

  return (
    <section className="flex flex-row px-10 py-3 w-full animate-fade">
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
          <p className="text-xl font-base text-justify mb-3">Bro, why so {moreWords ? "few" : "many"} words?!
            <button 
              className='text-sm bg-orange-400 mx-2 py-1 px-2 rounded-md drop-shadow scale-90'
              onClick={()=> setMoreWords(prev => !prev)}
            >
              {moreWords ? "Moar Words Now!" : "Less Words Please!"}
              </button></p>
            <p className="text-xl font-base text-justify mb-3">
            You can 
            <button 
              className='text-blue-600 font-bold mx-2'
              onClick={()=> setAudioOpen(prev => !prev)}
            >Listen</button>
            to me talk for a bit instead. Either way, thanks for checking out my stuff. I hope you find something useful here.
          </p>
          
          <div className='overflow-hidden'>
            {audioOpen && 
              <div className='flex flex-col justify-center items-center h-[100px] transition bg-transparent rounded-md mb-3 ease-in-out duration-1000 animate-fade'>
                <audio 
                  src="/audio/karsyPortfolio.mp3" 
                  type="audio/mpeg"
                  preload="none" 
                  controls
                >
                  Error: Your browser does not support the audio element.
                </audio>
              </div>
            }

          </div>
          {moreWords ?
            <>        
              <p className="text-xl font-base mb-3 text-justify">I intended mattkars.com to be a dev portfolio, but I'm into a lot of other stuff too; so I figured I'd just wrap it all up one location.</p>
              <p className="text-xl font-base mb-3 text-justify">Areas of interest are up in the navbar.  I'm working on a blog, newsletter, and a projects timeline section where I can post updates on what I'm working on.</p>
              <p className="text-xl font-base mb-3 text-justify">Feel free to 
              <NavLink to="contact" className="text-blue-600 font-bold mx-2">
                reach out
              </NavLink>
              if you want to chat or have questions about something.</p>
            </>
            :
            <>
              <p className="text-xl font-base mb-3 text-justify">This site was originally intended to be a dev portfolio, but I'm into quite a few things and I wanted a place to share those things too somehow. I figured I could kinda jam it all together here in this one space that I'm calling digital home.</p>
              <p className="text-xl font-base mb-3 text-justify">And how fitting, considering the url is my name an'all.</p>
              <p className="text-xl font-base mb-3 text-justify">My first dev portfolio started off with a template and it just looked like every other dev portfolio out there, even it being simple; and also, what was I thinking?!?! Using a template for a dev portfolio?! It just sounds lazy doesn't it? Of course it does, but just don't judge me: we all had to start somewhere and I'm thinkful that I took action and build something anyways. The template-esque site never felt good to me and it's not really a good representation of me at all. Time to put my best foot forward (it's the right foot btw).</p>
              <p className="text-xl font-base mb-3 text-justify">What was I saying agian? Oh yea...  So, I decided to do away with all the flashy bits that was the previous site and just get to the point in a nice, clean, albeit lackluster, approach. Taking it back to first principles so to speak. It's not actually necessary to have a portfolio that looks like a gaming rig... right? RGB on the website tho...hrmmm</p>
              <p className="text-xl font-base mb-3 text-justify">I wrote this site using a vite/react frontend and a java backend for the little bits of api needed here and there. Like everything in life for a designer/engineer/dev, nothing is ever quite finished, polished, or lacks the next feature we thought of, but this will get the job done.</p>
              <p className="text-xl font-base mb-3 text-justify">Some dev work that I've done recently is on display under the
              <NavLink to="contact" className="text-green-600 font-bold mx-2">
              'dev work'
              </NavLink>
              heading up in the navbar. Checkout some of the other areas too if you want, I'll be adding content as time goes on. I'm working on a blog, newsletter, and a projects timeline section where I can post updates on some of the other things besides dev stuff that I'm working on.</p>
              <p className="text-xl font-base mb-3 text-justify">Oh, and thanks for reading (or skimming) up to this point, you're a trooper!</p>
              <p className="text-xl font-base mb-3 text-justify">Feel free to 
              <NavLink to="contact" className="text-blue-600 font-bold mx-2">
                reach out
              </NavLink>
              if you want to chat or have questions about something.</p>
            </>
          }
        </article>
        <aside className="w-1/2 hidden lg:flex flex-row justify-end">
          <p className="w-5/12 p-4 text-xs font-base border-2 border-slate-100 rounded-md self-center">zomg... there's so much space over here</p>
        </aside>
      </section>
  )
}

export default Home