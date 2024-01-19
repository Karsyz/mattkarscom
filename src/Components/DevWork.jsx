
import DevWorkPanel from "../Components/DevWorkPanel"
import { Link } from 'react-router-dom'


const DevWork = () => {
  
  const projects = [
    {
      id: 1,
      name: 'Steeple Peeps',
      headline: "A Proper Headline For This App",
      description: 'A brief description that is only a few words long, maybe as long as this sentence',
      url: 'http://steeplepeeps.cyclic.app',
      imgSrc: 'https://placehold.co/708x400',
      imgAlt: 'Steeple Peeps',
  
    },
    {
      id: 2,
      name: 'Steeple Peeps',
      headline: "A Proper Headline For This App",
      description: 'A brief description that is only a few words long, maybe as long as this sentence',
      url: 'http://steeplepeeps.cyclic.app',
      imgSrc: 'https://placehold.co/708x400',
      imgAlt: 'Steeple Peeps',
  
    },
    {
      id: 3,
      name: 'Steeple Peeps',
      headline: "A Proper Headline For This App",
      description: 'A brief description that is only a few words long, maybe as long as this sentence',
      url: 'http://steeplepeeps.cyclic.app',
      imgSrc: 'https://placehold.co/708x400',
      imgAlt: 'Steeple Peeps',
  
    },
    {
      id: 4,
      name: 'Steeple Peeps',
      headline: "A Proper Headline For This App",
      description: 'A brief description that is only a few words long, maybe as long as this sentence',
      url: 'http://steeplepeeps.cyclic.app',
      imgSrc: 'https://placehold.co/708x400',
      imgAlt: 'Steeple Peeps',
  
    },
  ]

  return (
    <section id="devwork" className="bg-white animate-fade">
        <div className="px-10">
          <div className="max-w-2xl">
              <div className="flex gap-2 items-center tracking-tight">

                <div className="h-8 w-8 rounded-sm bg-green-700" />
                <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Dev Work</h3>

              </div>  
              <p className="mt-2 text-lg leading-8 text-gray-600">
                A few projects that were fun and challenging to build
              </p>
            </div>

            <ul className="grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2 gap-5 w-full my-10 ">
              {projects.map(el => {
                return (
                  <li key={el.id} className="relative">
                    <Link to={el.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    <img 
                      src={el.imgSrc} 
                      alt={el.imgAlt} 
                      className="rounded-xl"
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-10 bg-slate-100/50 transition-opacity opacity-0 ease-in-out duration-500 hover:opacity-100 rounded-xl hover:drop-shadow-lg">
                      <h2 className="text-2xl sm:text-3xl font-bold">{el.headline}</h2>
                      <p>{el.description}</p>
                    </div>
                    </Link>
                  </li>
                )
              })}
            </ul>


          </div>
          

        {/* <DevWorkPanel 
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
        /> */}


      </section>
  )
}

export default DevWork

      