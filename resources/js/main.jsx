import { createRoot } from 'react-dom/client'
import '../css/app.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import AppNavBar from './components/AppNavBar'
import AppFooter from './components/AppFooter'
import ErrorPage from './pages/ErrorPage'
import StorePage from './pages/StorePage'
import HomePage from './pages/HomePage'

const AppLayout = () => {
  return(
    <>
      <AppNavBar />
      <Outlet />
      <AppFooter />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage /> 
      },
      {
        path: '/store',
        element: <StorePage /> 
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
