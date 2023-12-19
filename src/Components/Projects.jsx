const projects = [
  {
    id: 1,
    title: 'Welding, Welding, and more Welding!',
    href: '/projects/welding-welding-and-more-welding',
    description:
      'Crafting steel elegance: Welding mastery combines precision and artistry, shaping raw metal into a functional masterpiece that seamlessly blends form and function for lasting beauty.',
    imageUrl:
      'https://placehold.co/300x200',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Fabrication', href: '/projects/fabrication' },
    author: {
      name: 'Matt Kars',
      role: 'Head Honcho',
      href: '/',
      imageUrl:
        'https://i.ibb.co/z8t7MtP/karsy1.jpg',
      imgAlt: "Image of Karsy, that manly beast!",
    },
  },
  {
    id: 2,
    title: 'Welding, Welding, and more Welding!',
    href: '/projects/welding-welding-and-more-welding',
    description:
      'Crafting steel elegance: Welding mastery combines precision and artistry, shaping raw metal into a functional masterpiece that seamlessly blends form and function for lasting beauty.',
    imageUrl:
      'https://placehold.co/300x200',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Fabrication', href: '/projects/fabrication' },
    author: {
      name: 'Matt Kars',
      role: 'Head Honcho',
      href: '/',
      imageUrl:
        'https://i.ibb.co/z8t7MtP/karsy1.jpg',
      imgAlt: "Image of Karsy, that manly beast!",
    },
  },
  {
    id: 3,
    title: 'Welding, Welding, and more Welding!',
    href: '/projects/welding-welding-and-more-welding',
    description:
      'Crafting steel elegance: Welding mastery combines precision and artistry, shaping raw metal into a functional masterpiece that seamlessly blends form and function for lasting beauty.',
    imageUrl:
      'https://placehold.co/300x200',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Fabrication', href: '/projects/fabrication' },
    author: {
      name: 'Matt Kars',
      role: 'Head Honcho',
      href: '/',
      imageUrl:
        'https://i.ibb.co/z8t7MtP/karsy1.jpg',
      imgAlt: "Image of Karsy, that manly beast!",
    },
  },


]

const Projects = () => {
  return (
    <section id="projects" className="bg-white pt-24 pb-12 sm:px-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="flex gap-2 items-center tracking-tight">

            <div className="h-8 w-8 rounded-sm bg-[#40E0D0]" />
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h3>

          </div>  
          <p className="mt-2 text-lg text-gray-600">
            I love to tinker with and make all sorts of things. These are some of the things I've been working on.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((proj) => (

            <article key={proj.id} className="flex flex-col items-start justify-between">

              <div className="relative w-full">
                <img
                  src={proj.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>

              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={proj.datetime} className="text-gray-500">
                    {proj.date}
                  </time>
                  <a
                    href={proj.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {proj.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={proj.href}>
                      <span className="absolute inset-0" />
                      {proj.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{proj.description}</p>
                </div>

                {/* <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={proj.author.imageUrl} alt={proj.author.imageAlt} className="h-10 w-10 rounded-full bg-gray-100" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={proj.author.href}>
                        <span className="absolute inset-0" />
                        {proj.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{proj.author.role}</p>
                  </div>
                </div> */}
                
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


export default Projects