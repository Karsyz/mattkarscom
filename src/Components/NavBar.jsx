const navItems = [
  {
    name: "Dev Work",
    href: "/devwork",
    color: "green",
  },
  {
    name: "Blog",
    href: "/blog",
    color: "blue",
  },
  {
    name: "Newsletter",
    href: "/newsletter",
    color: "red",
  },
  {
    name: "Projects",
    href: "/projects",
    color: "orange",
  },
  {
    name: "Contact",
    href: "#contact",
    color: "gray",
  },
]

const NavBar = () => {
  return (
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
  )
}

export default NavBar