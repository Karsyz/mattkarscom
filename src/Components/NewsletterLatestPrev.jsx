import React from 'react'

const NewsletterLatestPrev = () => {
  return (
    <section className="bg-white pt-24 sm:pt-32 w-full">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
              <div className="flex gap-2 items-center tracking-tight">

                <div className="h-8 w-8 rounded-sm bg-red-500" />
                <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Newsletter 14DEC23</h3>

              </div>  
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Learn how to grow your business with our expert advice.
              </p>
            </div>

            <div className='flex gap-4 my-10 w-full'>
              
              <div className='flex gap-4 w-full'>
                <img src="https://placehold.co/300x200" alt="" className='rounded-xl'/>
                <div className='flex flex-col'>
                  <h4 className='text-3xl font-semibold'>The title of this card</h4>
                  <p className='grow'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nihil explicabo nam quod eum omnis ad beatae, dicta dolore possimus, esse cum saepe optio veniam sequi corporis fugiat deleniti adipisci neque quo. Hic doloremque impedit adipisci omnis, aspernatur quibusdam porro!</p>
                  <a href="#" className='text-xl font-semibold text-blue-500 hover:underline'>This is a link to the thinger</a>
                </div>
              </div>

            </div>

          </div>




      </section>
  )
}

export default NewsletterLatestPrev