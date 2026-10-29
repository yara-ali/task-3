import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './pages/HomePage/HomePage.tsx'
import AboutPage from './pages/AboutPage/AboutPage.tsx'
import Root from './pages/Root/Root.tsx'
import AcademicsPage from './pages/AcademicsPage/AcademicsPage.tsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Root />,
    children : [
      {
        path : "",
        element : <HomePage />
      },
      {
        path : "about",
        element : <AboutPage />
      },
      {
        path : "academics",
        element : <AcademicsPage />
      },
    ]
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
