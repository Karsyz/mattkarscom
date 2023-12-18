
const AboutMe = () => {
  return (
    <section id="about" className="bg-white pt-24 sm:px-32">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="max-w-2xl">
          <div className="flex gap-2 items-center tracking-tight">

            <div className="h-8 w-8 rounded-sm bg-orange-400" />
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Me</h3>

          </div>  
          <p className="mt-2 text-lg leading-8 text-gray-600">
            It's what's on my LinkedIn
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 mt-4 text-justify">
          <p className="mb-4">
            As a technical expert with a background in industrial design, robotic controls, software development, I am passionate about creating efficient and intuitive experiences for end-users. I find joy in inventing and making things that improve process efficiency, particularly in manufacturing and software.
          </p>
          <p className="mb-4">
            Throughout my career, I have built automotive and marine electrical systems, programmed industrial robots and machine controls, created HMIs, IoT devices, and developed responsive and accessible web pages. Moreover, I have created full-stack apps complete with databases and APIs, developer tools, and taken products from the idea stage to manufacturing and packaging.
          </p>
          <p className="mb-4">
            In all my work, I strive for excellence and a user-centered approach. I believe that a successful product not only meets the functional needs of its users but also delights and surprises them. I am constantly seeking new challenges and opportunities to learn and grow in my field, and I believe that innovation and creativity are key to achieving success in any endeavor.
          </p>

        </div>

      
      </div>
    </section>

  )
}

export default AboutMe