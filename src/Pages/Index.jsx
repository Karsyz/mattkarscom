import DevWorkPanel from "../Components/DevWorkPanel"
import FromTheBlog3Col from "../Components/FromTheBlog3Col"
import NewsletterLatestPrev from "../Components/NewsletterLatestPrev"
import NewsletterSub from "../Components/NewsLetterSub"

const Index = () => {


  const navItems = [
    {
      name: "Dev Work",
      href: "#",
      color: "green",
    },
    {
      name: "Blog",
      href: "#",
      color: "blue",
    },
    {
      name: "Newsletter",
      href: "#",
      color: "red",
    },
    {
      name: "Projects",
      href: "#",
      color: "orange",
    },
    {
      name: "Contact",
      href: "#",
      color: "gray",
    },
  ]

  return (
    <div className="">

      <nav className="h-[60px] font-semibold">
        <ul className="flex flex-row justify-evenly items-center h-full">

            {navItems.map(nav => {
              return(
                <li className="whitespace-nowrap overflow-hidden">
                  <a href={nav.href}>
                    <div className="flex gap-1 items-center hover:drop-shadow-md transition-transform ease-in-out -translate-x-[20px] hover:translate-x-0 duration-300 rounded-md bg-transparent">
                      <div 
                        className="h-[20px] w-[20px] rounded-sm"
                        style={{background: `${nav.color}`}}
                      />
                      <div className="text-xl select-none">{nav.name}</div>
                    </div>
                  </a>
                </li>
              )
            })}
        </ul>
      </nav>
      
      {/* <section className="w-full flex flex-row justify-end pr-10 perspective-1000">
        <div className="relative text-right font-bold text-slate-800 leading-tight px-8 backface-hidden -rotate-y-45 select-none mr-48 mt-10 perspective-origin-center">
          <p className="text-[140px] ">Hello!</p>
          <p className="text-[100px]">My Name is</p>
          <p className="text-[150px]">Matt Kars</p>
          <p className="text-[50px]">I like to make stuff...</p>
        </div> 
      </section> */}
      
      {/* Dev work */}
      {/* <section className="bg-white pt-24 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
              <div className="flex gap-2 items-center tracking-tight">

                <div className="h-8 w-8 rounded-sm bg-green-700" />
                <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recent Dev Work</h3>

              </div>  
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Learn how to grow your business with our expert advice.
              </p>
            </div>
          </div>

        <DevWorkPanel 
          imgLeft={false}
        />
        <DevWorkPanel 
          imgLeft={true}
        />
        <DevWorkPanel 
          imgLeft={false}
        />
        <DevWorkPanel 
          imgLeft={true}
        />


      </section> */}
      

      {/* <FromTheBlog3Col /> */}


      <NewsletterLatestPrev />
      {/* <NewsletterSub /> */}


    </div>

  )
}

export default Index