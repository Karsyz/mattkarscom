import { NavLink } from 'react-router-dom'

const navItems = [
  {
    name: "Home",
    to: "/",
    color: "coral",
  },
  {
    name: "Dev Work",
    to: "devwork",
    color: "green",
  },
  // {
  //   name: "Blog",
  //   to: "blog",
  //   color: "blue",
  // },
  // {
  //   name: "Newsletter",
  //   to: "newsletter",
  //   color: "red",
  // },
  // {
  //   name: "Projects",
  //   to: "projects",
  //   color: "turquoise",
  // },
  {
    name: "About",
    to: "about",
    color: "rgb(96 165 250)",
  },
  {
    name: "Contact",
    to: "contact",
    color: "slategray",
  },
]

const NavBar = () => {
  return (
    <nav className="h-[60px] font-semibold">
      <ul className="flex flex-row justify-evenly items-center h-full">

          {navItems.map((nav, ind) => {
            return (
              <li 
                key={ind} 
                className="whitespace-nowrap overflow-hidden"
              >
                <NavLink to={nav.to}>
                  <div className="flex gap-1 items-center hover:drop-shadow-md transition-transform ease-in-out -translate-x-[20px] hover:translate-x-0 duration-300 rounded-md bg-transparent">
                    <div 
                      className="h-[20px] w-[20px] rounded-sm"
                      style={{background: `${nav.color}`}}
                    />
                    <div className="text-xl select-none">{nav.name}</div>
                  </div>
                </NavLink>
              </li>
            )
          })}
      </ul>
    </nav>
  )
}

export default NavBar