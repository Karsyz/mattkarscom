export default function Contact() {
  return (
    <div id="contact" className="relative bg-white animate-fade">

      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <img
          className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
          alt=""
        />
      </div>

      <div className="py-10 lg:py-0 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2">
        
        <div className="px-10">

          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            
          <div className="max-w-2xl">
            <div className="flex gap-2 items-center tracking-tight">
              <div className="h-8 w-8 rounded-sm bg-gray-400" />
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The Contact Form</h3>
            </div>  
            <p className="mt-2 text-lg leading-8 text-gray-500">
              For all your contact needs
            </p>
          </div>

            <form action="https://formsubmit.co/bc6101181ff42f886d4f36dc9e2bad46" method="POST" className="mt-10">

              <div className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="first-name" className="block text-md font-semibold leading-6 text-gray-900">
                    Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-md sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-md font-semibold leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-md sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="flex justify-between text-md leading-6">
                    <label htmlFor="message" className="block text-md font-semibold leading-6 text-gray-900">
                      How can I help you?
                    </label>
                    <p id="message-description" className="text-gray-400">
                      Max 500 characters
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      aria-describedby="message-description"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-md sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
                
              </div>
              <div className="mt-10 flex justify-end  pt-8">
                <button
                  type="submit"
                  className="rounded-md bg-gray-400 px-3.5 py-2.5 text-center text-md font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
