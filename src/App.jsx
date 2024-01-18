import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

// Pages

import Index from './Pages/Index'
import Home from './Components/Home'
import DevWork from './Components/DevWork'
import Blog from './Components/Blog'
import Newsletter from './Pages/Newsletter'
import Projects from './Components/Projects'
import About from './Components/AboutMe'
import Contact from './Components/Contact'

import ScrollToTop from './Components/ScrollToTop'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Index />} >
      <Route index element={<Home />} />
      <Route path='/devwork' element={<DevWork />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/newsletter' element={<Newsletter />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Route>
  )
)


export default function App() {
  return (
    <RouterProvider router={router} />
  )
}