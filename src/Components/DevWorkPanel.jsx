import { useState } from 'react'
import { HiOutlineCloudUpload, HiLockClosed, HiOutlineServer } from 'react-icons/hi'

const features = [
  {
    name: 'Seamlessly integrate into your site',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: HiOutlineCloudUpload,
  },
  {
    name: 'Encrypted User Data',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: HiLockClosed,
  },
  {
    name: 'Offsite User Data Management',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: HiOutlineServer,
  },
]

export default function DevWorkPanel({imgLeft}) {

  return (
    <div className="overflow-hidden bg-white pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
        <div className={`lg:pr-8 lg:pt-4 ${imgLeft ? 'order-1 lg:order-2' : 'order-2 lg:order-1'}`}>
            <div className="lg:max-w-lg">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Steeple Peeps</h3>
              <h2 className="text-base font-semibold leading-7 text-indigo-600">A church member directory</h2>

              <p className="mt-4 text-lg text-gray-600">
                Safe and secure tools for your congregation. Users can securely log in to their account, upload their picture, manage their info and let others in the church know how they can help.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature, ind) => (
                  <div key={ind} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className={`col-span-1  ${imgLeft ? 'order-1 justify-self-end' : 'order-2'}`}>
            <img
                src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                alt="Product screenshot"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
            />
          </div>
          
          
        </div>
      </div>
    </div>
  )
}
