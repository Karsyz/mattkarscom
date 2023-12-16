const Hero = () => {
  return (
    <section className="w-full flex flex-row justify-end pr-10 perspective-1000">
    <div className="relative text-right font-bold text-slate-800 leading-tight px-8 backface-hidden -rotate-y-45 select-none mr-48 mt-10 perspective-origin-center">
      <p className="text-[140px] ">Hello!</p>
      <p className="text-[100px]">My Name is</p>
      <p className="text-[150px]">Matt Kars</p>
      <p className="text-[50px]">I like to make stuff...</p>
    </div> 
  </section>
  )
}

export default Hero