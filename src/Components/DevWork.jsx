
import DevWorkPanel from "../Components/DevWorkPanel"

const DevWork = () => {
  return (
    <section className="bg-white pt-24 sm:pt-32">
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


      </section>
  )
}

export default DevWork

      