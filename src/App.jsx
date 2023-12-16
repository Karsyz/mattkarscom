import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

// Pages
import Index from './Pages/Index'
import Newsletter from './Pages/Newsletter'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Index />} />
      <Route path='/newsletter' element={<Newsletter />} />
    </>
  )
)


export default function App() {
  return (
    <RouterProvider router={router} />
  )
}