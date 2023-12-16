
const newsLetterData = {
  date: '14DEC23',
  tagline: 'This is the tagline for newsletter',
  headline: 'This is the headline for the newsletter',
  body: [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque est non inventore repudiandae enim molestias atque voluptates hic nobis nisi quibusdam provident perferendis ullam, ipsum eos, qui, voluptate incidunt impedit rerum libero sint illo fuga veniam harum. Quis, tenetur eveniet.Lotates hic nobis nisi quibusdam provident perferendis ullam, ipsum eos, qui,rem ipsum dolor sit amet consectetur adipisicing elit Eaque est non inventore repudiandae enim molestias.", "Atque voluptates hic nobis nisi quibusdam provident perferendis ullam, ipsum eos, qui, voluptate incidunt impedit rerum libero sint illo fuga veniam harum. Quis, tenetur eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque est non inventore repudiandae enim molestias atque voluptates hic nobis nisi quibusdam provident perferendis ullam, ipsum eos, qui, voluptate incidunt impedit rerum libero sint illo fuga veniam harum. Quis, tenetur eveniet.Lorem ipsum do.", "Lor sit amet consectetur adipisicing elit. Eaque est non inventore repudiandae enim molestias atque voluptates hic nobis nisi quibusdam provident perferendis ullam, ipsum eos, qui, voluptate incidunt impedit rerum libero sint illo fuga veniam harum. Quis, tenetur eveniet.",
  ],
  imgURL: 'https://placehold.co/300x200',
  title: 'The title of this content',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nihil explicabo nam quod eum omnis ad beatae, dicta dolore possimus, esse cum saepe optio veniam sequi corporis fugiat deleniti adipisci neque quo. Hic doloremque impedit adipisci omnis, aspernatur quibusdam porro!',
  href: 'https://www.alinktosomething.com',
}

const NewsletterLatestPrev = () => {

  const {date, tagline, headline, body, imgURL, title, desc, href} = newsLetterData

  return (
    <section className="bg-white pt-10 sm:px-32 w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="max-w-2xl">
          <div className="flex gap-2 items-center tracking-tight">
            <div className="h-8 w-8 rounded-sm bg-red-500" />
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Newsletter {date}</h3>

          </div>  
          <p className="mt-2 text-lg leading-8 text-gray-600 font-semibold">
            {tagline}
          </p>
        </div>


        <h3 className='mt-5 text-2xl font-bold'>{headline}</h3>
        
        <div className="mt-2 text-base text-gray-600 text-justify columns-1 md:columns-2 lg:columns-3 first-line:gap-8">
          {body.map((paragraph, ind) => {
            return (
              <p className={`${ind !== 0 && 'my-3'}`}>
                {paragraph}  
              </p>
            )
          } )}
        </div>

        <div className='flex gap-4 my-12 w-full'>
          <div className='flex flex-col gap-10 w-full'>


                <div className='flex flex-col gap-4'>
                  <h3 className='text-2xl font-bold'>Featured Content</h3>
                  
        
                      <div className='flex flex-col md:flex-row gap-4'>
                        <img src={imgURL} alt="" className='rounded-xl'/>
                        <div className='flex flex-col gap-3'>
                          <h4 className='text-2xl font-semibold leading-none'>{title}</h4>
                          <p className='grow text-justify sm:text-left'>{desc}</p>
                          <a href={href} className='text-xl font-semibold text-blue-500 hover:underline'>{href}</a>
                        </div>
                      </div>
            
                  

                </div>
              </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterLatestPrev