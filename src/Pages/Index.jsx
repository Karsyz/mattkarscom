import { Outlet } from 'react-router-dom'

// Components
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

const Index = () => { 
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="scroll-smooth w-full min-h-[calc(100vh-60px)] flex flex-col items-stretch">
        <div className="grow">
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
    )
}

export default Index