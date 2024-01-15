
const Home = () => {
  return (
    <section className="flex flex-row px-10 py-3 w-full">
        <article className="relative flex flex-col text-xl font-base w-full lg:w-1/2">
          <h1 className="font-bold text-3xl">Hi, I'm Matt Kars</h1>
          <h2 className="text-xs mb-3">A Software Developer, amongst other things</h2>
          <p className="text-xl font-base mb-3 text-justify">And just like that... BAM! A wall of text you probably didn't want to read.</p>
          <p className="text-xl font-base mb-3 text-justify">This site was intended to be a dev portfolio and you see I'm in quite a few things and I want to share those things somehow and I figured I could kinda jam it all together in this one space that I'm calling mattkars.com.</p>
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